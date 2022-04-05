import { PhoneWithWorkSchedule } from '@/components/PhoneWithWorkSchedule'
import IconCart from 'public/icons/cart.svg'
import IconLike from 'public/icons/like.svg'
import IconComporation from 'public/icons/comporation.svg'
import IconUser from 'public/icons/user.svg'
import IconSearch from 'public/icons/search.svg'

type ActionsType = {
    icon: () => JSX.Element
    name: string
}

const ACTIONS: Array<ActionsType> = [
    {
        icon: IconSearch,
        name: 'Поиск',
    },
    {
        icon: IconUser,
        name: 'Вход',
    },
    {
        icon: IconComporation,
        name: 'Сравнение',
    },
    {
        icon: IconLike,
        name: 'Избранное',
    },
    {
        icon: IconCart,
        name: 'Корзина',
    },
]

export const MainHeaderActions = () => {
    return (
        <div className="flex items-center ml-auto">
            <PhoneWithWorkSchedule className="mr-6" />
            {
                ACTIONS.map(({ icon, name }, index) => (
                    <div 
                        key={index}
                        className="group flex items-center justify-center flex-col px-4 py-3.5 transition-color hover:bg-dark-500 hover:text-white"
                    >
                        <span className="icon-big">{icon()}</span>
                        <span className="text-sm mt-1">{name}</span>
                    </div>
                ))
            }
        </div>
    )
}
