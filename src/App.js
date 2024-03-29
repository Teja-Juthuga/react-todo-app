import { useState } from 'react';

import './App.css';

function App() {
  const [task, setTask] = useState("")

  const [todoList, setTodoList] = useState({})

  const handleTextBox = (e) => {
    console.log(e.target.value)
  }
  return (
    <div className="container-fluid text-center">
        <div className='card mt-5' > 
            <h1> Todo Application </h1>
            <div className='form p-3'>
                <input type='text' className='me-3' onChange={(e) => {handleTextBox(e)}}  />
                <button className='btn btn-success'> Add </button>
            </div>
        </div>
        <div>
          {

          }
        </div>
    </div>
  );
}

export default App;
