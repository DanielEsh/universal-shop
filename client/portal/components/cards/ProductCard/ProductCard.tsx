import { useState } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import Image1 from 'public/images/hero6.jpg'
import Image2 from 'public/images/category.png'
import { Tag } from '@/ui/components/Tags'
import { Button } from '@/ui/components/Button'
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
        <div className="group relative w-[288px] h-[550px] p-16 rounded-md bg-light-400 dark:bg-dark-400 transform will-change-transform transition-all ease-in-out duration-300 hover:-translate-y-2 hover:shadow-md 
        before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-full before:left-0 before:transition-all before:ease-in-out before:duration-300 hover:before:translate-y-2">
            <div className="flex flex-col h-full">
                <div ref={refCallback} className="fader relative w-full h-[400px] overflow-hidden">
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
                                    className={`flex-auto h-full ${item === currentSlideIndex ? 'bg-primary-500' : 'bg-dark-500 dark:bg-light-500'}`}
                                    key={item}
                                >
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col h-full">
                    <span className="text-sm text-gray-400 dark:text-gray-300">
                        ????????????????
                    </span>
                    <span className="text-lg dark:text-white">
                        Xiaomi Redmi 9A 2/32Gb Granite Gray
                    </span>

                    <span className="flex justify-center">
                        *****
                    </span>

                    <div className="flex flex-wrap gap-2">
                        <Tag size="small">
                            ?????? ????????????
                        </Tag>
                        <Tag 
                            size="small"
                            color="secondary"
                        >
                            ?????????? ????
                        </Tag>
                        <Tag 
                            color="secondary"
                            outlined
                            size="small"
                        >
                            ??????????????
                        </Tag>
                        <Tag 
                            color="secondary"
                            disabled
                            size="small"
                        >
                            ???????????? 500
                        </Tag>

                        <div className="flex justify-center items-center bg-light-500 px-2.5 rounded-md">
                            +3
                        </div>
                    </div>

                    <div className="flex flex-col mt-auto">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <span className="text-sm text-gray-400 line-through dark:text-gray-200">
                                    30 000
                                </span>
                                <span className="ml-1 text-sm text-white bg-dark-500 p-1 rounded-md dark:bg-light-500 dark:text-black">
                                    - 5 000
                                </span>
                            </div>
                            <span className="text-lg dark:text-white">
                                25 000
                            </span>
                        </div>

                        <div className="flex justify-center gap-4 transform translate-y-full opacity-0 transition-all ease-in-out duration-300 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
                            <Button 
                                className="text-sm"
                            >
                                <IconCartAdd className="icon-big" />
                            </Button>

                            <Button color="secondary">
                                <IconLike className="icon-big" />
                            </Button>

                            <Button color="secondary">
                                <IconComporation className="icon-big" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
