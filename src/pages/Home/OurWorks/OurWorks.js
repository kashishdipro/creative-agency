import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Box, IconButton} from '@mui/material';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import {ArrowBack, ArrowForward} from '@mui/icons-material';
import CreativeCard from '../../../components/CreativeCard/CreativeCard';
import {Grid} from '@mui/material';
import { cardData } from './cardData';

const OurWorks = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{margin: '4rem 0'}}>
            {/* Heading Section */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 5
            }}>
                <SectionTitle title='Here are some of' colored='our works' sx={{textAlign: 'left'}}/>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Tabs value={value} onChange={handleChange} centered sx={{
                        '& .MuiTabs-indicator': {
                            display: 'none',
                        },
                        '& .Mui-selected': {
                            color: 'primary.green',
                            fontWeight: 'bold',
                        },
                        '& .MuiButtonBase-root': {
                            textTransform: 'capitalize',
                        }
                    }}>
                        <Tab label="All" />
                        <Tab label="Web Design" />
                        <Tab label="Web Development" />
                        <Tab label="Mobile Application" />
                    </Tabs>
                    <Box>
                        <IconButton sx={{
                            border: `1px solid #959EAD`,
                            mr: 2
                        }}
                        onClick={() =>setValue(value - 1)}
                        disabled={value === 0}
                        >
                            <ArrowBack/>
                        </IconButton>
                        <IconButton sx={{
                            border: `1px solid #959EAD`
                        }}
                        onClick={() =>setValue(value + 1)}
                        disabled={value === 3}
                        >
                            <ArrowForward/>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            {/* Card Section */}
            <Grid container spacing={3} justifyContent='center'>
                {
                    cardData[value].map((image, idx) =><Grid key={idx} item>
                        <CreativeCard image={image}/>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default OurWorks;