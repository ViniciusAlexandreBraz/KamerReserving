import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../botao/index'


export default function Tabela() {

    const [salas, setSalas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/salas')
            .then((response) => {
                setSalas(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    function formatarData(data) {
        const dataObj = new Date(data);
        
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();
        
        const horas = String(dataObj.getHours()).padStart(2, '0');
        const minutos = String(dataObj.getMinutes()).padStart(2, '0');
      
        
        return `${dia}/${mes}/${ano} as ${horas}:${minutos}`;
    }

    return (
        <div className={styles.tabela}>

            <div className={styles.title}>
                <img src="date.png" alt="date" />
                <h1>
                    Reservas realizadas: {salas.length}
                </h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Solicitante</th>
                        <th>Sala</th>
                        <th>Início</th>
                        <th>Fim</th>
                    </tr>
                </thead>
                <tbody>
                    {salas.map((salas) => (
                        <tr key={salas.id}>
                            <td>{salas.descricao}</td>
                            <td>{salas.solicitante}</td>
                            <td>{salas.category?.name}</td>
                            <td>{formatarData(salas.inicio)}</td>
                            <td>{formatarData(salas.fim)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}