import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchByTerm } from '../../reducers/postSlice'
import style from './SearchBar.module.css'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')

  const search = (e) => {
    e.preventDefault()
    dispatch( searchByTerm(searchTerm) )
  }

  return (
    <form className={style.form} onSubmit={ search }>
        <input 
          type='text' 
          value={ searchTerm }
          placeholder='Search'
          onChange={ (e) => setSearchTerm(e.target.value) } />
        <button className={style.button} type='button' onClick={ search }>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
  )
}
