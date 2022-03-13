import { ReactNode, FC } from 'react'
import classNames from 'classnames'
import { Colors } from '@/components/ui/utils/types'

type LinkProps = {
    children: ReactNode
    color?: Colors
    className?: string
}

export const Link: FC<LinkProps> = (props) => {
    const { 
        children,
        color = 'primary',
        className,
    } = props

    const colors = {
        primary: 'text-primary-500',
        secondary: 'dark:text-dark-500',
        gray: '',
        blue: '',
        error: '',
        success: '',
        currentColor: 'text-currentColor',
    }

    const classes = classNames(
        'group overflow-hidden',
        colors[color],
        className,
    )

    return (
        <a className={classes}>
            {children}
            <span className="block w-full h-[2px] bg-currentColor rounded-md -translate-x-full  group-hover:translate-x-0 transition-transform ease-in-out delay-150"/>
        </a>
    )
}
