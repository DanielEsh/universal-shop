import React from 'react'
import { AdvantagesCard } from './AdvantagesCard'
import IconPackage from 'public/icons/package.svg'
import IconReward from 'public/icons/reward.svg'
import IconCoinDollar from 'public/icons/coin-dollar.svg'
import IconLocation from 'public/icons/location.svg'
import IconStar from 'public/icons/star.svg'
import IconFastTime from 'public/icons/fast-time.svg'

const AdnvatagesMock = [
    {
        title: 'Широкий ассортимент',
        icon: IconPackage,
        description: 'В нашем магазине представленно более 5000 разных товаров',
    },
    {
        title: 'Гарантия качества',
        icon: IconReward,
        description: 'Мы работаем только с официальными поставщиками и гарантируем качетсво наших товаров',
    },
    {
        title: 'Бонусы за покупки',
        icon: IconCoinDollar,
        description: 'При регистрации и покупке товара вы получаете бонусы, которые можете использовать для получения выгодной скидки',
    },
    {
        title: 'Удобные пункты самовывоза',
        icon: IconLocation,
        description: 'Более 2500 пунктов выдачи. Вы всегда найдете ближайший к вам.',
    },
    {
        title: 'Премиум-сервис',
        icon: IconStar,
        description: 'Мы максимально качественно обслуживаем любого нашего клиента',
    },
    {
        title: 'Быстрое оформление заказа',
        icon: IconFastTime,
        description: 'Вы можете купить товар всего в 1 клик',
    },
]

export const AdvantagesNew = () => {
    return (
        <div className="bg-light-500">
            New Advantages
            <div className="grid grid-cols-3">
                <AdvantagesCard />
                <AdvantagesCard />
                <AdvantagesCard />
                <AdvantagesCard />
                <AdvantagesCard />
                <AdvantagesCard />
            </div>
            
        </div>
    )
}
