import React from "react";
import Button from "../Button";
import style from './Form.module.scss'
import { time } from "console";
import { Itask } from "../../types/task";
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setTask: React.Dispatch<React.SetStateAction<Itask[]>>
}
>{
    state = {
        task: "",
        time:"00:00"
    }

    add_task(event: React.FormEvent){
        event.preventDefault();
        this.props.setTask(setTaskO => 
            [
                ...setTaskO, 
                {
                    ...this.state,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );
        this.setState({
            task:"",
            time:"00:00"
        })
    }

    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.add_task.bind(this)}> 
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add a new task
                    </label>
                    <input 
                    type="text" 
                    name="task"
                    id="task" 
                    value={this.state.task}
                    onChange={event => this.setState({...this.state, task: event.target.value})} 
                    placeholder="Write a task...." 

                    required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input 
                    type="time"
                    step="1"  
                    name="time" 
                    value={this.state.time}
                    onChange={event => this.setState({...this.state, time: event.target.value})} 
                    id="time" min="00:00:00" max="01:30:00" required/>
                </div>
                <Button type="submit">
                Add +
                </Button>
            </form>
        )
    }
}

export default Form;