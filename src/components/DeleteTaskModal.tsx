import React, { useState } from 'react'

import styles from './DeleteTaskModal.module.css'

interface DeleteTaskModalProps {
  onSuccess: () => void
  trigger: JSX.Element
}

export function DeleteTaskModal({ onSuccess, trigger }: DeleteTaskModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  function confirmAndClose() {
    onSuccess()
    toggleModal()
  }
  return (
    <>
      <div onClick={toggleModal}>{trigger}</div>
      {isOpen && (
        <div className={styles.container}>
          <div className={styles.modal}>
            <h2>Excluir tarefa</h2>
            <p>Tem certeza que deseja excluir esta tarefa?</p>
            <button onClick={toggleModal} className={styles.modalCancel}>
              Cancelar
            </button>
            <button onClick={confirmAndClose} className={styles.modalConfirm}>
              Sim, excluir
            </button>
          </div>
        </div>
      )}
    </>
  )
}
