import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import loginbg from '../../../images/login_bg.jpg'
import useAuth from '../../../hooks/useAuth';



const Login = () => {

    const [loginData, setLoginData] = useState({});
    const {googleSignIn, userLogin} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const {error} = useAuth()

     const loginBackground = {
    background : `url(${loginbg})`,
    backgroundSize: 'cover'
   
     } 

    const handleOnBlur = event =>{
     const field = event.target.name;
     const value = event.target.value;

     const newLoginData = {...loginData};
     newLoginData[field] = value;
     setLoginData(newLoginData)
     }

     const handleGoogleSignIn = () =>{
        googleSignIn(history,location)
     }

     const handleLoginSubmit = event =>{
        userLogin(loginData.email, loginData.password, history, location)
        event.preventDefault();
     }
    return (
        <>
          
         <div style={loginBackground} className="login-bg">
            
            </div>

            <div className="login-field">

                <h2>Login</h2>
                
                 <form onSubmit={handleLoginSubmit } 
                style={{color:'white'}}
                >
                <input 
                onBlur={handleOnBlur}
                type='email'
                className='input-filed'
                name="email"
                placeholder='Enter Email'
                required 
                 />
                   <br />
                <input 
                onBlur={handleOnBlur}
                placeholder='Enter Password'
                type='password'
                className='input-filed'
                name="password"
                required 
                />

                   <br />

                 <Button 
         
                 type="submit" 
                 variant="warning">Login</Button>
                </form>  

                <br />

                <h6 style={{color:"red"}}>{error} </h6>
                <p className="alternate-msg">New User ? <Link style={{textDecoration:'none', color:'orange'}} to="/register">Please Signup first</Link> </p> 
                <p>----- OR -----</p>
                <Button onClick={handleGoogleSignIn} variant="danger"><i className="fab fa-google"></i>Google Sign In</Button>

                
 
            </div> 
        </>
    );
};

export default Login;