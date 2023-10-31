import styles from "./styles.module.css";

export default function Label({ text, name }) {
    return (
        <label className={styles.label} htmlFor={name}>{text}</label>
    )
}