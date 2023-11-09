import styles from '@/components/cadastrarSala/msg/styles.module.css';

export default function Message({type, text}) {
    return (
        <div className={`${styles.message} ${styles[type]}`}>
            {text}
        </div>
    )
}