
import {useState} from "react"
import Button from "./Button"

const TaskForm = ({onSubmit}) => {

    const [task,setTask] = useState("")
    const [date, setDate] = useState("")
    const [reminder, setReminder] = useState(false)

    const SubmitForm = (e) => {
        e.preventDefault()
        const newTask = {task,date,reminder}
            console.log("Submitting Form...",newTask);
            onSubmit(newTask)
        
        setTask("")
        setDate("")
        setReminder(false)
        document.querySelector("#textInput").focus()
    }

  return (
    <form className="grid gap-4 border-b-2 border-black pb-4">
        <div className='grid grid-cols-2 items-center'>
            <label htmlFor="">Add Task</label>
            <input type="text" name="" id="textInput" placeholder='Add Task...'
                className='border-2 border-black py-1 px-2' 
                value={task}
                onChange={(e)=>setTask(e.target.value)}
            />
        </div>
        <div className='grid grid-cols-2 items-center'>
            <label htmlFor="">Add Date</label>
            <input type="text" name="" id="" placeholder='Add Date...'
                className='border-2 border-black py-1 px-2' 
                value={date}
                onChange={(e)=>setDate(e.target.value)}
            />
        </div>
        <div className='grid grid-cols-2 items-center'>
            <label htmlFor="">Add Task</label>
            <input type="checkbox" name="" id=""
                className='border-2 border-black py-1 px-2 justify-self-start' 
                checked={reminder}
                onChange={(e)=>setReminder(e.target.checked)}
            />
        </div>
        <Button text={"Svae"} colors={"text-white bg-blue-400"} onClick={SubmitForm} />
    </form>
  )
}

export default TaskForm