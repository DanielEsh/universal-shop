
import { CategoryCard } from '@/components/cards/CategoryCard'
import { ColoredTitle } from '@/components/ui/components/Typography/ColoredTitle'


const mockCategories = [
    {
        id: 1,
        name: 'Для дома',
        placeClass: 'col-span-2',
    },
    {
        id: 2,
        name: 'Смартфоны и гаджеты',
        placeClass: 'row-span-2',
    },
    {
        id: 3,
        name: 'Аксессуары',
        placeClass: '',
    },
    {
        id: 4,
        name: 'Кухня',
        placeClass: 'row-span-2',
    },
    {
        id: 5,
        name: 'ТВ и мультимедиа',
        placeClass: '',
    },
    {
        id: 6,
        name: 'Компьютеры',
        placeClass: 'row-span-2',
    },
    {
        id: 7,
        name: 'Услуги',
        placeClass: 'col-span-2',
    },
]

export const PopularNews = () => {
    return (
        <div className="py-10">
            <div className="flex justify-between">
                <ColoredTitle 
                    className="mb-10"
                    label="Последние"
                    colored="новости"
                />
            </div>

            <div className="grid gap-4 grid-cols-4 grid-rows-3 auto-rows-[30px]">
                {
                    mockCategories.map((popularCategory) => (
                        <CategoryCard 
                            key={popularCategory.id}
                            className={popularCategory.placeClass}
                            title={popularCategory.name}
                        />
                    ))
                }
            </div>
        </div>
    )
}
