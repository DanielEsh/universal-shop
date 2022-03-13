import { useState, useEffect } from 'react'
import cn from 'classnames'
import { MainHeader } from './MainHeader'
import { MenuHeader } from './MenuHeader'

export const Header = () => {
    const [isFixed, setIsFixed] = useState<boolean>(false)

    useEffect(() => {
        document.addEventListener('scroll', onScroll)

        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [])

    const onScroll = () => {
        checkVisibility()
    }

    const checkVisibility = () => {
        if (window.pageYOffset > 800) {
            setIsFixed(true)
        } else {
            setIsFixed(false)
        }
    }

    const classes = cn(
        'top-0 left-0 w-full z-10',
        {
            ['absolute']: !isFixed,
            ['fixed']: isFixed,
        },
    )

    return (
        <header className={classes}>
            <MainHeader />
            {
                !isFixed && <MenuHeader />
            }
        </header>
    )
}
