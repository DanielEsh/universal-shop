type CategoryCardProps = {
    className?: string
    title?: string
    description?: string
    link?: string
}

export const CategoryCard = ({ className, title, description, link }: CategoryCardProps) => {
    return (
        <div className={`min-h-[186px] p-5 rounded-md bg-primary-400 text-black  ${className}`}>
            {title}
            {description}
            {link}
        </div>
    )
}
