import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
// import Navbar from '../component/Navbar'

const Home1 = () => {
  let getValue = useRef()
  const [searchValue, setsearchValue] = useState('pizza');

  const [allFood, setAllfood] = useState([]);
  console.log(allFood)


  let getData =async()=>{
    let res = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=e0c1e7a7&app_key=
73238160933dcb92a70344ce41e23a21`);
let data = await res.json();
setAllfood(data.hits);
  }
  useEffect(()=>{
    getData();
  },[searchValue])
  function handleItems(answ){
    console.log(answ)
  }
  function searching(){
    let value = getValue.current.value
    setsearchValue(value)

    console.log(value)
  }
  return  (
    <div className='row d-flex justify-content-center gap-2'>
      <h1>Papa</h1>
      <div className='baba'>
        <input ref={getValue} className='dishes' placeholder='Search..' type="text" />
        <button  onClick={searching} className='pakwaan'>Search</button>
      </div>

        {/* <Navbar/> */}
      
      {allFood.map((ele,indx)=>{
        return <div key={indx} className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.label}</h5>
    <p className={ele.recipe.label}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link state={ele} to="/single" className="btn btn-primary">Go somewhere</Link>
    {/* <button onClick={()=>handleItems(ele)}>Click me</button> */}
  </div>
</div>


        
      })}
    </div>
  )
}

export default Home1
