import { FC } from 'react'

type HomeHeroFractionProps = {
    currentSlide: number;
    totalSlides: number;
};

export const HomeHeroFraction: FC<HomeHeroFractionProps> = ({
    currentSlide,
    totalSlides,
}) => {
    const formattedCurrentSlide = () => {
        return currentSlide < 10 ? `0${currentSlide}` : `${currentSlide}`
    }

    const formattedTotalSlides = () => {
        return totalSlides < 10 ? `0${totalSlides}` : `${totalSlides}`
    }

    return (
        <>
            <span>{formattedCurrentSlide()}</span> /{' '}
            <span>{formattedTotalSlides()}</span>
        </>
    )
}
