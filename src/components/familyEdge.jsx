import { getBezierPath } from "reactflow";

const generationColors = [
  "#a78bfa",
  "#60a5fa", 
  "#34d399",
  "#f97316",
  "#f472b6",
];

export default function FamilyEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}) {
  const depth = data?.depth ?? 0;
  const descendants = data?.descendants ?? 0;

  const color = generationColors[depth % generationColors.length];
  const nextColor = generationColors[(depth + 1) % generationColors.length];

  const strokeWidthSource = Math.max(1.5, Math.min(7, 1.5 + descendants * 0.35));
  const strokeWidthTarget = Math.max(0.5, strokeWidthSource * 0.25);

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const gradientId = `gradient-${id}`;
  const filterId = `glow-${id}`;

  return (
    <>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.7" />
          <stop offset="100%" stopColor={nextColor} stopOpacity="0.2" />
        </linearGradient>

        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow layer — thick, blurred, low opacity */}
      <path
        d={edgePath}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidthSource * 2}
        strokeOpacity={0.08}
        filter={`url(#${filterId})`}
        strokeLinecap="round"
      />

      {/* Tapered main line — wide at source, thin at target */}
      {/* We fake taper using two overlapping paths with different widths */}
      <path
        d={edgePath}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidthSource}
        strokeLinecap="round"
        strokeOpacity={0.85}
      />
      <path
        d={edgePath}
        fill="none"
        stroke={nextColor}
        strokeWidth={strokeWidthTarget}
        strokeLinecap="round"
        strokeOpacity={0.4}
      />
    </>
  );
}