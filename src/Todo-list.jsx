import React, {useState} from 'react'


function TodoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){

        setNewTask(event.target.value);
        
    }

    function addTask(){

        if(newTask.trim() ==="") 
            return;

        setTasks([...tasks, newTask]);
        setNewTask("");  

    }

    function deleteTask(index){

        setTasks(tasks.filter((task, i) => i !==index));


    }
 
    return(
        <div className="todolist">
            <h1>To-Do List</h1>
        

            <div>
                <input type="text" placeholder="Add new task..." value={newTask} onChange={handleInputChange}></input>
                <button onClick={addTask}>Add</button>
            </div>

         
         <div className='task-list'>

            <ul>
                {tasks.map((task,index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>

                )      
           )}

            </ul>


         </div>

            
        </div>);
}

export default TodoList