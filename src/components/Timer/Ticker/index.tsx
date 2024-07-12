import React from "react";
import style from './Ticker.module.scss'

export default function Ticker() {
    return (
        <>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span  className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
         
        </>
    )
}