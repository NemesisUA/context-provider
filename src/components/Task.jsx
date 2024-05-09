import React from 'react'

function Task({ task, removeTask, toggleTaskComleted }) {
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