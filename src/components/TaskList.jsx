
import Task from './Task'

import { useContext } from 'react'
import { TasksContext } from '../hoc/TasksProvider'

function TaskList() {
  const { tasks } = useContext(TasksContext);

  return (
    <ul>
      {
        tasks && tasks.map(task => (<Task key={task.id} task={task} />))
      }
    </ul>
  )
}

export default TaskList