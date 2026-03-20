'use client'
import styles from "./page.module.css";
import { useState } from "react";

export default function Exemplo03() {  

    const [num, setNum] = useState(100);

    function handleIncrementa () {
        setNum(num + 1);
    }

    return (
        <div className={styles.teste}>
        <>
            <label div className={styles.titulo}  >{`Contador: ${num}`}</label>            
            <button onClick={() => handleIncrementa()}className={styles.b}>+1</button>
        </>
        </div>
    );
}