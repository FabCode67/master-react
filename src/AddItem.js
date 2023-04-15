import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react';

export const AddItem = ({ newItem, setNewItem, handleSubmit }) => {

  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit} >
        <label htmlFor='newItem'>Add Item</label>
        <input 
            type='text'
            id='newItem'
            name='newItem'
            ref= {inputRef}
            placeholder='New Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}
