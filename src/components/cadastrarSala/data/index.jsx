import styles from "./styles.module.css"

export default function DateTime({ type, name, placeholder, onChange, value }) {
    return (
        <div className={styles.date}>
            <input
                type={type}
                name={name}
                id={name}
                required=""
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}