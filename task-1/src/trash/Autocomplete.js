import React, { useState } from 'react'
// import ".../Main.css"

const movieItems = [
  {
    id: 0,
    title: "Titanic",
    description: "A movie about love",
  },
  {
    id: 1,
    title: "Dead Poets Society",
    description: "A movie about poetry and the meaning of life",
  },
  {
    id: 2,
    title: "Terminator 2",
    description: "A robot from the future is sent back in time",
  },
  {
    id: 3,
    title: "Alien 2",
    description: "Ripley is back for a new adventure",
  },
  {
    id: 4,
    title: "Bahubali",
    description: "A movie about war",
  },
  {
    id: 5,
    title: "Everything everywhere",
    description: "A movie about meaning of life",
  },
  {
    id: 6,
    title: "Signal",
    description: "A robot from the past is sent back in time",
  },
  {
    id: 7,
    title: "annabelle",
    description: " adventure",
  },
];

const Autocomplete = (props) => { 
  const [movie,setMovie] =useState("")

  const handleInput=(e)=>{
    setMovie(e.target.value)
  }

  const onSearch=(searchTerm)=>{
    setMovie(searchTerm)
  }

  const filteredItems = movieItems.filter((item)=>{
    const searchTerm = movie.toLocaleLowerCase()
    const movieTitle = item.title
    if(movieTitle.toLowerCase().includes(searchTerm)){ 
      return  searchTerm &&  movieTitle  // return item directly
    }
  }).map((eachItem)=>{
    return  <div className='items' key={eachItem.id} onClick={()=>onSearch(eachItem.title)}>{eachItem.title}</div>
  })

  return (
    <div> 
      <h3>Search for suggestions</h3>
      <div>
        <input 
          className='input-select'
          type='search' 
          value={movie} 
          onChange={handleInput} 
          placeholder='search here to show results' />
      </div>
      {   
      // movie === list--> not show div : show div
      movie ?
          <div>
          {filteredItems.length !==0 ? filteredItems:<span className='error'>no items found</span>}
          </div>
          : null
         
      }
      
      {/* <p> options are : {} </p> */}
    </div>
  )
}



// -----------------------------------------------------------------------------------///

// const[selectedItems,setSelectedItems] = useState([])


//   const handleOptionItem=(option)=>{
//       if(selectedItems.includes(option)){
//         setSelectedItems(selectedItems.filter((selected)=>selected.label !==option))
//       }else{
//         setSelectedItems([...selectedItems,option])
//       }
//   }

//   const filteredItems = data.filter((item)=>{
//     const searchItem = item.label.toLocaleLowerCase()
//     const carName = input.toLowerCase()
//     if(searchItem.includes(carName)){
//       return searchItem && carName 
//     }
//   }).map((eachCar)=>{
//     return(
//       <ul>
//         <li key={eachCar.label} 
//             className="list-items"
//             onClick={()=>handleOptionItem(eachCar.label)}
//         >
//           <span> {eachCar.label}  </span>
//           {selectedItems.includes(eachCar.label) && <span>✔️</span> }
//         </li>
//       </ul>
//     )
//   })
//     // item.label.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
  
//   return(
//     <div>

//       <p> {selectedItems.join(", ") } <button > ❌ </button> </p>

//       <input 
//         type="search" 
//         placeholder="type to search"
//         value={input} 
//         onChange={(e)=>setInput(e.target.value)} 
//         className="input-select"
//       />

//       {input ?  
//       <div>
//         {filteredItems.length!==0 ?filteredItems : <span>no items</span> } 
//       </div> 
//       :null }


//     </div>
//   )




// ------------------------------------------------------------------------------------///








export default Autocomplete
