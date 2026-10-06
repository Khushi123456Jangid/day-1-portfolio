function Navbar({cartCount,isLoggedIn,onLogin,onCart}){
    return(
        <nav className="navbar">
            <div className="nav-inner">
                <a href="#home" className="logo">NOVA<span>.</span></a>
            </div>
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#products">Products</a>
                <a href="#categories">Categories</a>
            </div>
            <div className="nav-actions">
                <button onClick={onLogin} className="login-button">{isLoggedIn?"Account":"Login"}</button>
                <button onClick={onCart} className="cart-button">🛒<span>{cartCount}</span></button>
            </div>
        </nav>
    )
}
export default Navbar;