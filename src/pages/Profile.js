import React, { useState, useEffect } from 'react';
import Home from './Home';
import Genre from './Genre';
import { json } from 'react-router-dom';

const Profile = () => {
  const [nameValue, setNameValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [mobileValue, setMobileValue] = useState('');
  const [genre1Value, setGenre1Value] = useState('');
  const [genre2Value, setGenre2Value] = useState('');
  const [genre3Value, setGenre3Value] = useState('');
  const [genre4Value, setGenre4Value] = useState('');
  const [genre5Value, setGenre5Value] = useState('');
  const [genre6Value, setGenre6Value] = useState('');
  const [genre7Value, setGenre7Value] = useState('');
  const [genre8Value, setGenre8Value] = useState('');
  const [genre9Value, setGenre9Value] = useState('');  
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("name"));
    const data1 = JSON.parse(localStorage.getItem("username"));
    const data2 = JSON.parse(localStorage.getItem("Email"));
    const data3 = JSON.parse(localStorage.getItem("mobile"));
    const data4 =localStorage.getItem("categoriesOfUsers");
    const genre1 =JSON.parse(data4)
    // const genre2 =JSON.parse(data4)
    
    
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
      if (genre1[0]) {
        setGenre1Value(genre1[0]);

      }
      if (genre1[1]) {
        setGenre2Value(genre1[1]);

      }
      if (genre1[2]) {
        setGenre3Value(genre1[2]);

      }
      if (genre1[3]) {
        setGenre4Value(genre1[3]);

      }
      if (genre1[4]) {
        setGenre5Value(genre1[4]);

      }
      if (genre1[5]) {
        setGenre6Value(genre1[5]);

      }
      if (genre1[6]) {
        setGenre7Value(genre1[6]);

      }
      if (genre1[7]) {
        setGenre8Value(genre1[7]);

      }
      if (genre1[8]) {
        setGenre9Value(genre1[8]);

      }
      
      
  }, []);

  return (
    <div>
      <p>{nameValue}</p>
      <p>{usernameValue}</p>
      <p>{emailValue}</p>
      <p>{mobileValue}</p>

      <p>{genre1Value}</p>
      <p>{genre2Value}</p>
      <p>{genre3Value}</p>
      
      <p>{genre4Value}</p>
      <p>{genre5Value}</p>
      <p>{genre6Value}</p>
      
      <p>{genre7Value}</p>
      <p>{genre8Value}</p>
      <p>{genre9Value}</p>

    </div>
  );
};

export default Profile;

