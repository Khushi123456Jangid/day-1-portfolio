function Cart({cart,onClose,onIncrease,onDecrease,onRemove,onCheckout}){
    let total=cart.reduce(function(sum,item){
        return sum + item.price * item.quantity;
    },0);
    return(
        <div className="cart-overlay">
            <aside className="cart-panel">
                <div className="cart-header">
                    <div>
                        <p className="modal-label">YOUR BAG</p>
                        <h2>Shopping Cart</h2>
                    </div>
                    <button onClick={onClose} className="close-cart">×</button>
                </div>
                {cart.length===0?(
                    <div className="empty-cart">
                        <div className="empty-cart-icon">🛒</div>
                        <h3>Your cart is empty</h3>
                        <p>Add something you love.</p>
                    </div>
                ):(
                    <>
                        <div className="cart-items">
                            {cart.map(function(item){
                                return(
                                    <div className="cart-item" key={item.id}>
                                        <img className="cart-item-icon" src={item.icon} alt={item.name} />
                                        <div className="cart-item-info">
                                            <h4>{item.name}</h4>
                                            <p>₹{item.price.toLocaleString("en-IN")}</p>
                                            <div className="quantity-controls">
                                                <button onClick={function(){onDecrease(item.id)}}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={function(){onIncrease(item.id)}}>+</button>
                                            </div>
                                        </div>
                                        <button onClick={function(){onRemove(item.id)}}>×</button>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <strong>₹{total.toLocaleString("en-IN")}</strong>
                            </div>
                            <p className="shipping-note">Free shipping on all orders</p>
                            <button className="checkout-btn" onClick={onCheckout}>Proceed to Checkout<span>→</span></button>
                        </div>
                    </>
                )}
            </aside>
        </div>
    );
}
export default Cart;