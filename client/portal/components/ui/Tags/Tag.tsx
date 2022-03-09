import { 
    ReactNode,
    forwardRef,
} from 'react'

export type TagProps = {
    children: ReactNode
}

export const Tag = forwardRef<any, TagProps>((props, ref) => {
    const {
        children,
    } = props

    return (
        <div ref={ref}>
            {children}
        </div>
    )
})

Tag.displayName = 'Tag'