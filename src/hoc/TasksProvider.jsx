import { createContext, useState, } from "react"

export const TasksContext = createContext([]);

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

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

  const value = {
    tasks,
    setTasks,
    removeTask,
    toggleTaskComleted
  }

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider