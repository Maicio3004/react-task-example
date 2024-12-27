import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTile] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      titulo: title,
      descripcion: description,
    });
    setTile("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className=" p-10">
        <h1 className="text-2xl font-bold mb-2 text-white">Crear Tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTile(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-2 w-full mb-2 rounded-md"
        />
        <textarea
          placeholder="Descripción de la Tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-2 w-full mb-2 rounded-md"
        ></textarea>
        <button className="bg-indigo-600 px-3 py-1 text-white rounded-md hover:bg-indigo-500">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
