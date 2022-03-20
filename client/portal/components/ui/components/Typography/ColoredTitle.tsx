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
        'text-4xl font-bold text-currentColor',
        className,
        colors[color],
    )

    return (
        <h2 className={classes}>
            <span dangerouslySetInnerHTML={{ __html: `${label} &nbsp;` }} />
            <span className="relative inline-block p-2 before:block before:absolute before:-inset-1 before:skew-y-3 before:rounded-md before:bg-primary-500">
                <span className="relative text-black">
                    {colored}
                </span>
            </span>
        </h2>
    )
}
