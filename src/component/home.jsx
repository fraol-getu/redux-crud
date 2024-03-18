import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchData } from '../redux/actions/userSlicer'
import { useDispatch, useSelector } from 'react-redux'
import '../style/Home.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { handleDelete } from '../redux/actions/createSlicer'
const Home = () => {
   const dispatch = useDispatch()
  const data = useSelector((state)=> state.user)
  // const { id } = useParams()
  const navigate = useNavigate()
  const [id, setId] = useState(null)
 

 


   useEffect(() => {
    dispatch(fetchData())
    
 }, [])
 
 const handlDeleteData = (id) => {
  const confrim = window.confirm("'Are you sure you want to delete this record?'")
  if(confrim) {
    console.log(id)
    dispatch(handleDelete(id))
alert("record deleted") 
 dispatch(fetchData())
 }}

 
// function handlDeleteData() {
//   const confrim = window.confirm("Do you like to Delete");
//   if (confrim) {
//     axios.delete('http://localhost:3030/users/'+ id).then((res) => {
//       alert("record deleted");
//       navigate("/")
//     });
//   }
// }
     
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
     <Link to={`/read/${user.id}`}> <button>read</button></Link>
     <Link to={`/update/${user.id}`}> <button>update</button></Link>
      <button onClick={e =>handlDeleteData(user.id)}>Delate</button>
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