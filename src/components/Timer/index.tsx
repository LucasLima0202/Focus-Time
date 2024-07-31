import { useEffect, useState } from "react";
import { TimeToSeconds } from "../../common/utils/time";
import { Itask } from "../../types/task";
import Button from "../Button";
import Ticker from "./Ticker";
import style from "./Timer.module.scss"

interface props {
    selected: Itask | undefined;
    fineshedTask: () => void;
}



export default function Timer({selected, fineshedTask}: props) {
    function regressiva(count: number = 0){
        setTimeout(() => {
            if(count > 0){
                setTime(count -1);
                return regressiva(count -1);    
            }
            fineshedTask();
        }, 1000);
    }
    const [time,setTime] = useState<number>();
    useEffect(() =>{
        if (selected?.time) {
            setTime(TimeToSeconds(selected.time))
         }
    }, [selected])
    return (
        <div className={style.cronometro}>
            <p  className={style.titulo}> {'>'} Choose a task to start the timer</p>
     
            <div className={style.relogioWrapper}>
                <Ticker time={time}/>
            </div>
            <Button onClick={()=> regressiva(time)}>
                Start!
            </Button>
        </div>
    )
}

