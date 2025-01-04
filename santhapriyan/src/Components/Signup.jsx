import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function signup(event) {
        event.preventDefault();
        try {
            var req = await axios.post("http://localhost:3001/signup", {
                fname: fname,
                lname: lname,
                email: email,
                password: password
            });
            console.log(req);
            navigate('/login');
        } catch (error) {
            console.error("There was an error signing up!", error);
        }
    }

    return (
        <section>
            <form onSubmit={signup}>
                <label>FName :</label>
                <input type="text" placeholder="Enter your fname" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} required /><br /><br />

                <label>LName :</label>
                <input type="text" placeholder="Enter your lname" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} required /><br /><br />

                <label>Email :</label>
                <input type="email" placeholder="Enter your email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />

                <label>Password :</label>
                <input type="password" placeholder="Enter your password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />

                <button type="submit">Signup</button>
            </form>
        </section>
    );
};

export default Signup;