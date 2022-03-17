import { ReactNode } from 'react'

type Props = {
    title: string
    icon: ReactNode
    description: string
}

export const AdvantagesCard = ({ title, icon, description }: Props) => {
    return (
        <div className="bg-primary-400 p-[60px] flex flex-col justify-center items-center">
            <h2 className="text-lg mb-[34px]">
                {title}
            </h2>

            <span className="w-[84px] h-[84px]">
                {icon}
            </span>

            <p className="opacity-0">
                {description}
            </p>
        </div>
    )
}
