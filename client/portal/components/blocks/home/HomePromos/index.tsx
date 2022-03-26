import { HomePromosSlider } from './HomePromosSlider'
import { DayProduct } from './DayProduct'

export const HomePromos = () => {
    return (
        <div className="container mx-auto py-6">

            <h2 className="mb-12 text-5xl text-white font-semibold">Выгодные предложения для Вас</h2>

            <div className="flex gap-[60px] h-[550px]">
                <div className="flex-auto overflow-hidden">
                    <HomePromosSlider />
                </div>
                <div className="w-[320px] ml-auto">
                    <DayProduct />
                </div>
            </div>
        </div>
    )
}
