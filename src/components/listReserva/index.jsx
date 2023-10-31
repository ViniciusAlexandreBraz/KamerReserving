//componente desenvolvido por Mirelle
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css"

export default function listReserva (){
    const [iconVisible, setIconVisible]=useState(false);
  //const [curso, setCurso] = useState([]);
    useEffect(()=>{

    }, []);
    const data =[
        { nivel: "",curso: "", disciplina: "" , aula: ""}
       
    ];
    useEffect(()=>{
 
     }, []);

     /* axios.get('http://localhost:3002/curso')
        .then(resultado => {
            console.log(resultado)
            setCurso(resultado.data.docs)
        })
        .catch(e=> console.log(e));
    }, []);
*/
    return (
        
        <>
            <div className={`${styles.gridRow} ${styles.firstRow}`}>
                <div className={styles.gridCellLabel}>ID</div>
                <div className={styles.gridCellLabel}>Nível</div>
                <div className={styles.gridCellLabel}>Curso</div>
                <div className={styles.gridCellLabel}>Disciplina</div>
                <div className={styles.gridCellLabel}>Aula</div>
                <div className={styles.gridCellLabel}>Ações</div>
                  
            </div>
            
    {data.map((item, index)=>(
        <div className={`${styles.gridRow} ${index % 2 === 0 ? styles.evenRow : styles.oddRow}`} key={index}>
            <div className={styles.gridCell}>{item.id}</div>
            <div className={styles.gridCell}>{item.nivel}</div>
            <div className={styles.gridCell}>{item.curso}</div>
            <div className={styles.gridCell}>{item.disciplina}</div>
            <div className={styles.gridCell}>{item.aula}</div>              
            </div>
    ))}
    
    
    </>
  );
};


