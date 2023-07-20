import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import CircleIcon from '@mui/icons-material/Circle';

function Project(props: {
    title: string;
    imageSource: string;
    intro: string;
    paragraphCount: number;
    paragraphs: Array<string>;
    githubLink: string;
    languageCount: number;
    languages: Array<string>;
}) {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const getParagraphs = () => {
        const arr = [];
        for (let i = 0; i < props.paragraphCount; i++) {
            arr.push(
                <Typography key={i} variant="body2" align="left" paragraph={true}>
                    {props.paragraphs[i]}
                </Typography>
            );
        }
        return arr;
    };
    const getLanguages = () => {
        interface StringByString {
            [key: string]: string;
        }
        const colorMapping: StringByString = {
            JavaScript: '#f1e05a',
            'HTML & CSS': '#e34c26',
            Shell: '#89e051',
            Java: '#b07219',
            C: '#555555',
            Turing: '#cf142b'
        };
        const arr = [];
        for (let i = 0; i < props.languageCount; i++) {
            arr.push(
                <Chip
                    icon={<CircleIcon style={{ color: colorMapping[props.languages[i]] }} />}
                    label={props.languages[i]}
                    variant="outlined"
                />
            );
        }
        return arr;
    };
    const IconStyle = {
        fontSize: 30,
        WebkitTransition: 'all 0.25s ease-out',
        MozTransition: 'all 0.25s ease-out',
        OTransition: 'all 0.25s ease-out',
        transition: 'all 0.25s ease-out',
        '&:hover': {
            fontSize: 50
        }
    };

    return (
        <div style={{ marginTop: 32 }}>
            <Card
                className="ProjectCard"
                sx={{
                    border: 'solid 2px',
                    borderColor: 'primary.dark',
                    borderRadius: 5,
                    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
                }}
            >
                <CardActionArea onClick={handleExpandClick}>
                    <CardHeader style={{ minHeight: '6vh' }} title={props.title} />
                    <CardMedia
                        sx={{
                            borderTop: 'solid 2px',
                            borderBottom: 'solid 2px',
                            borderColor: 'primary.dark',
                            borderRadius: 0
                        }}
                        component="img"
                        image={process.env.PUBLIC_URL + props.imageSource}
                    />
                    <CardContent>
                        <Typography variant="body2" color="primary.contrastText">
                            {props.intro}
                        </Typography>
                    </CardContent>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>{getParagraphs()}</CardContent>
                    </Collapse>
                </CardActionArea>
                <CardContent style={{ paddingBottom: 16 }}>
                    <Typography variant="body2" color="primary.contrastText">
                        <Stack direction="row" justifyContent="space-between">
                            <Link className="Link" to={props.githubLink} target="_blank" rel="noopener noreferrer">
                                <GitHubIcon sx={IconStyle}></GitHubIcon>
                            </Link>
                            <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', lg: 'block' } }}>
                                {getLanguages()}
                            </Stack>
                        </Stack>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Project;
