import MiniPricebox from '../../FruitPrices/MiniPricebox/MiniPricebox';
import styles from './MainHot.module.scss';

export default () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainWrapper}>
                <div className={styles.containerWrapper}>
                    <div className={styles.container}>
                        <div className={styles.hotMassDetails}>
                            <div className={styles.salesbuttons}>
                                <span className={styles.redsale}>Sale 50%</span><span className={styles.bestSale}>Best Sale</span>
                            </div>
                            <img src="/image (9).png" alt="Product" />
                            <div className={styles.hotButton}>
                                <img src="/Wishlist.png" alt="Wishlist" />
                                <button>Add to Cart <img src="WhiteCart.png" alt="Cart" /></button>
                                <img src="/Quick View.png" alt="Quick View" />
                            </div>
                            <div className={styles.priceSect}>
                                <span>Chinese cabbage</span>
                                <p>$12.00 <span className={styles.priceSectSpan}>$24.00</span></p>
                            </div>
                            <div className={styles.rating}>
                                <img src="/Star.png" alt="Star" /> <img src="/Star.png" alt="Star" /> <img src="/Star.png" alt="Star" />
                                <img src="/Star.png" alt="Star" /> <img src="/Star.png" alt="Star" />
                                <span> (524 Feedback)</span>
                            </div>
                            <div className={styles.timerWrapper}>
                                <span className={styles.grayFont}>Hurry up! Offer Ends in</span>
                                <div className={styles.timer}>
                                    <span>01</span><span>23 </span> <span>: &nbsp;&nbsp;34 </span> <span>: 57</span>
                                </div>
                                <div className={styles.daysSection}>
                                    <span>DAYS</span><span>HOURS</span><span>Mins</span> <span> SECS </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerAdjust}>
                        <div className={styles.containerAdjustWrapper}>
                            <MiniPricebox src='Image (1).png' title='Chinese cabbage' price='$12.00' />
                            <MiniPricebox src='Image (2).png' title='Green Lettuce' price='$9.00' />
                            <MiniPricebox src='Image (3).png' title='Eggplant' price='$34.00' />
                        </div>
                        <div className={styles.containerAdjustWrapper}>
                            <MiniPricebox src='Image (6).png' title='Fresh Cauliflower' price='$12.00' />
                            <MiniPricebox src='Image (7).png' title='Green Capsicum' price='$9.00' redSale sale='$20.99' />
                            <MiniPricebox src='Image (8).png' title='Green Chili' price='$34.00' />
                        </div>
                    </div>
                </div>
                <div className={styles.lowwerWrapper}>
                    <MiniPricebox src='Image (4).png' title='Big Potatoes' price='$12.00' />
                    <MiniPricebox src='Image (5).png' title='Corn' price='$12.00' />
                    <MiniPricebox src='Image (10).png' title='Red Chili' price='$12.00' />
                    <MiniPricebox src='Image (11).png' title='Red Tomatos' price='$12.00' />
                    <MiniPricebox src='Image (12).png' title='Surjapur Mango' price='$12.00' />
                </div>
            </div>
        </div>
    );
}
