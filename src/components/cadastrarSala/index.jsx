import Input from '@/components/cadastrarSala/input/index'
import Label from '@/components/cadastrarSala/label/index'
import TextArea from '../cadastrarSala/textArea'
import styles from './styles.module.css'
import Select from '../cadastrarSala/select'
import Checkbox from '../cadastrarSala/check'
import Button from '../cadastrarSala/botao'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Formulario({ btnText }) {

    const [termos, setTermos] = useState(false)

    const [categories, setCategories] = useState([])

    const [salas, setSalas] = useState({
        descricao: '',
        solicitante: '',
        sala: '',
        inicio: '',
        fim: '',
    })

    useEffect(() => {
        axios.get('http://localhost:3001/categories')
            .then((response) => {
                setCategories(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function inserirSala(e) {
        e.preventDefault()
        console.log(salas)

        if (!termos) {
            console.log('Aceite os termos')
            return;
        }

        function limparCampos() {
            setSalas({
                descricao: '',
                solicitante: '',
                sala: '',
                inicio: '',
                fim: '',
            })
        }

        axios.post('http://localhost:3001/salas', salas)
            .then((response) => {
                console.log(response.data)
                limparCampos();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function aceitarTermos(e) {
        setTermos(e.target.checked)
    }


    return (
        <div>
            <form onSubmit={e => inserirSala(e)} className={styles.form}>
                <h1>Reservar Sala</h1>

                <Label
                    htmlFor="nome"
                    text="Descrição"
                />
                <TextArea
                    type="text"
                    name="Descrição"
                    placeholder="Descrição"
                    value={salas.descricao}
                    onChange={(e) => setSalas({ ...salas, descricao: e.target.value })}
                />
                <Label
                    htmlFor="nome"
                    text="Solicitante"
                />
                <Input
                    type="text"
                    name="Solicitante"
                    placeholder="Solicitante"
                    value={salas.solicitante}
                    onChange={(e) => setSalas({ ...salas, solicitante: e.target.value })}
                />
                <Label
                    htmlFor="nome"
                    text="Sala"
                />
                <Select
                    name="category_id"
                    text="Selecione uma sala"
                    options={categories}
                />
                <Label
                    htmlFor="nome"
                    text="Inicio"
                />
                <Input
                    type="datetime-local"
                    name="data-horario"
                    placeholder=""
                    value={salas.inicio}
                    onChange={(e) => setSalas({ ...salas, inicio: e.target.value })}
                />
                <Label
                    htmlFor="nome"
                    text="Fim"
                />
                <Input
                    type="datetime-local"
                    name="Fim"
                    placeholder=""
                    value={salas.fim}
                    onChange={(e) => setSalas({ ...salas, fim: e.target.value })}
                />
                <Checkbox
                    type="checkbox"
                    name="checkbox"
                    value=""
                    onChange={aceitarTermos}
                    htmlFor="check"
                    text="concordo com os termos?"
                />
                <Button
                    text={btnText} />
            </form>
        </div>
    )
}