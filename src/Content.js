import React from 'react'
import { useState } from 'react';
import { FaTrashAlt  } from 'react-icons/fa';

const Content = () => {
    const [items, setItems] = useState([
        { id: 1, checked: false, name: 'Item 1' },
        { id: 2, checked: false, name: 'Item 2' },
        { id: 3, checked: false, name: 'Item 3' },
        { id: 4, checked: false, name: 'Item 4' },
    ])

    const [data, setData] = useState([
        { id: 1, firstname: 'John', lastname: 'Doe', age : 25 },
        { id: 2, firstname: 'Jane', lastname: 'Doe', age : 23 },
        { id: 3, firstname: 'Jack', lastname: 'Doe', age : 21 },
        { id: 4, firstname: 'Jill', lastname: 'Doe', age : 19 },
    ])

    const handleCheck = (id) => {
        const listItem = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
        setItems(listItem)
        localStorage.setItem('shoppingCart', JSON.stringify(listItem))
    }

    const handleDelete = (id) => {
        const newItems  = items.filter((item) => item.id !== id)
        setItems(newItems)
        localStorage.setItem('shoppingCart', JSON.stringify(newItems))
    }


    return (
        <main>
            {items.length ? (
            <ul>
                {items.map((item) => (
                    <li className='item' key={item.id}>
                        <input
                         type='checkbox'
                          onChange={()=>handleCheck(item.id)} 
                          checked={item.checked}
                           />
                        <label
                        style={{textDecoration: item.checked ? 'line-through' : 'none'}}
                        onDoubleClick={() => handleCheck(item.id)}
                        >{item.name}</label>
                        < FaTrashAlt 
                        role='button' 
                        tabIndex="0" 
                        onClick={() => handleDelete(item.id)}
                        />
                        </li>
                ))}
            </ul>
            ) : (
                <p style={{textAlign: 'center' }}>No items</p>
            )}
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => (
                        <tr className='data' key={data.id}> 
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.age}</td>
                            <td>< FaTrashAlt /> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default Content