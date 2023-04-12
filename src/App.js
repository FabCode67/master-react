import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () =>{
    const names= ["Fab", "Yvette", "Rich", "Barry"]
    const options = Math.floor(Math.random()*3)
    return names[options]
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello {handleNameChange()}
        </p>
      </header>
    </div>
  );
}

export default App;
