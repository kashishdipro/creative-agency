import React from 'react';
import {Box, styled} from '@mui/material';

const brands = [
    'https://i.ibb.co/VBtn9ms/slack.png',
    'https://i.ibb.co/FX17szX/google.png',
    'https://i.ibb.co/jMMNqTs/uber.png',
    'https://i.ibb.co/xjR8SzV/netflix.png',
    'https://i.ibb.co/TgJzBYw/airbnb.png'
]

const BrandsWrapper = styled(Box)(({theme}) =>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '4rem 0',
    '& > img': {
        height: '60px',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        '& > img': {
            marginBottom: '1rem',
        },
    },
}))
const Brands = () => {
    return (
        <BrandsWrapper>
            {
                brands.map((brand, idx) =><img key={idx} src={brand} alt={`brand${idx}`}/>)
            }
        </BrandsWrapper>
    );
};

export default Brands;