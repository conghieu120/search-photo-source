

function Image ({url, id, alt}) {
        return (    
            <li key = {id}>
            <img src={url} alt={alt} width="1200" height="813"></img>
            </li>
    )
}

export default Image