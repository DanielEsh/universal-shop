import { useContext, ReactNode } from 'react'
import { TabsContext } from '@/ui/components/Tabs/Context'

type TabPanel = {
    value: number | string
    children: ReactNode
}

export const Panel = ({ value, children }: TabPanel) => {
    const { activeTab } = useContext(TabsContext)

    if (activeTab !== value) {
        return <></>
    }

    return (
        <>
            {children}
        </>
    )
}
