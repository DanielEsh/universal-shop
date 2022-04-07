import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { MainHeader } from './MainHeader'
import { MenuHeader } from './MenuHeader'

export const Header = () => {
    const [isFixedPosition, setIsFixedPosition] = useState<boolean>(false)
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
            // scroll up
            if (window.pageYOffset < lastScrollPosition) {
                setIsFixedPosition(true)
                setIsMenuVisible(true)
            }

            // scroll down
            if (window.pageYOffset > lastScrollPosition) {
                setIsFixedPosition(true)
                setIsMenuVisible(false)
            }
        } else {
            setIsFixedPosition(false)
            setIsMenuVisible(true)
        }
    }

    const classes = classNames(
        'top-0 left-0 w-full z-10 transition-all duration-300 ease',
        {
            ['absolute']: !isFixedPosition,
            ['fixed dark:bg-dark-300 dark:text-white h-[76px]']: isFixedPosition,
        },
    )

    const menuClasses = classNames(
        'py-2 bg-dark-300 transform transition-all duration-300 ease', 
        {
            ['-translate-y-10 opacity-0 invisible']: !isMenuVisible,
            ['translate-y-0 opacity-1 visible']: isMenuVisible,
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
