import {TopHeader} from './TopHeader';
import {MainHeader} from './MainHeader';
import {MenuHeader} from './MenuHeader';

export const Header = () => {
    return (
        <header className="w-full z-10">
            <TopHeader />
            <MainHeader />
            <MenuHeader />
        </header>
    );
};
