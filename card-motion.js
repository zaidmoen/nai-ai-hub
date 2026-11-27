/* Card-only spring motion; existing naiMotion handles layout/dialog transitions. */
(() => {
 'use strict';
 const grid=document.getElementById('grid');
 if(!grid)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const fine=matchMedia('(hover:hover) and (pointer:fine)');
 let active=null, raf=0, last=0, pointer=null;
 const states=new Map();
 const enabled=()=>fine.matches&&!reduced.matches&&!document.hidden;
 const neutral=[0,0,0,50,50,0,0,0];
 const names=['--rx','--ry','--lift','--mx','--my','--glint','--dx','--dy'];
 const units=['deg','deg','px','%','%','','px','px'];
 function clear(surface){names.forEach(k=>surface.style.removeProperty(k));states.delete(surface);}
 function get(surface){let s=states.get(surface);if(!s){s={v:[...neutral],target:[...neutral],velocity:neutral.map(()=>0)};states.set(surface,s);}return s;}
 function release(){if(active){const s=states.get(active);if(s)s.target=[...neutral];}active=null;pointer=null;kick();}
 function reset(){if(raf)cancelAnimationFrame(raf);raf=0;last=0;active=null;pointer=null;for(const s of states.keys())clear(s);}
 function kick(){if(!raf&&states.size&&enabled())raf=requestAnimationFrame(tick);}
 function tick(now){
  raf=0;if(!enabled()){reset();return;}
  const dt=Math.min(.032,last?(now-last)/1000:1/60);last=now;
  if(active&&pointer&&active.isConnected){
   const r=active.parentElement.getBoundingClientRect();
   const x=Math.max(0,Math.min(1,(pointer.x-r.left)/Math.max(1,r.width)));
   const y=Math.max(0,Math.min(1,(pointer.y-r.top)/Math.max(1,r.height)));
   get(active).target=[(0.5-y)*11,(x-0.5)*11,-5,x*100,y*100,1,(x-.5)*16,(y-.5)*12];
  }
  let needsFrame=false;
  for(const [surface,s] of states){
   if(!surface.isConnected){clear(surface);if(active===surface){active=null;pointer=null;}continue;}
   let moving=false;
   for(let i=0;i<s.v.length;i++){
    // Critically damped-ish spring, substepped for stable frames.
    for(let j=0;j<2;j++){const h=dt/2;s.velocity[i]+=(240*(s.target[i]-s.v[i])-30*s.velocity[i])*h;s.v[i]+=s.velocity[i]*h;}
    if(Math.abs(s.target[i]-s.v[i])>.015||Math.abs(s.velocity[i])>.04)moving=true;
    const v=i===5?Math.max(0,Math.min(1,s.v[i])):s.v[i];
    surface.style.setProperty(names[i],v.toFixed(3)+units[i]);
   }
   if(moving)needsFrame=true;
   else if(surface!==active)clear(surface);
  }
  if(needsFrame)kick();else last=0;
 }
 grid.addEventListener('pointermove',e=>{
  if(!enabled()||e.pointerType==='touch')return;
  const surface=e.target.closest('.card-surface');
  if(!surface||!grid.contains(surface)){release();return;}
  if(active!==surface){release();active=surface;get(surface);}
  pointer={x:e.clientX,y:e.clientY};kick();
 },{passive:true});
 grid.addEventListener('pointerout',e=>{if(active&&(!(e.relatedTarget instanceof Node)||!active.contains(e.relatedTarget)))release();});
 grid.addEventListener('pointerleave',release);
 grid.addEventListener('pointercancel',reset);
 window.addEventListener('blur',reset);
 window.addEventListener('resize',reset,{passive:true});
 window.addEventListener('scroll',reset,{passive:true});
 window.addEventListener('pagehide',reset);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)reset();});
 reduced.addEventListener('change',reset);fine.addEventListener('change',reset);
 const mutations=new MutationObserver(()=>{if(active&&!active.isConnected)reset();});
 mutations.observe(grid,{childList:true});
 // Keep the real Details button as the keyboard action; pointer users may tap the surface.
 grid.addEventListener('click',e=>{
  if(e.target.closest('a,button,input,select,label')||getSelection()?.toString())return;
  e.target.closest('.card-surface')?.querySelector('[data-act="detail"]')?.click();
 });
 // Mobile has a short native press reaction; no tilt or ongoing frame loop.
 grid.addEventListener('pointerdown',e=>{
  if(reduced.matches||e.pointerType!=='touch'||e.target.closest('a,button'))return;
  const art=e.target.closest('.card-surface')?.querySelector('.card-art');
  if(art&&typeof art.animate==='function')art.animate([{opacity:1},{opacity:.8},{opacity:1}],{duration:190,easing:'ease-out'});
 },{passive:true});
})();
