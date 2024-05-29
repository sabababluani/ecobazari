import Arrow from './Arrow/Arrow'
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
                    <button><Arrow title='Shop now' /></button>
                </div>
            </div>
            <div className={styles.littleContainer}>
                <div className={styles.littleTop}>
                    <div className={styles.littleTopAdjust}>
                        <p><span className={styles.summerSale}>SUMMER SALE</span></p>
                        <p><span className={styles.littleTopOff}>75% OFF</span></p>
                        <p><span className={styles.fruit}>Only Fruit & Vegetable</span></p>
                        <div className={styles.greenArrowUp}>
                            <Arrow title='Shop now' />
                        </div>
                    </div>
                </div>
                <div className={styles.littleBottom}>
                    <div className={styles.littleBottomAdjust}>
                        <p>BEST DEAL</p>
                        <h2>Special Products Deal of the Month</h2>
                        <Arrow title='Shop now' />
                    </div>
                </div>
            </div>
        </div>
    )
} 