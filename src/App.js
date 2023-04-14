import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([
    { id: 1, checked: false, name: 'Item 1' },
    { id: 2, checked: false, name: 'Item 2' },
    { id: 3, checked: false, name: 'Item 3' },
    { id: 4, checked: false, name: 'Item 4' },
])

const handleCheck = (id) => {
  const listItem = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
  setItems(listItem)
  localStorage.setItem('shoppingCart', JSON.stringify(listItem))
}

const handleDelete = (id) => {
  const newItems = items.filter((item) => item.id !== id)
  setItems(newItems)
  localStorage.setItem('shoppingCart', JSON.stringify(newItems))
}


  return (
    <div className="App">
      <Header />
      <Content
      items = {items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
       /> 
      <Footer 
      length = {items.length}
      />  
    </div>
  );
}

export default App;
