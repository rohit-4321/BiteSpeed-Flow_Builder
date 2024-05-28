import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Stack, TextareaAutosize, Typography } from "@mui/material";
import { FC, memo } from "react";

const EditMessage: FC<{
  value: string;
  setValue: (param: string) => void;
  onPrevClick: () => void;
}> = ({ value, setValue, onPrevClick }) => {
  const onBackClick = () => {
    onPrevClick();
  };
  return (
    <Stack paddingX={1} paddingY={0.5}>
      <Stack direction="row" alignItems="center" gap={1}>
        <IconButton onClick={onBackClick}>
          <ArrowBackIcon />
        </IconButton>
        <Typography>Message</Typography>
      </Stack>
      <TextareaAutosize
        style={{
          width: "300px",
          height: "150px",
          resize: "none",
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
          padding: "0.2rem",
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="empty textarea"
        placeholder="Empty"
      />
    </Stack>
  );
};
export default memo(EditMessage);
