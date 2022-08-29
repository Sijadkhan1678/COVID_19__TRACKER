import React from 'react';
import {AppBar,Toolbar,Avatar,styled} from '@mui/material';
import Typography from '@mui/material/Typography'
import logo from '../images/logo.png'

const ToolContainer = styled(Toolbar) ((theme)=>({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor:'#2575FC'
}))
const Navbar = () =>{
  return(
    <AppBar position='static'> 
     <ToolContainer>
 <Avatar src={logo} alt='logo'/>
      <Typography variant='h5' ml={1}>Tracker</Typography>
       
      
     </ToolContainer>
    </AppBar>
    )
}
export default Navbar;