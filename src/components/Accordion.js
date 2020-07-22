import React, { useState } from 'react'

function Accordion({ items }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {
        //add key to top element of array item
        return (<React.Fragment key={item.title}>
            <div
                className='title active'
                onClick={() => onTitleClick(index)}
            >
                <i className='dropdown icon' ></i>
                {item.title}
            </div>
            <div className='content active'>
                <p>{item.content}</p>
            </div>
        </React.Fragment>)
    })

    return (
        <div className='ui styled accordion'>
            {renderedItems}
            {activeIndex}
        </div>
    )
}


export default Accordion
