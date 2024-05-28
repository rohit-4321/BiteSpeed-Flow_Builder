import { Box, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import { TopBar } from "./TopBar";
import { FLowBuilder } from "../FlowBuilder";
import { NodePanel } from "../NodePanel/NodePanel";

export const Main = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (isSmallScreen) {
    return (
      <Stack
        sx={{
          backgroundColor: "lightblue",
          height: "100vh",
        }}
        justifyContent="center"
        alignItems="center"
      >
        Please use Desktop or larger screen device
      </Stack>
    );
  }
  return (
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
          <Grid item xs={!isMediumScreen ? 9.5 : 7}>
            <FLowBuilder />
          </Grid>
          <Grid
            item
            xs={!isMediumScreen ? 2.5 : 5}
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
  );
};
