import React from "react";

function TaskItem({ task, toggleTask, removeTask }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {/* Nome da tarefa - Clique para alternar completado/incompleto */}
      <span onClick={() => toggleTask(task.id)}>{task.title}</span>

      {/* Botões de ação */}
      <div>
        <button onClick={() => toggleTask(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => removeTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
