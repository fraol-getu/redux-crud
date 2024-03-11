import React from 'react'
import '../style/Create.css'
import { setCreate } from '../redux/actions/createSlicer'
import { useDispatch } from 'react-redux'
const Create = () => {
 
  const dispatch = useDispatch()
  
 
  return (
    <form onSubmit={() => dispatch(setCreate({name:'', email:''}))}>
     <div className="create-container">
      <div className="input-card">
      <input className='create-input' type='text' />
      <input className='create-input' type="text" />
      <button>submit</button>
      </div>
     </div>



    </form>
  )
}

export default Create