import React, { useState, useEffect, useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask, clearTasks, editTask, editItem } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={title}
        onChange={handleChange}
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task">
          {editItem ? "Edit" : "Add"}
        </button>
        <button onClick={clearTasks} type="submit" className="btn clear">
          Clear
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
