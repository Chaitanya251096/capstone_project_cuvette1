import React,{ useState} from 'react'
import styles1 from './Home.module.css';
import {useNavigate} from 'react-router-dom'

export default function Home() {

const navigate = useNavigate()
const [nameInput, setNameInput] = useState('')
const [userNameInput, setUserNameInput] = useState('')
const [emailInput, setEmailInput] = useState('')
const [mobileInput, setMobileInput] = useState('')
const [checkInput, setCheckInput] = useState(false)
const [errorText, setErrorText] = useState('')
const [errorText1, setErrorText1] = useState('')
const [errorText2, setErrorText2] = useState('')
const [errorText3, setErrorText3] = useState('')
const [errorText4, setErrorText4] = useState('')



const handle = () => {
    localStorage.setItem("name",JSON.stringify(nameInput))
    localStorage.setItem("username",JSON.stringify(userNameInput))
    localStorage.setItem("Email",JSON.stringify(emailInput))
    localStorage.setItem("mobile",JSON.stringify(mobileInput))
    localStorage.setItem("check",JSON.stringify(checkInput))

}




const validateForm = () =>{

    let valid = true
    let isError = false
    if(nameInput.length <= 0){
        setErrorText('name input required');
        valid = false
        isError = true
    }
    let isError1 = false
    if(userNameInput.length <= 0){
        setErrorText1('username input required');
        valid = false
        isError1 = true
     
    }
    let isError2 = false
    if(emailInput.length <= 0){
        setErrorText2('email input required');
        valid = false
        isError2 = true
       
    }
    let isError3 = false
    if(mobileInput.length <= 0){
        setErrorText3(' valid mobile input required');
        valid = false
        isError3 = true
       
    }
    let isError4 = false
    if(!checkInput){
        setErrorText4('please check the check box');
        valid = false
        isError4 = true
       
    }
    if(valid){
        
        navigate("/Genre");
    }
    
   

    return isError;
    return isError1;
    return isError2;
    return isError3;
    return isError4;


    
 
   
    
}



const handleChange = (e) =>{
    setNameInput(e.target.value)
}

const handleChange1 = (e) =>{
    setUserNameInput(e.target.value)
}

const handleChange2 = (e) =>{
    setEmailInput(e.target.value)
}

const handleChange3 = (e) =>{
    setMobileInput(e.target.value)
}

const handleChange4 = (e) =>{
    setCheckInput(e.target.checked)
}




  return (
    <>
    <div className={styles1.Container}>
        <div className={styles1.PartOne}>
            <div className={styles1.PartOne_Heading}>
            <h1>Discover new things on Superapp</h1>
            </div>
        </div>

        <div className={styles1.PartTwo}>
           <div><h1 className={styles1.superApp}>Super app</h1></div> 
            <h3>Create your new account</h3>
            <form onSubmit={(e)=>{
                e.preventDefault();
                
                // form validate
               if(validateForm()){
                
                return
               }
               
               
                

               

                //make api



                const obj ={
                    name: nameInput,
                    username: userNameInput,
                    email: emailInput,
                    mobile: mobileInput,
                checkbox: checkInput
                }

                console.log(obj)

                setNameInput("")
                setUserNameInput("")
                setEmailInput("")
                setMobileInput("")
                setCheckInput(false)
                setErrorText("")
                setErrorText1("")
                setErrorText2("")
                setErrorText3("")
                setErrorText4("")
                


            }}>
            <section>
                <input type="text" className={styles1.name} placeholder=' Name' value={nameInput} onChange={handleChange}/>
                <p style={{color: 'red'}}>{errorText}</p>
                
            </section>
            <section>
                <input type="text"  className={styles1.name} placeholder=' Username' value={userNameInput} onChange={handleChange1} />
                <p style={{color: 'red'}}>{errorText1}</p>
            </section>
            <section>
                <input type="email"  className={styles1.name} placeholder=' Email' value={emailInput} onChange={handleChange2}/>
                <p style={{color: 'red'}}>{errorText2}</p>
            </section>
            <section>
                <input type="text" className={styles1.name} placeholder=' Mobile' value={mobileInput} onChange={handleChange3}/>
                <p style={{color: 'red'}}>{errorText3}</p>
            </section>
            <section>


            <input type="checkbox" value={checkInput} className={styles1.checkbox} onChange={handleChange4}/>
            <label htmlFor="">  Share my registration data with Superapp</label>
            <p style={{color: 'red'}}>{errorText4}</p>
                
            </section>
            <section>
              <button className={styles1.SIGN_UP} onClick={handle}>SIGN UP</button>

            
            </section>
            <div className={styles1.termsDiv}>
            <p>By clicking on Sign up. you agree to Superapp <a href="">Terms and Conditions of Use</a></p>

            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href="">Privacy Policy</a></p>
            </div>
    
            </form>


            
        </div>

    </div>
   
    </>
  )
}
