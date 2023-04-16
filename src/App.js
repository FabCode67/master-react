import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { AddItem } from './AddItem';
import { SearchItem } from './SearchItem';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingCart')) || [])
  const [newItem, setNewItem] = useState('')
  const [searchItem, setSearchItem] = useState('')

  useEffect(()=>{
    localStorage.setItem('shoppingCart', JSON.stringify(items))
  }, [items])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const newItem = { id, checked: false, name: item }
    const listItem = [...items, newItem]
    setItems(listItem)
  }

  const handleCheck = (id) => {
    const listItem = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItem)
  }

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />

      <Content
        items={items.filter((item) => item.name.toLowerCase().includes(searchItem.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
