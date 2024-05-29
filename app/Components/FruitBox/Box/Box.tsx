import styles from './Box.module.scss'


interface Props {
    src: string;
    title: string;
}

export default (props: Props) => {
    return (
            <div className={styles.container}>
                <img src={props.src} />
                <p>{props.title}</p>
            </div>
    )
}