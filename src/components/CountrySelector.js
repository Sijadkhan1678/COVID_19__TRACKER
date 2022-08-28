import React,{useState} from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack'

const CountrySelctor = () =>{
  
const [country,setcountry]= useState("global")

const handleChange = (e) =>{
setcountry(e.target.value)

}

return(
<Stack mt={1}  direction='flex' justifyContent="center">
<Typography > Selct country</Typography
<FormControl sx={{width:'50%'}}>
<InputLabel id="demo-simple-select-label">Select Country</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={country}
onChange={handleChange}
>
<MenuItem value={country}>Global</MenuItem>
<MenuItem value='india'>Ten</MenuItem>
<MenuItem value='pakistan'>Twenty</MenuItem>
<MenuItem value='usa'>Thirty</MenuItem>
</Select>
</FormControl>
{country}
</Stack>
)
}

export default CountrySelctor;,