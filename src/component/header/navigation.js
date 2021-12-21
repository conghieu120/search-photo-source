import {useContext} from 'react'
import {PhotoContext} from '../context'

function Navigation () {
    let context = useContext(PhotoContext)

    const handleClick = (key) => {
        context[1](key)
    }

    return (
        <div className ='navigation'>
            <ul>
                <li id = 'girl'  onClick = {e => handleClick(e.target.id)}>Girls</li>
                <li id = 'animal' onClick = {e => handleClick(e.target.id)}>Animals</li>
                <li id = 'nature' onClick = {e => handleClick(e.target.id)}>Nature</li>
                <li id = 'food' onClick = {e => handleClick(e.target.id)}>Foods</li>

            </ul>
        </div>
    )
}

export default Navigation