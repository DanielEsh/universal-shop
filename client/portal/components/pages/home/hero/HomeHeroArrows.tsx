import { FC } from 'react';

// import ArrowWhite from '../../../../assets/icons/arrowWhite.svg';

type HomeHeroArrowsProps = {
    slider: any;
};

export const HomeHeroArrows: FC<HomeHeroArrowsProps> = ({ slider }) => {
    const onPrevArrowClick = (e: any) => {
        e.stopPropagation() || slider.current?.prev();
    };

    const onNextArrowClick = (e: any) => {
        e.stopPropagation() || slider.current?.next();
    };

    return (
        <div className="flex items-center ml-3">
            <div
                role="presentation"
                className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-solid border-black mr-3"
                onClick={onPrevArrowClick}
            >
                {/* <ArrowWhite className="w-[15px] h-[15px]" /> */}
            </div>
            <div
                role="presentation"
                className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-solid border-black rotate-180"
                onClick={onNextArrowClick}
            >
                {/* <ArrowWhite className="w-[15px] h-[15px]" /> */}
            </div>
        </div>
    );
};
