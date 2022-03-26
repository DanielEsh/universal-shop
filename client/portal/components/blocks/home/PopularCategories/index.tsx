
// import { PopularCategoriesCard } from '@/components/cards/PopularCategoriesCard/PopularCategoriesCard'
import { ColoredTitle } from '@/components/ui/components/Typography/ColoredTitle'


const mockCategories = [
    {
        id: 1,
        name: 'Для дома',
    },
    {
        id: 2,
        name: 'Смартфоны и гаджеты',
    },
    {
        id: 3,
        name: 'Компьютеры',
    },
    {
        id: 4,
        name: 'Кухня',
    },
    {
        id: 5,
        name: 'ТВ и мультимедиа',
    },
    
    {
        id: 6,
        name: 'Услуги',
    },
    {
        id: 7,
        name: 'Аксессуары',
    },
]

export const PopularCategories = () => {
    return (
        <div className="py-10">
            <div className="flex justify-between">
                <ColoredTitle 
                    className="mb-10"
                    label="Популярные"
                    colored="категории"
                />

                <div className="flex justify-center items-center h-[60px] text-white dark:text-white">
                    Все категории
                </div>
            </div>

            <div className="grid gap-4 grid-cols-4 grid-rows-3">
                <div className="bg-primary-400 text-black p-5 col-span-2 row-span-1">
                    Для дома
                </div>
                <div className="bg-primary-400 text-black p-5 row-span-2">
                    Смартфоны и гаджеты
                </div>
                <div className="bg-primary-400 text-black p-5">
                    Аксессуары
                </div>
                <div className="bg-primary-400 text-black p-5 row-span-2">
                    Кухня
                </div>
                <div className="bg-primary-400 text-black p-5">
                    ТВ и мультимедиа
                </div>
                <div className="bg-primary-400 text-black p-5 row-span-2">
                    Компьютеры
                </div>
                <div className="bg-primary-400 text-black p-5 col-span-2">
                    Услуги
                </div>
            </div>
        </div>
    )
}
