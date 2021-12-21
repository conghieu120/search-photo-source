import {useContext, useState} from 'react'
import {PhotoContext} from '../context'


function Form () {
    let context = useContext(PhotoContext)
    const [input, setInput] = useState('')
    const handleSearch = () => {
        context[1](input)
        setInput('')
    }
    return (
        <div className= 'form'>
            <input 
                value = {input}
                placeholder = 'Nhập nội dung tìm kiếm...'
                onChange = {e => setInput(e.target.value)}
            />

            <button
                className = 'button'
                onClick = {handleSearch}
            >Tìm Kiếm</button>
        </div>
    )
}

export default Form