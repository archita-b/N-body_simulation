let particles = [];
let dt = 0;
const mass = 1;
const G = 0.5;

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
  const minDistance = 20;

  for (let i = 0; i < n; i++) {
    particles[i].ax = 0;
    particles[i].ay = 0;

    for (let j = i + 1; j < n - 1; j++) {
      const dx = particles[j].x - particles[i].x;
      const dy = particles[j].y - particles[i].y;
      let dr = Math.sqrt(dx ** 2 + dy ** 2);

      if (dr < minDistance) continue;

      const F = (G * mass * mass) / dr ** 2;
      const ax = (F / mass) * (dx / dr);
      const ay = (F / mass) * (dy / dr);

      particles[i].ax += ax;
      particles[i].ay += ay;
      particles[j].ax -= ax;
      particles[j].ay -= ay;
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

  return particles.map((p) => {
    return { x: p.x, y: p.y };
  });
}
