import type {ReactNode,MouseEvent} from 'react';
import {Icon,asset} from './UI';
import '../workbench-premium.css';

// Keep section jumps inside the current HashRouter route.
function jump(event:MouseEvent<HTMLAnchorElement>,href:string,action?:()=>void){event.preventDefault();action?.();requestAnimationFrame(()=>document.getElementById(href.slice(1))?.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}))}

export function WorkbenchHero({kind,title,accent,description,primary,secondary,stats}:{kind:'mcp'|'arena';title:string;accent:string;description:string;primary:{label:string;href:string;onClick?:()=>void};secondary:{label:string;href:string};stats:{value:ReactNode;label:string}[]}){return <header className={'workbench-hero hero-'+kind}><img src={asset(kind==='mcp'?'mcp-network.webp':'model-chamber.webp')} alt="" fetchPriority="high"/><div className="workbench-hero-copy"><span className="workbench-emblem"><Icon name={kind==='mcp'?'plug':'chart'}/></span><h1 dir="ltr">{title}{' '}<span>{accent}</span></h1><p>{description}</p><div className="workbench-hero-actions"><a className="workbench-primary" href={primary.href} onClick={e=>jump(e,primary.href,primary.onClick)}>{primary.label}<Icon name="arrow"/></a><a className="workbench-secondary" href={secondary.href} onClick={e=>jump(e,secondary.href)}>{secondary.label}<Icon name={kind==='mcp'?'layers':'chart'}/></a></div></div><div className="workbench-hero-stats">{stats.map(x=><div key={x.label}><b>{x.value}</b><span>{x.label}</span></div>)}</div></header>}
