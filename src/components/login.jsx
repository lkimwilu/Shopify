import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
   const [username, setUsername] = useState ("")
   const [password, setPassword] = useState ("")
//    const [formdata, setFormData] = useState ({
//      username: "",
//      password: "",
//    })

   const handleChangeUsername = (e) => {
   setUsername (e.target.value)
   }

   const handleChangePassword = (e) => {
    setPassword (e.target.value)
    }
   const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post("https://fakestoreapi.com/auth/login",{
            username: username,
            password: password,
        })
        localStorage.setItem("token", response?.data?.token)
        console.log("response", response?.data?.token);

   }
    return (
        <div className="container">
            <div className="image-container">
                <img
                    src="https://plus.unsplash.com/premium_photo-1683140435505-afb6f1738d11?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Placeholder"
                    className="image"
                />
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <label className="label">Username:</label>
                        <input type="text" value={username} onChange={handleChangeUsername}className="input" />
                    </div>
                    <div className="form-input">
                        <label className="label">Password:</label>
                        <input type="password" value={password} onChange={handleChangePassword} className="input" />
                    </div>
                    <button type="submit" className="submit-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
