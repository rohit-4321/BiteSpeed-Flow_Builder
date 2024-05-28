import React, { FC, createContext, useContext, useState } from "react";
import { getUniqueId } from "../../utils";
import { Edge, Node } from "reactflow";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FlowContext = createContext<any>(null);

const initialNodes: Node[] = [
  {
    id: getUniqueId(),
    position: { x: 0, y: 0 },
    type: "customNode",
    data: { message: "Send Message 1" },
  },
  {
    id: getUniqueId(),
    position: { x: 100, y: 100 },
    type: "customNode",
    data: { message: "Send Message 2" },
  },
];

const initialEdges: Edge[] = [];

export const FlowContextProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectedNode, setSelectedNode] = useState<null | string>(null);
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <FlowContext.Provider
      value={{
        selectedNode: selectedNode,
        setSelectedNode: setSelectedNode,
        nodes: nodes,
        setNodes: setNodes,
        edges: edges,
        setEdges: setEdges,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};

export const useFlowContext = () => {
  const vl = useContext(FlowContext);
  if (vl === null || !vl) {
    throw Error("Value use outside context provider");
  }
  return {
    selectedNode: vl.selectedNode,
    setSelectedNode: vl.setSelectedNode,
    nodes: vl.nodes,
    setNodes: vl.setNodes,
    edges: vl.edges,
    setEdges: vl.setEdges,
  };
};
