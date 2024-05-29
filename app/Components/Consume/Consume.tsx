import styles from './Consume.module.scss'

export default () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <img src="/delivery-truck.png" />
                </div>
                <div className={styles.paragraph}>
                    <p>Free Shipping</p>
                    <span>Free shipping on all your order</span>
                </div>
            </div>
            <div className={styles.container}>
                <div>
                    <img src="/headphones.png" />
                </div>
                <div className={styles.paragraph}>
                    <p>Customer Support 24/7</p>
                    <span>Instant access to Support</span>
                </div>
            </div>
            <div className={styles.container}>
                <div>
                    <img src="/basket.png" />
                </div>
                <div className={styles.paragraph}>
                    <p>100% Secure Payment</p>
                    <span>We ensure your money is save</span>
                </div>
            </div>
            <div className={styles.container}>
                <div>
                    <img src="/package.png" />
                </div>
                <div className={styles.paragraph}>
                    <p>Money-Back Guarantee</p>
                    <span>30 Days Money-Back Guarantee</span>
                </div>
            </div>
        </div>
    )
}