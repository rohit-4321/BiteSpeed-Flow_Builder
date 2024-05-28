import { Box, Grid, Stack } from "@mui/material";
import { TopBar } from "./TopBar";
import { FLowBuilder } from "../FlowBuilder";
import { NodePanel } from "../NodePanel/NodePanel";
import { FlowContextProvider } from "../context/FlowCOntext";

export const Main = () => {
  return (
    <FlowContextProvider>
      <Box height="100vh">
        <TopBar />
        <Stack
          sx={{
            height: "calc(100vh - 3rem)",
            maxHeight: "calc(100vh - 3rem)",
            overflow: "hidden",
            marginLeft: "5px",
          }}
        >
          <Grid container sx={{ height: "100%" }}>
            <Grid item xs={9.5}>
              <FLowBuilder />
            </Grid>
            <Grid
              item
              xs={2.5}
              sx={{
                backgroundColor: "white",
                borderLeft: "2px solid lightgray",
              }}
            >
              <NodePanel />
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </FlowContextProvider>
  );
};
