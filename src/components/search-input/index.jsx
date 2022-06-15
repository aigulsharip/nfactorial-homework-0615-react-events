import * as React from 'react';
import {Box, TextField} from '@mui/material';
// import TextField from '@mui/material/TextField';

export const SearchInput = ()=> {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }} noValidate autoComplete="off"
    >
      <TextField id="outlined-search"   variant="outlined" style = {{backgroundColor:"white"}}  />
      
    </Box>
  );
}
