import { Swiper, SwiperSlide } from 'swiper/react'

const mockHoroData = [
    {
        title: 'title1',
        description: 'description1',
    },
    {
        title: 'title2',
        description: 'description2',
    },
    {
        title: 'title3',
        description: 'description3',
    },
    {
        title: 'title4',
        description: 'description4',
    },
]

export const HomeHero = () => {
    return (
        <Swiper
            className="relative h-screen bg-sky-500"
            loop
        >
                {
                    mockHoroData.map((slide) => (
                        <SwiperSlide>
                            <div className="container mx-auto">
                                <div className="absolute top-1/4">
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
