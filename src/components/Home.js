import React,{useState} from 'react'
import Homestyles from './Home.module.css';

export default function Home() {

const [nameInput, setNameInput] = useState('')
const [userNameInput, setUserNameInput] = useState('')
const [emailInput, setEmailInput] = useState('')
const [mobileInput, setMobileInput] = useState('')


  return (
    <>
    <div className={Homestyles.Container}>
        <div className={Homestyles.PartOne}>
            <div className={Homestyles.PartOne_Heading}>
            <h1>Discover new things on Superapp</h1>
            </div>
        </div>

        <div>
            <h1>Super app</h1>
            <h3>Create your new account</h3>
            <form action="">
            <section>
                <input type="text" />
            </section>
            <section>
                <input type="text" />
            </section>
            <section>
                <input type="text" />
            </section>
            <section>
                <input type="text" />
            </section>
            <section>


            <input type="checkbox" />
            <label htmlFor="">Share my registration data with Superapp</label>
                
            </section>
            <section>
              <button>SIGN UP</button>

            
            </section>

            <p>By clicking on Sign up. you agree to Superapp <a href="">Terms and Conditions of Use</a></p>

            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href="">Privacy Policy</a></p>
          
    
            </form>


            
        </div>

    </div>
   
    </>
  )
}
