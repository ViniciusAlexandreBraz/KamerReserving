import styles from './styles.module.css'

export default function Select({ name, options}) {
    return (
        <div className={styles.select}>
            <select
                id={name}
                name={name}
            >
                <option>Escolha uma Opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}