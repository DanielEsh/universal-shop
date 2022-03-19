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
        id: 1,
        title: 'Широкий ассортимент',
        icon: IconPackage,
        description: 'В нашем магазине представленно более 5000 разных товаров',
        buttonText: 'В каталог',
        buttonLink: '',
    },
    {
        id: 2,
        title: 'Гарантия качества',
        icon: IconReward,
        description: 'Мы работаем только с официальными поставщиками и гарантируем качетсво наших товаров',
    },
    {
        id: 3,
        title: 'Бонусы за покупки',
        icon: IconCoinDollar,
        description: 'При регистрации и покупке товара вы получаете бонусы, которые можете использовать для получения выгодной скидки',
    },
    {
        id: 4,
        title: 'Удобные пункты самовывоза',
        icon: IconLocation,
        description: 'Более 2500 пунктов выдачи. Вы всегда найдете ближайший к вам.',
        buttonText: 'Посмотреть на карте',
        buttonLink: '',
    },
    {
        id: 5,
        title: 'Премиум-сервис',
        icon: IconStar,
        description: 'Мы максимально качественно обслуживаем любого нашего клиента',
    },
    {
        id: 6,
        title: 'Быстрое оформление заказа',
        icon: IconFastTime,
        description: 'Вы можете купить товар всего в 1 клик',
    },
]

export const Advantages = () => {
    return (
        <div className="bg-light-500 dark:bg-dark-400 dark:text-light-500 py-[80px]">
            <div className="container mx-auto">
                
                <h2 className="text-4xl font-bold mb-[40px]" >
                    <span dangerouslySetInnerHTML={{ __html: 'Наши стандарты &nbsp;' }} />
                    <span className="relative inline-block p-2 before:block before:absolute before:-inset-1 before:skew-y-3 before:rounded-md before:bg-primary-500">
                        <span className="relative text-black">
                            качества
                        </span>
                    </span>
                </h2>

                <div className="grid grid-cols-3">
                    {
                        AdnvatagesMock.map(({ id, title, icon, description, buttonText, buttonLink }) => (
                            <AdvantagesCard 
                                key={id}
                                title={title}
                                icon={icon()}
                                description={description}
                                buttonText={buttonText}
                                buttonLink={buttonLink}
                            />
                        ))
                    }
                </div>
            
            </div>
        </div>
    )
}
