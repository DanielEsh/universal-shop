import { FC } from 'react'

type Props = {
    slider: any;
};

export const FullSliderArrows: FC<Props> = ({ slider }) => {
    const onPrevArrowClick = (e: any) => {
        e.stopPropagation() || slider.current?.prev()
    }

    const onNextArrowClick = (e: any) => {
        e.stopPropagation() || slider.current?.next()
    }

    return (
        <>
            <button
                className="absolute top-[0px] z-10 w-1/2 h-full"
                onClick={onPrevArrowClick}
            />
            <button
                className="absolute top-[0px] z-10 right-[0px] w-1/2 h-full"
                onClick={onNextArrowClick}
            />
        </>
    )
}