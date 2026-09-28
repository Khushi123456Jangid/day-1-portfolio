function ProductCard({name,price,image,onAdd}){
    return(
        <article className="product-card">
            <div className="product-image">
                <img src={image} alt={name} />
            </div>
            <div className="product-content">
                <h2 className="name">{name}</h2>
                <p className="price">{price}</p>
                <button onClick={onAdd}>Add to Cart</button>
            </div>
        </article>
    )
}
export default ProductCard;