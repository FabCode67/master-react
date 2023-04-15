import React from 'react'

export const SearchItem = ({searchItem, setSearchItem}) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault}>
            <label htmlFor = 'searchItem'>search item</label>
            <input 
            type = 'text'
            id = 'searchItem'
            name = 'searchItem'
            placeholder = 'search item'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            />
        </form>
    )
}
