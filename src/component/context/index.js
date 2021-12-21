import {createContext, useEffect, useState} from 'react'
import { apikey } from "../API"

const PhotoContext = createContext()

function PhotoContextProvider ({children}) {
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('girl')

    const [photo, setPhoto] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(res => res.json())
        .then(img => {
            setPhoto(img.photos.photo)
            setLoading(false)
        })
        
    }, [query])
     
    return (
        <PhotoContext.Provider value = {[photo, setQuery, query, loading]}>
            {children}
        </PhotoContext.Provider>
    )
}

export default PhotoContextProvider
export {PhotoContext}