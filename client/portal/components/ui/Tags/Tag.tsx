import { 
    ReactNode,
    forwardRef,
} from 'react'
import { Colors, Sizes } from '@/components/ui/utils/types'

export type TagProps = {
    children: ReactNode
    color: Colors
    size: Sizes
    closable: boolean
    disabled: boolean
    onClick: () => void
    onClose: () => void
}

export const Tag = forwardRef<any, TagProps>((props, ref) => {
    const {
        children,
        color = 'primary',
        size = 'medium',
        closable,
        disabled,
        onClick,
        onClose,
    } = props

    return (
        <div ref={ref}>
            {children}
        </div>
    )
})

Tag.displayName = 'Tag'