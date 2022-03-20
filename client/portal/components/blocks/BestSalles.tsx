import { ProductShowcase } from '../ProductShowcase'
import { ColoredTitle } from '@/ui/components/Typography/ColoredTitle'

export const BestSalles = () => {
    const title = () => (
        <ColoredTitle 
            label="Хит"
            colored="продаж"
            className="mb-[24px]"
        />
    )

    return (
        <div className="py-[48px]">
            <ProductShowcase
                title={title()}
            />
        </div>
    )
}
