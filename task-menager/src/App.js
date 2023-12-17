
import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {

  const [tasks,setTasks] = useState([
    {
        id : 1,
        text : "Doctor Appoinment",
        day : "Feb 5th at 2.30pm",
        reminder : true
    },
    {
        id : 2,
        text : "Galey Appoinment",
        day : "Feb 6th at 3.30pm",
        reminder : false
    },
    {
        id : 3,
        text : "Girlfirend Appoinment",
        day : "Feb 7th at 4.30pm",
        reminder : false
    }
])

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id )
    )
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder} : task )
    )
  }

 

  return (
    <div className="container border-2 border-blue-400 p-4">

      <Header title={"Task Menager"}/>

      <AddTask onAdd={AddTask}/>

      {tasks.length > 0 ? 

        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder}/>

         : "No tasks"
      }

    </div>
  );
}

export default App;
