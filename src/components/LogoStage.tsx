import {useEffect,useRef} from 'react';
import {asset} from './UI';

/** Pointer work is event-driven: no idle animation loop or React updates per frame. */
export function LogoStage(){const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const scene=ref.current;if(!scene)return;const host=scene.parentElement!;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover: hover) and (pointer: fine)');let visible=false,frame=0,x=0,y=0;
  const reset=()=>{cancelAnimationFrame(frame);frame=0;scene.style.setProperty('--stage-x','0px');scene.style.setProperty('--stage-y','0px')};
  const sync=()=>{scene.dataset.running=String(visible&&!document.hidden&&!reduced.matches);if(scene.dataset.running!=='true'||!fine.matches)reset()};
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync()},{threshold:.05});observer.observe(scene);
  const move=(e:PointerEvent)=>{if(!fine.matches||reduced.matches||!visible||document.hidden)return;const r=host.getBoundingClientRect();x=Math.max(-1,Math.min(1,(e.clientX-r.left)/r.width*2-1))*6;y=Math.max(-1,Math.min(1,(e.clientY-r.top)/r.height*2-1))*4;if(!frame)frame=requestAnimationFrame(()=>{scene.style.setProperty('--stage-x',x+'px');scene.style.setProperty('--stage-y',y+'px');frame=0})};
  document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);fine.addEventListener('change',sync);host.addEventListener('pointermove',move);host.addEventListener('pointerleave',reset);
  return()=>{observer.disconnect();cancelAnimationFrame(frame);document.removeEventListener('visibilitychange',sync);reduced.removeEventListener('change',sync);fine.removeEventListener('change',sync);host.removeEventListener('pointermove',move);host.removeEventListener('pointerleave',reset)};
 },[]);
 return <div className="gateway-scene" ref={ref} aria-hidden="true" data-running="false"><img className="gateway-art" src={asset('home-logo-stage.webp')} alt="" fetchPriority="high"/><div className="nai-stage-position"><div className="nai-stage-parallax"><div className="nai-stage-float"><img className="nai-stage-sculpture" src={asset('nai-sculpture.webp')} alt=""/></div></div><div className="nai-stage-reflection"/></div></div>
}
