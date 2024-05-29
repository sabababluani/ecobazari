import Popular from '../Popular/Popular'
import styles from './Hotdeals.module.scss'
import MainHot from './MainHot/MainHot'

export default () => {
    return (
        <div className={styles.container}>
            <Popular title="Hot Deals" />
            <MainHot/>
        </div>
    )
}