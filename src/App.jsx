import TaskForm from "./components/TaksForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <main className="bg-zinc-800 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
