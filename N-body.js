// const particles = [{ "x": 0 , "y":0, "vx" : 0, "vy": 0, "ax": 0, "ay": 0}];

function init(input) {
  input.forEach((item) => {
    item.vx = 0;
    item.vy = 0;
    item.ax = 0;
    item.ay = 0;

    return item;
  });
  return input;
}
// console.log(
//   init([
//     { x: 0, y: 1 },
//     { x: 1, y: 0 },
//     { x: 1, y: 1 },
//   ])
// );

function nBody(particles, dt) {
  const mass = 0.1;
  const G = 6.6743 * 10 ** -11;
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

    particles[i].vx += particles[i].ax * dt;
    particles[i].vy += particles[i].ay * dt;

    particles[i].x += particles[i].vx * dt;
    particles[i].y += particles[i].vy * dt;
  }
}

function next(particles, dt) {
  nBody(particles, dt);

  particles.forEach((p) => {
    console.log(`x coordinate of ${particle[i]}: ${particle[i].x}
                 y coordinate of ${particle[i]}: ${particle[i].y}`);
  });
}
