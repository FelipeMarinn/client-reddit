import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import style from './Header.module.css'
import logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt=''/>
        <p><span>Reddit</span>Minimal</p>
      </div>
      <SearchBar />
    </header>
  )
}
