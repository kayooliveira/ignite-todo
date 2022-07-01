import { motion } from 'framer-motion'
import { Trash } from 'phosphor-react'
import React, { useRef } from 'react'

import { TaskType } from '../@types'
import { DeleteTaskModal } from './DeleteTaskModal'
import styles from './Task.module.css'
interface TaskProps {
  task: TaskType
  onCompleteTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  function changeInputChecked() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const input = inputRef.current!
    if (input.checked) {
      input.checked = false
    } else {
      input.checked = true
    }
  }

  function completeTask() {
    changeInputChecked()
    onCompleteTask(task.id)
  }

  function deleteTask() {
    return onDeleteTask(task.id)
  }

  const motionVariants = {
    initial: {
      opacity: 0,
      translateY: -40
    },
    animate: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      layout
      className={styles.taskCard}
      variants={motionVariants}
    >
      <div className={styles.taskContent}>
        <label className={styles.taskInput}>
          <input
            ref={inputRef}
            onChange={completeTask}
            type="checkbox"
            defaultChecked={task.completed}
            checked={task.completed}
            name={task.id}
          />
          <span className={styles.checkbox}></span>
          <p
            className={`${styles.task} ${
              task.completed && `${styles.taskChecked}`
            }`}
          >
            {task.task}
          </p>
        </label>
      </div>
      <DeleteTaskModal
        trigger={
          <button className={styles.taskDelete}>
            <Trash />
          </button>
        }
        onSuccess={deleteTask}
      />
    </motion.div>
  )
}
