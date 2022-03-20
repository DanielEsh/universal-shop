import { createContext } from 'react'
import { ActiveTabIndicatorPropertiesTabType } from '@/ui/components/Tabs/Tabs'

export type TabsContextType = {
    activeTab: number | string
    activeTabIndicatorProperties: ActiveTabIndicatorPropertiesTabType | null
    direction: 'vertical' | 'horizontal'
    color: 'primary' | 'secondary'
    onChangeIndicator: (val: ActiveTabIndicatorPropertiesTabType) => void
    onChangeActivaTab: (val: string | number) => void
    onChange?: (index: number | string) => void
}

export const TabsContext = createContext({} as TabsContextType)
TabsContext.displayName = 'TabsContext'
