import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ServiceCard = ({service}) => {
    const {image, title, detail} = service;
    return (
        <Card sx={{ maxWidth: 345, boxShadow: 'none', pt: 2, mx: 'auto', '&:hover': {
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
        } }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="image"
                sx={{
                    width: 'auto',
                    mx: 'auto'
                }}
            />
            <CardContent sx={{
                textAlign: 'center',
            }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                    fontWeight: 'bold'
                }}>
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {detail}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;