import React, { forwardRef, ReactNode, SyntheticEvent } from 'react'
import cn from 'classnames'

export type ButtonProps = {
    children: ReactNode
    className?: string
    color?: 'primary' | 'secondary' | 'gray' | 'success' | 'error' | 'ghost'
    size?: 'small' | 'medium' | 'large' | 'block'
    type?: 'button' | 'submit'
    disabled?: boolean
    onMouseEnter?: (event: SyntheticEvent) => void
    onMouseLeave?: (event: SyntheticEvent) => void
    onClick?: (event: SyntheticEvent) => void
    onFocus?: () => void
    onBlur?: () => void
    id?: string
    title?: string
    role?: string
}

export const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
    const {
        children,
        className,
        color = 'primary',
        size = 'medium',
        disabled,
        onClick,
        onMouseLeave,
        id,
        title,
        role,
        onBlur,
        onFocus,
        onMouseEnter,
        type,
    } = props

    const rootClasses = 'relative flex justify-center items-center rounded-md overflow-hidden ripple-hover__container focus:outline-none focus:ring '

    const colors = {
        primary: 'bg-primary-500 border border-primary-500 text-black ring-offset-1 ring-primary-300',
        secondary: 'bg-dark-500 border text-white border-dark-500 dark:bg-light-500 dark:text-black dark:border-light-500 ring-offset-1 ring-dark-300',
        gray: 'bg-gray-100 border text-black border-gray-100 ring-offset-1 ring-gray-300',
        success: 'bg-success-500 border border-success-500 text-white ring-offset-1 ring-success-500',
        error: 'bg-error-500 border border-error-500 text-white ring-offset-1 ring-error-500',
        ghost: 'bg-transparent color-black',
    }

    const sizes = {
        small: 'py-1 px-2',
        medium: 'py-2 px-4',
        large: 'py-4 px-8',
        block: 'w-full h-full',
    }

    const classes = cn(
        'button',
        className,
        rootClasses,
        sizes[size],
        colors[color],
        {
            [' opacity-70 cursor-not-allowed']: disabled,
        })

    const handleClick = (event: SyntheticEvent) => {
        if (onClick) onClick(event)
    }

    const handleMouseEnter = (event: SyntheticEvent) => {
        if (onMouseEnter) onMouseEnter(event)
    }

    return (
        <button
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
            ref={ref}
            title={title}
            role={role}
            id={id}
            type={type}
            className={classes}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={onMouseLeave}
            onBlur={onBlur}
            onFocus={onFocus}
        >
            <span>
                {children}
            </span>
        </button>
    )
})

Button.displayName = 'Button'