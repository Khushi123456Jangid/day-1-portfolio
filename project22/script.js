let searchInput=document.getElementById('searchInput');
let userList=document.getElementById('userList');
let loadingMessage=document.getElementById('loadingMessage');
let errorMessage=document.getElementById('errorMessage');
let emptyState=document.getElementById('emptyState');
let users=[];
function loadUsers(){
    loadingMessage.style.display="block";
    errorMessage.style.display="none";
    fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
        if(!response.ok){
            throw new Error("Failed to load users");
        }
        return response.json();
    }).then(function(data){
        users=data;
        loadingMessage.style.display="none";
        displayUsers(users);
    }).catch(function(error){
        loadingMessage.style.display="none";
        errorMessage.style.display="block"
        console.log(error)
    });
}
function displayUsers(userArray){
    userList.innerHTML="";
    if(userArray.length===0){
        emptyState.style.display="block";
        return;
    }
    emptyState.style.display="none";
    userArray.forEach(function(user){
        let card=document.createElement("div");
        card.className="user-card";
        let firstLetter=user.name.charAt(0).toUpperCase();
        card.innerHTML=`
            <div class="user-avatar">${firstLetter}</div>
            <h3>${user.name}</h3>
            <p class="username">@${user.username}</p>
            <div class="user-info">
                <p><i class="fa-solid fa-envelope"></i> ${user.email}</p>
                <p><i class="fa-solid fa-phone"></i> ${user.phone}</p>
                <p><i class="fa-solid fa-globe"></i> ${user.website}</p>
                <p><i class="fa-solid fa-building"></i> ${user.company.name}<p>
            </div>
        `;
        userList.appendChild(card);
    });
}
searchInput.addEventListener("input",function(){
    let searchText=searchInput.value.trim().toLowerCase();
    let filteredUsers=users.filter(function(user){
        return user.name.toLowerCase().includes(searchText);
    });
    displayUsers(filteredUsers);
})
loadUsers();