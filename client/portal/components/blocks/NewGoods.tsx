import { ProductShowcase } from '../ProductShowcase'
import { ColoredTitle } from '@/ui/components/Typography/ColoredTitle'

export const NewGoods = () => {
    return (
        <div className="py-[48px]">
            <div className="flex justify-between">
                <ColoredTitle 
                    label="Новые"
                    colored="товары"
                    className="mb-[24px]"
                />
            </div>
                
            <ProductShowcase />
        </div>
    )
}
