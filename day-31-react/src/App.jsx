import { useState ,useEffect} from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import products from './data/products'
import Cart from './components/Cart'
import Login from './components/Login'
function App() {
    let [cart,setCart]=useState([]);
    let [searchText,setSearchText]=useState("");
    let [category,setCategory]=useState("All");
    let [sortOption,setSortOption]=useState("featured");
    let [isLoggedIn,setIsLoggedIn]=useState(false);
    let [isLoginOpen,setIsLoginOpen]=useState(false);
    let filteredProduct=products.filter(function(product){
        let matchesSearch=product.name.toLowerCase().includes(searchText.toLowerCase());
        let matchesCategory=category==="All"||product.category===category;
        return matchesSearch && matchesCategory;
    });
    let cartItemCount=cart.reduce(function(total,item){
        return total+item.quantity;
    },0);
    useEffect(function(){
        document.title=`Luma Market | ${cartItemCount} items`
    },[cartItemCount])
    function openLogin(){
        setIsLoginOpen(true);
    }
    function closeLogin(){
        setIsLoginOpen(false);
    }
    function handleLogin(){
        setIsLoggedIn(true);
        setIsLoginOpen(false);
    }
    function handleLogout(){
        setIsLoggedIn(false);
    }
    function addToCart(product){
        let existingProduct=cart.find(function(item){
            return item.id===product.id;
        })
        if(existingProduct){
            setCart(cart.map(function(item){
                if(item.id===product.id){
                    return{
                        ...item, quantity:item.quantity+1
                    }
                }
                return item;
            }))
        }
        else{
            setCart([...cart,{...product,quantity:1}])
        }
    }
    function increaseQuantity(id){
        setCart(
            cart.map(function(item){
                if(item.id===id){
                    return{
                        ...item,quantity:item.quantity+1
                    }
                }
                return item;
            })
        )
    }
    function decreaseQuantity(id){
        setCart(
            cart.map(function(item){
                if(item.id===id && item.quantity>1){
                    return{
                        ...item,quantity:item.quantity-1
                    }
                }
                return item;
            })
        )
    }
    function removeFromCart(id){
        setCart(
            cart.filter(function(item){
                return item.id!==id;
            })
        )
    }
    if(sortOption==="low"){
        filteredProduct.sort(function(a,b){
            return a.price-b.price;
        })
    }
    if(sortOption==="high"){
        filteredProduct.sort(function(a,b){
            return b.price-a.price;
        })
    }
    if(sortOption==="rating"){
        filteredProduct.sort(function(a,b){
            return b.rating-a.rating;
        })
    }
 return(
    <main>
        <h1>LUMA MARKET</h1>
        <p>Smart technology for mordern life.</p>
        <p>Cart Item: {cartItemCount}</p>
        {isLoggedIn?(
            <div className='user-area'>
                <span>Welcome, Khuhsi 👋</span>
                <button onClick={handleLogout}>Logout</button>
            </div>
        ):(
            <button onClick={openLogin}>Login</button>
        )}
        <section className='controls-section'>
            <select value={category} onChange={function(event){setCategory(event.target.value)}}>
                <option value="All">All Category</option>
                <option value="Audio">Audio</option>
                <option value="Wearables">Wearables</option>
                <option value="Computers">Computers</option>
                <option value="Accessories">Accessories</option>
            </select>
            <select value={sortOption} onChange={function(event){setSortOption(event.target.value)}}>
                <option value="featured">Featured</option>
                <option value="low">Low</option>
                <option value="high">High</option>
                <option value="rating">Rating</option>
            </select>
        </section>
        <section className='search-section'>
            <input type="text" value={searchText} onChange={function(event){setSearchText(event.target.value)}} placeholder='Enter product name...'/>
        </section>
        <section className='products-section'>
            {
                filteredProduct.map(function(product){
                    return(
                        <ProductCard key={product.id} product={product} onAddToCart={addToCart}/>
                    )
                })
            }
        </section>
        <section className='cart-section'>
            <Cart cart={cart} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} onRemove={removeFromCart}/>
        </section>
        <section>
            {
                isLoginOpen && (<Login onLogin={handleLogin} onClose={closeLogin}/>)
            }
        </section>
    </main>
 )
}

export default App
