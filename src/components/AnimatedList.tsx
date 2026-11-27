import {useLayoutEffect,useRef,type ReactNode} from 'react';
/** FLIP on surviving keyed rows; entrances only for newly visible rows. No DOM reordering. */
export function AnimatedList({children,className,signature}:{children:ReactNode;className:string;signature:string}){
 const ref=useRef<HTMLDivElement>(null),previous=useRef<Map<string,{x:number;y:number}>>(new Map()),first=useRef(true);
 useLayoutEffect(()=>{
  const el=ref.current;if(!el)return;
  const rows=Array.from(el.children).filter((x):x is HTMLElement=>x instanceof HTMLElement&&!!x.dataset.motionKey);
  const base=el.getBoundingClientRect(),next=new Map<string,{x:number;y:number}>();
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  rows.forEach((row,i)=>{row.getAnimations?.().filter(a=>a.id==='nai-flip').forEach(a=>a.cancel());const rect=row.getBoundingClientRect(),key=row.dataset.motionKey!,p={x:rect.left-base.left+el.scrollLeft,y:rect.top-base.top+el.scrollTop};next.set(key,p);const old=previous.current.get(key);
   if(reduced||first.current||typeof row.animate!=='function'||rect.bottom<0||rect.top>innerHeight)return;
   if(old){const dx=old.x-p.x,dy=old.y-p.y;if(Math.abs(dx)+Math.abs(dy)<2)return;const a=row.animate([{transform:'translate('+dx+'px,'+dy+'px)'},{transform:'translate(0,0)'}],{duration:290,easing:'cubic-bezier(.2,.8,.2,1)'});a.id='nai-flip'}
   else{const a=row.animate([{opacity:.25,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],{duration:230,delay:Math.min(i,5)*18,easing:'ease-out'});a.id='nai-flip'}
  });previous.current=next;first.current=false;
  return()=>rows.forEach(row=>row.getAnimations?.().filter(a=>a.id==='nai-flip').forEach(a=>a.cancel()));
 },[signature]);
 return <div ref={ref} className={className}>{children}</div>
}
