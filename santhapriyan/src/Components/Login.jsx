import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            var req = await axios.post("http://localhost:3001/login", {
                email: email,
                password: password
            });
            console.log(req);
            if (req.data.isLoggedIn) {
                navigate('/usememo');
            } else {
                alert(req.data.message);
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email :</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br /><br />

                <label>Password :</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br /><br />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;