import React from "react";
import style from './List.module.scss'
import checkMark from './svg/check-mark.svg';

function List() {
    const task = [{
        task: '> React',
        time: '02:00:00'
    },{
         task: '> Javascript',
         time: '01:00:00'
    },{
        task: '> Typescript',
        time: '03:00:00'
   }]
    return (
        <aside className={style.listaTarefas}>
            <h2 className={style.subtilte}> {'>'} Workout</h2>
            <ul>
                {task.map((item, index) => (
                    <li key={index} className={style.item}>
                       <h3>
                        {item.task}
                        </h3>
                        <span>
                        {item.time}
                        </span> 
                    </li>
                ))}
                
            </ul>
        </aside>
    )
}

export default List;