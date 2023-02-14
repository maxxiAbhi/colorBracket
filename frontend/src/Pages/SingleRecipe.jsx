import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SingleRecipe() {
  const [recipe,setRecipe]=useState()
  const navigate = useNavigate()
  let { rid } = useParams();
  const BASE_URL = process.env.REACT_APP_BACKEND_URL
  const getRecipe=async()=>{
    const token = localStorage.getItem('jwt-token')
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'authorization': token
        }
      }
      const res = await axios.post(`${BASE_URL}api/getRecipeById`,{resid:rid}, config)
      if (res.status === 200) {
        setRecipe(res.data.data)
      }
    } catch (error) {
      navigate('/')
    }
  }
  useEffect(()=>{
    getRecipe()
  },[])
  console.log(recipe)
  return (
    <>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <img src={`${BASE_URL}uploads/${recipe[0]?.image}`} />
          <h2>Recipe Name : {recipe[0]?.name}</h2>
          <h3>Author : {recipe[0]?.author[0].name}</h3>
          <p>{recipe[0]?.description}</p>
          <h3>Ingredients</h3>
          <div>
          <ul>
            {
             recipe[0]?.ingrident.length>0? recipe[0]?.ingrident?.map((data)=>{
                return (<li key={data.id}><p>Item : {data.items} amount : {data.amount} unit:{data.unit}</p></li>)
              }):null
            }
            </ul>
          </div>
          <h3>Steps</h3>
          <div>
            <ul>
            {
           recipe[0]?.process.length>0?recipe[0]?.process?.map((data)=>{
                return (<li key={data.id}> {data.steps} </li>)
              }):null
            }
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SingleRecipe