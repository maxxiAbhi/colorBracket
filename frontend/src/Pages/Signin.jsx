import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
    const [username ,setUserName]=useState('')
    const [password,setPassword] = useState('')
    const BASE_URL=process.env.REACT_APP_BACKEND_URL
    const navigate=useNavigate()
    const submitForm=async(e)=>{
        e.preventDefault()
      try {
         const res= await axios.post(`${BASE_URL}api/signin`,{username,password})
         if(res.status===200){
            localStorage.setItem('jwt-token',res.data.token)
            navigate('/recipe')
         }
      
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    
    return (
        <>
            <div className='container '>
                <div className='row justify-content-center mt-5'>
                    <div className='col-md-4 '>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">User Id</label>
                                <input type="email" className="form-control" vlaue={username} onChange={(e)=>setUserName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={(e)=>submitForm(e)}>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin