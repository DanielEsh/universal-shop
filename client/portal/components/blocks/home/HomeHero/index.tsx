import { useState } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { Button } from '@/components/ui/Button'
import { HomeHeroPagination } from '@/components/blocks/home/hero/HomeHeroPagination'
import { HomeHeroFraction } from '@/components/blocks/home/hero/HomeHeroFraction'
import { HomeHeroArrows } from '@/components/blocks/home/hero/HomeHeroArrows'

import Hero8 from 'public/images/hero8.jpg'
import Hero5 from 'public/images/hero5.jpg'

const mockData = [
    {
        id: 1,
        title: 'Легкий путь <br /> к большим возможностям',
        text: 'Все идеи обретут очерания',
        buttonText: 'В каталог',
        image: Hero8,
    },
    {
        id: 2,
        title: 'Легкий путь <br /> к большим возможностям',
        text: 'Все идеи обретут очерания',
        buttonText: '2',
        image: Hero5,
    },
]

export const HomeHero = () => {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)

    const [refCallback, sliderNode] = useKeenSlider({
        loop: true,
        renderMode: 'performance',
        slideChanged(slider) {
            setCurrentSlideIndex(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <div className="relative h-screen">
            <div ref={refCallback} className="keen-slider w-full h-full">
                {mockData.map((slide) => (
                    <div
                        key={slide.id}
                        className="keen-slider__slide absolute top-0 flex items-center w-full h-full"
                    >
                        <Image
                            src={slide.image}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="z-[1] container mx-auto flex items-center">
                            <div className="font-secondary p-6 max-w-[680px]">
                                <h2 
                                    className="text-6xl"
                                    dangerouslySetInnerHTML={{ __html: slide.title }}
                                />
                                <p className="mt-4 text-4xl">{slide.text}</p>
                                <Button>{slide.buttonText}</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-[64px] w-full z-[1]">
                <div className="container mx-auto flex items-center justify-between">
                    {loaded && sliderNode && (
                        <HomeHeroPagination
                            slider={sliderNode}
                            activeSlide={currentSlideIndex}
                        />
                    )}

                    <div className="flex items-center ml-3">
                        <div className="flex items-center mr-3 select-none">
                            <HomeHeroFraction
                                currentSlide={currentSlideIndex + 1}
                                totalSlides={2}
                            />
                        </div>
                        {loaded && sliderNode && (
                            <HomeHeroArrows slider={sliderNode} />
                        )}
                    </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 uppercase select-none">
                    scroll
                </div>
            </div>
        </div>
    )
}
