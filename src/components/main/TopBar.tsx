import { Box, Button, Snackbar, SnackbarContent } from "@mui/material";
import { useFlowContext } from "../context/FlowCOntext";
import { Edge, Node } from "reactflow";
import { useRef, useState } from "react";

type SnackBar = {
  open: boolean;
  message: string;
  type: "error" | "success";
};
export const TopBar = () => {
  const { edges, nodes } = useFlowContext();
  const [snackBar, setSnackBar] = useState<SnackBar | null>(null);
  const timeoutRef = useRef<number | undefined>(undefined);
  const onSaveClick = () => {
    const connectedNodesIdsMap = new Set<string>();
    const targetMap = new Set<string>();
    edges.forEach((edge: Edge) => {
      connectedNodesIdsMap.add(edge.source);
      connectedNodesIdsMap.add(edge.target);
      targetMap.add(edge.target);
    });
    // const unConnectedNode = nodes.filter(
    //   (node: Node) => !connectedNodesIdsMap.has(node.id)
    // );
    console.log(targetMap.size, nodes.length);

    if (targetMap.size >= nodes.length - 1) {
      setSnackBar({
        open: true,
        message: "Saved Successfully",
        type: "success",
      });
    } else {
      setSnackBar({
        open: true,
        message: "Can not save Flow.",
        type: "error",
      });
    }
    // Clear nay previous setTimeOut
    clearInterval(timeoutRef.current);
    // Remove SnackBar after 2000ms.
    timeoutRef.current = setTimeout(() => {
      setSnackBar(null);
    }, 2500);
  };
  return (
    <Box
      sx={{
        height: "3rem",
        backgroundColor: "#F0F0F0",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        paddingX: "2rem",
        borderBottom: "1px solid lightgray",
      }}
    >
      <Snackbar
        open={snackBar?.open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: snackBar?.type === "error" ? "#D36262" : "#35A75E",
          }}
          message={snackBar?.message}
        />
      </Snackbar>
      <Button
        onClick={onSaveClick}
        sx={{
          fontWeight: 600,
        }}
        variant="outlined"
        disableElevation
        disableRipple
        disableTouchRipple
      >
        Save Change
      </Button>
    </Box>
  );
};
