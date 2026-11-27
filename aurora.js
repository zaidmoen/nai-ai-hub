/* Progressive enhancement: native catalog stays operational when CDN/GPU are unavailable. */
const hero=document.querySelector('.aurora-hero');
const sceneHost=hero.querySelector('.aurora-scene');
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
const fine=matchMedia('(hover:hover) and (pointer:fine)');
const input=document.getElementById('search');
const searchButton=document.getElementById('heroSearch');
function showResults(){document.getElementById('directory').scrollIntoView({behavior:reduce.matches?'instant':'smooth'});}
searchButton.addEventListener('click',showResults);
input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.isComposing){e.preventDefault();showResults();}});
const art=new Image();
art.onload=()=>hero.classList.add('has-art');
art.src=new URL('./assets/nai-aurora.webp',import.meta.url).href;
let timeline;
async function entrance(){
  if(reduce.matches)return;
  try{
    const {gsap}=await import('https://cdn.jsdelivr.net/npm/gsap@3.12.5/+esm');
    if(reduce.matches)return;
    timeline=gsap.timeline({defaults:{ease:'power3.out'}});
    timeline.fromTo(hero.querySelectorAll('.hero-copy > *'),{y:18,opacity:0},{y:0,opacity:1,duration:.75,stagger:.085,clearProps:'transform,opacity'})
      .fromTo('.aurora-orbits path',{strokeDasharray:2200,strokeDashoffset:2200},{strokeDashoffset:0,duration:1.8,stagger:.12,clearProps:'strokeDasharray,strokeDashoffset'},0);
  }catch(e){console.debug('NAI: native motion fallback',e);}
}
entrance();
let disposed=false, starting=false, cleanup=null;
async function startScene(){
  if(starting||cleanup||disposed||reduce.matches||document.visibilityState==='hidden')return;
  starting=true;
  let renderer, THREE, scene, camera, points, curves, resize, observer, io, frame=0;
  let visible=true, x=0,y=0,tx=0,ty=0,last=0;
  function stopFrame(){if(frame)cancelAnimationFrame(frame);frame=0;last=0;}
  function tick(now){
    frame=0;
    if(disposed||reduce.matches||!visible||document.hidden)return;
    if(!last)last=now;
    const dt=Math.min(.05,(now-last)/1000);last=now;
    const alpha=1-Math.exp(-4*dt);x+=(tx-x)*alpha;y+=(ty-y)*alpha;
    camera.position.x=x*.55;camera.position.y=y*.32;camera.lookAt(0,0,0);
    points.rotation.y+=dt*.035;points.rotation.z+=dt*.018;
    curves.rotation.y+=dt*.07;curves.rotation.z=Math.sin(now*.00022)*.09;
    renderer.render(scene,camera);
    frame=requestAnimationFrame(tick);
  }
  function resume(){if(!frame&&visible&&!document.hidden&&!reduce.matches&&!disposed)frame=requestAnimationFrame(tick);}
  function pointer(e){if(!fine.matches||e.pointerType==='touch')return;const r=hero.getBoundingClientRect();tx=(e.clientX-r.left)/r.width*2-1;ty=1-(e.clientY-r.top)/r.height*2;}
  function reset(){tx=ty=0;}
  function visibility(){if(document.hidden)stopFrame();else resume();}
  try{
    if(navigator.gpu&&isSecureContext){
      try{THREE=await import('three/webgpu');renderer=new THREE.WebGPURenderer({alpha:true,antialias:true});await renderer.init();}
      catch(e){renderer?.dispose();renderer=null;}
    }
    if(!renderer){THREE=await import('three');renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}
    if(disposed||reduce.matches){renderer.dispose();return;}
    const mobile=matchMedia('(max-width: 680px)').matches;
    renderer.setPixelRatio(Math.min(devicePixelRatio,mobile?1:1.5));
    renderer.setClearColor(0x000000,0);
    scene=new THREE.Scene();
    camera=new THREE.PerspectiveCamera(42,1,.1,50);camera.position.z=8;
    const positions=[],colors=[],color=new THREE.Color(),n=mobile?180:480;
    for(let i=0;i<n;i++){
      const a=i*2.399963, r=2.2+Math.sin(i*12.9898)*.75+(i%9)*.08;
      positions.push(Math.cos(a)*r*1.6,Math.sin(a)*r*.78,Math.sin(i*7.13)*1.2);
      color.set(i%3===0?0x9b73ff:i%3===1?0x438eff:0xa5deff);colors.push(color.r,color.g,color.b);
    }
    const geometry=new THREE.BufferGeometry();
    geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
    points=new THREE.Points(geometry,new THREE.PointsMaterial({size:mobile?.025:.032,vertexColors:true,transparent:true,opacity:.68,depthWrite:false,blending:THREE.AdditiveBlending}));scene.add(points);
    curves=new THREE.Group();
    for(let j=0;j<(mobile?2:3);j++){
      const vertices=[];
      for(let i=0;i<=160;i++){const t=i/160*Math.PI*2;vertices.push(new THREE.Vector3(Math.cos(t)*(3.2+j*.18),Math.sin(t)*(1.65+j*.13),Math.sin(t*2+j*.7)*.55));}
      const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(vertices),new THREE.LineBasicMaterial({color:j%2?0x4eafff:0xa06cff,transparent:true,opacity:.25,depthWrite:false,blending:THREE.AdditiveBlending}));
      line.rotation.z=(j-1)*.15;curves.add(line);
    }
    scene.add(curves);sceneHost.append(renderer.domElement);
    resize=()=>{const w=hero.clientWidth,h=hero.clientHeight;if(!w||!h)return;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false);};
    resize();observer=new ResizeObserver(resize);observer.observe(hero);
    io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)resume();else stopFrame();});io.observe(hero);
    hero.addEventListener('pointermove',pointer,{passive:true});hero.addEventListener('pointerleave',reset);document.addEventListener('visibilitychange',visibility);
    cleanup=()=>{stopFrame();observer.disconnect();io.disconnect();hero.removeEventListener('pointermove',pointer);hero.removeEventListener('pointerleave',reset);document.removeEventListener('visibilitychange',visibility);scene.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});renderer.dispose();renderer.domElement.remove();cleanup=null;};
    resume();
  }catch(e){stopFrame();observer?.disconnect();io?.disconnect();scene?.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});renderer?.dispose();renderer?.domElement.remove();console.debug('NAI: static SVG fallback',e);}
  finally{starting=false;}
}
reduce.addEventListener('change',()=>{if(reduce.matches){timeline?.progress(1).kill();cleanup?.();}else startScene();});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!cleanup)startScene();});
window.addEventListener('pagehide',()=>{disposed=true;cleanup?.();});
window.addEventListener('pageshow',()=>{disposed=false;startScene();});
if('requestIdleCallback' in window)requestIdleCallback(startScene,{timeout:1800});else setTimeout(startScene,350);
