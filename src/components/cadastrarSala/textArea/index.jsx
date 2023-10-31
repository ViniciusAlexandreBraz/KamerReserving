
import styles from './styles.module.css'

export default function Textarea({type, text, name, placeholder, onChange, value}) {
    return (
        <div className={styles.form_text}>
            <textarea  required="" type={type} name={name} placeholder= {placeholder} onChange={onChange} value={value}/>
        </div>
    )
}