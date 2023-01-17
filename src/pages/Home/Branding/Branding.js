import React from 'react';
import {Box, Stack, styled, Typography, Button} from '@mui/material';

const BrandingWrapper = styled(Box)(({theme}) =>({
    height: '70vh',
    backgroundColor: 'rgba(251, 208, 98, 1)',
    padding: theme.spacing(4),
    // margin: '4rem 0',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

const Branding = () => {
    return (
        <BrandingWrapper>
            <Stack spacing={4}>
                <Typography sx={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    lineHeight: '1.2'
                }}>Let’s Grow Your <br/>Brand To The <br/>Next Level</Typography>     
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</Typography>
                <Button sx={{width: '40%'}}>Hire Us</Button>
            </Stack>
            <Box sx={{
                width: '50%',
                // display: ['none', 'none', 'block'],
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block'
                }
            }}>
                <img src="https://i.ibb.co/qmf03s1/Frame.png" alt="branding" style={{width: '100%'}}/>
            </Box>
        </BrandingWrapper>
    );
};

export default Branding;