const MOTORCYCLE_PIXELS: [number, number][] = [
  // handlebars
  [29, 3],
  [30, 4],
  [31, 5],
  [32, 5],
  [33, 4],
  // front fairing
  [32, 6],
  [33, 7],
  [34, 8],
  [35, 9],
  // tank
  [24, 6],
  [25, 5],
  [26, 5],
  [27, 5],
  [28, 6],
  [29, 7],
  // seat
  [20, 6],
  [21, 5],
  [22, 5],
  [23, 6],
  [19, 7],
  [18, 8],
  [17, 9],
  // rear body
  [15, 10],
  [14, 11],
  [13, 12],
  // frame
  [16, 11],
  [17, 12],
  [18, 13],
  [19, 14],
  [20, 15],
  [21, 16],
  [22, 17],
  [23, 16],
  [24, 15],
  [25, 14],
  [26, 13],
  [27, 12],
  [28, 11],
  [29, 10],
  [30, 11],
  [31, 12],
  [32, 13],
  [33, 14],
  [34, 15],
  [35, 16],
  [36, 17],
  // rear wheel
  [7, 15],
  [6, 16],
  [5, 17],
  [5, 18],
  [6, 19],
  [7, 20],
  [8, 20],
  [9, 19],
  [10, 18],
  [10, 17],
  [9, 16],
  [8, 15],
  [7, 17],
  [8, 18],
  // front wheel
  [33, 15],
  [32, 16],
  [31, 17],
  [31, 18],
  [32, 19],
  [33, 20],
  [34, 20],
  [35, 19],
  [36, 18],
  [36, 17],
  [35, 16],
  [34, 15],
  [33, 17],
  [34, 18],
];

const UNIT = 2;

export default function AboutMotorcycle() {
  return (
    <div className="about-motorcycle-scene" aria-hidden="true">
      <div className="about-motorcycle-stage">
        <svg
          className="about-motorcycle"
          viewBox="0 0 76 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {MOTORCYCLE_PIXELS.map(([gx, gy], index) => (
            <rect
              key={index}
              x={gx * UNIT}
              y={gy * UNIT}
              width={UNIT}
              height={UNIT}
              fill="currentColor"
            />
          ))}
        </svg>
      </div>
      <div className="about-motorcycle-ground">
        <span className="about-motorcycle-ground-track" />
      </div>
    </div>
  );
}
