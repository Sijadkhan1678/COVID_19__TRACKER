import React from 'react';
import {AppBar,Toolbar,Avatar,styled} from '@mui/material';
import Typography from '@mui/material/Typography'
import logo from '../images/logo.png'

const ToolContainer = styled(Toolbar) ((theme)=>({
  display: 'flex',
  justifyContent: 'center'
}))
const Navbar = () =>{
  return(
    <AppBar position='static'> 
     <ToolContainer>
 <Avatar src={logo} alt='log'/>
      <Typography variant='h5' ml={1}>Tracker</Typography>
       
      
     </ToolContainer>
    </AppBar>
    )
}
export default Navbar;