function ProductCard({product,onAddToCart}){
    return(
        <article className="product-card">
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
            <p>{product.category}</p>
            <p>⭐{product.rating}</p>
            <button onClick={function(){onAddToCart(product)}}>🛒 Add To Cart</button>
        </article>
    )
}
export default ProductCard