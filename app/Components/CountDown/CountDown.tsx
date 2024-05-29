import Arrow from '../Banners/Arrow/Arrow';
import styles from './CountDown.module.scss'


export default () => {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <p>BEST DEALS</p>
                    <h2>Sale of the Month</h2>
                    <div className={styles.time}>
                        <p>00 : 02 : 18 : 46</p>
                        <div className={styles.timeContainer}>
                            <p>DAYS</p>
                            <p>HOURS</p>
                            <p>MINS</p>
                            <p>SECS</p>
                        </div>
                    </div>
                    <button><Arrow title='Shop Now' /></button>
                </div>
            </div>
            <div className={styles.wrapper2}>
                <div className={styles.container2}>
                    <div className={styles.containerSale}>
                        <p>85% FAT FREE</p>
                    </div>
                    <h2>
                        Low-Fat Meat
                    </h2>
                    <div className={styles.containerDollar}>
                        <p>Started at <span className={styles.containerDollarSpan}>&79.99</span></p>
                    </div>
                    <button><Arrow title='Shop Now' /></button>
                </div>

            </div>
            <div className={styles.wrapper3}>
                <div className={styles.container3}>
                    <p>Summer Sale</p>
                    <h2>100% Fresh Fruit</h2>
                    <div className={styles.containerOff}>
                        <p>Up to <span>64% OFF</span></p>
                    </div>
                    <button><Arrow title='Shop Now' /></button>
                </div>
            </div>
        </div>
    )
}