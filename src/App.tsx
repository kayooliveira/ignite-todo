import { Prohibit } from 'phosphor-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { v4 } from 'uuid'

import { TaskType } from './@types'
import { Header } from './components/Header'
import { TaskContainer } from './components/TaskContainer'
import { TaskForm } from './components/TaskForm'
import { getItemFromStore, store } from './utils/store'

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>(
    getItemFromStore({ key: 'tasks' }) || []
  )

  function storeTasksLocally(tasks: TaskType[]) {
    store({
      key: 'tasks',
      value: tasks
    })
  }

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
    const newTasks = [{ id: newId, completed: false, task }, ...tasks]
    storeTasksLocally(newTasks)
    setTasks(newTasks)
  }

  function handleCompleteTask(id: string) {
    handleDeleteTask(id)
    setTasks(state => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const task = tasks.find(t => t.id === id)!
      const newTasks = task.completed
        ? [{ ...task, completed: false }, ...state]
        : [...state, { ...task, completed: true }]
      storeTasksLocally(newTasks)
      return newTasks
    })
  }

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter(task => task.id !== id)
    storeTasksLocally(newTasks)
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
