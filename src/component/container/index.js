import {useContext} from 'react'
import {PhotoContext} from '../context'
import Gallery from "./gallery"

function Container () {  
    let context = useContext(PhotoContext)
    const query = context[2]
    return (
        <div className='container'>
            <h2>{query} photos</h2>
            <Gallery/>
        </div>
    )
}

export default Container