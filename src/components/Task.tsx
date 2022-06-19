import React from 'react'

interface TaskProps {
  task: string
}

export function Task({ task }: TaskProps) {
  return <p>{task}</p>
}
