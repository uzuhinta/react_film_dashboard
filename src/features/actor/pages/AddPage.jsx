import { Button } from '@mui/material';
import React from 'react';

function AddPage() {
    return <div><Button
    variant="contained"
    component="label"
  >
    Upload File
    <input
      type="file"
      hidden
    />
  </Button></div>;
}

export default AddPage;
