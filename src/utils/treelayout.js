








// // treeLayout.js
// import { MarkerType } from "reactflow";

// const HORIZONTAL_SPACING = 300; // 180
// const VERTICAL_SPACING = 290; // 170

// function getSubtreeWidth(node) {
//   if (!node.children || node.children.length === 0) {
//     return 1;
//   }

//   return node.children.reduce(function (sum, child) {
//     return sum + getSubtreeWidth(child);
//   }, 0);
// }

// function assignPositions(node, depth, leftUnits, result) {
//   const subtreeWidth = getSubtreeWidth(node);
//   const centerUnit = leftUnits + subtreeWidth / 2;

//   const x = centerUnit * HORIZONTAL_SPACING;
//   const y = depth * VERTICAL_SPACING;

//   result.nodes.push({
//     id: node.id,
//     type: "personNode",
//     position: { x, y },
//     data: {
//       name: node.name,
//       imageUrl: node.imageUrl,
//     },
//   });

//   if (node.children && node.children.length > 0) {
//     let currentLeft = leftUnits;

//     node.children.forEach(function (child) {
//       const childWidth = getSubtreeWidth(child);

//       result.edges.push({
//         id: node.id + "-" + child.id,
//         source: node.id,
//         target: child.id,
//         type: "smoothstep",
//         markerEnd: {
//           type: MarkerType.ArrowClosed,
//         },
//         style: {
//           strokeWidth: 2,
//         },
//       });

//       assignPositions(child, depth + 1, currentLeft, result);
//       currentLeft += childWidth;
//     });
//   }

//   return result;
// }

// export function buildTreeLayout(tree) {
//   const result = {
//     nodes: [],
//     edges: [],
//   };

//   return assignPositions(tree, 0, 0, result);
// }





// utils/treelayout.js
import { MarkerType } from "reactflow";

const HORIZONTAL_SPACING = 300;
const VERTICAL_SPACING = 290;

function getSubtreeWidth(nodeId, nodes) {
  const node = nodes[nodeId];
  if (!node.childrenIds || node.childrenIds.length === 0) return 1;

  return node.childrenIds.reduce(function (sum, childId) {
    return sum + getSubtreeWidth(childId, nodes);
  }, 0);
}



function getTotalDescendants(nodeId, nodes) {
  const node = nodes[nodeId];
  if (!node.childrenIds || node.childrenIds.length === 0) return 0;

  return node.childrenIds.reduce((sum, childId) => {
    return sum + 1 + getTotalDescendants(childId, nodes);
  }, 0);
}

function assignPositions(nodeId, nodes, depth, leftUnits, result) {
  const node = nodes[nodeId];
  const subtreeWidth = getSubtreeWidth(nodeId, nodes);
  const centerUnit = leftUnits + subtreeWidth / 2;

  result.nodes.push({
    id: node.id,
    type: "personNode",
    position: {
      x: centerUnit * HORIZONTAL_SPACING,
      y: depth * VERTICAL_SPACING,
    },
    data: {
      name: node.name,
      imageUrl: node.imageUrl,
      depth: depth,
    },
  });

  if (node.childrenIds && node.childrenIds.length > 0) {
    let currentLeft = leftUnits;
    
    node.childrenIds.forEach(function (childId) {
      const descendants = getTotalDescendants(childId, nodes);
   
      result.edges.push({
        id: node.id + "-" + childId,
        source: node.id,
        target: childId,
        type: "familyEdge",          // ← custom type
        data: {
          depth,                     // ← parent's depth = edge color
          descendants,               // ← drives thickness
        },
      });

      assignPositions(childId, nodes, depth + 1, currentLeft, result);
      currentLeft += getSubtreeWidth(childId, nodes);
    });
  }

  return result;
}

export function buildTreeLayout(nodes, rootId) {
  return assignPositions(rootId, nodes, 0, 0, { nodes: [], edges: [] });
}