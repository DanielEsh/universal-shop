import { 
    useState,
    useRef,
} from 'react'
import classNames from 'classnames'
import { ProductCard } from '@/components/cards/ProductCard/ProductCard'
import IconArrowDown from 'public/icons/arrow-down.svg'

export const ProductShowcase = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [maxHeight, setMaxHeight] = useState<number>(650)

    const showCaseRef = useRef<HTMLDivElement>(null)

    const onOpened = () => {
        if (showCaseRef.current) {
            setMaxHeight(showCaseRef.current.scrollHeight)
        }

        setIsOpened(true)
    }

    const classes = classNames(
        'relative flex flex-wrap gap-6 pt-4 overflow-hidden transition-all ease-in-out duration-300',
    )

    return (
        <div 
            ref={showCaseRef}
            className={classes}
            style={{ 'maxHeight': maxHeight }}
        >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

            {!isOpened && (
                <div className="absolute bottom-0 flex justify-center items-center  w-full h-[50px] bg-gradient-to-t from-light-500 dark:from-dark-500 transparent">
                    <button 
                        className="flex justify-center items-center w-[44px] h-[44px] bg-primary-500 rounded-full tranform transition-transform ease-in-out duration-300 hover:scale-110"
                        onClick={onOpened}
                    >
                        <IconArrowDown />
                    </button>
                </div>
            )}
        </div>
            
    )
}
