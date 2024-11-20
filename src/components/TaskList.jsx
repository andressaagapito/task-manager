import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, removeTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
