import React from 'react';
import {Box, Container} from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../../pages/Home/NavBar/NavBar';

const Layout = () => {
    return (
        <Box>
            <Container>
                <NavBar/>
                <Outlet/>
            </Container>
        </Box>
    );
};

export default Layout;