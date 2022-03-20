import { ReactNode, FC } from 'react'
import { ProductCard } from '@/components/cards/ProductCard/ProductCard'
import IconArrowDown from 'public/icons/arrow-down.svg'

type props = {
    title?: ReactNode
    renderTabs?: ReactNode
}

export const ProductShowcase: FC<props> = ({ title, renderTabs }) => {
    return (
        <div className="">
            <div className="flex justify-between mb-6">
                <h2>
                    {title}
                </h2>

                <div>
                    {renderTabs}
                </div>
            </div>

            <div className="relative flex flex-wrap gap-6 h-[700px] pt-4 overflow-hidden">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

                <div className="absolute bottom-0 flex justify-center items-center  w-full h-[50px] bg-gradient-to-t from-dark-500 transparent">
                    <div className="flex justify-center items-center w-[44px] h-[44px] bg-primary-500 rounded-full">
                        <IconArrowDown />
                    </div>
                </div>
            </div>
        </div>
    )
}
