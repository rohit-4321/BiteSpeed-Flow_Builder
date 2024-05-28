import { FC } from "react";
import { Handle, Position } from "reactflow";
import MessageIcon from "@mui/icons-material/Message";
import { Box, Card, IconButton, Stack, Typography } from "@mui/material";

export const CustomMessageNode: FC<{
  data: {
    message: string;
  };
}> = ({ data }) => {
  return (
    <Card
      variant="outlined"
      style={{ borderRadius: 5, border: "2px solid #7ACDE4", width: "19rem" }}
    >
      <Box
        sx={{
          paddingX: "1rem",
          paddingY: "1.1rem",
          height: "20px",
          backgroundColor: "#64EA9D",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <IconButton size="small">
            <MessageIcon sx={{ fontSize: "1.2rem" }} />
          </IconButton>
          <Typography
            style={{ color: "#000", fontWeight: 700, fontSize: "1.1rem" }}
          >
            Send Message
          </Typography>
        </Stack>
      </Box>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "red", width: "10px", height: "10px" }}
      />
      <Box
        sx={{
          paddingX: "1rem",
          paddingY: "1.1rem",
          alignItems: "center",
        }}
      >
        <Typography>{data.message}</Typography>
      </Box>
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "black", width: "10px", height: "10px" }}
      />
    </Card>
  );
};
