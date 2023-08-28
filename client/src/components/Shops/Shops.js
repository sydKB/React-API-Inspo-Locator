function List({shops}) {
    return (
        <div>  
            <ul>
                {shops.map(shops => (
                    <li key={shops.id}>
                        Shop-   
                        <span>{shops.full_name}</span>
                    </li>   
                ))}
            </ul>
        </div>
    )
}

export default List;