
import TaskForm from "./TaskForm"

const TaskTracker = (prop)=>{
    const saveTaskDataHandler = (enteredTaskData) => {
        const taskData = {
          ...enteredTaskData
        }
        prop.onAddTask(taskData)
       }

    return(
        < >
        <div className="Tasktracker">
        <h1 className="App-header">Task Tracker</h1>
        <TaskForm onSaveTaskData = {saveTaskDataHandler}/>
        
        </div>
         </>
    
)
}


export default TaskTracker;

