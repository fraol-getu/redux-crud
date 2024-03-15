import React, { useState } from 'react'
import '../style/Create.css'
import { setCreate , handleSubmit} from '../redux/actions/createSlicer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Create = () => {
 const [inputdata, setInputData] = useState(
  {name:'', email:''})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmitForm = async (event) => {
    event.preventDefault(); // Prevent default form submission
     dispatch(handleSubmit(inputdata))
     navigate("/"); 
     alert("Data posted successfully")
    }
 
  return (
    <form onSubmit={handleSubmitForm}>
     <div className="create-container">
      <div className="input-card">
      <input className='create-input' required type='name' onChange={e => setInputData({...inputdata, name: e.target.value})} />
      <input className='create-input' required type="email" onChange={e => setInputData({...inputdata, email: e.target.value})} />
      <button>submit</button>
      </div>
     </div>



    </form>
  )
}

export default Create