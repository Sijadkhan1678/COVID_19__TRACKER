import React,{Fragment} from 'react'
import Container from '@mui/material/Container';
import Navbar from './components/layout/Navbar'
import Hero from './components/Hero'
import CardContainer from './components/Cards/CardContainer'
import CountrySelector from './components/CountrySelector'
import GraphContainer from './components/graph/GraphContainer'
import AppState from './context/AppState'


const App = () => {
  
  return (
    <AppState>
    <Fragment>
    <Navbar />
    <Hero />
    <Container  maxWidth="md">
    
     <CardContainer  />
     <CountrySelector />
     <GraphContainer />
     
    </Container>
    </Fragment>
    </AppState>
  );
}

export default App;
