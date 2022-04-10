import { ReactNode } from 'react'
import { Button } from '@/components/ui/components/Button'

type Props = {
    title: string
    icon: ReactNode
    description: string
    buttonText?: string
    buttonLink?: string
}

export const AdvantagesCard = ({ title, icon, description, buttonText, buttonLink }: Props) => {
    return (
        <div className="group 
            relative
            bg-light-500 dark:bg-dark-400 dark:text-white p-[60px] 
            border-t-[1px] border-r-[1px] third:border-r-0 border-light-300 dark:border-dark-300 
            flex flex-col justify-center items-center 
            before:content-[''] before:third:hidden before:absolute before:z-2 before:-top-[32px] before:-right-[32px] before:w-[64px] before:h-[64px] before:border-[24px] before:border-light-500 before:dark:border-dark-400 before:bg-primary-400
        "
        >
            <div className="absolute z-3 inset-0 bg-primary-500 opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:-inset-[24px]" />
            <div className="flex flex-col justify-center items-center transition-color ease-in-out duration-300 group-hover:z-3 group-hover:text-dark-400">
                <h2 className="text-xl mb-[64px]">
                    {title}
                </h2>

                <span className="w-[84px] h-[84px] transition-transform ease-in-out duration-300 group-hover:scale-150">
                    {icon}
                </span>

                <div className="flex flex-col items-center mt-[60px] opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100">
                    <p className="text-lg">
                        {description}
                    </p>

                    {
                        buttonText && (
                            <Button 
                                className="mt-6"
                                color="secondary"
                            >
                                {buttonText}
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
