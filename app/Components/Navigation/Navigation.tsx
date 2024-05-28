import styles from './Navigation.module.scss'

export default () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.navigation}>
                    <ul className={styles.containerUl}>
                        <li>Home <img src="/Vector.png" /></li>
                        <li>Shop <img src="/Vector.png" /></li>
                        <li>Pages <img src="/Vector.png" /></li>
                        <li>Blog <img src="/Vector.png" /></li>
                        <li>About Us <img src="/Vector.png" /></li>
                        <li>Contact Us <img src="/Vector.png" /></li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <img src="/PhoneCall 1.png"/>
                    <p>(219) 555-0114</p>
                </div>
            </div>
        </div>
    )
}