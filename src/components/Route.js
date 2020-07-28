import { useState, useEffect } from 'react'
function Route({ path, children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        //wire up event listener one time, make <Route/>
        //detect url change
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])


    return currentPath === path
        ? children : null;
}

export default Route
