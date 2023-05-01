import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/Tasks/TaskList";
import AddTask from "./components/Tasks/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTasks = (newTask) => {
    const updatedTaskList = [...tasks, { label: newTask }];
    setTasks(updatedTaskList);
  }

  const handleDeleteTask = (indexToDelete) => {
    const updatedTaskList = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTaskList);
  };
  
  

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="grid place-items-center">
        <AddTask onSubmit={handleAddTasks} />
        <br />
        <br />
        <br />
        {tasks.length === 0 ? <h2 className="text-3xl text-center font-mono font-bold">No tasks yet.<br/> Add a task!</h2> :<TaskList onDelete={handleDeleteTask} taskList={tasks} />}
      </div>
    </div>
  );
}

export default App;
