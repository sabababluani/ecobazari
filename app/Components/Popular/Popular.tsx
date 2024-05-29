import Arrow from '../Banners/Arrow/Arrow'
import styles from './Popular.module.scss'

interface Props {
    title: string;
}

export default (props :Props) => {
    return (
        <div className={styles.container}>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <Arrow title='View All'/>
            </div>
        </div>
    )
}