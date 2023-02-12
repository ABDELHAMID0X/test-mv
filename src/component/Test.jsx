import React, { useState } from "react";

const Test = () => {
  // The useNavigate hook allows navigation to a different route within the app


  // State to keep track of the search term entered in the search bar
 

  // State to keep track of the TV shows that match the search term
  const [tv, setTv] = useState([]);

  const [value, setValue] = useState("");
  const [icml , seticml] = useState('');
  // State to keep track of the visibility of the dropdown menu
  
  // Fetch data from the TV Maze API using the search term
  fetch(`
  https://api.themoviedb.org/3/search/multi?api_key=08399bf740a4d93d9e75e8a3a6917e88&language=en-US&query=${icml}&page=1&include_adult=false`)
    .then((response) => {
      // Convert the response to JSON
      return response.json();
    })
    .then((data) => {
      // Update the state with the TV shows that match the search term
      setTv(data.results);
      // console.log(data)
    })
    .catch((err) => console.error(err));

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && value !== "") {
      seticml(value)
    }
    if(value ===""){seticml(value)}
  };
  const onChange = (event) => setValue(event.target.value);
  const url ='https://image.tmdb.org/t/p/original';
  return (
    <>
        <div className="py-64">
            <input 
              value={value}
              onChange={onChange}
              onKeyDown={handleKeyDown} type="text" />
        </div>

        <div >
            {
                tv
                .map((t,index)=>{
                    return(
                        <div>
                            <p key={index}>{t.name}</p>
                            <img src={url +t.poster_path} alt="" />
                        </div>
                        
                    )
                })
            }    
        </div>
    </>
  );
};

export default Test;
