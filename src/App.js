
import './App.css';
import React,{Fragment} from 'react'
import Container from '@mui/material/Container';
import Navbar from './components/layout/Navbar'
import Hero from './components/Hero'


const App = () => {
  
  return (
    <Fragment>
    <Navbar />
    <Hero />
    <Container  maxWidth="sm">
     
    </Container>
    </Fragment>
  );
}

export default App;
