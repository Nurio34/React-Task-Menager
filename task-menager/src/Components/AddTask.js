import { useState } from "react"
import Button from "./Button"


const AddTask = ({onAdd}) => {

  const [text,setText] = useState("")
  const [day,setDay] = useState("")
  const [reminder,setReminder] = useState(false)

  return (

    <form className="grid gap-1" onSubmit={onAdd}>

        <div className=" flex justify-between items-center">
            <label>Task</label>
            <input className="border-2 border-black py-1 px-2" type="text" placeholder="Add task..."
              onChange={(e)=> setText(e.target.value)}  
            />
        </div>

        <div className=" flex justify-between items-center">
            <label>Add Time</label>
            <input className="border-2 border-black py-1 px-2" type="text" placeholder="Add time..." 
              onChange={(e)=> setDay(e.target.value)}  
            />
        </div>

        <div className=" flex items-center gap-2">
            <label>Set Reminder</label>
            <input className="" type="checkbox"
              onChange={(e)=> setReminder(e.currentTarget.checked)}
            />
        </div>

        <Button 
          text="Save" 
          colors={"bg-red-500 text-white justify-self-center"}
          // onClick={addTask}
        />

    </form>

  )

}

export default AddTask