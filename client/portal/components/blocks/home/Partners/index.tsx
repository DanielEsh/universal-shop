import { PartnerCard } from '@/components/cards/PartnerCard'
import { ColoredTitle } from '@/components/ui/components/Typography/ColoredTitle'

export const Partners = () => {
    return (
        <div className="py-10">
            <ColoredTitle 
                className="mb-10"
                label="Наши"
                colored="партнеры"
            />

            <div className="grid grid-cols-5 border dark:border-dark-300">
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
            </div>
            <div className="grid grid-cols-5 border border-t-0 dark:border-dark-300">
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
                <div className="flex justify-center items-center h-[84px] p-[48px] dark:bg-dark-400 dark:text-white">
                    Ещё 150+
                </div>
            </div>
        </div>
    )
}
