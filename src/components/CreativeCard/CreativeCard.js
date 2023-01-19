import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {useTheme} from '@mui/material';

const CreativeCard = ({image}) => {
    const theme = useTheme();
    return (
        <Card sx={{ maxWidth: 345, p:2, borderRadius: '0.5rem', minWidth: '345px' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image={image}
                style={{
                    borderRadius: '0.6rem'
                }}
            />
            <CardContent sx={{
                p: 0,
                pt: 4,
                '&:last-child': {
                    pb: 0
                },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box>
                    <Typography gutterBottom variant="body" component="div" color="text.secondary">
                        Web Design
                    </Typography>
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                        Web Design Research
                    </Typography>
                </Box>
                <IconButton sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    width: '2rem',
                    height: '2rem',
                    '& svg': {
                        color: 'primary.main'
                    }
                }}>
                    <AddIcon/>
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default CreativeCard;