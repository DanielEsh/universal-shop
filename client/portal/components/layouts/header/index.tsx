import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { MainHeader } from './MainHeader'
import { MenuHeader } from './MenuHeader'
import { HeaderBanner } from '../headerBanner'

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

    // const classes = classNames(
    //     'top-0 left-0 w-full z-10 transition-all duration-300 ease',
    //     {
    //         ['absolute h-[76px]']: !isFixedPosition,
    //         ['fixed bg-dark-300/80 dark:text-white h-[76px] -translate-y-full opacity-0']: isFixedPosition,
    //         ['dark:bg-dark-300']: isMenuVisible,
    //     },
    // )

    const classes = classNames(
        'fixed top-0 left-0 w-full z-10',
        {
            ['']: !isFixedPosition,
            ['bg-error-400']: isFixedPosition,
        },
    )

    // const menuClasses = classNames(
    //     'py-2 bg-dark-300 transform transition-all duration-300 ease', 
    //     {
    //         ['-translate-y-10 opacity-0 invisible']: !isMenuVisible,
    //         ['translate-y-0 opacity-1 visible']: isMenuVisible,
    //     },
    // )

    const menuClasses = classNames(
        'py-2 bg-dark-300 transform transition-all duration-300 ease', 
        // {
        //     ['-translate-y-10 opacity-0 invisible']: !isMenuVisible,
        //     ['translate-y-0 opacity-1 visible']: isMenuVisible,
        // },
    )

    return (
        <header className={classes}>
            <HeaderBanner 
                label="При покупке 200 бонусов в подарок"
                    
            />
            <MainHeader />

            <div className={menuClasses}>
                <MenuHeader />
            </div>
        </header>
    )
}
