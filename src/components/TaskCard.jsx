import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.titulo}</h1>
      <p className="text-gray-400 text-sm mt-2 mb-2">{task.descripcion}</p>
      <button
        className="bg-red-600 px-2 py-1 rounded-md hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
