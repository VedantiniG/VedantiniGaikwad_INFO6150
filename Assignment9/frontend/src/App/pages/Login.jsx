import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import '../css/Login.css';

export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:3000/user/login', {email: email, password: password});
            console.log(response);
            setLogin(true);
        } catch ( error ) {
            console.log(login)
            console.log(error)
        }
    }

    return (
        <>
            <h2 className='card-header'>Login</h2><br/>
            <Form onSubmit={(e) => handleSubmit(e)}>
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group> <br/>

                {/* submit button */}
                <Button 
                    variant="primary" 
                    type="submit"
                    className='button'
                    onClick={(e) => handleSubmit(e)}
                >
                    Submit
                </Button>
            </Form>
            {login ? (
                    <p className="text-success">You Are Logged in Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Logged in</p>
                )
            }
        </>
    )
}