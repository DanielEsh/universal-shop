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

                    <Tabs.Bar>
                        <Tabs.Tab value="0">
                            Ноутбуки
                        </Tabs.Tab>
                        <Tabs.Tab value="1">
                            Планшеты
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="2"
                        >
                            Смартфоны
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="3"
                        >
                            Телевизоры
                        </Tabs.Tab>
                    </Tabs.Bar>
                </div>
                
                <Tabs.Panel value="0">
                    <ProductShowcase
                    />
                </Tabs.Panel>
                <Tabs.Panel value="1">
                    <div className="text-white">
                        Планшеты
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="2">
                    <div className="text-white">
                        Смартфоны
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="3">
                    <div className="text-white">
                        Телевизоры
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    )
}
