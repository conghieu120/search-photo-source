import {useContext} from 'react'
import {PhotoContext} from '../context'
import Image from "./image"
import Loading from './loading'

function Gallery () {
    const [photos] = useContext(PhotoContext)
    const context = useContext(PhotoContext)
    const loading = context[3]
    let imgs
    if (photos.length > 0) {
        imgs = photos.map(photo => {
            let farm = photo.farm;
            let server = photo.server;
            let id = photo.id;
            let secret = photo.secret;
            let title = photo.title;
            let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
            return <Image url={url} key={id} alt={title} />;
        })
    }
    
    return (      

        <div className = 'gallery'>
            {
                loading ? <Loading/> : <ul>   {imgs} </ul>
            }
            
        </div>
    )
}

export default Gallery