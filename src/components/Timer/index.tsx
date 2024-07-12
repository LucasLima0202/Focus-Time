import Button from "../Button";
import Ticker from "./Ticker";
import style from "./Timer.module.scss"


export default function Timer() {
    return (
        <div className={style.cronometro}>
            <p  className={style.titulo}> {'>'} Choose a task to start the timer</p>
            <div className={style.relogioWrapper}>
                <Ticker/>
            </div>
            <Button>
                Start!
            </Button>
        </div>
    )
}

