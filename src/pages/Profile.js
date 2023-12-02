import React, { useState, useEffect } from "react";
import Home from "./Home";
import Genre from "./Genre";
// import {  json } from "react-router-dom";
import styles3 from "./profile.module.css";
import Weather from "./weather";
import News from "./news";
import {useNavigate} from 'react-router-dom'


const Profile = () => {
  const [nameValue, setNameValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [mobileValue, setMobileValue] = useState("");
  const [genre1Value, setGenre1Value] = useState("");
 
  const navigate = useNavigate()
  

  

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("name"));
    const data1 = JSON.parse(localStorage.getItem("username"));
    const data2 = JSON.parse(localStorage.getItem("Email"));
    const data3 = JSON.parse(localStorage.getItem("mobile"));
    const data4 = localStorage.getItem(["categoriesOfUsers"]);
    const genre1 = JSON.parse(data4);

    const mygenreList = genre1.map((name) => <p className={styles3.genreItem}>{name}</p>)
    

    if (data) {
      setNameValue(data);
    }
    if (data1) {
      setUsernameValue(data1);
    }
    if (data2) {
      setEmailValue(data2);
    }
    if (data3) {
      setMobileValue(data3);
    }
    if (mygenreList) {
      setGenre1Value(mygenreList);
    }
     }, []);


  const Click =()=>{
   navigate('/Movies')
  }


  return (
    
    <div className={styles3.main}>
      <div className={styles3.left}>
        
      <div className={styles3.upperleft}>
      
        <div className={styles3.profile}>
       
       
          <div className={styles3.idcard}>
            <div className={styles3.profilephoto}>
               
             
             
            </div>
            <div className={styles3.regidetails}>
              <p>{nameValue}</p>
              <p>{usernameValue}</p>
              <p>{emailValue}</p>
              <p>{mobileValue}</p>
            </div>
          </div>
          <span className={styles3.chiptitle}>Genre Selected : </span>
          <div className={styles3.genre}>
            {genre1Value} 
          </div>
        </div>
        <div className={styles3.textareabox}>
          <h1 className={styles3.textareahead}>My Notes</h1>
          <textarea className={styles3.textarea}>
            
          </textarea>
        

        </div>
      </div>

      
      </div>
      <div className={styles3.weather}>
        <Weather/>
        <News/>
      <div className={styles3.BrowseDiv}>
        <button className={styles3.Browse} onClick={Click}>
          Browse
        </button>
        </div>
      </div>
      </div>
  );
};

export default Profile;
