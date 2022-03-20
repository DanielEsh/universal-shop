import { ProductShowcase } from '../ProductShowcase'
import { ColoredTitle } from '@/ui/components/Typography/ColoredTitle'
import { Tabs } from '@/ui/components/Tabs'

export const BestSalles = () => {
    const title = () => (
        <ColoredTitle 
            label="Хит"
            colored="продаж"
            className="mb-[24px]"
        />
    )

    const tabs = () => (
        <Tabs
            defaultActiveTab={'1'}
        >
            <Tabs.Bar>
                <Tabs.Tab value="0">
                    Recent
                </Tabs.Tab>
                <Tabs.Tab value="1">
                    Popular
                </Tabs.Tab>
                <Tabs.Tab
                    value="2"
                >
                    Test
                </Tabs.Tab>
                <Tabs.Tab
                    value="3"
                >
                    Trading
                </Tabs.Tab>
            </Tabs.Bar>
            <div className="flex justify-center items-center max-w-md h-20 mt-4 bg-primary-500 rounded-md">
                <Tabs.Panel value="0">
                    Recent panel
                </Tabs.Panel>
                <Tabs.Panel value="1">
                    Popular panel
                </Tabs.Panel>
                <Tabs.Panel value="2">
                    Test panel
                </Tabs.Panel>
                <Tabs.Panel value="3">
                    Trading panel
                </Tabs.Panel>
            </div>
        </Tabs>
    )

    return (
        <div className="py-[48px]">
            <ProductShowcase
            />
        </div>
    )
}
