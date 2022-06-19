import React, { useState } from 'react'

import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'

export function App() {
  const [tasks, setTasks] = useState([''])

  function handleCreateNewTask(task: string) {
    setTasks([...tasks, task])
  }

  console.log(tasks)

  return (
    <>
      <Header />
      <main>
        <TaskForm onSubmit={handleCreateNewTask} />
      </main>
    </>
  )
}
