import { Box, Button } from "@mui/material";

export const TopBar = () => {
    console.log('Top Bar');
    return <Box sx={{
        height: '3rem', 
        backgroundColor: '#F0F0F0',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'end',
        paddingX: '2rem'
    }}>
        <Button
            sx={{
                fontWeight: 600
            }}
            variant='outlined'
            disableElevation 
            disableRipple
            disableTouchRipple
        >
            Save Change
        </Button>   
    </Box>
}