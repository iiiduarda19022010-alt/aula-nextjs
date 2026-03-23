'use client'

import { useState } from "react";

import Link from "next/link";

import styles from './page.module.css';

export default function atividade2() {  

    const [num, setNum] = useState(100);

    function handleIncrementa () {
         setNum(num + 1);
      
    }

    function handleIncrementa2 () {
         setNum(num - 1);
    }

    return (
        <div className={styles.container}>
            <label className={styles.texto}>{`Contador: ${num}`}</label>            
            <label 
                onClick={() => handleIncrementa()}
                className={styles.botao}
            >+1</label>
             <label 
                onClick={() => handleIncrementa2()}
                className={styles.botao}
            >-1</label>
        </div>
    );
}