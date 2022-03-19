import { ReactNode } from 'react'

type Props = {
    title: string
    icon: ReactNode
    description: string
}

export const AdvantagesCard = ({ title, icon, description }: Props) => {
    return (
        <div className="group 
            relative
            dark:bg-dark-400 dark:text-white p-[60px] 
            border-t-[1px] border-r-[1px] border-dark-300 
            flex flex-col justify-center items-center 
            before:content-[''] before:absolute before:z-2 before:-top-[32px] before:-right-[32px] before:w-[64px] before:h-[64px] before:border-[24px] before:border-dark-400 before:bg-primary-400
        "
        >
            <div className="absolute z-3 inset-0 bg-primary-500 opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:-inset-[24px]" />
            <div className="flex flex-col justify-center items-center transition-color ease-in-out duration-300 group-hover:z-3 group-hover:text-dark-400">
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
        </div>
    )
}
