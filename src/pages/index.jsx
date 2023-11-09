import Cabecalho from "@/components/cabecalho";
import Formulario from "@/components/cadastrarSala";
import Tabela from "@/components/cadastrarSala/table";
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.imagem}>
      <div className={styles.home}>
        <div className={styles.form}>
          <Formulario btnText="Reservar Sala" />
        </div>
        <div className={styles.tabela}>
          <Tabela />
        </div>
      </div >
    </div>
  )
}