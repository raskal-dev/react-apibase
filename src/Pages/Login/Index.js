import React, { useEffect, useState } from 'react';
import '../../assets/Css/login.css';
import AuthServices from '../../Services/Auth.services.js';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()

    useEffect(() => {
        const labels = document.querySelectorAll('.form-control label')

        labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, index) => `<span style="transition-delay:${index * 40}ms">${letter}</span>`)
            .join('')
        })

        // $('.btn').on('click', function() {
        //     var $this = $(this);
        //   $this.button('loading');
        //     setTimeout(function() {
        //        $this.button('reset');
        //    }, 8000);
        // });
        
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            email:email,
            password:password
        }
        AuthServices.login(data)
        .then(res => {
            localStorage.setItem('token', res.data.data);
            navigate('/home');
        }) 
        .catch(err => {
            console.log(err);
        })
    }
  return (
    <div className="container">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <input type="text" required name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Email</label>
            </div>
            <div className="form-control">
                <input type="password" required name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label>Password</label>
            </div>
            <button type='submit' className="btn">Login</button>
            <p className="text">Don't have an account? <a href="#">Register</a></p>
        </form>
    </div>
  )
}

export default Login;