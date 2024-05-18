import './App.css';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';

function App() {

  return (
    <div className="App">
      <h1>My tasks</h1>

      <NewTaskForm />

      <TaskList />
    </div>
  );
}

export default App;
