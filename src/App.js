import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const items = [
    {
        title: 'What is React',
        content: 'React is a front-end javascript framework'
    },
    {
        title: 'Why use React',
        content: 'React is a fav JS library between engineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components'
    }
]

function App() {
    return (
        <div>
            {/* <Accordion items={items} /> */}
            <Search />
        </div>
    )
}

export default App
