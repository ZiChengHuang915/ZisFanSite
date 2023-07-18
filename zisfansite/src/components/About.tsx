import React from 'react';
import './About.css';
import { Divider, Typography } from '@mui/material';

function About() {
    return (
        <div className="AboutPage">
            <div className="AboutTitle">
                <Typography variant="h4">About Me</Typography>
            </div>
            <div className="AboutDivider">
                <Divider sx={{ borderBottomWidth: 5, bgcolor: 'primary.dark' }} />
            </div>

            <Typography variant="h5">Bachelor of Computer Science</Typography>
            <Typography variant="body1">University of Waterloo</Typography>
            <Typography variant="subtitle1">2019 - 2024</Typography>
        </div>
    );
}

export default About;
