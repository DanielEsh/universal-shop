import classNames from 'classnames'

type props = {
    className: string
}

export const PhoneWithWorkSchedule = ({ className }: props) => {

    const classes = classNames(
        'flex flex-col items-center',
        className,
    )

    return (
        <div className={classes}>
            <span>
            8 (495) 228-27-36
            </span>
            <span className="text-xs">
            Пн-Пт 9-21, Сб-Вс 9-20
            </span>
        </div>
    )
}
