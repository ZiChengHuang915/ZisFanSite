import React from 'react';
import './Projects.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Project from './Project';
import data from '../ProjectsInfo.json';

function Projects() {
    const getProjects = () => {
        const arr = [];
        for (let i = 0; i < data.length; i++) {
            arr.push(
                <Project
                    key={i}
                    title={data[i].title}
                    imageSource={data[i].imageSource}
                    intro={data[i].intro}
                    paragraphCount={data[i].paragraphCount!}
                    paragraphs={data[i].paragraphs!}
                ></Project>
            );
        }
        return arr;
    };
    return (
        <div className="ProjectsPage">
            <div className="ProjectTitle">
                <Typography variant="h4">Cool Stuff</Typography>
            </div>
            <Divider></Divider>
            <Stack spacing={1} alignItems={'stretch'}>
                {getProjects()}
            </Stack>
        </div>
    );
}

export default Projects;
