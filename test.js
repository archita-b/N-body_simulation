import { init, next } from "./N-body.js";

const input = [
  { x: 0, y: 1 },
  { x: 1, y: 1 },
];
const time = 5;
const dt = 1;
const steps = Math.floor(time / dt);

init(input, dt);

console.log(`Input:`, input);

for (let i = 0; i < steps; i++) {
  console.log(`step ${i + 1}:`, next());
}
