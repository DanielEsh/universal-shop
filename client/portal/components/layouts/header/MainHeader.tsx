import Link from 'next/link'

export const MainHeader = () => {
    return (
        <>
            <div className="relative flex items-center container mx-auto">
                <div className="mr-6">
                    <Link href="/">
                        <a>
                            <img src="./Logo.svg" alt="UNIVERSAL" />
                        </a>
                    </Link>
                </div>

                <div
                    className="flex items-center justify-center w-7 h-6 mr-6 rounded bg-primary-500 cursor-pointer"
                >
                    Каталог
                </div>

                <div className="w-[680px] mr-6">Поиск</div>

                <div className="flex items-center ml-auto">
                    <div className="flex items-center justify-center flex-col mr-3">
                        <span>Вход</span>
                    </div>

                    <div className="flex items-center justify-center flex-col mr-3">
                        <span>Сравнение</span>
                    </div>

                    <div className="flex items-center justify-center flex-col mr-3">
                        <span>Избранное</span>
                    </div>

                    <div className="flex items-center justify-center flex-col mr-3">
                        <span>Корзина</span>
                    </div>
                </div>
            </div>
        </>
    )
}