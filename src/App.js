import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

function App() {
    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)


    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {
                showDropdown && <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            }
        </div>
    )
}

export default App
