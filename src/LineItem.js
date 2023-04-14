import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export const LineItem = ({item, handleCheck, handleDelete }) => {
  return (
    <li className='item' key={item.id}>
    <input
        type='checkbox'
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
    />
    <label
        style={{ textDecoration: item.checked ? 'line-through' : 'none' }}
        onDoubleClick={() => handleCheck(item.id)}
    >{item.name}</label>
    < FaTrashAlt
        role='button'
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete item ${item.name}`}
    />
</li>
  )
}
