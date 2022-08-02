import { useState } from 'react';

import './App.css';
import TaskTracker from './TaskTracker';
import TaskForm from './TaskForm';

const STATIC_TASK = [
  {
      id: 1,
      task: 'Finish up open projects',
      date: new Date(2022, 5, 10).toLocaleDateString()
  },
  {
      id: 2,
      task: 'Buy new laptop charger',
      date: new Date(2022, 1, 8).toLocaleDateString()
  }
  ,
  {
      id: 3,
      task: 'Finish up projects at hand',
      date: new Date(2022, 6, 18).toLocaleDateString()
  }
]

function App() {
  const [tasks, setTask] = useState(STATIC_TASK)

const addTaskHandler = (task) => {
 
  setTask((prevTask) => {
    return [task, ...prevTask]
  })
}

const removeTaskHandler = (id) => {
  const newTask = tasks.filter((task) => task.id !== id)
  setTask(newTask)
}

  return (
    <div className="App">
      <TaskTracker onAddTask = {addTaskHandler}/>

     {tasks.map((task) => {

      return(
        
        <div >
          <div className="Tasklist">
          <div key = {task.id}></div>
          <div className="date"><h3>{task.date}</h3></div>
            <div className="task"><h3> {task.task}</h3></div>

            <div><button className='rmv-btn' onClick={() => removeTaskHandler(task.id)}>&times;</button></div>
              
         </div>
        </div>  
        
      )
     })
     }

    </div>
    

  );
}

export default App;
