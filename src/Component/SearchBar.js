// import React, {useState} from 'react';
// import './SearchBar.css';

// function SearchBar() {
//     const [searchData, setSearchData] = useState(null);

//     const searchSchool = () => {
//         fetch("http://localhost:8000/schoolInfo/"+searchData).then((data)=>{
//             data.json().then((resp)=>{
//                 console.log("resp",resp);
//             })
//         })
//     }


//     return (
//     <div>
//         <div className="searchbar-box">
//             <input
//                 type='text'
//                 className="search-input"
//                 placeholder="Enter City" 
//                 onChange={(event) => setSearchData(event.target.value)} />
//             <input
//                 type='text'
//                 className="search-input"
//                 placeholder="Enter Board" />
//             <input
//                 type='text'
//                 className="search-input"
//                 style={{ width: "36%" }}
//                 placeholder="Enter School Name" />
//                 <button className="searchbar-button" onClick={searchSchool}>Search</button>
//                         </div>
                        
//                         </div>

//     )
// }

// export default SearchBar;