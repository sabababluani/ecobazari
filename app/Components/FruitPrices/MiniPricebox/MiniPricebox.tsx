import styles from './MiniPricebox.module.scss'

interface Props {
    src: string;
    title: string;
    price: string;
    sale?: string;
    redSale?:boolean;
}

export default (props: Props) => {
    return (
        <div className={styles.container}>
            <img src={props.src} />
            <div className={styles.wrapper}>
            { props.redSale &&
            <div className={styles.redButton}>
                Sale 50%
            </div>  }
                <div className={styles.paragraphs}>
                    <p>{props.title}</p>
                    <div className={styles.prices}>
                        <p><span className={styles.mainPrice}>{props.price}</span></p>
                        <p><span className={styles.linethrough}>{props.sale}</span></p>
                    </div>
                    <div className={styles.raiting}>
                        <img src="Rating.png" />
                    </div>
                </div>
                <div>
                    <img src="Add To Cart.png" />
                </div>
            </div>

        </div>
    )
} 