import classNames from 'classnames'

type Props = {
    slides: number[]
    activeSlideIndex: number
    onChange: (idx: number) => void
    color?: 'primary' | 'secondary' | 'dark' | 'light'
}

export const SliderDotsPagination = (props: Props) => {
    const { 
        slides,
        activeSlideIndex,
        onChange,
    } = props

    return (
        <div className="flex items-center">
            {slides.map((idx) => {
                return (
                    <button
                        key={idx}
                        type="button"
                        onClick={() => {
                            if (onChange) {
                                onChange(idx)
                            }
                        }}
                        className={`mr-[5px] ml-[5px] rounded-full transition-all ${
                            idx === activeSlideIndex
                                ? 'w-[20px] h-[20px] border border-solid border-primary-500 bg-transparent'
                                : 'w-[6px] h-[6px] p-[5px] bg-primary-500'
                        } `}
                    />
                )
            })}
        </div>
    )
}
