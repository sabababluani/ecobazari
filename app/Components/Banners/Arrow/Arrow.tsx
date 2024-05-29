import styles from './Arrow.module.scss'

interface Props {
    title : string;
    className? :string;
}

export default (props :Props) => {
    return (
        <div className={styles.greenArrow}>
            <div className={styles.shopNow}>{props.title}</div>
            <div><img src="right.png" /></div>
        </div>
    )
}