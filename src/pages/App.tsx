import React, { useState } from 'react';
import Button from '../components/Form/';
import Menu from '../components/Menu';
import List from '../components/List';
import Form from '../components/Form/';
import Timer from '../components/Timer/';
import style from './App.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { Itask } from '../types/task';



function App() {
  const [selected, setSelected] = useState<Itask>();


  const [task, setTask] = useState<Itask[]>([]);

  function selectedTask(Taskselected: Itask) {
    setSelected(Taskselected);
    setTask(oldtask => oldtask.map(task => ({...task,
      selected: task.id === Taskselected.id ? true : false
    })));
  }

  function fineshedTask(){
    if(selected){
      setSelected(undefined);
      setTask(oldtask => oldtask.map(task => {
        if(task.id === selected.id) {
          return{
            ...task,
            selected: false,
            completed: true
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask} />
      <List 
      task={task}
      selectedTask={selectedTask}
      />
      <Timer
       selected={selected}
       fineshedTask={fineshedTask}
       />
    </div>
  );
}

export default App;
