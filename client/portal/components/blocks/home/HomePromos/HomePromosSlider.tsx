import { FC, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { HomeHeroPagination } from '@/components/blocks/home/HomeHero/HomeHeroPagination'
import { FullSliderArrows } from '@/components/FullSliderArrows'

export const HomePromosSlider: FC = () => {
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
        <div className="relative w-auto h-full rounded-md bg-gray-100 overflow-hidden">
            <div ref={refCallback} className="keen-slider h-full">
                <div className="keen-slider__slide">slide1</div>
                <div className="keen-slider__slide">slide2</div>
                <div className="keen-slider__slide">slide3</div>
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
