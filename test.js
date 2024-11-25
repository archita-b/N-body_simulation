import { init, next } from "./N-body.js";

function generateParticles(numOfParticles, range) {
  const particles = [];
  for (let i = 0; i < numOfParticles; i++) {
    particles.push({
      x: Math.random() * range,
      y: Math.random() * range,
    });
  }
  return particles;
}
const input = generateParticles(1000, 100);

const time = 5;
const dt = 1;
const steps = Math.floor(time / dt);

init(input, dt);

console.log(`Input:`, input);

for (let i = 0; i < steps; i++) {
  console.log(`step ${i + 1}:`, next());
}
