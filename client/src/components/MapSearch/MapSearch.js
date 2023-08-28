import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import List from '../Shops/Shops'; 

function MapSearch() {
    const [shops, setShops] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const API_URL = 'https://my.api.mockaroo.com/phonebook.json?key=9ac1c5f0'
        axios
            .get(API_URL)
            .then(res => {
                const shops = res.data
                setShops(shops)
            })
    }, [])

    const filteredShops = search.length === 0 ? shops : 
    shops.filter(shop => shop.full_name.
                toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
                <input 
                    type="text" 
                    placeholder="Enter zipcode or city" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            <h4>List of shops. Will become clickable or somethin'.</h4>
            <List shops={filteredShops}/>
        </div>
    )
}

export default MapSearch;