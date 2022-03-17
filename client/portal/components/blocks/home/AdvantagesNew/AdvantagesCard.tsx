import { ReactNode } from 'react'

type Props = {
    title: string
    icon: ReactNode
    description: string
}

export const AdvantagesCard = ({ title, icon, description }: Props) => {
    return (
        <div className="group dark:bg-dark-400 dark:text-white p-[60px] border-t-[1px] border-r-[1px] border-dark-300 flex flex-col justify-center items-center transition-all ease-in-out duration-300 hover:bg-primary-400 hover:text-black hover:scale-[1.1] hover:border-primary-400">
            <h2 className="text-lg mb-[64px]">
                {title}
            </h2>

            <span className="w-[84px] h-[84px] transition-transform ease-in-out duration-300 group-hover:scale-150">
                {icon}
            </span>

            <p className="mt-[60px] opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100">
                {description}
            </p>
        </div>
    )
}
