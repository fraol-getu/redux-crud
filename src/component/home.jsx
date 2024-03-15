import axios from 'axios'
import React, { useEffect } from 'react'
import { fetchData } from '../redux/actions/userSlicer'
import { useDispatch, useSelector } from 'react-redux'
import '../style/Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
   const dispatch = useDispatch()
  const data = useSelector((state)=> state.user)
 useEffect(() => {
    dispatch(fetchData())
 }, [])
 
     
 return (
 <div className='home'>
  <h1>Crud App</h1>
  <Link to='/create'> <button>Create</button></Link>
   <div className='home-first'>
   <div className='home-second'>
    <h2>Id</h2>
    <h2>Name</h2>
    <h2>Email</h2>
    <h2>Action</h2>
   </div>
{
  data.isloading ? <h1>...loading</h1> :
  data.data.map((user, i)=> {
  
   return (
   <div className='home-second'  key={i}>
   <p>{user.id}</p>
    <p>{user.name}</p>
    <p>{user.email}</p>
     <div className='home-button'>
     <Link to='/read'> <button>read</button></Link>
     <Link to={`/update/${user.id}`}> <button>update</button></Link>
     <Link to='/delete'> <button>Delate</button></Link>
     </div>
   </div>
   )

  }) 
}
</div>
 </div>

 )

  }

export default Home