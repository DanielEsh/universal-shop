import {TopHeader} from './TopHeader';
import {MainHeader} from './MainHeader';
import {MenuHeader} from './MenuHeader';

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-10">
            <TopHeader />
            <MainHeader />
            <MenuHeader />
        </header>
    );
};
