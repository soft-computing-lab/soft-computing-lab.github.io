

/* Signature visual: a small live Particle Swarm Optimization run,
   converging on the global optimum of a bumpy fitness landscape —
   a literal picture of the lab's own research (PSO / DE / swarm intelligence). */
(function(){
  const canvas = document.getElementById('swarmCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let W, H, dpr;
  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W*dpr; canvas.height = H*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  window.addEventListener('resize', resize);
  resize();

  // fitness landscape: mixture of gaussians, one global optimum
  const peaks = [
    {x:0.62, y:0.38, h:1.0, s:0.16},
    {x:0.22, y:0.7, h:0.55, s:0.12},
    {x:0.78, y:0.78, h:0.4, s:0.10},
    {x:0.35, y:0.22, h:0.5, s:0.11},
  ];
  function fitness(x,y){
    let v = 0;
    for(const p of peaks){
      const d2 = ((x-p.x)**2 + (y-p.y)**2) / (2*p.s*p.s);
      v += p.h * Math.exp(-d2);
    }
    return v;
  }
  const optimum = peaks[0];

  const N = 60;
  let particles = [];
  function initParticles(){
    particles = [];
    for(let i=0;i<N;i++){
      particles.push({
        x: Math.random(), y: Math.random(),
        vx: (Math.random()-0.5)*0.004, vy: (Math.random()-0.5)*0.004,
        best: null, bestFit: -1
      });
    }
  }
  initParticles();

  let gBest = {x:0.5,y:0.5}, gBestFit = -1;
  const w = 0.72, c1 = 0.18, c2 = 0.24, speedCap = 0.006;
  let frame = 0;

  function step(){
    frame++;
    for(const p of particles){
      const f = fitness(p.x,p.y);
      if(f > p.bestFit){ p.bestFit = f; p.best = {x:p.x,y:p.y}; }
      if(f > gBestFit){ gBestFit = f; gBest = {x:p.x,y:p.y}; }
    }
    for(const p of particles){
      const r1 = Math.random(), r2 = Math.random();
      p.vx = w*p.vx + c1*r1*(p.best.x-p.x) + c2*r2*(gBest.x-p.x);
      p.vy = w*p.vy + c1*r1*(p.best.y-p.y) + c2*r2*(gBest.y-p.y);
      const speed = Math.hypot(p.vx, p.vy);
      if(speed > speedCap){ p.vx = p.vx/speed*speedCap; p.vy = p.vy/speed*speedCap; }
      p.x += p.vx; p.y += p.vy;
      if(p.x<0||p.x>1){ p.vx*=-0.5; p.x=Math.max(0,Math.min(1,p.x)); }
      if(p.y<0||p.y>1){ p.vy*=-0.5; p.y=Math.max(0,Math.min(1,p.y)); }
    }
    // periodically reseed for a perpetual, meditative loop
    if(frame % 900 === 0){ initParticles(); gBestFit = -1; }
  }

  function draw(){
    ctx.clearRect(0,0,W,H);

    // contour rings around optimum (subtle, brand-teal)
    ctx.strokeStyle = 'rgba(224,199,127,0.14)';
    for(let r=1;r<=4;r++){
      ctx.beginPath();
      ctx.ellipse(optimum.x*W, optimum.y*H, r*28, r*24, 0, 0, Math.PI*2);
      ctx.stroke();
    }
    // crosshair on global optimum
    ctx.strokeStyle = 'rgba(224,199,127,0.55)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(optimum.x*W-8, optimum.y*H); ctx.lineTo(optimum.x*W+8, optimum.y*H);
    ctx.moveTo(optimum.x*W, optimum.y*H-8); ctx.lineTo(optimum.x*W, optimum.y*H+8);
    ctx.stroke();

    // particle trails to personal best (very faint)
    ctx.strokeStyle = 'rgba(27,75,107,0.35)';
    ctx.lineWidth = 1;
    for(const p of particles){
      ctx.beginPath();
      ctx.moveTo(p.x*W, p.y*H);
      ctx.lineTo(gBest.x*W, gBest.y*H);
      ctx.stroke();
    }
    // particles
    for(const p of particles){
      ctx.beginPath();
      ctx.arc(p.x*W, p.y*H, 2.4, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(241, 37, 10, 0.85)';
      ctx.fill();
    }
    // global best marker
    ctx.beginPath();
    ctx.arc(gBest.x*W, gBest.y*H, 4, 0, Math.PI*2);
    ctx.fillStyle = '#E0C77F';
    ctx.fill();
  }

  function loop(){
    step(); draw();
    if(!reduceMotion) requestAnimationFrame(loop);
  }
  if(reduceMotion){ step(); step(); draw(); }
  else { requestAnimationFrame(loop); }
})();

