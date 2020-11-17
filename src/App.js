import React from 'react'
import { Container } from "react-bootstrap";
import './App.css';
import Routes from './routes';


function App() {
  return (
    <Container>
      <div className='App'>
        <Routes />
      </div>
    </Container>
  );
}

export default App;
