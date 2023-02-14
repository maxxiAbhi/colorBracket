import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import RecipeCards from '../Components/RecipeCards'

function Recipe() {
  const [recipess, setRecipes] = useState([]);
  const BASE_URL = process.env.REACT_APP_BACKEND_URL
  const navigate = useNavigate()
  const getRecipes = async () => {
    const token = localStorage.getItem('jwt-token')
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'authorization': token
        }
      }
      const res = await axios.get(`${BASE_URL}api/getAllRecipe`, config)
      if (res.status === 200) {
        setRecipes(res.data.data)
      } else {
        navigate('/')
      }
    } catch (error) {
      navigate('/')
    }
  }
  useEffect(() => {
    getRecipes()
  }, [])
  console.log(recipess)
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {
            recipess?.map((data) => {
              return <RecipeCards key={data._id} image={data.image} name={data.name} authorname={data.author[0].name} recipeId={data._id} />
            })
          }


        </div>
      </div>
    </>
  )
}

export default Recipe