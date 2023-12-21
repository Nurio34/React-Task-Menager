
import React,{useEffect, useState} from "react"
import Header from "./Components/Header";
import TaskForm from "./Components/TaskForm";
import axios from "axios"
import Tasks from "./Components/Tasks";


function App() {

  const [isShowForm, setisShowForm] = useState(true)

    const showForm = () =>{      
      setisShowForm(!isShowForm)
              
    }

  const [tasks,setTasks] = useState([])

    const Get_Tasks_DB = async() => {
      const res = await axios.get("http://localhost:5000/tasks")
      const data = await res.data
        return data
    }

    const Add_Task = async(newTask) => {
      try {
        const res = await axios.post("http://localhost:5000/tasks",newTask)
        const data = await res.data          

      } catch (error) { 

      }      
    }

    // useEffect(()=> {
    //   const tasks = async()=> {
    //     const data = await Get_Tasks_DB()
    //     setTasks(data)
    //   }
    //   tasks()
    // },[])
    // console.log(tasks);


  return (
    <div className="App grid gap-4">
      <Header 
        btnText={isShowForm ? "Close" : "Add"}
        colors={isShowForm ? "text-white bg-red-500" : "text-white bg-green-400"}
        onClick={showForm}/>
      {isShowForm && <TaskForm onSubmit={Add_Task} />}
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
