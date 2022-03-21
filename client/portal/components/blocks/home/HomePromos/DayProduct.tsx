import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { ProductCard } from '@/components/cards/ProductCard/ProductCard'
import { SliderDotsPagination } from '@/components/slider/SliderDotsPagination'
import { SliderArrowRight } from '@/components/slider/SliderArrowRight'
import { SliderArrowLeft } from '@/components/slider/SliderArrowLeft'

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

    const slides = () => [...Array(sliderNode?.current?.track.details.slides.length).keys()]

    return (
        <div className="relative w-full h-full rounded-md bg-gray-200 dark:bg-dark-400">
            <div ref={refCallback} className="keen-slider h-full">
                <div className="keen-slider__slide flex justify-center"><ProductCard /></div>
                <div className="keen-slider__slide flex justify-center"><ProductCard /></div>
                <div className="keen-slider__slide flex justify-center"><ProductCard /></div>
                <div className="keen-slider__slide flex justify-center"><ProductCard /></div>
            </div>

            <div className="flex justify-center align-center">
                {loaded && sliderNode && (
                    <SliderDotsPagination
                        slides={slides()}
                        activeSlideIndex={currentSlideIndex}
                        onChange={(idx) => sliderNode?.current?.moveToIdx(idx)}
                    />
                )}
            </div>

            <SliderArrowLeft onClick={() => sliderNode.current?.prev()} />
            <SliderArrowRight onClick={() => sliderNode.current?.next()} />
        </div>
    )
}
