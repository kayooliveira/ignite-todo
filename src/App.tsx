import { Prohibit } from 'phosphor-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { v4 } from 'uuid'

import { TaskType } from './@types'
import { Header } from './components/Header'
import { TaskContainer } from './components/TaskContainer'
import { TaskForm } from './components/TaskForm'

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  function handleCreateNewTask(task: string) {
    const newId = v4()

    const taskExistsAndIsNotComplete = tasks.find(
      t => t.task === task && !t.completed
    )

    if (taskExistsAndIsNotComplete) {
      return toast('Essa tarefa já existe!', {
        icon: <Prohibit weight="bold" />
      })
    }
    setTasks([...tasks, { id: newId, completed: false, task }])
  }

  function handleCompleteTask(id: string) {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    setTasks(newTasks)
  }

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  return (
    <>
      <Header />
      <main>
        <TaskForm onSubmit={handleCreateNewTask} />
        <TaskContainer
          onCompleteTask={handleCompleteTask}
          onDeleteTask={handleDeleteTask}
          tasks={tasks}
        />
      </main>
    </>
  )
}
