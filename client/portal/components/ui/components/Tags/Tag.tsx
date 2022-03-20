import { 
    ReactNode,
    forwardRef,
} from 'react'
import { Colors, Sizes } from '@/components/ui/utils/types'
import cn from 'classnames'

export type TagProps = {
    children: ReactNode
    color?: Colors
    size?: Sizes
    outlined?: boolean
    deletable?: boolean
    disabled?: boolean
    onClick?: () => void
    onDelete?: () => void
}

export const Tag = forwardRef<any, TagProps>((props, ref) => {
    const {
        children,
        color = 'primary',
        size = 'medium',
        outlined,
        disabled,
    } = props

    const colors = {
        primary: 'bg-primary-500 border-primary-500 text-black',
        secondary: 'bg-dark-500 border-dark-500 text-white dark:bg-light-500 dark:text-black',
        gray: '',
        success: '',
        error: '',
        blue: '',
    }

    const outlinedColors = {
        primary: 'border-primary-500 text-black',
        secondary: 'border-dark-500 text-black dark:border-light-500 dark:text-white',
        gray: '',
        success: '',
        error: '',
        blue: '',
    }

    const sizes = {
        small: 'p-2 text-sm',
        medium: 'px-4 py-2',
        large: '',
    }

    const classes = cn(
        'inline-block rounded-md border select-none',
        sizes[size],
        {
            [colors[color]]: !outlined,
            [outlinedColors[color]]: outlined,
            ['cursor-not-allowed opacity-80']: disabled,
        },
    )

    return (
        <div 
            ref={ref}
            className={classes}
        >
            {children}
        </div>
    )
})

Tag.displayName = 'Tag'