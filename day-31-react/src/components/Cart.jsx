function Cart({cart,onIncrease,onDecrease,onRemove}){
    return(
        <aside className="cart">
            <h2>Your Cart</h2>
            {
                cart.length===0?(
                    <p>Cart is empty.</p>
                ):(
                    <div>
                        {
                            cart.map(function(item){
                                return(
                                    <article key={item.id} className="cart-item">
                                        <h3>{item.name}</h3>
                                        <p>₹{item.price}</p>
                                        <div>
                                            <button onClick={function(){onDecrease(item.id)}}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={function(){onIncrease(item.id)}}>+</button>
                                        </div>
                                        <button onClick={function(){onRemove(item.id)}}>Remove</button>
                                    </article>
                                )
                            })
                        }
                    </div>
                )
            }
        </aside>
    )
}
export default Cart;