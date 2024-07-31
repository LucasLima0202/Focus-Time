import React, { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss'
import { time } from "console";
import { Itask } from "../../types/task";
import { v4 as uuidv4 } from 'uuid';

interface props {

    setTask: React.Dispatch<React.SetStateAction<Itask[]>>

}


function Form({ setTask }: props) {
    const [task, setTassk] = useState("");
    const [time, setTime] = useState("00:00");
    function add_task(event: React.FormEvent) {
        event.preventDefault();
        setTask(setTaskO =>
            [
                ...setTaskO,
                {
                    task,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );
        setTassk("");
        setTime("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={add_task}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add a new task
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={event => setTassk(event.target.value)}
                    placeholder="Write a task...."

                    required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Time
                </label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    id="time" min="00:00:00" max="01:30:00" required />
            </div>
            <Button type="submit">
                Add +
            </Button>
        </form>
    )
}
export default Form;