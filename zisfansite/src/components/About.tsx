import React from 'react';
import './About.css';
import { Divider, Grow, Typography } from '@mui/material';

function About() {
    return (
        <div className="AboutPage">
            <div className="AboutTitle">
                <Grow in={true} timeout={1000}>
                    <Typography color="primary.dark" variant="h4">
                        About Me
                    </Typography>
                </Grow>
            </div>
            <div className="AboutDivider">
                <Divider sx={{ borderBottomWidth: 5, bgcolor: 'primary.main' }} />
            </div>

            <Typography color="primary.contrastText" variant="h5">
                Bachelor of Computer Science
            </Typography>
            <Typography color="primary.contrastText" variant="body1">
                University of Waterloo
            </Typography>
            <Typography color="primary.contrastText" variant="subtitle1">
                2019 - 2024
            </Typography>
        </div>
    );
}

export default About;
