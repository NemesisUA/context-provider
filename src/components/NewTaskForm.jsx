import { useContext, useState } from 'react';
import { TasksContext } from '../hoc/TasksProvider';

const NewTaskForm = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim().length) {
      setTasks([...tasks, {
        id: new Date().getTime(),
        text: text,
        completed: false
      }]);
      setText('');
    }
  }
  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={addTask}
      >Add Task</button>
    </div>
  )
}

export default NewTaskForm