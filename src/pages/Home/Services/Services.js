import React from 'react';
import {Box, Grid} from '@mui/material'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ServiceCard from '../../../components/ServiceCard/ServiceCard';

const services = [
    {image: 'https://i.ibb.co/SBG461Z/service1.png', title: 'Web & Mobile design', detail: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'},
    {image: 'https://i.ibb.co/hF45f50/service2.png', title: 'Graphic design', detail: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'},
    {image: 'https://i.ibb.co/VgHNKnw/service3.png', title: 'Web development', detail: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'}
]

const Services = () => {
    return (
        <Box>
            <SectionTitle title='Provide awesome' colored='services' sx={{ mb: 8 }}/>
            <Grid container spacing={2}>
                {
                    services.map((service, idx) =>
                    <Grid key={idx} item xs={12} sm={6} md={4}>
                        <ServiceCard key={idx} service={service}/>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default Services;