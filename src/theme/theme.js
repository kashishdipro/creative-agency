import {createTheme} from '@mui/material';
export const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(71, 71, 71, 1)',
            yellow: 'rgba(251, 208, 98, 1)',
            blue: 'rgba(17, 20, 48, 1)',
        },
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg',
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    padding: '0.6rem 2.5rem',
                },
            },
            defaultProps: {
                variant: 'contained',
                color: 'primary',
                // disableRipple: true,
            },
        },
    },
})
// export default theme;