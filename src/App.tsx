import React from 'react';
import Button from './components/Form/';
import Menu from './components/Menu';
import './index.css'

function App() {
  return (
    <div className="App">
        <main className='app-time'> 
            <Menu></Menu>
            <section className='contents'>
                <Button></Button>
                <Button></Button>
            </section>
          
        </main>
      
    </div>
  );
}

export default App;
