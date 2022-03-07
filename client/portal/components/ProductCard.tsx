import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-fade'

const styles = {
    productCardRoot: 'bg-gray-100 w-[320px] h-[550px] p-16 rounded-md',
    slider: 'relative w-full h-[250px]',
    sliderElement: 'absolute flex h-full bg-gray-100 text-black',
    category: '',
    name: '',
    rating: '',
}

export const ProductCard = () => {
    return (
        <div className={styles.productCardRoot}>
            <div className={styles.slider}>
                <Swiper 
                    slidesPerView={1}
                    modules={[EffectFade]} 
                    effect="fade"
                    loop
                    className="h-full w-full"
                >
                    {[1, 2, 3].map((i, el) => {
                        return (
                            <SwiperSlide 
                                key={i}
                                className={styles.sliderElement}
                            >
                                Slide {el}
                            </SwiperSlide>
                        )
                    })}
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
