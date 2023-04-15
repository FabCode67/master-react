import React from 'react'
import { useState } from 'react';
import { ItemList } from './ItemList';
import { FaTrashAlt } from 'react-icons/fa'

const Content = ({items, handleCheck, handleDelete}) => {

    const [data, setData] = useState([
        { id: 1, firstname: 'John', lastname: 'Doe', age: 25 },
        { id: 2, firstname: 'Jane', lastname: 'Doe', age: 23 },
        { id: 3, firstname: 'Jack', lastname: 'Doe', age: 21 },
        { id: 4, firstname: 'Jill', lastname: 'Doe', age: 19 },
    ])
    return (
        <main>
            {items.length ? (
               <ItemList 
                items = {items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
            ) : (
                <p style={{ textAlign: 'center' }}>No items</p>
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