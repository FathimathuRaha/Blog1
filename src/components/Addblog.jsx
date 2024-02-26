import {Button,TextField,Typography} from '@mui/material'
import React from 'react'












const Addblog=()=>{
    return(
        <div>
        <br /><br />
        <Typography variant= "h2">Addblog</Typography><br /><br />
        <TextField variant= "outlined">Blogname</TextField><br /><br />
        <TextField variant= "outlined">Description</TextField><br /><br />
        <TextField variant= "outlined">Authorname</TextField><br /><br />
        <Button variant="contained">Submit</Button>
        </div>
        
        
        
        
    
    )
}