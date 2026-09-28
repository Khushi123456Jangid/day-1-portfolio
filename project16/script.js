// get html elements
let productList=document.getElementById('productList');
let productCount=document.getElementById('productCount');
let filterButtons=document.querySelectorAll('.filter-button');
let sortButtons=document.querySelectorAll('.sort-button');
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
// display all products
displayProducts(products);
// product display function
function displayProducts(productArray){
    productList.innerHTML="";
    // update count
    productCount.textContent=productArray.length+(productArray.length===1?" Product":" Products");
    if(productArray.length===0){
        productList.innerHTML=`
            <div class="empty-state">
                <h3>No products found</h3>
                <p>Try another category.</p>
            </div>
        `;
        return;
    }
    productArray.forEach(function(product){
        let card=document.createElement('article');
        card.className="product-card";
        card.innerHTML=`
            <div class="product-image"><i class="${product.icon}"></i></div>
            <span class="product-category">${product.category}</span>
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-bottom">
                <span class="product-price">$${product.price}</span>
                <span class="product-rating"><i class="fa-solid fa-star"></i> ${product.rating}</span>
            </div>
        `;
        productList.appendChild(card);
    });
}
// category filter
filterButtons.forEach(function(button){
    button.addEventListener("click",function(){
        // remove active class
        filterButtons.forEach(function(btn){
            btn.classList.remove("active");
        });
        // add active
        button.classList.add("active");
        // get category
        let category=button.dataset.category;
        // filter products
        if(category==="All"){
            displayProducts(products)
        }
        else{
            let filterProducts=products.filter(function(product){
                return product.category===category
            });
            displayProducts(filterProducts);
        }
    });
});
// sort buttons
sortButtons.forEach(function(button){
    button.addEventListener("click",function(){
        let sortType=button.dataset.sort;
        let sortedProducts=[...products];
        // low to high
        if(sortType==="Low"){
            sortedProducts.sort(function(a,b){
                return(
                    a.price-b.price
                );
            })
        }
        else if(sortType==="High"){
            sortedProducts.sort(function(a,b){
                return(b.price-a.price);
            })
        }
        displayProducts(sortedProducts);
    });
});