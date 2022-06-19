import React from 'react'

import logo from '../assets/img/logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.headerLogo} src={logo} alt="logo" />
      <h1 className={styles.headerTitle}>
        to<span>do</span>
      </h1>
    </header>
  )
}
