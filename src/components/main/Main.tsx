import { Box, Grid, Stack} from '@mui/material';
import { TopBar } from './TopBar';
import { FLowBuilder } from '../FlowBuilder';
import { NodePanel } from '../NodePanel/NodePanel';




export const Main = () => {
    console.log('Main');
    return (
        <Box height="100vh">
            <TopBar />
            <Stack sx={{
                height: 'calc(100vh - 3rem)',
                maxHeight: 'calc(100vh - 3rem)',
                overflow:'hidden',
            }}>
                <Grid container sx={{ height: '100%' }}>
                    <Grid item xs={9.5}>
                        <FLowBuilder />
                    </Grid>
                    <Grid item xs={2.5} sx={{ backgroundColor: 'white', border: '2px solid lightgray' }}> 
                        <NodePanel />
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    )
};


