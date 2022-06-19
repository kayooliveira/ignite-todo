import React, { useState } from 'react'

import { Header } from './components/Header'
import { TaskContainer } from './components/TaskContainer'
import { TaskForm } from './components/TaskForm'

export function App() {
  const [tasks, setTasks] = useState<string[]>([])

  function handleCreateNewTask(task: string) {
    setTasks([...tasks, task])
  }

  console.log(tasks)

  return (
    <>
      <Header />
      <main>
        <TaskForm onSubmit={handleCreateNewTask} />
        <TaskContainer tasks={tasks} />
      </main>
    </>
  )
}
