import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Fab', 'Yvette', 'Barry', 'Ricardo'];
        const options = Math.round(Math.random() * names.length)
        return names[options]
    };

    const handleEventsChange = () => {
        console.log('New event instance created');
    };
    const handleEventsChange2 = (name) => {
        console.log(`New event instance created by ${name}`);
    };
    const handleEventsChange3 = (e) => {
        console.log(e.target.innerText);
    };

    
    return (
        <main>
            <p>Hello {handleNameChange()}</p>
            <button onClick={handleEventsChange}>Click me</button>
            <button onClick={()=>handleEventsChange2('Fabrice')}>Click me</button>
            <button onClick={(e)=>handleEventsChange3(e)}>Click me</button>
        </main>
    )
}

export default Content