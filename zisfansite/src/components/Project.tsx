import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardActionArea } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

function Project(props: {
    title: string;
    imageSource: any;
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
                    minHeight: '62vh',
                    border: 'solid 2px',
                    borderColor: 'primary.light',
                    borderRadius: 5,
                    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
                }}
            >
                <CardActionArea onClick={handleExpandClick}>
                    <CardHeader title={props.title} />
                    <CardMedia component="img" image={process.env.PUBLIC_URL + props.imageSource} />
                    <CardContent>
                        <Typography variant="body2" color="primary">
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
