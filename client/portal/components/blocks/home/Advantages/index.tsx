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
                    <div>
                        <IconPackage />
                        Широкий ассортимент
                    </div>
                    <div>
                        <IconReward />
                        Гарантия качества
                    </div>
                    <div>
                        <IconCoinDollar />
                        Бонусы за покупки
                    </div>
                    <div>
                        <IconLocation />
                        Удобные пункты самовывоза
                    </div>
                    <div>
                        <IconStar />
                        Премиум-сервис
                    </div>
                    <div>
                        <IconFastTime />
                        Быстрое оформление заказа
                    </div>
                </div>
            </div>
        </div>
    )
}
