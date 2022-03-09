import { useState } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import Image1 from 'public/images/hero6.jpg'
import Image2 from 'public/images/category.png'
import { Tag } from '@/components/ui/Tags'

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

const styles = {
    productCardRoot: 'bg-gray-100 w-[320px] h-[550px] p-16 rounded-md',
    slider: 'fader relative w-full h-[250px] overflow-hidden',
    sliderImage: 'fader__slide absolute flex h-full bg-gray-100 text-black',
    sliderSwitcherContainer: 'absolute top-0 z-1 flex w-full h-full',
    sliderSwitcher: 'flex-auto bg-transparent',
    sliderPagination: 'absolute bottom-2 flex gap-x-4 w-full h-[1px]',
    category: 'text-sm text-gray-400',
    name: 'text-lg',
    rating: 'flex justify-center',
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
        <div className={styles.productCardRoot}>
            <div ref={refCallback} className={styles.slider}>
                {mockCardInfo.images.map((image, idx) => {
                    return (
                        <div 
                            key={image.id}
                            className={styles.sliderImage}
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
                    className={styles.sliderSwitcherContainer}
                    onMouseLeave={() => onChangeSlide(0)}
                >
                    {mockCardInfo.images.map(({ id }, idx) => {
                        return (
                            <div 
                                className={styles.sliderSwitcher}
                                key={id}
                                onMouseEnter={() => onChangeSlide(idx)}
                            />
                        )
                    })}
                </div>

                <div className={styles.sliderPagination}>
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

            <div className="flex flex-col h-[250px]">
                <span className={styles.category}>
                    Смартфон
                </span>
                <span className={styles.name}>
                    Xiaomi Redmi 9A 2/32Gb Granite Gray
                </span>

                <span className={styles.rating}>
                    *****
                </span>

                <div>
                    <Tag>
                        Хит продаж
                    </Tag>
                    Трейд ин
                    Новинка
                    Кешбек 500
                </div>

                <div className="flex mt-auto">
                    30 000 - 5 000
                    25 000

                    <div>
                        В корзину
                    </div>
                    <div>
                        В избранное
                    </div>
                </div>
            </div>
        </div>
    )
}
