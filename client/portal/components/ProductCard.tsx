
const styles = {
    productCardRoot: 'bg-gray-100 w-[320px] h-[550px] p-16 rounded-md',
    slider: 'relative w-full h-[250px] bg-primary-500',
    sliderElement: 'absolute',
    category: '',
    name: '',
    rating: '',
}

export const ProductCard = () => {
    return (
        <div className={styles.productCardRoot}>
            <div className={styles.slider}>
                <div className={styles.sliderElement}>
                    1
                </div>
                <div className={styles.sliderElement}>
                    2
                </div>
                <div className={styles.sliderElement}>
                    3
                </div>
                <div className={styles.sliderElement}>
                    4
                </div>
            </div>

            <div className="flex flex-col h-[250px]">
                <span className={styles.category}>
                    Смартфон
                </span>
                <span className={styles.name}>
                    Xiaomi Redmi 9A 2/32Gb Granite Gray
                </span>

                <span className={styles.rating}>
                    *****
                </span>

                <div>
                    Хит продаж
                    Трейд ин
                    Новинка
                    Кешбек 500
                </div>

                <div className="flex mt-auto">
                    30 000 - 5 000
                    25 000

                    <div>
                        В корзину
                    </div>
                    <div>
                        В избранное
                    </div>
                </div>
            </div>
        </div>
    )
}
