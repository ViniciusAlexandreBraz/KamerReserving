import styles from './styles.module.css'

export default function Select({ name, options, value, onChange }) {
    return (
        <div className={styles.select}>
            <select
                id={name}
                name={name}
                onChange={onChange}
                value={value}
            >
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}