import IconDirectionLeft from 'public/icons/direction-left.svg'

type Props = { 
    onClick: () => void
}

export const SliderArrowLeft = ({ onClick }: Props) => {
    return (
        <button className="absolute top-1/2 -left-[26px] p-2 rounded-md bg-primary-500">
            <IconDirectionLeft 
                className="icon-big"
                onClick={onClick}
            />
        </button>
    )
}
