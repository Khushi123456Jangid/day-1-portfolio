function ProductCard({product,onAddToCart}){
    return(
        <article className="product-card">
            <div className="product-image">
                <img src={product.icon} alt={product.name} className="product-icon"/>
                <span className="product-badge">NEW</span>
            </div>
            <div className="product-details">
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <div className="rating"><span>★</span>{product.rating}</div>
                <div className="product-bottom">
                    <strong>₹{product.price.toLocaleString('en-IN')}</strong>
                    <button onClick={onAddToCart} className="add-cart-btn">+</button>
                </div>
            </div>
        </article>
    )
}
export default ProductCard;