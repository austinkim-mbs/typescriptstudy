import React, {EventHandler, useState}  from 'react';

interface Props {
    addNewTask: () => void;
}

// Todo
// create a new function that will 
// 1. Add new task to var tasks
// 2. Call updateTasks

interface Task{
    id: number;
    title: String;
    done: false;
}

// This will fetch and retrieve all tasks, and a "Done" Section
export const TDList = () => {
    const [tasks, updateTasks] = useState(["Task1", "Task2"]);
    const [taskName, setTaskName] = useState("");

    const addNewTask = (stra: string) => {
        // evt.preventDefault();
        updateTasks([...tasks, stra ]);

    }   
    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
      ): Promise<void> => {
        e.preventDefault();
        console.log(taskName);
        addNewTask(taskName);
      };

    return(
        <div>
            <div>Basic Todo List</div>
                <div>
                    {tasks.map((task) => (
                        <div>{task}</div>
                ))}
                </div>
                <form
                    onSubmit={handleSubmit}
                >
                    <input type="text"
                    placeholder ="Add New Task"
                    onChange = {e => setTaskName(e.target.value)}
                    value={taskName}
                    />
                    <button onClick={() =>() => addNewTask("FUCK REACT HOOKS")}>Add  New Task</button>
                </form>
                <button onClick= {() =>{addNewTask("sup")}}>Add  New Task</button>

            </div>
        
    );
};

// This will trigger a callback to TDList and create a new task
// export const AddTask = (props: any ) => {
//     const [taskName, setTaskName] = useState("");

//     function createTask(strang: string){
//         console.log(strang);

//         props.addNewTask(strang);
//     }

//     return(
//         <div>
//             <form
//                onSubmit = {()=>{createTask(taskName)}}>
//                 <input type="text"
//                  placeholder ="Add New Task"
//                  onChange = {e => setTaskName(e.target.value)}
//                  value={taskName}
//                  />
//                 <button type="submit">Add  New Task</button>
//             </form>
//         </div>
//     )
// }

