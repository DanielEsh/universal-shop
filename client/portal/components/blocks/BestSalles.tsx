import { ProductShowcase } from '../ProductShowcase'
import { ColoredTitle } from '@/ui/components/Typography/ColoredTitle'
import { Tabs } from '@/ui/components/Tabs'

export const BestSalles = () => {
    return (
        <div className="py-[48px]">
            <Tabs
                defaultActiveTab={'1'}
            >
                <div className="flex justify-between">
                    <ColoredTitle 
                        label="Хит"
                        colored="продаж"
                        className="mb-[24px]"
                    />

                    <div>
                        <Tabs.Bar>
                            <Tabs.Tab value="0">
                                Ноутбуки
                            </Tabs.Tab>
                            <Tabs.Tab value="1">
                                Планшеты
                            </Tabs.Tab>
                            <Tabs.Tab value="2">
                                Смартфоны
                            </Tabs.Tab>
                            <Tabs.Tab value="3">
                                Телевизоры
                            </Tabs.Tab>
                        </Tabs.Bar>
                    </div>
                </div>
                
                <Tabs.Panel value="0">
                    <ProductShowcase />
                </Tabs.Panel>
                <Tabs.Panel value="1">
                    <ProductShowcase />
                </Tabs.Panel>
                <Tabs.Panel value="2">
                    <ProductShowcase />
                </Tabs.Panel>
                <Tabs.Panel value="3">
                    <ProductShowcase />
                </Tabs.Panel>
            </Tabs>
        </div>
    )
}
