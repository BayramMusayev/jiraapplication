import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskShow({ task}) {

  const{deleteTaskById, editTaskById} = useContext(TasksContext)
  
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    // onDelete(task.id);
    deleteTaskById(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedtaskDesc) => {
    setShowEdit(false);
    // onUpdate(id, updatedTitle, updatedtaskDesc);
    editTaskById(id, updatedTitle, updatedtaskDesc);
  };

  console.log(task);
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
      ) : (
        <div>
          <h3 className="task-title">Tapsiriqiniz</h3>
          <p className="task-paraqraf">{task.title}</p>
          <h3 className="task-title">Yapilacaqlar</h3>
          <p className="task-paraqraf">{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="task-update" onClick={handleEditClick}>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
