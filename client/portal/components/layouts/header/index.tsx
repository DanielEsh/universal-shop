import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { MainHeader } from './MainHeader'
import { MenuHeader } from './MenuHeader'

export const Header = () => {
    const [isTransparent, setIsTransparent] = useState<boolean>(true)
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(true)

    const SCROLL_THRESHOLD = 600
    let lastScrollPosition = 0

    useEffect(() => {
        document.addEventListener('scroll', onScroll)

        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [])

    const onScroll = () => {
        checkVisibility()
        lastScrollPosition = window.pageYOffset
    }

    const checkVisibility = () => {
        if (window.pageYOffset > SCROLL_THRESHOLD) {
            setIsTransparent(false)
            // scroll up
            if (window.pageYOffset < lastScrollPosition) {
                setIsMenuVisible(true)
            }

            // scroll down
            if (window.pageYOffset > lastScrollPosition) {
                setIsMenuVisible(false)
            }
        } else {
            setIsTransparent(true)
            setIsMenuVisible(true)
        }
    }

    const classes = classNames(
        'sticky top-0 left-0 w-full z-10 h-[76px] transition-all duration-300 ease',
        {
            ['bg-transparent']: isTransparent,
            ['bg-dark-300']: isMenuVisible && !isTransparent,
            ['bg-dark-300/80']: !isMenuVisible && !isTransparent,
        },
    )

    const menuClasses = classNames(
        'py-2 transform transition-all duration-300 ease', 
        {
            ['bg-transparent']: isTransparent,
            ['-translate-y-10 opacity-0 invisible']: !isMenuVisible && !isTransparent,
            ['bg-dark-300 translate-y-0 opacity-1 visible']: isMenuVisible && !isTransparent,
        },
    )

    return (
        <header className={classes}>
            <MainHeader />

            <div className={menuClasses}>
                <MenuHeader />
            </div>
        </header>
    )
}
