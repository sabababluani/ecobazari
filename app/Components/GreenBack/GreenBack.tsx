import styles from './GreenBack.module.scss'

export default () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p>SUMMER SALE</p>
                <h3><span className={styles.percent}>37%</span> OFF</h3>
                <span>Free on all your order, Free Shipping and  30 days money-back guarantee</span>
                <button>Shop Now <img src="/whitearrow.png" /></button>
            </div>
        </div>
    )
}