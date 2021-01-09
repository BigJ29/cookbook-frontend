import React, { useState, useEffect, useRef } from 'react';
import { Button, Container, Form, Alert } from 'react-bootstrap';
import lottie from 'lottie-web';
import styled from 'styled-components'

import api from '../../services/api'


const CustomCentredContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  height: ${props => props.height}px;
  `;
  // height: ${props => props.height};
    // height: calc(200px - -900px);
    

const TiledCard = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  margin: auto;
  padding: 25px;
  box-shadow: 1px 10px 60px #cdcfd4;
  border-radius: 20px;
  width: 100%;
`;

const Burger = styled.img`
  width: 250px;
`;

const LeftCol = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    display: none;
  }
`;

const RightCol = styled.div`
  width: 100%;
  align-self: center;
`;

const Login = ({ history }) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ containerHeight, setContainerHeight ] = useState(0);
  const container = useRef(null);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    setContainerHeight(windowHeight);
  }, [containerHeight]);


  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require('../../login-cooking.json')
      // path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/salad/salad.json'
    });
  }, [])

  const handleSubmit = async evt => {
    evt.preventDefault();

    const res = await api.post('/login', { email, password })
    const user_id = res.data._id || false;
    const user = res.data.user || false; // tokenised the user using jwt
    const firstName = res.data.firstName || false;
    console.log(res);

    try {
      // if (user && user_id) {
      if (user_id) {
        // localStorage.setItem("user", user);
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("name", firstName);
        history.push('/dashboard')
      } else {
        const { message } = res.data;
        setError(true);
        setErrorMessage(message)
        setTimeout(() => {
          setError(false)
          setErrorMessage('')
        }, 2000)
      }
    } catch (error) {
      setError(true);
      setErrorMessage('Oops! The server returned an error')
    }
  }

  return (
    <CustomCentredContainer height={containerHeight}>
      <TiledCard>
        <LeftCol>
          <h2> <strong>Food</strong>Booklet </h2>
          <p style={{ marginBottom: '50px'}}> 
            Create, collect, and organise all your recipes
          </p>

          {/* <div ref={container} /> */}
        </LeftCol>

        <RightCol>
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
            <Button className='button' type="submit">
              Login
            </Button>
          </Form>
        </RightCol>
          
      </TiledCard>
      {error
        ? <Alert variant="danger"> {errorMessage} </Alert>
        : ''
      }
    </CustomCentredContainer>
  );
}

export default Login;