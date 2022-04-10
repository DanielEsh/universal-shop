import React from 'react'
import classnames from 'classnames'

type Props = {
    label: string
    colored: string
    className?: string
    color?: 'secondary' | 'white' | 'dark'
}

export const ColoredTitle = ({ label, colored, className, color = 'secondary' }: Props) => {
    const colors = {
        secondary: 'text-dark dark:text-white',
        white: 'text-white',
        dark: 'text-dark',
    }

    const classes = classnames(
        'relative text-4xl font-bold text-currentColor inline-block after:absolute after:-bottom-[10px] after:left-1/2 after:w-[90%] after:h-[4px] after:bg-primary-500 after:transform after:-translate-x-1/2',
        className,
        colors[color],
    )

    return (
        <h2 className={classes}>
            {label} {colored}
        </h2>
    )
}
