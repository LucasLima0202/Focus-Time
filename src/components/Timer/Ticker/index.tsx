import React from "react";
import style from './Ticker.module.scss'

interface props {
    time : number | undefined
}

export default function Ticker( { time = 0 }: props ) {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        const [minutesDez, minutesUnit] = String(minutes).padStart(2, '0');
        const [secondsDez, secondsUnit] = String(seconds).padStart(2, '0');
    return (
        <>
            <span className={style.relogioNumero}>{minutesDez}</span>
            <span className={style.relogioNumero}>{minutesUnit}</span>
            <span  className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondsDez}</span>
            <span className={style.relogioNumero}>{secondsUnit}</span>
         
        </>
    )
}