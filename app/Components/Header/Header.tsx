import styles from "./Header.module.scss"

export default () => {
    return (
        <div className={styles.wrapper}>
            <img src="/Logo.png" />
            <div className={styles.container}>
                <img src="/Group.png" />
                <input type="text" />
                <button >Search</button>
            </div>
            <div className={styles.cart}>
                <div className={styles.heart}> 
                    <img src="/Heart.png" />
                    <img src="/longerLine.png" />
                    <img src="/Cart.png" />
                </div>
                <div className={styles.price}>
                    <p>Shopping cart:</p>
                    <h4>$57.00</h4>
                </div>
            </div>
        </div>
    )
}