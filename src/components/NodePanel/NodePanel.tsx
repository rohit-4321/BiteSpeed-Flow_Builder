import { Box } from "@mui/material";
import { useFlowContext } from "../context/FlowContext";
import { MessageDraggableBox } from "./MessageDraggableBox";
import { useCallback, useMemo, useRef } from "react";
import EditMessage from "./EditMessage";
import { Node } from "reactflow";

export const NodePanel = () => {
  const { selectedNode, setSelectedNode, nodes, setNodes } = useFlowContext();
  const selectedNodeIndex = useRef<number | null>(null);

  const selectedNodeData = useMemo(() => {
    if (selectedNode === null) {
      return null;
    }
    const nodeIndex = nodes.findIndex(
      (n: { id: string }) => n.id === selectedNode
    );
    if (nodeIndex !== -1) {
      selectedNodeIndex.current = nodeIndex;
      return nodes[nodeIndex];
    }
    selectedNodeIndex.current = null;
  }, [nodes, selectedNode]);

  // On Back Press in Node Text Editing
  const onBackButtonClick = useCallback(() => {
    setSelectedNode(null);
  }, [setSelectedNode]);

  const valueChange = useCallback(
    (vl: string) => {
      setNodes((prev: Node[]) => {
        const temp = [...prev];
        if (selectedNodeIndex.current !== null) {
          temp[selectedNodeIndex.current].data.message = vl;
        }
        return temp;
      });
    },
    [setNodes]
  );
  return (
    <Box
      sx={{
        paddingX: "10px",
        paddingY: "5px",
      }}
    >
      {selectedNode === null && <MessageDraggableBox />}
      {selectedNode && (
        <EditMessage
          value={selectedNodeData?.data?.message ?? ""}
          setValue={valueChange}
          onPrevClick={onBackButtonClick}
        />
      )}
    </Box>
  );
};
