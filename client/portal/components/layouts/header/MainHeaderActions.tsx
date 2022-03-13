import { PhoneWithWorkSchedule } from '@/components/PhoneWithWorkSchedule'
import IconCart from 'public/icons/cart.svg'
import IconLike from 'public/icons/like.svg'
import IconComporation from 'public/icons/comporation.svg'
import IconUser from 'public/icons/user.svg'
import IconSearch from 'public/icons/search.svg'

type ActionsType = {
    id: number
    icon: () => JSX.Element
    name: string
}

const ACTIONS: Array<ActionsType> = [
    {
        id: 1,
        icon: IconSearch,
        name: 'Поиск',
    },
    {
        id: 2,
        icon: IconUser,
        name: 'Вход',
    },
    {
        id: 3,
        icon: IconComporation,
        name: 'Сравнение',
    },
    {
        id: 4,
        icon: IconLike,
        name: 'Избранное',
    },
    {
        id: 5,
        icon: IconCart,
        name: 'Корзина',
    },
]

export const MainHeaderActions = () => {
    return (
        <div className="flex items-center ml-auto">
            <PhoneWithWorkSchedule className="mr-6" />
            {
                ACTIONS.map(({ id, icon, name }) => (
                    <div 
                        key={id}
                        className="group flex items-center justify-center flex-col px-4 py-3.5 bg-blue-400 transition ease delay-150 hover:bg-primary-500"
                    >
                        <span className="text-black transition ease delay-150 group-hover:scale-150">{icon()}</span>
                        <span className="text-sm mt-1">{name}</span>
                    </div>
                ))
            }
        </div>
    )
}
