import styles from './styles.module.css'

export default function Checkbox(props) {
    return (
        <div className={styles.checkbox}>
            <input
                type={props.type}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <label htmlFor={props.htmlFor}>{props.text}</label>
        </div>
    )
}