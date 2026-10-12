import { useState,useEffect } from 'react'
import './App.css'

function App() {
 let [users,setUsers]=useState([])
 let [loading,setLoading]=useState(true)
 let [error,setError]=useState("")
 let [search,setSearch]=useState("")
 useEffect(function(){
  async function fetchUser(){
    try{
      let response=await fetch('https://jsonplaceholder.typicode.com/users')
      if(!response.ok){
        throw new Error("Failed to load data")
      }
      let data=await response.json();
      setUsers(data);
    }
    catch(error){
      setError(error.message())
    }finally{
      setLoading(false)
    }
  }
  fetchUser();
 },[]);
 let filteredData=users.filter(function(user){
  let name=user.name.toLowerCase();
  let searchText=search.toLowerCase();
  return name.includes(searchText);
 })
 if(loading){
  return(
    <h2 className='message'>Loading users...</h2>
  )
 }
 if(error){
  return(
    <h2 className='message'>Error: {error}</h2>
  )
 }
 return(
  <main className='app'>
    <h1>User Directory</h1>
    <p className='subtitle'>Explore users and their contact information.</p>
    <input type="text" value={search} onChange={function(event){
      setSearch(event.target.value)
    }} placeholder='Enter the user name...' className='search-input'/>
    <section className='user-grid'>
      {
        filteredData.length===0?(
          <p className='message'>No matching user found!</p>
        ):(
          filteredData.map(function(user){
            return(
              <article className='user-card' key={user.id}>
                <div className='avatar'>{user.name.charAt(0).toUpperCase()}</div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.address.city}</p>
                <p>{user.company.name}</p>
              </article>
            )
          })
        )
      }
    </section>
  </main>
 )
}

export default App
