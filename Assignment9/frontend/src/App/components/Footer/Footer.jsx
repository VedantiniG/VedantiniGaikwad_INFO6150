import { Box } from '@mui/material';

export default () => {
    return (
        <Box 
            className="fixed-bottom"
            sx={{
                bgcolor:  '#57c7cb',
                width: `100%`,
                color: 'aliceblue',
            }}
        >
            © 2024 Jobify All Rights Reserved
        </Box>
    );
}