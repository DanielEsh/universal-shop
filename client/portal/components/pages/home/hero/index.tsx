import { Swiper, SwiperSlide } from 'swiper/react'
import { Lazy } from 'swiper';
import Image from 'next/image'

import Hero1 from 'public/images/Hero1.jpg'
import Hero2 from 'public/images/Hero2.jpg'
import Hero3 from 'public/images/Hero6.jpg'
import Hero4 from 'public/images/Hero5.jpg'

const mockHoroData = [
    {
        id: 1,
        title: 'title1',
        description: 'description1',
        image: Hero1,
    },
    {
        id: 2,
        title: 'title2',
        description: 'description2',
        image: Hero2,
    },
    {
        id: 3,
        title: 'title3',
        description: 'description3',
        image: Hero3,
    },
    {
        id: 4,
        title: 'title4',
        description: 'description4',
        image: Hero4,
    },
]

export const HomeHero = () => {
    return (
        <Swiper
            className="relative h-screen bg-sky-500"
            modules={[Lazy]}
            lazy
            loop
        >
                {
                    mockHoroData.map((slide) => (
                        <SwiperSlide>
                            <Image 
                                className="swiper-lazy"
                                src={slide.image}
                                layout="fill"
                                objectFit="fill"
                            />
                            <div className="container mx-auto">
                                <div 
                                    key={slide.id}
                                    className="absolute top-1/4"
                                >
                                    <h2>{slide.title}</h2>
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

                <div className="absolute bottom-0 z-10 w-full h-20">

                </div>
        </Swiper>
    )
}
