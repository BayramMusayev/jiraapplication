import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskFormUpdate, onUpdate }) {
  const{createTask, editTaskById} = useContext(TasksContext)
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, settaskDesc] = useState(task ? task.taskDesc : "");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    settaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(taskFormUpdate){
      onUpdate(task.id,title,taskDesc)
      // editTaskById(task.id,title,taskDesc);
    }
    else{
      // onCreate(title, taskDesc);
      createTask(title, taskDesc);
    }
    setTitle("");
    settaskDesc("");
  };

  return (
    <div>
      {''}
      {taskFormUpdate ? (
        <div className="task-form-update">
          <h3>Please update Task</h3>
          <form className="task-form">
            <label className="task-label">Update Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Uptate Task!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Update
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Please Add Task</h3>
          <form className="task-form">
            <label className="task-label">Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Enter Task!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
