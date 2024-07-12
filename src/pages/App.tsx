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
  const [task, setTask] = useState<Itask[]>([
    {
      task: '> React',
      time: '02:00:00',
      selected: false,
      completed: false,
      id: uuidv4()
    },
    {
      task: '> Javascript',
      time: '01:00:00',
      selected: false,
      completed: false,
      id: uuidv4()
    },
    {
      task: '> Typescript',
      time: '03:00:00',
      selected: false,
      completed: false,
      id: uuidv4()
    }
  ]);

  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask} />
      <List task={task} />
      <Timer />
    </div>
  );
}

export default App;
