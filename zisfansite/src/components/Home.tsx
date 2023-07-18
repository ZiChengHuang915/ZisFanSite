import React from 'react';
import './Home.css';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import About from './About';

function Home() {
    const iconSize = 50;
    const iconHoverSize = 70;
    const IconStyle = {
        fontSize: iconSize,
        WebkitTransition: 'all 0.25s ease-out',
        MozTransition: 'all 0.25s ease-out',
        OTransition: 'all 0.25s ease-out',
        transition: 'all 0.25s ease-out',
        '&:hover': {
            fontSize: iconHoverSize
        }
    };
    return (
        <div className="HomePage">
            <div className="HomeContent">
                <div className="Name">
                    <Typography color="primary.contrastText" variant="h3">
                        Zi Cheng Huang
                    </Typography>
                </div>
                <div className="Introduction">
                    <Typography color="primary.contrastText" variant="body1">
                        I'm a Computer Science student at the University of Waterloo. I'm a big fan of enthusiast
                        desktop hardware as well as PC building. In my spare time, I like to play badminton and
                        Minecraft.
                    </Typography>
                </div>
                <div className="Icons">
                    <Stack direction="row" spacing={5}>
                        <Link
                            className="Link"
                            to="mailto:zichuang127@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <EmailIcon sx={IconStyle}></EmailIcon>
                        </Link>
                        <Link
                            className="Link"
                            to="https://www.linkedin.com/in/zichenghuang915/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon sx={IconStyle}></LinkedInIcon>
                        </Link>
                        <Link
                            className="Link"
                            to="https://github.com/ZiChengHuang915"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon sx={IconStyle}></GitHubIcon>
                        </Link>
                    </Stack>
                </div>
            </div>
            <Projects></Projects>
            <About></About>

            <div className="BottomBar">
                <Typography>Zi Cheng Huang © 2023</Typography>
            </div>
        </div>
    );
}

export default Home;
