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
            {
                ACTIONS.map(({ id, icon, name }) => (
                    <div 
                        key={id}
                        className="flex items-center justify-center flex-col mr-3 px-2 py-3.5 bg-blue-400"
                    >
                        {icon()}
                        <span>{name}</span>
                    </div>
                ))
            }
        </div>
    )
}
