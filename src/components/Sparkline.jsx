import React from 'react';

const Sparkline = ({ data = [], width = 140, height = 45, color = '#00D26A', strokeWidth = 2 }) => {
  if (!data || data.length === 0) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min === 0 ? 1 : max - min;

  // Map values to coordinates
  const points = data.map((val, index) => {
    const x = (index / (data.length - 1)) * width;
    // Invert Y axis for SVG rendering (0,0 is top-left)
    const y = height - ((val - min) / range) * (height - 6) - 3;
    return { x, y };
  });

  const pathD = points.reduce((acc, p, i) => {
    return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, '');

  // For the filled area under the line
  const fillD = `${pathD} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;

  // Random unique ID for gradients so they don't conflict
  const gradId = React.useId().replace(/:/g, '');

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <defs>
        <linearGradient id={`grad-${gradId}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      
      {/* Filled Area */}
      <path d={fillD} fill={`url(#grad-${gradId})`} />

      {/* Stroke Line */}
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pulsing End Dot */}
      {points.length > 0 && (
        <circle
          cx={points[points.length - 1].x}
          cy={points[points.length - 1].y}
          r="3"
          fill={color}
          className="animate-pulse"
        />
      )}
    </svg>
  );
};

export default Sparkline;
