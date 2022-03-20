import { HomePromosSlider } from './HomePromosSlider'
import { DayProduct } from './DayProduct'

export const HomePromos = () => {
    return (
        <div className="container mx-auto">
            <div className="flex gap-[40px] h-[550px]">
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
