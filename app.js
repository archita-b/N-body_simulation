import { next } from "./N-body.js";

const input = [
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 0.5, y: 0 },
];
const time = 5;
const dt = 1;
const steps = Math.floor(time / dt);

for (let i = 0; i < steps; i++) {
  next(input, dt);
  console.log("-------------------------");
}
