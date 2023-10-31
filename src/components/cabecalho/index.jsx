import styles from "./styles.module.css"
import Link from 'next/link'


export default function Cabecalho() {

    return (

        <div className={styles.tela}>
            <header className={styles.cabecalho}>
                <h1 className={styles.titulo}>Kamer Reserving</h1>
               
            </header>
        </div>
    );
}