
import { PopularCategoriesCard } from '@/components/cards/PopularCategoriesCard/PopularCategoriesCard'

export const PopularCategories = () => {
    return (
        <div>
            Popular Categories

            <div className="grid gap-8 grid-cols-5">
                <PopularCategoriesCard />
                <PopularCategoriesCard />
                <PopularCategoriesCard />
                <PopularCategoriesCard />
                <PopularCategoriesCard />

                <PopularCategoriesCard />
                <PopularCategoriesCard />
                <PopularCategoriesCard />
                <PopularCategoriesCard />
                <PopularCategoriesCard />
            </div>
        </div>
    )
}
