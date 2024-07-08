import React from 'react'
import { Link, useFetcher, useLocation } from 'react-router-dom'

const Singlerecipe = () => {
    let location = useLocation()
    console.log(location.state)
    console.log(location.state.recipe.label)
    console.log(location.state.recipe.image)
    
    
  return (
    <div>
     
      <div className='row mt-3'>

        <div className="col-md-6 d-flex justify-content-center">
          <img className='img-fluid' src={location.state.recipe.image} alt="" />
        </div>
        <div className="col-md-6 d-flex align-items-center flex-column">
          <h3>{location.state.recipe.label}</h3> 
          <h4>Meal Type: {location.state.recipe.mealType}</h4>

          <div className="row  d-flex justify-content-center gap-3">
            <div className="col-2 bg-warning">
            <p>{location.state.recipe.totalNutrients.CA.label}</p>
            <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)} mg</p>
            </div>

            <div className="col-2 bg-warning">
            <p>{location.state.recipe.totalNutrients.FAT.label}</p>
            <p>{Math.ceil(location.state.recipe.totalNutrients.FAT.quantity)} mg</p>


            </div>
            <div className="col-2 bg-warning">
            <p>{location.state.recipe.totalNutrients.PROCNT.label}</p>
            <p>{Math.ceil(location.state.recipe.totalNutrients.PROCNT.quantity)} mg</p>
            </div>
            <div className="col-2 bg-warning">
            <p>{location.state.recipe.totalNutrients.SUGAR.label}</p>
            <p>{Math.ceil(location.state.recipe.totalNutrients.SUGAR.quantity)} mg</p>


            </div>
            <Link  to={location.state.recipe.url} className='btn btn-success mt-3'> How to make</Link>




            


            </div>

        </div>

          

      {/* <div className="row2">
        {location.state.recipe.ingredients.map((ele,index)=>{
            return <p>{ele.text}</p>

        })}
      </div> */}
      </div>

      <div className='row d-flex ' >

      <div className='col-md-6 mt-5  d-flex flex-column align-items-center gap-5'>
        <h3>
          Ingredients
        </h3>
        
          <ul className='listOne'>
            {location.state.recipe.ingredients.map((ele,index)=>{
              return  <li>{ele.text}</li> 
            })}
          
          </ul>
            

      </div>

      <div className='col-md-6 mt-5 d-flex flex-column align-items-center gap-5 '>
        <h3>Health Labels</h3>
        <ul>
          
            {location.state.recipe.healthLabels.map((eles,indexs)=>{
              return <li>{eles}</li>
            })}
          
        </ul>


      </div>

      </div>

      

    </div>
    
  


  )
}

export default Singlerecipe
