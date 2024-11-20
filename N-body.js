let particles = [];
let dt = 0;
const mass = 0.1;
const G = 1;

export function init(input, timeStep) {
  particles = input.map((particle) => ({
    ...particle,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
  }));
  dt = timeStep;
}

function computeAcceleration() {
  const n = particles.length;

  for (let i = 0; i < n; i++) {
    particles[i].ax = 0;
    particles[i].ay = 0;

    for (let j = 0; j < n; j++) {
      if (i !== j) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dr = Math.sqrt(dx ** 2 + dy ** 2);
        const F = (G * mass * mass) / dr ** 2;
        const ax = (F / mass) * (dx / dr);
        const ay = (F / mass) * (dy / dr);

        particles[i].ax += ax;
        particles[i].ay += ay;
      }
    }
  }
}

function updatePositions() {
  particles.forEach((particle) => {
    particle.vx += particle.ax * dt;
    particle.vy += particle.ay * dt;

    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
  });
}

export function next() {
  computeAcceleration();
  updatePositions();

  return particles.map((p, i) => {
    return { x: p.x.toFixed(2), y: p.y.toFixed(2) };
  });
}
