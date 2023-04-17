import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { AddItem } from './AddItem';
import { SearchItem } from './SearchItem';

function App() {
  const URL_API = 'http://localhost:3500/items'
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [searchItem, setSearchItem] = useState('')
  const [catchError, setCatchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const reponse = await fetch(URL_API)
        if(!reponse.ok) throw new Error('Error: You do not have permission to get data')
        const listItem = await reponse.json()
        setItems(listItem)
        setCatchError(null)
      } catch (error) {
        setCatchError(error.message)
      }finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
    (async () => fetchData())()
    }, 2000);
  }, [])

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
     <main>
      {isLoading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {catchError && <p style={{ textAlign: 'center', color: 'red' }}>{catchError}</p>}
     {!catchError &&  !isLoading && <Content
        items={items.filter((item) => item.name.toLowerCase().includes(searchItem.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
     }
      </main>
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
