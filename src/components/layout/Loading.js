import React from 'react';
import loading from './loading.gif'
import Box from '@mui/material/Box'
const Loading = () => {
 
 return (
      <Box sx={{
         width: 200,
         height : 100,
         mx: 'auto',
         mt: 5,
        }}>  
      <img style={style} src={loading} alt='loading' />
      </Box>
   )
 
}
const style = {
  display: 'block',
  width:'120px',
  margin: '0 auto'
}

export default Loading