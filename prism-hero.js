/* One optional Three.js GPU scene, with a local SVG fallback. No build step. */
const host=document.querySelector('.prism-visual');
const hero=document.querySelector('.hero');
const canvas=host?.querySelector('canvas');
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
const fine=matchMedia('(hover:hover) and (pointer:fine)');
let cleanup=null,loading=false,disposed=false;
async function start(){
 if(!host||!canvas||loading||cleanup||disposed||reduce.matches||document.hidden)return;
 loading=true;
 let renderer,scene,io,ro,raf=0,visible=true,tx=0,ty=0,x=0,y=0,last=0;
 try{
  const T=await import('https://cdn.jsdelivr.net/npm/three@0.179.1/build/three.module.js');
  if(disposed||reduce.matches)return;
  renderer=new T.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
  renderer.setClearColor(0x000000,0);renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.18;
  scene=new T.Scene();
  const camera=new T.PerspectiveCamera(38,1,.1,30);camera.position.set(0,0,6.4);
  const group=new T.Group();scene.add(group);
  const geo=new T.TorusKnotGeometry(1.12,.19,160,14,2,3);
  const mat=new T.MeshPhysicalMaterial({color:0x9c89ff,metalness:.55,roughness:.27,clearcoat:1,clearcoatRoughness:.16});
  const object=new T.Mesh(geo,mat);group.add(object);
  const halo=new T.Group();group.add(halo);
  for(let i=0;i<3;i++){
   const vertices=[];for(let j=0;j<=100;j++){const a=j/100*Math.PI*2;vertices.push(new T.Vector3(Math.cos(a)*(1.75+i*.10),Math.sin(a)*(1.38+i*.11),Math.sin(a*2+i)*.22));}
   const line=new T.Line(new T.BufferGeometry().setFromPoints(vertices),new T.LineBasicMaterial({color:i%2?0x8ddcff:0x9d82ed,transparent:true,opacity:.33}));line.rotation.set(i*.3,.22-i*.28,-.4+i*.4);halo.add(line);
  }
  scene.add(new T.HemisphereLight(0xe9eaff,0x27245f,2.3));
  for(const [color,intensity,pos] of [[0xc8a5ff,4,[3,4,5]],[0x55c9ff,4,[-4,1,2]],[0xb85cff,3,[1,-3,-3]]]){const l=new T.DirectionalLight(color,intensity);l.position.set(...pos);scene.add(l);}
  function resize(){const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setPixelRatio(Math.min(devicePixelRatio,w<500?1:1.5));renderer.setSize(w,h,false);camera.aspect=w/h;camera.position.z=w/h<1?8:6.4;camera.updateProjectionMatrix();}
  function stop(){if(raf)cancelAnimationFrame(raf);raf=0;last=0;}
  function draw(now){raf=0;if(!visible||document.hidden||reduce.matches||disposed)return;const dt=Math.min(.05,last?(now-last)/1000:1/60);last=now;const k=1-Math.exp(-5*dt);x+=(tx-x)*k;y+=(ty-y)*k;object.rotation.y+=dt*.14;object.rotation.x=.28+Math.sin(now*.00045)*.12;group.rotation.y=x*.24;group.rotation.x=y*.15;group.position.y=Math.sin(now*.0008)*.08;renderer.render(scene,camera);host.classList.add('is-live');raf=requestAnimationFrame(draw);}
  function resume(){if(!raf&&visible&&!document.hidden&&!reduce.matches&&!disposed)raf=requestAnimationFrame(draw);}
  function pointer(e){if(!fine.matches||e.pointerType==='touch')return;const r=hero.getBoundingClientRect();tx=(e.clientX-r.left)/r.width*2-1;ty=1-(e.clientY-r.top)/r.height*2;}
  function leave(){tx=ty=0;}
  function visibility(){document.hidden?stop():resume();}
  function lost(e){e.preventDefault();cleanup?.();}
  resize();ro=new ResizeObserver(resize);ro.observe(host);
  io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;visible?resume():stop();});io.observe(host);
  hero.addEventListener('pointermove',pointer,{passive:true});hero.addEventListener('pointerleave',leave);document.addEventListener('visibilitychange',visibility);canvas.addEventListener('webglcontextlost',lost);
  cleanup=()=>{stop();ro.disconnect();io.disconnect();hero.removeEventListener('pointermove',pointer);hero.removeEventListener('pointerleave',leave);document.removeEventListener('visibilitychange',visibility);canvas.removeEventListener('webglcontextlost',lost);scene.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});renderer.dispose();host.classList.remove('is-live');cleanup=null;};
  resume();
 }catch(e){if(raf)cancelAnimationFrame(raf);ro?.disconnect();io?.disconnect();scene?.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});renderer?.dispose();host.classList.remove('is-live');console.debug('NAI: static hero fallback',e);}
 finally{loading=false;}
}
reduce.addEventListener('change',()=>{reduce.matches?cleanup?.():start();});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!cleanup)start();});
window.addEventListener('pagehide',()=>{disposed=true;cleanup?.();});
window.addEventListener('pageshow',()=>{disposed=false;start();});
if('requestIdleCallback'in window)requestIdleCallback(start,{timeout:1600});else setTimeout(start,200);
