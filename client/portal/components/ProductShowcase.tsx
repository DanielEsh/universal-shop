import { ReactNode, FC, useState } from 'react'
import classNames from 'classnames'
import { ProductCard } from '@/components/cards/ProductCard/ProductCard'
import IconArrowDown from 'public/icons/arrow-down.svg'

type props = {
    title?: ReactNode
    renderTabs?: ReactNode
}

export const ProductShowcase: FC<props> = ({ title, renderTabs }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false)


    const onOpened = () => {
        setIsOpened(true)
    }

    const classes = classNames(
        'relative flex flex-wrap gap-6 pt-4 overflow-hidden',
        {
            ['h-[700px]']: !isOpened,
            ['h-auto']: isOpened,
        },
    )

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

            <div className={classes}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

                {!isOpened && (
                    <div className="absolute bottom-0 flex justify-center items-center  w-full h-[50px] bg-gradient-to-t from-dark-500 transparent">
                        <button 
                            className="flex justify-center items-center w-[44px] h-[44px] bg-primary-500 rounded-full tranform transition-transform ease-in-out duration-300 hover:scale-110"
                            onClick={onOpened}
                        >
                            <IconArrowDown />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
