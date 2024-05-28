import styles from './Banners.module.scss'

export default () => {
    return (
        <div className={styles.container}>
            <div className={styles.bigContainer}>
                <div className={styles.bigContainerInner}>
                    <h1>Fresh & Healthy
                        Organic Food</h1>
                    <div className={styles.information}>
                        <div>
                            <img src="/Rectangle.png" />
                        </div>
                        <div className={styles.salesContainer}>
                            <div className={styles.sales}>
                                <div>
                                    <p>Sale up to</p>
                                </div>
                                <div className={styles.saleOff}>
                                    <p>30 % OFF</p>
                                </div>
                            </div>
                            <div>
                                <p><span className={styles.litWhite}> Free shipping on all you order</span></p>
                            </div>
                        </div>
                    </div>
                    <button>Shop now <img src="/right.png" /></button>
                </div>
            </div>
            <div className={styles.littleContainer}>
                <div className={styles.littleTop}>
                    <div className={styles.littleTopAdjust}>
                        <p><span className={styles.summerSale}>SUMMER SALE</span></p>
                        <p><span className={styles.littleTopOff}>75% OFF</span></p>
                        <p><span className={styles.fruit}>Only Fruit & Vegetable</span></p>
                        <p><span className={styles.shopNow}>Shop Now</span><img src="right.png" /></p>
                    </div>
                </div>
                <div className={styles.littleBottom}>

                </div>
            </div>
        </div>
    )
} 