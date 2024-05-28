/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import customNodeType from "./custom";
import { getUniqueId } from "../../utils";
import { useFlowContext } from "../context/BuilderFlowContext";

export const FLowBuilder = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const { nodes, edges, setEdges, setNodes, setSelectedNode } =
    useFlowContext();

  const onNodeChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes((nds: Node<any>[]) => applyNodeChanges(changes, nds));
    },
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdges((eds: Edge<any>[]) => applyEdgeChanges(changes, eds));
    },
    [setEdges]
  );

  const onConnect = useCallback(
    (params: any) => {
      setEdges((eds: Edge[]) => addEdge(params, eds));
    },
    [setEdges]
  );

  // When new Message drag over the Flow
  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onElementClick = (_: any, node: { id: any }) => {
    setSelectedNode(node.id);
  };
  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // Check id drop have valid type (ex: customNode in our usecase)
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = (reactFlowInstance as any).screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getUniqueId(),
        type,
        position,
        data: { message: `Send Message ${nodes.length + 1}` },
      };

      setNodes((nds: any[]) => nds.concat(newNode));
    },
    [reactFlowInstance, nodes.length, setNodes]
  );

  // Deselect Node after Outside click
  const onPaneClick = () => {
    setSelectedNode(null);
  };

  return (
    <div
      style={{ height: "100%", width: "100%", backgroundColor: "#F5EDED" }}
      ref={reactFlowWrapper}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={customNodeType}
        onInit={setReactFlowInstance as any}
        onNodesChange={onNodeChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onElementClick}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onConnect={onConnect}
        onPaneClick={onPaneClick}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};
