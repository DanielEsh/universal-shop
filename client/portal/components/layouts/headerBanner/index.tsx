import { FC, MouseEvent } from 'react'
import { Button } from '@/components/ui/Button'
import IconRemove from 'public/icons/remove.svg'

type Props = {
    label: string,
    buttonLabel?: string,
    onClose?: () => void,
}

export const HeaderBanner: FC<Props> = ({ 
    label, 
    buttonLabel = 'Посмотреть', 
    onClose,
}) => {

    const onCloseClick = (e: MouseEvent) => {
        e.preventDefault()
        if (onClose) {
            onClose()
        }
    }

    return (
        <a 
            className="block w-full h-[56px] bg-primary-200"
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

                <button 
                    className="absolute right-0 flex justify-center items-center w-[32px] h-[32px] rounded-full bg-light-500 text-black transition-transform transform hover:rotate-180 hover:scale-125"
                    onClick={onCloseClick}
                >
                    <IconRemove className="icon-big" />
                </button>
            </div>
        </a>
    )
}
