function List({images}) {
    return (
        <div>  
            <ul>
                {images.map(images => (
                    <li key={images.id}>
                        Tag -   
                        <span>{images.full_name}</span>
                    </li>   
                ))}
            </ul>
        </div>
    )
}

export default List;