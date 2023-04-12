import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';

function App() {
    return (
        <div className="App">
            <Typography variant="h3">Zi Cheng Huang</Typography>
            <Typography variant="body1">
                I'm a Computer Science student at the University of Waterloo. I'm a big fan of enthusiast desktop
                hardware as well as PC building. In my spare time, I like to play badminton and Minecraft.
            </Typography>
            <Stack direction="row" spacing={2}>
                <EmailIcon></EmailIcon>
                <LinkedInIcon></LinkedInIcon>
                <GitHubIcon></GitHubIcon>
            </Stack>
        </div>
    );
}

export default App;
