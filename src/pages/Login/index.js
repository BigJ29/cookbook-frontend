import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '../../services/api'

const Login = ({ history }) => {
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
    <div className='log-in'>
      <h2>My account</h2>
      <p style={{ marginBottom: '50px'}}> Please <strong>login</strong> into your account </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;