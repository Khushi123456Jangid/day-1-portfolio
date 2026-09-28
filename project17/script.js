// get html elements
let searchBox=document.getElementById('searchBox');
let productList=document.getElementById('productList');
let productCount=document.getElementById('productCount');
let filterButtons=document.querySelectorAll('.filter-button');
// product data
let products=[
    {
        name:"Laptop",
        price:55000,
        category:"Electronics",
        rating:4.8,
        icon:"fa-solid fa-laptop",
        description:"Powerful laptop for study and work."
    },
    {
        name:"Smartphone",
        price:25000,
        category:"Electronics",
        rating:4.6,
        icon:"fa-solid fa-mobile",
        description:"Modern smartphone with sharp display."
    },
    {
        name:"Wireless Headphones",
        price:3000,
        category:"Electronics",
        rating:4.5,
        icon:"fa-solid fa-headphones",
        description:"Comfortable headphones with clear sound."
    },
    {
        name:"Keyboard",
        price:2000,
        category:"Electronics",
        rating:4.3,
        icon:"fa-solid fa-keyboard",
        description:"Comfortable keyboards for everyday typing."
    },
    {
        name:"Running Shoes",
        price:2500,
        category:"Fashion",
        rating:4.4,
        icon:"fa-solid fa-shoe-prints",
        description:"Lightweight shoes for everyday running."
    },
    {
        name:"Denim Jacket",
        price:2200,
        category:"Fashion",
        rating:4.5,
        icon:"fa-solid fa-vest",
        description:"Classic jacket for casual outfit."
    },
    {
        name:"Backpack",
        price:1800,
        category:"Fashion",
        rating:4.5,
        icon:"fa-solid fa-bag-shopping",
        description:"Spacious backpacks for college and travel."
    },
    {
        name:"Table Lamp",
        price:1200,
        category:"Home",
        rating:4.1,
        icon:"fa-solid fa-lightbulb",
        description:"Simple lamp for your study desk."
    },
    {
        name:"Coffee Mug",
        price:500,
        category:"Home",
        rating:4.0,
        icon:"fa-solid fa-mug-hot",
        description:"Ceramic mug for coffee and tea."
    }
];
// category
let currentCategory="All";
// display products
function displayProducts(productArray){
    productList.innerHTML="";
    productCount.textContent=productArray.length+(productArray.length===1?" Product":" Products");
    // empty state
    if(productArray.length===0){
        productList.innerHTML=`
            <div class="empty-state">
                <div class="empty-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <h3>No Product Found</h3>
                <p>Try another search</p>
            </div>
        `;
        return;
    }
    // Display Products
    productArray.forEach(function(product){
        const card=document.createElement("article");
        card.className="product-card"
        card.innerHTML=`
            <div class="product-image">
                <i class="${product.icon}"></i>
            </div>
            <span class="product-category">${product.category}</span>
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-bottom">
                <span class="product-price">₹${product.price.toLocaleString("en-IN")}</span>
                <span class="product-rating"><i class="fa-solid fa-star"></i> ${product.rating}</span>
            </div>
        `;
        productList.appendChild(card);
    });
}
// filter products
function filterProducts(){
    let searchText=searchBox.value.trim().toLowerCase();
    let filteredProducts=products.filter(function(product){
       let nameMatch=product.name.toLowerCase().includes(searchText);
       let categoryMatch=product.category.toLowerCase().includes(searchText);
       return (nameMatch||categoryMatch);
    });
    if(currentCategory!=="All"){
        filteredProducts=filteredProducts.filter(function(product){
            return product.category===currentCategory;
        });
    }
    displayProducts(filteredProducts);
}
searchBox.addEventListener("input",function(){
    filterProducts();
});
filterButtons.forEach(function(button){
    button.addEventListener("click",function(){
        filterButtons.forEach(function(btn){
            btn.classList.remove("active");
        })
        button.classList.add("active");
        currentCategory=button.dataset.category;
        filterProducts();
    });
});
displayProducts(products);