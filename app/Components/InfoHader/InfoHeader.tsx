import styles from "./Infoheader.module.scss"

export default () => {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <img src="/Map Pin.png" />
                    <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                </div>
                <div className={styles.containerInfo}>
                    <p><span>Eng <img src="/Vector.png" /> </span> <span>USD <img src="/Vector.png" /> </span> <img src="Devider.png" />
                        <span> Sign In / Sign Up</span></p>
                </div>
            </div>
        </div>
    )
}