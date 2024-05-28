import { Stack, IconButton, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

export const MessageDraggableBox = () => {
  const onDragMessageStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("application/reactflow", "customNode");
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div
      draggable
      onDragStart={(ev) => onDragMessageStart(ev)}
      style={{ backgroundColor: "white", width: "10rem" }}
    >
      <Stack
        alignItems="center"
        sx={{
          border: "2px solid #61AFEE",
          borderRadius: "5px",
          color: "#61AFEE",
          width: "100%",
          cursor: "move",
        }}
        direction="column"
      >
        <IconButton
          disableFocusRipple
          disableTouchRipple
          disableRipple
          disabled
          sx={{ color: "#61AFEE" }}
        >
          <ChatIcon />
        </IconButton>
        <Typography>Message</Typography>
      </Stack>
    </div>
  );
};
