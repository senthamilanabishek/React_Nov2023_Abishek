import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons() {
  return (
    <Stack spacing={2} direction="row">
        <Button variant="contained"style={{color:"black",fontSize:"17px",marginBottom:"10px"}}>Sign Up</Button>
    </Stack>
  );
}
