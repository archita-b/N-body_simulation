export function init(input) {
  input.forEach((item) => {
    item.vx = 0;
    item.vy = 0;
    item.ax = 0;
    item.ay = 0;

    return item;
  });
  return input;
}

function computeAcceleration(particles) {
  const mass = 0.1;
  const G = 1;
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

function updatePositions(particles, dt) {
  particles.forEach((particle) => {
    particle.vx = particle.ax * dt;
    particle.vy = particle.ay * dt;

    particle.x = particle.vx * dt;
    particle.y = particle.vy * dt;
  });
}

export function next(particles, dt) {
  computeAcceleration(particles);
  updatePositions(particles, dt);

  particles.forEach((p, i) => {
    console.log(
      `particle ${i + 1}: x = ${particles[i].x},  y = ${particles[i].y}`
    );
  });
}
