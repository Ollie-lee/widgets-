import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Search() {
    const [term, setTerm] = useState('program')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000);

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                //second argument: option object
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })
            setResults(data.query.search)
        }
        search()
    }, [debouncedTerm])

    // useEffect(() => {
    // //throttling function
    //     const search = async () => {
    //         const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
    //             //second argument: option object
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term
    //             }
    //         })
    //         setResults(data.query.search)
    //     }

    //     // Check whether it is the first time our component rendered, if so, no throttling, search immideately
    //     // First block: check user input && response.data
    //     if (term && !results) {
    //         search(term)
    //     } else {
    //         //	Firstly render:
    //         // Invoke inner function + keep the reference of returned function
    //         const timeoutId = setTimeout(() => {

    //             //avoid request, when initial term is an empty string
    //             if (term) {
    //                 search()
    //             }
    //         }, 500);

    //         //	Follow up render:
    //         // Returned function invoked + inner function invoked
    //         return (() => {
    //             clearTimeout(timeoutId)
    //         })
    //     }
    // }, [term])

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className='ui button'
                    >
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter search Term</label>
                    <input
                        className='input'
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </div>
    )
}

export default Search
