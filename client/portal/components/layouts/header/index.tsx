import { MainHeader } from './MainHeader'
import { MenuHeader } from './MenuHeader'

export const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-10">
            <MainHeader />
            <MenuHeader />
        </header>
    )
}
