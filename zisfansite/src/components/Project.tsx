import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Project(props: {
    title: string;
    imageSource: string;
    intro: string;
    paragraphCount: number;
    paragraphs: Array<string>;
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
                    <CardContent style={{ minHeight: '6vh' }}>
                        <Typography variant="body2" color="primary.contrastText">
                            {props.intro}
                        </Typography>
                    </CardContent>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>{getParagraphs()}</CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default Project;
