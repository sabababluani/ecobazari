import styles from './MainHot.module.scss'

export default () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.container}>
                    <div>
                        <img src="/Image (9).png" />
                    </div>
                    <div className={styles.addButtonContainer}>
                        <div>
                            <img src="/Wishlist.png" />
                        </div>
                        <button>Add to Cart <img src="/WhiteCart.png" /></button>
                        <div>
                            <img src="/Quick view.png" alt="" />
                        </div>
                        <div>
                            <div className={styles.paragraphs}>
                                <p>Chinese cabbage</p>
                                <div className={styles.prices}>
                                    <p><span className={styles.mainPrice}>$12.00</span></p>
                                    <p><span className={styles.linethrough}>$24.00</span></p>
                                </div>
                                <div className={styles.raiting}>
                                    <img src="star.png" />
                                    <img src="star.png" />
                                    <img src="star.png" />
                                    <img src="star.png" />
                                    <img src="star.png" />
                                    <span>(524 Feedback)</span>
                                </div>
                                <div>
                                    <span>Hurry up! Offer ends In:</span>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div>

            </div>
        </div>
    )
}