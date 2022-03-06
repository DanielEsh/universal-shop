import { FC } from 'react';

type HomeHeroPaginationProps = {
    slider: any;
    activeSlide: number;
};

export const HomeHeroPagination: FC<HomeHeroPaginationProps> = ({
    slider,
    activeSlide,
}) => {
    const allSlidesLength = [
        ...Array(slider?.current.track.details.slides.length).keys(),
    ];

    return (
        <div className="flex items-center">
            {allSlidesLength.map((idx) => {
                return (
                    <button
                        key={idx}
                        type="button"
                        onClick={() => {
                            slider?.current.moveToIdx(idx);
                        }}
                        className={`mr-[5px] ml-[5px] rounded-full transition-all ${
                            idx === activeSlide
                                ? 'w-[20px] h-[20px] border border-solid border-black bg-transparent'
                                : 'w-[6px] h-[6px] p-[5px] bg-black'
                        } `}
                    />
                );
            })}
        </div>
    );
};
