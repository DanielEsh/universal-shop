import { useState } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import Image1 from 'public/images/hero6.jpg'
import Image2 from 'public/images/category.png'
import { Tag } from '@/components/ui/Tags'
import { Button } from '@/components/ui/Button'
import IconCartAdd from 'public/icons/cart-add.svg'
import IconLike from 'public/icons/like.svg'
import IconComporation from 'public/icons/comporation.svg'

const mockCardInfo = {
    images: [
        {
            id: 1,
            image: Image1,
        },
        {
            id: 2,
            image: Image2,
        },
    ],
}

export const ProductCard = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)
    const [opacities, setOpacities] = useState<number[]>([])

    const [refCallback, sliderNode] = useKeenSlider({
        slides: mockCardInfo.images.length,
        loop: true,
        renderMode: 'performance',
        slideChanged(slider) {
            setCurrentSlideIndex(slider.track.details.rel)
        },
        detailsChanged(s) {
            const newOpacities = s.track.details.slides.map((slide) => slide?.portion)
            setOpacities(newOpacities)
        },
    })

    const onChangeSlide = (index: number) => {
        sliderNode?.current?.moveToIdx(index)
    }

    return (
        <div className="w-[320px] h-[600px] p-16 rounded-md bg-dark-400">
            <div className="flex flex-col h-full">
                <div ref={refCallback} className="fader relative w-full h-[450px] overflow-hidden">
                    {mockCardInfo.images.map((image, idx) => {
                        return (
                            <div 
                                key={image.id}
                                className="fader__slide absolute flex h-full text-black"
                                style={{ opacity: opacities[idx] }}
                            >
                                <Image
                                    src={image.image}
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        )
                    })}
                    <div 
                        className="absolute top-0 z-1 flex w-full h-full"
                        onMouseLeave={() => onChangeSlide(0)}
                    >
                        {mockCardInfo.images.map(({ id }, idx) => {
                            return (
                                <div 
                                    className="flex-auto bg-transparent"
                                    key={id}
                                    onMouseEnter={() => onChangeSlide(idx)}
                                />
                            )
                        })}
                    </div>

                    <div className="absolute bottom-2 flex gap-x-4 w-full h-[1px]">
                        {
                            [
                                ...Array(sliderNode?.current?.track.details.slides.length).keys(),
                            ].map(item => (
                                <div 
                                    className={`flex-auto h-full ${item === currentSlideIndex ? 'bg-primary-500' : 'bg-dark-500'}`}
                                    key={item}
                                >
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col h-full">
                    <span className="text-sm text-gray-400 dark:text-gray-300">
                        Смартфон
                    </span>
                    <span className="text-lg dark:text-white">
                        Xiaomi Redmi 9A 2/32Gb Granite Gray
                    </span>

                    <span className="flex justify-center">
                        *****
                    </span>

                    <div className="flex flex-wrap gap-2">
                        <Tag>
                        Хит продаж
                        </Tag>
                        <Tag color="secondary">
                        Трейд ин
                        </Tag>
                        <Tag color="secondary" outlined>
                        Новинка
                        </Tag>
                        <Tag color="secondary" disabled>
                        Кешбек 500
                        </Tag>
                    </div>

                    <div className="flex flex-col mt-auto">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <span className="text-sm text-gray-400 line-through">
                            30 000
                                </span>
                                <span className="ml-1 text-sm text-white bg-dark-500 p-1 rounded-md">
                            - 5 000
                                </span>
                            </div>
                            <span className="text-lg">
                            25 000
                            </span>
                        </div>

                        <div className="flex gap-4">
                            <Button>
                                <IconCartAdd />
                            </Button>

                            <Button color="secondary">
                                <IconLike />
                            </Button>

                            <Button color="secondary">
                                <IconComporation />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
