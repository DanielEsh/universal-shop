import { 
    ReactNode,
    FC,
} from 'react'

export type TagsProps = {
    children: ReactNode
    count?: number
    displayCount?: number
}

export const Tags: FC<TagsProps> = (props) => {
    const {
        children,
    } = props

    return (
        <div className="flex flex-wrap gap-2">
            {children}
        </div>
    )
}
