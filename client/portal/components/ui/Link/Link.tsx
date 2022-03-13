import { ReactNode, FC } from 'react'
import classNames from 'classnames'
import { Colors } from '@/components/ui/utils/types'

type LinkProps = {
    children: ReactNode
    color?: Colors
}

export const Link: FC<LinkProps> = (props) => {
    const { 
        children,
        color = 'primary',
    } = props

    const colors = {
        primary: 'text-primary-500',
        secondary: 'dark:text-dark-500',
        gray: '',
        blue: '',
        error: '',
        success: '',
    }

    const classes = classNames(
        'group overflow-hidden',
        colors[color],
    )

    return (
        <a className={classes}>
            {children}
            <span className="block w-full h-[2px] bg-currentColor rounded-md -translate-x-full  group-hover:translate-x-0 transition-transform ease-in-out delay-150"/>
        </a>
    )
}
