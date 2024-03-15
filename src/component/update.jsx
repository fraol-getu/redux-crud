

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { handleUpdate } from '../redux/actions/updateSlicer';

const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [singleData] = useSelector(state => state.user.data?.filter(user => user?.id === id));

  

  const [inputData, setInputData] = useState({
    id: singleData.id,
   name: singleData.name,
   email: singleData.email,
 });

  const handleUpdateForm = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(handleUpdate({inputData, id}));
      navigate("/");
      alert('Data updated successfully');
    } catch (error) {
      console.error('Error updating data:', error);
      
    } 
  };

  return (
    <form onSubmit={handleUpdateForm}>
      <div className="create-container">
        <div className="input-card">
        
        
          <input
             name='id'
            className='create-input'
            value={inputData.id}
            type='text' // Use type='text' to display ID as read-only
            disabled // Disable input as ID is not editable
          />
        
          <input
            name='name'
            className='create-input'
            value={inputData.name}
            type='name'
            onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
          />

           
          <input
            name='email'
            className='create-input'
            value={inputData.email}
            type="email"
            onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
          />

          <button>update</button>
        </div>
      </div>
    </form>
  );
};

export default Update;
