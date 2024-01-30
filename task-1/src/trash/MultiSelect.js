import React, { useState } from 'react';

// import "../Main.css"

// const options = [
//     {
//       "label": "Titanic",
//       // "value": "A movie about love",
//     },
//     {
//       "label": "Dead Poets Society",
//       // "value": "A movie about poetry and the meaning of life",
//     },
//     {
//       "label": "Terminator 2",
//       // "value": "A robot from the future is sent back in time",
//     },
//     {
//       "label": "Alien 2",
//       // "value": "Ripley is back for a new adventure",
//     },
//     {
//       "label": "Bahubali",
//       // "value": "A movie about war",
//     },
//     {
//       "label": "Everything everywhere",
//       // value: "A movie about meaning of life",
//     },
//     {
//       "label": "Signal",
//       // value: "A robot from the past is sent back in time",
//     },
//     {
//       "label": "annabelle",
//       // value: " adventure",
//     },
//   ];

const options = [
  "Mercedes", "Honda", "Tata", "Renault","Suzuki"
];


const MultiSelect = (props) => {
   
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={props.multiselectClass}
      />
      { searchValue ?
      <ul>
        {filteredOptions.map((option) => (
          <li key={option} onClick={() => handleOptionClick(option)} className='list-items'>
            <span>{option}</span>
            {selectedOptions.includes(option) && <span>✔️ </span>}
          </li>
        ))}
      </ul> :null
     }

      {/* {searchValue ? <div> {filteredOptions.length !==0 ? filteredOptions :<span>no items </span>} </div>:null} */}
      <p>Selected options: {selectedOptions.join(" , ")}</p>
    </div>
  );

}

export default MultiSelect;