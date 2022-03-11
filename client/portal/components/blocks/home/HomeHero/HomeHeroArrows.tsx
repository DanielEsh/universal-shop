import { FC } from 'react'

import DirectionLeft from 'public/icons/direction-left.svg'
import DirectionRight from 'public/icons/direction-right.svg'

type HomeHeroArrowsProps = {
    slider: any;
};

export const HomeHeroArrows: FC<HomeHeroArrowsProps> = ({ slider }) => {
    const onPrevArrowClick = (e: any) => {
        e.stopPropagation() || slider.current?.prev()
    }

    const onNextArrowClick = (e: any) => {
        e.stopPropagation() || slider.current?.next()
    }

    return (
        <div className="flex items-center ml-3">
            <div
                role="presentation"
                className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-solid border-black mr-3 text-black hover:bg-black hover:text-white"
                onClick={onPrevArrowClick}
            >
                <DirectionLeft className="w-[24px] h-[24px]" />
            </div>
            <div
                role="presentation"
                className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-solid border-black text-black hover:bg-black hover:text-white"
                onClick={onNextArrowClick}
            >
                <DirectionRight className="w-[24px] h-[24px]" />
            </div>
        </div>
    )
}
