import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReadData } from '../redux/actions/userSlicer'
import { useParams } from 'react-router-dom';

const Read = () => {

     const {id} = useParams()
    const dispatch = useDispatch()
    const [singleData] = useSelector(state => state.user.data?.filter(user => user?.id === id));

    useEffect(() => {
        dispatch(ReadData())
    })
    return (
      <div>
        
  <div>
   <p>{singleData.id}</p>
   <p>{singleData.name}</p>
   <p>{singleData.email}</p>
  </div>


  </div>
  )
}

export default Read