import { 
    ReactNode,
    forwardRef,
} from 'react'
import { Colors, Sizes } from '@/components/ui/utils/types'

export type TagProps = {
    children: ReactNode
    color: Colors
    size: Sizes
    outlined: boolean
    delitable: boolean
    disabled: boolean
    onClick: () => void
    onDelete: () => void
}

export const Tag = forwardRef<any, TagProps>((props, ref) => {
    const {
        children,
        color = 'primary',
        size = 'medium',
        delitable,
        disabled,
        onClick,
        onDelete,
    } = props

    return (
        <div ref={ref}>
            {children}
        </div>
    )
})

Tag.displayName = 'Tag'