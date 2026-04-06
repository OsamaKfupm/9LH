import { useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Position,
  Handle,
  MiniMap,
  
} from "reactflow";
import "reactflow/dist/style.css";
import { familyNodes, rootId } from "../data/familytree";
import { buildTreeLayout } from "../utils/treelayout";
import FamilyEdge from "./familyEdge";

// add alongside nodeTypes
const edgeTypes = {
  familyEdge: FamilyEdge,
};

const NODE_SIZES = [200, 175, 150, 100, 75, 50]; // gen 0 → gen 5+

function getNodeSize(depth) {
  return NODE_SIZES[Math.min(depth, NODE_SIZES.length - 1)];
}

const generationColors = [
  { ring: "#a78bfa", glow: "#ede9fe", text: "#6d28d9" },
  { ring: "#60a5fa", glow: "#dbeafe", text: "#1d4ed8" },
  { ring: "#34d399", glow: "#d1fae5", text: "#065f46" },
  { ring: "#f97316", glow: "#ffedd5", text: "#c2410c" },
  { ring: "#f472b6", glow: "#fce7f3", text: "#9d174d" },
];

// function ConditionalLabel({ name, color, hovered }) {
//   const zoom = useStore((s) => s.transform[2]);
//   if (zoom < 0.45) return null;

//   return (
//     <div
//       style={{
//         marginTop: 6,
//         maxWidth: 96,
//         textAlign: "center",
//         padding: "3px 8px",
//         borderRadius: 20,
//         fontSize: 10,
//         fontWeight: 600,
//         letterSpacing: "0.01em",
//         whiteSpace: "nowrap",
//         overflow: "hidden",
//         textOverflow: "ellipsis",
//         background: hovered ? color.glow : "var(--color-background-primary)",
//         color: hovered ? color.text : "var(--color-text-secondary)",
//         border: `1px solid ${hovered ? color.ring + "66" : "var(--color-border-tertiary)"}`,
//         transition: "all 0.2s ease",
//       }}
//     >
//       {name}
//     </div>
//   );
// }
function ConditionalLabel({ name, color, hovered, depth }) {
  const size = getNodeSize(depth);
  const fontSize = Math.max(size * 0.22, 9);
  const paddingH = Math.max(size * 0.18, 5);

  return (
    <div dir="rtl"
      style={{
        marginTop: 5,
        maxWidth: size * 2.2,
        minWidth: size * 1.1,
        textAlign: "center",
        padding: `3px ${paddingH}px`,
        borderRadius: 20,
        fontSize,
        fontWeight: 600,
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        background: hovered ? color.glow + "33" : "#ffffff14",
        color: hovered ? color.ring : "#ffffffcc",
        border: `1px solid ${hovered ? color.ring + "66" : "#ffffff20"}`,
        transition: "all 0.2s ease",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    >
      {name}
    </div>
  );
}

function PersonNode({ data }) {
  const [hovered, setHovered] = useState(false);
  const depth = data.depth ?? 0;
  const color = generationColors[depth % generationColors.length];
  const size = getNodeSize(depth);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: hovered ? "scale(1.35)" : "scale(1)",
        cursor: "pointer",
        zIndex: hovered ? 999 : 1,
        position: "relative",
      }}
    >
      <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />

      {/* Outer glow ring */}
      <div
        style={{
          width: size + 8,
          height: size + 8,
          borderRadius: "50%",
          position: "absolute",
          top: -4,
          left: -4,
          background: hovered ? color.glow : "transparent",
          border: `2px solid ${hovered ? color.ring : "transparent"}`,
          transition: "all 0.2s ease",
          pointerEvents: "none",
        }}
      />

      {/* Avatar circle */}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          border: `2.5px solid ${hovered ? color.ring : "var(--color-border-secondary)"}`,
          background: "var(--color-background-secondary)",
          transition: "border-color 0.2s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        {data.imageUrl ? (
          <img
            src={data.imageUrl}
            alt={data.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: 15,
              color: color.text,
              background: color.glow,
            }}
          >
            {data.name.slice(0, 1)}
          </div>
        )}
      </div>

      <ConditionalLabel name={data.name} color={color} hovered={hovered} />

      <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
    </div>
  );
}

const nodeTypes = { personNode: PersonNode };

export default function FamilyTree() {
  const layout = useMemo(() => buildTreeLayout(familyNodes, rootId), []);

  return (
    <div style={{ width: "100%", height: "100%", background: "#0f1117" }}>
      <ReactFlow
        nodes={layout.nodes}
        edges={layout.edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        edgeTypes={edgeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        onlyRenderVisibleElements={true}
        minZoom={0.02}
        maxZoom={2}
      >
        <Background
          variant="dots"
          gap={24}
          size={1}
          color="#ffffff18"
        />
        <Controls
          style={{
            background: "#1e2130",
            border: "1px solid #ffffff15",
            borderRadius: 10,
          }}
        
        />
        <MiniMap 
          nodeColor={(n) => {
            const depth = n.data?.depth ?? 0;
            return generationColors[depth % generationColors.length].ring;
          }}
          maskColor="#ffffff10"
          style={{
            background: "#1e2130",
            border: "1px solid #ffffff15",
            borderRadius: 10,
          }}

        />
      </ReactFlow>
    </div>
  );
}