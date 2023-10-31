import styles from '@/components/cadastrarSala/styles.module.css'
import Input from './input'
import Textarea from './textArea'
import SubmitButton from './botao'
import Label from './label'
import DateTime from './data'
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form({ btnText }) {

    const [evento, setEvento] = useState({
        descricao: '',
        dataInicio: '',
        dataFim: '',
        local: '',

    })

    function inserirEvento(e) {
        e.preventDefault()
        console.log(evento)

        function limparCampos() {
            setEvento({
                titulo: '',
                descricao: '',
                dataInicio: '',
                dataFim: '',
                local: '',
                imagem: '',

            });
        }

        axios.post('http://localhost:3001/eventos', evento)
            .then((response) => {
                console.log(response.data)
                limparCampos();
                toast.success('O Evento foi cadastrado com sucesso!')
            })
            .catch((erro) => {
                console.log(erro)
                toast.error('Ocorreu um erro ao cadastrar o evento!')
            });
    }


    return (
        <div className={styles.cadastro}>
            <ToastContainer />
            < form onSubmit={e => inserirEvento(e)} className={styles.form}>
                <h1 className={styles.pgn}>RESERVAR <span> SALA</span></h1>

                <Label text="Descrição" name="descricao" />
                <Textarea
                    type="text"
                    text="Descrição do aula"
                    name="descricao"
                    required
                    placeholder="Aula de FrameWorks"
                    value={evento.descricao}
                    onChange={(e) => setEvento({ ...evento, descricao: e.target.value })}
                />

                <Label text="Solicitante" name="titulo" />
                <Input
                    type="text"
                    text=""
                    name="titulo"
                    required
                    placeholder="Jose da Silva"
                    value={evento.titulo}
                    onChange={(e) => setEvento({ ...evento, titulo: e.target.value })}
                />
                <Label text="Data Inicial" name="data" />
                <DateTime
                    type="datetime-local"
                    text="Data Inicial"
                    name="data"
                    required
                    placeholder="10/25/2023, 03:00 PM"
                    value={evento.dataInicio}
                    onChange={(e) => setEvento({ ...evento, dataInicio: e.target.value })}

                />
                <Label text="Data Final" name="data" />
                <DateTime
                    type="datetime-local"
                    text="Data Final"
                    name="data"
                    required
                    placeholder="10/25/2023, 04:00 PM"
                    value={evento.dataFim}
                    onChange={(e) => setEvento({ ...evento, dataFim: e.target.value })}
                />
                <Label text="Sala" name="sala" />
                <select className={styles.select}>
                    <option value="Bloco A">Bloco A - Lab de Informatica</option>
                    <option value="Bloco B">Bloco B - Sala de Reunião</option>
                    <option value="Bloco C">Bloco C - Auditório</option>
                </select>
                <SubmitButton
                    text="Reservar Sala" />
            </form >
        </div>
    )
}