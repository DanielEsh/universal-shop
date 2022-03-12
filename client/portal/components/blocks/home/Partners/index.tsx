import { PartnerCard } from '@/components/cards/PartnerCard'

export const Partners = () => {
    return (
        <div>
            Partners

            <div className="grid gap-[20px] grid-cols-6">
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
            </div>
        </div>
    )
}
