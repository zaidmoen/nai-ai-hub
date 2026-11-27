import {useEffect,useRef} from 'react';

const N=1600;
const points=Array.from({length:N},(_,i)=>{const y=1-2*(i+.5)/N,a=i*2.399963229728653,r=Math.sqrt(1-y*y);return [r*Math.cos(a),y,r*Math.sin(a)] as const});
const stars=Array.from({length:110},(_,i)=>[(i*137+53)%997/997,(i*271+19)%991/991,(i*37)%100/100] as const);

/** A real particle scene, isolated from React's render loop. */
export function AtlasField(){
 const ref=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const canvas=ref.current,stage=canvas?.parentElement;if(!canvas||!stage)return;
  const ctx=canvas.getContext('2d',{alpha:true});if(!ctx)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover:hover) and (pointer:fine)');
  let w=0,h=0,small=false,frame=0,visible=true,alive=true,last=0,lastPaint=0,time=0,px=0,py=0,tx=0,ty=0;
  function draw(){
   if(!ctx||!w||!h)return;ctx.clearRect(0,0,w,h);
   const cx=w*.5,cy=h*.5,r=w*.145,angle=time*.22+px*.45,cos=Math.cos(angle),sin=Math.sin(angle),tilt=-.16+py*.18,ct=Math.cos(tilt),st=Math.sin(tilt);
   for(let i=0;i<stars.length;i++){const [x,y,a]=stars[i];ctx.fillStyle=i%3===0?'rgba(115,226,255,'+(.13+a*.3)+')':'rgba(193,167,255,'+(.13+a*.32)+')';const s=a>.9?1.6:1;ctx.fillRect(x*w,y*h,s,s)}
   const cols=small?35:65,rows=small?13:24;
   for(let row=0;row<rows;row++){const v=row/(rows-1),spread=w*(.3+v*.48),base=h*(.69+v*.34);for(let col=0;col<cols;col++){const u=col/(cols-1)*2-1,x=cx+u*spread,y=base+Math.sin(u*4.7+v*6+time*.6)*h*(.009+v*.021)+Math.sin(u*8-v*3)*h*.01;const a=(.13+v*.34)*(1-Math.abs(u)*.55)*(1-v*.48);ctx.fillStyle=u<0?'rgba(86,192,255,'+a+')':'rgba(185,114,255,'+a+')';const s=.7+v*.9;ctx.fillRect(x,y,s,s)}}
   const halo=ctx.createRadialGradient(cx,cy,0,cx,cy,r*1.7);halo.addColorStop(0,'rgba(111,79,220,.13)');halo.addColorStop(.55,'rgba(111,79,220,.10)');halo.addColorStop(1,'rgba(111,79,220,0)');ctx.fillStyle=halo;ctx.fillRect(cx-r*1.7,cy-r*1.7,r*3.4,r*3.4);
   for(let i=0;i<points.length;i+=small?2:1){const [x,y,z]=points[i],xx=x*cos-z*sin,zz=x*sin+z*cos,yy=y*ct-zz*st,depth=y*st+zz*ct;if(depth<-.12)continue;const p=1/(1-depth*.075),sx=cx+xx*r*p,sy=cy+yy*r*p,ridge=Math.sin(x*9+z*4)*Math.cos(y*8-z*6)+Math.sin(z*9+y*3)*.52;const a=(ridge>.25?.77:.27)*(.45+Math.max(0,depth)*.55);ctx.fillStyle=xx<-.15?'rgba(110,216,255,'+a+')':'rgba(208,155,255,'+a+')';const s=small?.85:1.25;ctx.fillRect(sx,sy,s,s)}
  }
  function resize(){if(!canvas||!stage||!ctx)return;const b=stage.getBoundingClientRect();w=Math.round(b.width);h=Math.round(b.height);if(!w||!h)return;small=w<460;const dpr=Math.min(devicePixelRatio||1,small?1.25:1.6);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw()}
  function stop(){cancelAnimationFrame(frame);frame=0;last=0;lastPaint=0;stage?.classList.remove('field-running')}
  function tick(now:number){frame=0;if(!alive||!visible||document.hidden||reduced.matches)return;const dt=last?Math.min((now-last)/1000,.075):0;last=now;time+=dt;px+=(tx-px)*.085;py+=(ty-py)*.085;if(!lastPaint||now-lastPaint>=1000/(small?24:30)){draw();lastPaint=now}frame=requestAnimationFrame(tick)}
  function sync(){if(!alive||!visible||document.hidden||reduced.matches){stop();if(reduced.matches)draw();return}stage?.classList.add('field-running');if(!frame)frame=requestAnimationFrame(tick)}
  function pointer(e:PointerEvent){if(!fine.matches||reduced.matches||!stage)return;const b=stage.getBoundingClientRect();tx=(e.clientX-b.left)/Math.max(1,b.width)*2-1;ty=(e.clientY-b.top)/Math.max(1,b.height)*2-1}
  function leave(){tx=ty=0}
  const ro=typeof ResizeObserver!=='undefined'?new ResizeObserver(resize):null;ro?.observe(stage);if(!ro)window.addEventListener('resize',resize);
  const io=typeof IntersectionObserver!=='undefined'?new IntersectionObserver(([e])=>{visible=e.isIntersecting;sync()}):null;io?.observe(stage);
  stage.addEventListener('pointermove',pointer,{passive:true});stage.addEventListener('pointerleave',leave);
  document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);
  const hide=()=>{alive=false;stop()},show=()=>{alive=true;resize();sync()};window.addEventListener('pagehide',hide);window.addEventListener('pageshow',show);
  resize();sync();
  return()=>{alive=false;stop();ro?.disconnect();io?.disconnect();window.removeEventListener('resize',resize);stage.removeEventListener('pointermove',pointer);stage.removeEventListener('pointerleave',leave);document.removeEventListener('visibilitychange',sync);reduced.removeEventListener('change',sync);window.removeEventListener('pagehide',hide);window.removeEventListener('pageshow',show)}
 },[]);
 return <canvas ref={ref} className="atlas-field" aria-hidden="true"/>;
}
