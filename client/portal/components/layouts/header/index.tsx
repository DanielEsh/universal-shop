import { useState, useEffect } from 'react'
import cn from 'classnames'
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

    const classes = cn(
        'top-0 left-0 w-full z-10 transition-all duration-300 ease',
        {
            ['absolute']: !isFixedPosition,
            ['fixed backdrop-blur-sm dark:bg-dark-300/80 dark:text-white']: isFixedPosition,
            ['h-[110px]']: isMenuVisible,
            ['h-[76px]']: !isMenuVisible,
        },
    )

    return (
        <header className={classes}>
            <MainHeader />

            <CSSTransition
                in={isMenuVisible}
                timeout={300}
                classNames="fixed-header"
                unmountOnExit
                mountOnEnter
            >
                <MenuHeader />
            </CSSTransition>
        </header>
    )
}
