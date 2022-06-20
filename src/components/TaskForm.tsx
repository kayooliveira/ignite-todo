import { PlusCircle } from 'phosphor-react'
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'

import styles from './TaskForm.module.css'

interface TaskFormProps {
  onSubmit: (task: string) => void
}

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [taskInput, setTaskInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  function handleChangeTaskInput(e: ChangeEvent<HTMLInputElement>) {
    setTaskInput(e.target.value)
  }

  function handleSubmitNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    inputRef.current?.focus()
    if (taskInput.trim() !== '') {
      onSubmit(taskInput)
      setTaskInput('')
    }
  }

  return (
    <form onSubmit={handleSubmitNewTask} className={styles.taskForm}>
      <input
        name="task"
        autoFocus
        ref={inputRef}
        placeholder="Adicione uma nova tarefa"
        onChange={handleChangeTaskInput}
        value={taskInput}
        className={styles.taskInput}
      />
      <button
        disabled={taskInput.trim() === ''}
        type="submit"
        className={styles.taskButton}
      >
        Criar <PlusCircle weight="bold" width="16" height="16" />
      </button>
    </form>
  )
}
