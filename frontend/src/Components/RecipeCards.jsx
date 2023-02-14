import React from 'react'
import { Link } from 'react-router-dom'

function RecipeCards({image,name,authorname,recipeId}) {
    const BASE_URL = process.env.REACT_APP_BACKEND_URL
    return (
        <>
            <div className="col-md-4 mb-3">
                <div className="card h-50">
                    <a>
                        <img src={`${BASE_URL}uploads/${image}`} className="card-img-top" alt="Product" />
                    </a>
                    <div className="card-body px-2 pb-2 pt-1">
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="h4 text-primary">Recipe Name : {name}</p>
                            </div>
                            <div>
                                <a className="text-secondary lead" data-toggle="tooltip" data-placement="left" title="Compare">
                                    <i className="fa fa-line-chart" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <p className="mb-0">
                            <strong>
                                <a  className="text-secondary">Author Name : {authorname}</a>
                            </strong>
                        </p>
                        <div className="d-flex justify-content-between">
                            <div className="col px-0">
                                <Link to={`/recipe/${recipeId}`} className="btn btn-outline-primary btn-block">
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeCards