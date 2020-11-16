import React, { useState } from 'react';
import api from '../../services/api'

//Import components
import Header from '../Home/header';

export default function Login({ history }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async evt => {
        evt.preventDefault();
    
        const response = await api.post('/login', { email, password })
        const userId = response.data._id || false;

        if (userId) {
            localStorage.setItem('user', userId)
            history.push('/dashboard')
        } else {
            const { message } = response.data
            console.log(message)
        }
    }

    return (
        <>
        <Header />
        <section className='full-box'>
            <h2>Login:</h2>
            <p>Please <strong>Login</strong> into your account</p>
            <form onSubmit={handleSubmit}>
                    <input type="email" name="email" id="email" placeholder="Your email" onChange={evt => setEmail(evt.target.value)} />
                    <input type="password" name="password" id="password" placeholder="Your password" onChange={evt => setPassword(evt.target.value)} />
                <button>Submit</button>
            </form>
        </section>
        </>
    );
}