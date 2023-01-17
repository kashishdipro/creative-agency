import React from 'react';
import {Typography} from '@mui/material';

const SectionTitle = ({title, colored}) => {
    return (
        <div>
            <Typography sx={{
                fontSize: '2.1rem',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>{title}{' '}{colored && <span style={{
                color: 'rgba(122, 178, 89, 1)',
            }}>{colored}</span>}</Typography>
            
        </div>
    );
};

export default SectionTitle;