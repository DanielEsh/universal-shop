import IconPackage from 'public/icons/package.svg'
import IconReward from 'public/icons/reward.svg'
import IconCoinDollar from 'public/icons/coin-dollar.svg'
import IconLocation from 'public/icons/location.svg'
import IconStar from 'public/icons/star.svg'
import IconFastTime from 'public/icons/fast-time.svg'

export const Advantages = () => {
    return (
        <div className="bg-gray-200">
            <div className="container mx-auto text-black">
                <div className="grid grid-cols-6">
                    <div className="flex flex-col items-center p-6">
                        <IconPackage className="w-[64px] h-[64px] text-black" />
                        <span className="mt-4 text-center">
                            Широкий ассортимент
                        </span>
                    </div>
                    <div className="flex flex-col items-center p-6">
                        <IconReward className="w-[64px] h-[64px] text-black" />
                        <span className="mt-4 text-center">
                            Гарантия качества
                        </span>
                    </div>
                    <div className="flex flex-col items-center p-6">
                        <IconCoinDollar className="w-[64px] h-[64px] text-black" />
                        <span className="mt-4 text-center">
                            Бонусы за покупки
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center p-6">
                        <IconLocation className="w-[64px] h-[64px] text-black" />
                        <span className="mt-4 text-center">
                            Удобные пункты самовывоза
                        </span>
                    </div>
                    <div className="flex flex-col items-center p-6">
                        <IconStar className="w-[64px] h-[64px] text-black" />
                        <span className="mt-4 text-center">
                            Премиум-сервис
                        </span>
                    </div>
                    <div className="flex flex-col items-center p-6">
                        <IconFastTime className="w-[64px] h-[64px] text-black" />
                        <span className="mt-4 text-center">
                            Быстрое оформление заказа
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
