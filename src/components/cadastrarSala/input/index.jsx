import styles from './styles.module.css';

export default function Input({ type, name, placeholder, value, onChange}) {
    return (
        <div className={styles.form_control}>
            <input
                type={type}
                name={name}
                id={name}
                required=""
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}