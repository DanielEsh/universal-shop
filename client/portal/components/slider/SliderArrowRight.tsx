import IconDirectionRight from 'public/icons/direction-right.svg'

type Props = { 
    onClick: () => void
}

export const SliderArrowRight = ({ onClick }: Props) => {
    return (
        <button className="absolute top-1/2 -right-[26px] p-2 rounded-md bg-primary-500">
            <IconDirectionRight 
                className="icon-big"
                onClick={onClick}
            />
        </button>
    )
}
