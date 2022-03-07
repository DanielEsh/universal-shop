import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-fade'

import Image1 from 'public/images/hero6.jpg'
import Image2 from 'public/images/category.png'

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
    slider: 'relative w-full h-[250px]',
    sliderImage: 'absolute flex h-full bg-gray-100 text-black',
    sliderSwitcherContainer: 'absolute top-0 z-1 flex w-full h-full',
    sliderSwitcher: 'flex-auto bg-transparent',
    category: '',
    name: '',
    rating: '',
}

export const ProductCard = () => {
    let swiperInstance: SwiperCore

    const onChangeSlider = (index: number) => {
        console.log(index, swiperInstance)
        if (swiperInstance) {
            swiperInstance.slideTo(index, 100)
        }
    }

    return (
        <div className={styles.productCardRoot}>
            <div className={styles.slider}>
                <Swiper 
                    slidesPerView={1}
                    modules={[EffectFade, Pagination]} 
                    pagination
                    effect="fade"
                    className="h-full w-full"
                    onSwiper={(swiper) => swiperInstance = swiper}
                >
                    {mockCardInfo.images.map(image => {
                        return (
                            <SwiperSlide 
                                key={image.id}
                                className={styles.sliderImage}
                            >
                                <Image
                                    src={image.image}
                                    alt=""
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </SwiperSlide>
                        )
                    })}
                    <div 
                        className={styles.sliderSwitcherContainer}
                        onMouseLeave={() => onChangeSlider(0)}
                    >
                        {mockCardInfo.images.map(({ id }, idx) => {
                            return (
                                <div 
                                    className={styles.sliderSwitcher}
                                    key={id}
                                    onMouseEnter={() => onChangeSlider(idx)}
                                />
                            )
                        })}
                    </div>
                </Swiper>
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
                    Хит продаж
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
