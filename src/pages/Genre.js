import React, { useState } from "react";
import styles2 from "./Genre.module.css";
import {useNavigate} from 'react-router-dom'

export default function Genre() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [status,setStatus] = useState('')
  const navigate = useNavigate()
  const genreCategories = [
    { id: 1,  name: "Action", color: "#FF5209" },
    { id: 2, name: "Drama", color: "#D7A4FF" },
    { id: 3, name: "Romance", color: "#148A08" },
    { id: 4, name: "Thriller", color: "#84C2FF" },
    { id: 5, name: "Western", color: "#902500" },
    { id: 6, name: "Horror", color: "#7358FF" },
    { id: 7, name: "Fantasy", color: "#FF4ADE" },
    { id: 8, name: "Music", color: "#E61E32" },
    { id: 9, name: "Fiction", color: "#6CD061" },
    // Add more genre categories with different colors as needed
  ];

 

  
  const handleGenreClick = (genre) => {
    if (!selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleDeleteChip = (genre) => {
    const updatedGenres = selectedGenres.filter(
      (selectedGenre) => selectedGenre !== genre
    );
    setSelectedGenres(updatedGenres);
  };
   
  const clickClick = () => {
    
    if (selectedGenres.length < 3){
      setStatus('Please select atleast 3 Genre');
      
    }
    else{
      
      setStatus('');
      localStorage.setItem("categoriesOfUsers",JSON.stringify(selectedGenres));
      navigate('/Profile');
    }
  }

  return (
    <>
      <div className={styles2.mainback}>
        <div className={styles2.partOne}>
          <div>
            <h1 className={styles2.h1}>Super App</h1>
          </div>
          <div>
            <h1 className={styles2.h2}>
              Choose your entertainment <br /> category
            </h1>
          </div>
          <div className={styles2.selectedgenres} >
            {selectedGenres.map((genre) => (
              <div
                key={genre}
                className={styles2.selectedgenrechip}
                
              >
                {genre}
                <button className={styles2.chipicon} onClick={() => handleDeleteChip(genre)} >✖</button>
              </div>
            ))}
            
          </div>
          <p style={{color:"red"}}>{status}</p>
        </div>
        <div className={styles2.partTwo}>
          <div className={styles2.genretiles}>
            {genreCategories.map((genre) => (
              <div
                key={genre.id}
                className={styles2.genretile}
                style={{ backgroundColor: genre.color,
                        // backgroundImage:genre.image
                         }}
                
                onClick={() => handleGenreClick(genre.name)}
              >
                {genre.name}
              
              </div>
            ))}
          </div>
          <div className={styles2.nextButtondiv}><button className={styles2.nextButton} onClick={clickClick}>NEXT PAGE</button></div>  
          
        </div>

      </div>
    </>
  );
}
