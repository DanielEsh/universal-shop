import Image from 'next/image'
import Image2 from 'public/images/category.png'

export const PopularCategoriesCard = () => {
    return (
        <div className="flex justify-center items-center flex-col p-16 rounded-md bg-gray-200">
            <Image 
                src={Image2}
                alt=""
            />
            PopularCategoriesCard
        </div>
    )
}
