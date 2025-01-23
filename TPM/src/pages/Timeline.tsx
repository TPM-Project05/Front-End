import React, { useState } from 'react';

const Timeline = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const lines = [
    [{ x: 15, y: 55 }, { x: 30, y: 40 }],
    [{ x: 30, y: 40 }, { x: 45, y: 55 }],
    [{ x: 45, y: 55 }, { x: 60, y: 40 }],
    [{ x: 60, y: 40 }, { x: 75, y: 55 }],
  ];

  // Struktur yang benar untuk hoverLines
  const hoverLines = {
    '0-0': [
      [{ x: 15, y: 55 }, { x: 14, y: 45 }],
      [{ x: 15, y: 55 }, { x: 7, y: 50 }],
      [{ x: 3, y: 54 }, { x: 7, y: 50 }],
      [{ x: 3, y: 54 }, { x: 3, y: 54 }],
    ],
    '1-0': [
      [{ x: 30, y: 40 }, { x: 30, y: 25 }],
      [{ x: 30, y: 40 }, { x: 20, y: 40 }],
    ],
  };

  return (
    <div className="w-[1280px] h-[832px] bg-[#17116B] relative">
      <svg className="w-full h-full">
        {/* Base lines */}
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            <line
              x1={`${line[0].x}%`}
              y1={`${line[0].y}%`}
              x2={`${line[1].x}%`}
              y2={`${line[1].y}%`}
              stroke="white"
              strokeWidth="2"
            />
            {line.map((point, pointIndex) => (
              <circle
                key={`${index}-${pointIndex}`}
                cx={`${point.x}%`}
                cy={`${point.y}%`}
                r="6"
                className="fill-white cursor-pointer transition-all duration-300"
                style={{
                  filter: 'drop-shadow(0px 0px 20px rgba(255, 255, 255, 1))',
                }}
                onMouseEnter={() => setHoveredPoint(`${index}-${pointIndex}`)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            ))}
          </React.Fragment>
        ))}

        {/* Hover lines - menampilkan kedua garis sekaligus */}
        {hoveredPoint && hoverLines[hoveredPoint] && (
          <>
            {hoverLines[hoveredPoint].map((line, index) => (
              <line
                key={index}
                x1={`${line[0].x}%`}
                y1={`${line[0].y}%`}
                x2={`${line[1].x}%`}
                y2={`${line[1].y}%`}
                stroke="white"
                strokeWidth="2"
                className="opacity-100"
              />
            ))}

            {/* Dots at the end of hover lines */}
            {hoverLines[hoveredPoint].map((line, index) => (
              <circle
                key={index}
                cx={`${line[1].x}%`}
                cy={`${line[1].y}%`}
                r="6"
                className="fill-white opacity-100"
                style={{
                  filter: 'drop-shadow(0px 0px 30px rgba(255, 255, 255, 1)) brightness(1.5)'
                }}
              />
            ))}
          </>
        )}
      </svg>
    </div>
  );
};


export default Timeline;
