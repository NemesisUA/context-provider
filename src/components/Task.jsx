import React from 'react'
import { useContext } from 'react'
import { TasksContext } from '../hoc/TasksProvider'

function Task({ task }) {
  const { removeTask, toggleTaskComleted } = useContext(TasksContext);

  return (
    <li>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={() => toggleTaskComleted(task.id)}
      />
      <span>{task.text}</span>
      <span
        className='delete-item'
        onClick={() => removeTask(task.id)}
      >&times;</span>
    </li>
  )
}

export default Task