import { FC } from 'react'
import { Button } from '@/ui/components/Button'

type Props = {
    label: string,
    buttonLabel?: string,
}

export const HeaderBanner: FC<Props> = ({ 
    label, 
    buttonLabel = 'Посмотреть', 
}) => {

    return (
        <a 
            className="block w-full h-[56px] bg-gradient-to-r from-blue-500 to-blue-400"
            href="/test"
        >
            <div className="relative flex justify-center items-center h-full container mx-auto">
                {label}

                <Button 
                    className="ml-6"
                    size="small"
                    color="secondary"
                >
                    {buttonLabel}
                </Button>
            </div>
        </a>
    )
}
