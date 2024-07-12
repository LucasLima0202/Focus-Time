import style from './List.module.scss'
import checkMark from './svg/check-mark.svg';
import Item from "./Item";
import { Itask } from '../../types/task';



function List({task}: {task: Itask[]}) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2  className={style.subtilte}> {'>'} Workout</h2>
            <ul>
                {task.map((item, index) => (
                    <Item
                        key={index}
                        // task={item.task}
                        // time={item.time} or
                        {...item}
                    />
                ))}

            </ul>
        </aside>
    )
}

export default List;