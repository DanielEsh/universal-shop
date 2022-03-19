import { ProductShowcase } from '../ProductShowcase'
import { ColoredTitle } from '../ui/Typography/ColoredTitle'

export const BestSalles = () => {
    const title = () => (
        <ColoredTitle 
            label="Хит"
            colored="продаж"
        />
    )

    return (
        <ProductShowcase
            title={title()}
        />
    )
}
