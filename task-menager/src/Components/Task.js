
import {FaTimes} from "react-icons/fa"

const Task = ({task,onDelete, onToggle}) => {

  return (
        <div 
          className={`task bg-gray-300 p-2 ${task.reminder ? "border-l-4 border-green-500" : ""}`} 
          onDoubleClick={()=>onToggle(task.id)}>

            <h3 className=" flex justify-between items-center">
              
                {task.text} 

                <FaTimes 
                  className=" text-red-500 cursor-pointer" 
                  onClick={()=>onDelete(task.id)}
                  onDoubleClick={()=>onToggle}
                />

            </h3>

            <p className=" text-sm">{task.day}</p>

        </div>
  )
}

export default Task