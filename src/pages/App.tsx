import React from 'react';
import Button from '../components/Form/';
import Menu from '../components/Menu';
// import '../index.css'
import List from '../components/List';
import Form from '../components/Form/';
import Timer from '../components/Timer/';
import style from './App.module.scss';


function App() {
  return (
    <div className={style.AppStyle}>
        <main> 
            <Menu></Menu>
            <section>
              <Form></Form>
              <Timer></Timer>
              <List></List>
            </section>  
        </main>
    </div>
  );
}

export default App;
