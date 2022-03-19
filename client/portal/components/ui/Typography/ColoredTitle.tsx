import React from 'react'
import classnames from 'classnames'

type Props = {
    label: string
    colored: string
    className?: string
}

export const ColoredTitle = ({ label, colored, className }: Props) => {

    const classes = classnames(
        'text-4xl font-bold text-currentColor',
        className,
    )

    return (
        <h2 className={classes}>
            <span dangerouslySetInnerHTML={{ __html: label }} />
            <span className="relative inline-block p-2 before:block before:absolute before:-inset-1 before:skew-y-3 before:rounded-md before:bg-primary-500">
                <span className="relative text-black">
                    {colored}
                </span>
            </span>
        </h2>
    )
}
