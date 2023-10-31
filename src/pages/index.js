import CadastrarSala from "@/components/cadastrarSala"
import ListReserva from "@/components/listReserva"
import styles from "@/pages/styles.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
    <CadastrarSala/>
    <ListReserva />
    </div>
  )
}
