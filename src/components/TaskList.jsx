import React from 'react'
import Task from './Task'

function TaskList({ tasks, removeTask, toggleTaskComleted }) {
  return (
    <ul>
      {
        tasks.map(task => <Task key={task.id} task={task} removeTask={removeTask} toggleTaskComleted={toggleTaskComleted} />)
      }
    </ul>
  )
}

export default TaskList