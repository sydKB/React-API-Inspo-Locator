import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import List from '../Images/Images'; 

function InspoSearch() {
    const [images, setImages] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const API_URL = 'https://my.api.mockaroo.com/phonebook.json?key=9ac1c5f0'
        axios
            .get(API_URL)
            .then(res => {
                const images = res.data
                setImages(images)
            })
    }, [])

    const filteredImages = search.length === 0 ? images : 
    images.filter(image => image.full_name.
                toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
                <input 
                    type="text" 
                    placeholder="Enter keyword for inspiration" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            <h4>List of image tags. Will become images.</h4>
            <List images={filteredImages}/>
        </div>
    )
}

export default InspoSearch;