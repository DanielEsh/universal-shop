import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { HomeHeroPagination } from '@/components/blocks/home/HomeHero/HomeHeroPagination'
import { FullSliderArrows } from '@/components/FullSliderArrows'
import { ProductCard } from '@/components/cards/ProductCard/ProductCard'

export const DayProduct = () => {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)

    const [refCallback, sliderNode] = useKeenSlider({
        loop: true,
        slideChanged(slider) {
            setCurrentSlideIndex(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <div className="relative w-full h-full rounded-md bg-gray-200">
            <div ref={refCallback} className="keen-slider h-full">
                <div className="keen-slider__slide"><ProductCard /></div>
                <div className="keen-slider__slide"><ProductCard /></div>
                <div className="keen-slider__slide"><ProductCard /></div>
                <div className="keen-slider__slide"><ProductCard /></div>
            </div>

            {loaded && sliderNode && (
                <FullSliderArrows slider={sliderNode} />
            )}

            <div className="flex justify-center align-center">
                {loaded && sliderNode && (
                    <HomeHeroPagination
                        slider={sliderNode}
                        activeSlide={currentSlideIndex}
                    />
                )}
            </div>
        </div>
    )
}
