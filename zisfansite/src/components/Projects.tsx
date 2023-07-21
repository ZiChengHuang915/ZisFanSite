import './Projects.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Project from './Project';
import data from '../ProjectsInfo.json';
import { Grid, Grow } from '@mui/material';

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
                        githubLink={data[i].githubLink}
                        languageCount={data[i].languageCount}
                        languages={data[i].languages}
                    ></Project>
                </Grid>
            );
        }
        return arr;
    };
    return (
        <div className="ProjectsPage">
            <div className="ProjectTitle">
                <Grow in={true} timeout={1000}>
                    <Typography color="primary.dark" variant="h4">
                        Cool Stuff
                    </Typography>
                </Grow>
            </div>
            <Divider sx={{ borderBottomWidth: 5, bgcolor: 'primary.main' }} />
            <Grid container columns={64} columnSpacing={4} justifyContent="space-between" alignItems="stretch">
                {getProjects()}
            </Grid>
        </div>
    );
}

export default Projects;
