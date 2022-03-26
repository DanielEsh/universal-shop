import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { FullSliderArrows } from '@/components/slider/FullSliderArrows'

import Image from 'next/image'
import Promo1 from 'public/images/promos/promo1.png'

export const HomePromosSlider = () => {
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
        <div className="relative w-auto h-full rounded-md bg-gray-100">
            <div ref={refCallback} className="keen-slider h-full overflow-hidden">
                <div className="keen-slider__slide">
                    <Image 
                        src={Promo1}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="keen-slider__slide">slide2</div>
                <div className="keen-slider__slide">slide3</div>
            </div>

            {loaded && sliderNode && (
                <FullSliderArrows slider={sliderNode} />
            )}
        </div>
    )
}
