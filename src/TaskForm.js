import TaskTracker from "./TaskTracker";
import React, { useState } from "react";
const TaskForm = (prop) => {
    const [enteredTask, setEnteredTask] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const taskChangeHandler = (event) => {
        setEnteredTask(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const taskData =  {
            key:prop.id,
            task: enteredTask,
            date: new Date(enteredDate).toLocaleDateString()
        }
        prop.onSaveTaskData(taskData)
        setEnteredTask('')
        setEnteredDate('')
    }



    return(
        <div className="form-container">
            <form className="Task-form" onSubmit={submitHandler}>
        <div className='task-controls'>
            <div className='task-control'>
                <label>Task</label><br/>
                <input type='text' onChange={taskChangeHandler} value={enteredTask}></input>
            </div>
            <div className='task-control'>
                <label>Date</label><br></br>
                <input type='Date' min='2018-01-01' max='2022-12-31' onChange={dateChangeHandler} value={enteredDate}></input>
            </div>
            <div className='task-control-action'>
               <button type='submit' className={prop.addTaskHandler}>Save</button> 
            </div>

        </div>
    </form>
        </div>
    )
}

export default TaskForm