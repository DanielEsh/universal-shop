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
    } = props

    const colors = {
        primary: 'bg-primary-500 text-black',
        secondary: 'bg-dark-500 text-white',
        gray: '',
        success: '',
        error: '',
        blue: '',
    }

    const sizes = {
        small: '',
        medium: 'px-4 py-2',
        large: '',
    }

    const classes = cn(
        'inline-block rounded-md',
        colors[color],
        sizes[size],
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