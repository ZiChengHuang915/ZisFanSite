import React from 'react';
import './Home.css';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

function Home() {
    const iconSize = 50;
    const iconHoverSize = 55;
    const IconStyle = {
        fontSize: iconSize,
        '-webkit-transition': 'all 0.25s ease-out',
        '-moz-transition': 'all 0.25s ease-out',
        '-o-transition': 'all 0.25s ease-out',
        transition: 'all 0.25s ease-out',
        '&:hover': {
            fontSize: iconHoverSize
        }
    };
    return (
        <div className="Content">
            <div className="Name">
                <Typography variant="h3">Zi Cheng Huang</Typography>
            </div>
            <div className="Introduction">
                <Typography variant="body1">
                    I'm a Computer Science student at the University of Waterloo. I'm a big fan of enthusiast desktop
                    hardware as well as PC building. In my spare time, I like to play badminton and Minecraft.
                </Typography>
            </div>
            <div className="Icons">
                <Stack direction="row" spacing={5}>
                    <Link className="Link" to="/email" target="_blank" rel="noopener noreferrer">
                        <EmailIcon sx={IconStyle}></EmailIcon>
                    </Link>
                    <Link className="Link" to="/linkedin" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={IconStyle}></LinkedInIcon>
                    </Link>
                    <Link className="Link" to="/github" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={IconStyle}></GitHubIcon>
                    </Link>
                </Stack>
            </div>
        </div>
    );
}

export default Home;
