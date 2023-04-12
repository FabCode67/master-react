import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Fab', 'Yvette', 'Barry', 'Ricardo'];
        const options = Math.round(Math.random() * names.length)
        return names[options]
    };

    return (
        <main>
            <p>Hello {handleNameChange()}</p>
        </main>
    )
}

export default Content