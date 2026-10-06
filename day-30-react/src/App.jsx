import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import Login from './components/Login'
import products from './data/products'
function App() {
 let [searchText,setSearchText]=useState("");
 let [category,setCategory]=useState("All");
 let [sortOption,setSortOption]=useState("featured");
 let [cart,setCart]=useState([]);
 let [isLoginOpen,setIsLoginOpen]=useState(false);
 let [isLoggedIn,setIsLoggedIn]=useState(false);
 let [showCheckout,setShowCheckout]=useState(false);
 useEffect(function(){
    document.title=`NOVA Store | ${cart.length} Cart Items`
 },[cart]);
 let categories=["All","Audio","Wearables","Accessories","Computers"];
 let filteredProducts=products.filter(function(product){
    let matchesSearch=product.name.toLowerCase().includes(searchText.toLowerCase());
    let matchesCategory=category==="All"||product.category===category;
    return(matchesSearch && matchesCategory);
 })
 if(sortOption==="low"){
    filteredProducts.sort(function(a,b){
        return a.price-b.price;
    })
 }
 if(sortOption==="high"){
    filteredProducts.sort(function(a,b){
        return b.price-a.price;
    });
 }
 if(sortOption==="rating"){
    filteredProducts.sort(function(a,b){
        return b.rating-a.rating;
    });
 }
 function addToCart(product){
    let existingProduct=cart.find(function(item){
        return item.id===product.id;
    });
    if(existingProduct){
        setCart(
            cart.map(function(item){
                if(item.id===product.id){
                    return{...item,quantity:item.quantity+1};
                }
                return item;
            })
        )
    }
    else{
        setCart([...cart,{...product,quantity:1}]);
    }
 }
 function increaseQuantity(id){
    setCart(
        cart.map(function(item){
            if(item.id===id){
                return {...item,quantity:item.quantity+1};
            }
            return item;
        })
    );
 }
 function decreaseQuantity(id){
    setCart(
        cart.map(function(item){
            if(item.id===id){
                return {...item,quantity:item.quantity-1};
            }
            return item;
        }).filter(function(item){
            return item.quantity>0
        })
    );
 }
function removeItem(id){
    setCart(
        cart.filter(function(item){
            return item.id!==id;
        })
    );
}
function handleLogin(){
    setIsLoggedIn(true);
    setIsLoginOpen(false);
}
let cartCount=cart.reduce(function(total,item){
    return total+item.quantity;
},0);


return(
    <div className='store'>
        {/* navbar */}
        <Navbar cartCount={cartCount} isLoggedIn={isLoggedIn} onLogin={function(){setIsLoginOpen(true)}} onCart={function(){setShowCheckout(true)}}/>
        <section className='hero-section' id='home'>
            <div className='hero-content'>
                <p className='hero-label'>THE FUTURE OF SHOPPING</p>
                <h1>Technology<br/><span>made beautiful.</span></h1>
                <p className='hero-text'>Discover thoughtfully designed technology for the way you live, work and create.</p>
                <a href="#products" className='hero-button'>Explore Collection<span>→</span></a>
            </div>
            <div className='hero-orbit'>
                <div className='orbit-ring ring-one'></div>
                <div className='orbit-ring ring-two'></div>
                <div className='hero-product'>💻</div>
            </div>
        </section>
        <section className='category-section' id='categories'>
            <div className='section-container'>
                <p className='section-label'>EXPLORE</p>
                <div className='category-list'>
                    {categories.map(function(item){
                        return(
                            <button onClick={function(){setCategory(item)}} key={item} className={category===item?"category-button active":"category-button"}>{item}</button>
                        )
                    })}
                </div>
            </div>
        </section>
        <main id='products' className='products-section'>
            <div className='section-container'>
                <div className='products-heading'>
                    <div>
                        <p className='section-label'>CURATED COLLECTION</p>
                        <h2>Find your next favorite.</h2>
                    </div>
                    <div className='product-controls'>
                        <div className='search-wrapper'>
                            <span>🔍</span>
                            <input type="text" placeholder='Search products...' value={searchText} onChange={function(event){setSearchText(event.target.value)}}/>
                        </div>
                        <select value={sortOption} onChange={function(event){setSortOption(event.target.value)}}>
                            <option value="featured">Featured</option>
                            <option value="low">Price: Low to High</option>
                            <option value="high">Price: High to Low</option>
                            <option value="rating">Top Rated</option>
                        </select>
                    </div>
                </div>
                <div className='result-line'>
                    <span>{filteredProducts.length}{" "}products</span>
                    {searchText && (<button onClick={function(){setSearchText("")}}>Clear Search x</button>)}
                </div>
                {
                    filteredProducts.length===0?(
                        <div className='no-products'>
                            <div>🔍</div>
                            <h3>No Product Yet</h3>
                            <p>Try another search or category</p>
                        </div>
                    ):(
                        <div className='product-grid'>
                            {
                                filteredProducts.map(function(product){
                                    return(
                                        <ProductCard key={product.id} product={product} onAddToCart={function(){addToCart(product)}}/>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </main>
        <section className='promo-section'>
            <div className='promo-content'>
                <p className='section-label'>NOVA MEMBERS</p>
                <h2>Better technology.<br/>Better everyday.</h2>
                <p>Join our community and get early access to new collections.</p>
                <button onClick={function(){setIsLoginOpen(true)}}>Join NOVA<span>→</span></button>
            </div>
        </section>
        <footer className='footer'>
                <div className='footer-logo'>NOVA<span>.</span></div>
                <p>© 2026 NOVA Store. Built with React.</p>
                <p>React Foundation Day-30</p>
        </footer>
        {
            showCheckout && (
                <Cart cart={cart} onClose={function(){setShowCheckout(false)}}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onRemove={removeItem}
                    onCheckout={true}
                />
            )
        }
        {isLoginOpen && (
            <Login onLogin={handleLogin} onClose={function(){setIsLoginOpen(false)}}/>
        )}
    </div>
)

}


export default App
