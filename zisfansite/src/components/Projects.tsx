import React from 'react';
import './Projects.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Project from './Project';
import data from '../ProjectsInfo.json';
import { Grid } from '@mui/material';

function Projects() {
    const getProjects = () => {
        const arr = [];
        for (let i = 0; i < data.length; i++) {
            arr.push(
                <Grid item xs={64} md={32}>
                    <Project
                        key={i}
                        title={data[i].title}
                        imageSource={data[i].imageSource}
                        intro={data[i].intro}
                        paragraphCount={data[i].paragraphCount!}
                        paragraphs={data[i].paragraphs!}
                    ></Project>
                </Grid>
            );
        }
        return arr;
    };
    return (
        <div className="ProjectsPage">
            <div className="ProjectTitle">
                <Typography variant="h4">Cool Stuff</Typography>
            </div>
            <Divider sx={{ borderBottomWidth: 5, bgcolor: 'primary.dark' }} />
            <Grid container columns={64} columnSpacing={4} justifyContent="space-between" alignItems="stretch">
                {getProjects()}
            </Grid>
        </div>
    );
}

export default Projects;
