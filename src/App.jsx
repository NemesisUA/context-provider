import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim().length) {
      setTasks(tasks => [...tasks, {
        id: new Date().getTime(),
        text: text,
        completed: false
      }]);
      setText('');
    }

  }

  const removeTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks)
  }

  const toggleTaskComleted = (id) => {
    setTasks(tasks.map(
      task => {
        if (task.id !== id) return task;

        return {
          ...task,
          completed: !task.completed
        }
      }
    ))
  }

  return (
    <div className="App">
      <h1>My tasks</h1>

      <div>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          // type='submit'
          onClick={addTask}
        >Add Task</button>
      </div>

      <h2>Tasks number: {tasks.length}</h2>
      <TaskList tasks={tasks} removeTask={removeTask} toggleTaskComleted={toggleTaskComleted} />
    </div>
  );
}

export default App;
