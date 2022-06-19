import React from 'react'

import emptyTask from '../assets/img/empty-task.svg'
import { Task } from './Task'
import styles from './TaskContainer.module.css'

interface TaskContainerProps {
  tasks: string[]
}

export function TaskContainer({ tasks }: TaskContainerProps) {
  return (
    <section className={styles.taskContainer}>
      <header className={styles.taskContainerHeader}>
        <p className={styles.taskCreated}>
          Tarefas criadas <button>{tasks.length}</button>
        </p>
        <p className={styles.taskFinished}>
          Concluídas <button>{tasks.length}</button>
        </p>
      </header>
      {tasks.length <= 0 ? (
        <div className={styles.noTasks}>
          <img src={emptyTask} alt="bloco de notas" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      ) : (
        tasks.map(task => <Task key={task} task={task} />)
      )}
    </section>
  )
}
