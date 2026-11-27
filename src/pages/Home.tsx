import {useState,type CSSProperties} from 'react';
import {Link} from 'react-router-dom';
import type {Group} from '../types';
import {catalog,names,routes,models,snapshot,prompts} from '../data/catalog';
import {useHub} from '../state';
import {Icon,Mark,asset} from '../components/UI';
import {AtlasField} from '../components/AtlasField';
type NodeKey=Group|'workspace';
const nodes:{key:NodeKey;label:string;icon:string;x:number;y:number;color:string;desc:[string,string]}[]=[
 {key:'tools',label:'AI Tools',icon:'assist',x:50,y:14,color:'#c4a3ff',desc:['اكتشف أدوات الدراسة والبرمجة والتصميم','Discover tools for study, development and design']},
 {key:'prompts',label:'Prompt Studio',icon:'terminal',x:82,y:30,color:'#c4a3ff',desc:['خصص برومبتات قوية حسب مشروعك','Customize reusable prompts for your project']},
 {key:'skills',label:'Skills Hub',icon:'layers',x:82,y:70,color:'#72ddea',desc:['استكشف مهارات ناي والمشاريع الخارجية','Explore NAI skills and upstream projects']},
 {key:'mcp',label:'MCP Hub',icon:'plug',x:50,y:86,color:'#c4a3ff',desc:['تعرف على طرق ربط أدوات التطوير','Explore integration setup guides']},
 {key:'models',label:'Model Arena',icon:'chart',x:18,y:70,color:'#c4a3ff',desc:['قارن أداء النماذج والتكلفة والسرعة','Compare model performance, cost and speed']},
 {key:'workspace',label:'Workspace',icon:'folder',x:18,y:30,color:'#72ddea',desc:['ارجع لمواردك ومقارناتك المحفوظة','Return to saved resources and comparisons']}
];
const href=(key:NodeKey)=>key==='workspace'?'/workspace':routes[key];
const selectedIds=['sol','kimi','deepseek'];
export function Home(){
 const {t,loc,favorites}=useHub(),[active,setActive]=useState<NodeKey|null>(null);
 const activeNode=nodes.find(n=>n.key===active),saved=Object.values(favorites).reduce((a,v)=>a+v.length,0),prompt=prompts.find(p=>p.id==='cinematic-ui');
 return <>
 <section className="hero atlas-hero-v4">
  <div className="hero-copy">
   <p className="eyebrow atlas-kicker"><i/> NAJAH AI SOCIETY / KNOWLEDGE NETWORK</p>
   <h1>{t('اكتشف أكثر','Discover more')}<span>{t('وابن أشياء جديدة','Build something new')}</span></h1>
   <p>{t('مساحتك لاكتشاف الذكاء الاصطناعي وتطوير مهاراتك وبناء مشاريع حقيقية','Your space to explore AI, develop your skills and build meaningful projects.')}</p>
   <div className="actions"><Link className="button primary" to="/tools">{t('استكشف المكتبة','Explore library')} <Icon name="arrow"/></Link><Link className="button hero-secondary" to="/workspace">{t('مساحتي','My workspace')}</Link></div>
   <div className="atlas-metrics">{[[catalog.length,t('مورد','Resources')],[nodes.length,t('أقسام','Destinations')],[saved,t('محفوظاتك','Your saves')]].map(([v,l])=><div key={l}><b>{v}</b><small>{l}</small></div>)}</div>
  </div>
  <div className="atlas-console">
   <div className="atlas-meta"><span>NEURAL ATLAS / 01</span><span><i/> {t('شبكة المعرفة','KNOWLEDGE NETWORK')}</span></div>
   <div className="atlas atlas-v4" data-active={active||undefined} aria-label={t('خارطة المنصة','Platform map')}>
    <AtlasField/>
    <svg viewBox="0 0 600 520" className="atlas-lines" aria-hidden="true">
     <defs><linearGradient id="orbit-gradient"><stop stopColor="#6dcee9" stopOpacity=".5"/><stop offset=".5" stopColor="#d4b9ff" stopOpacity=".9"/><stop offset="1" stopColor="#9270eb" stopOpacity=".5"/></linearGradient></defs>
     {[90,135,185,230,263].map((r,i)=><ellipse key={r} cx="300" cy="260" rx={r} ry={r*.85} fill="none" stroke={i===3?'url(#orbit-gradient)':'#9681d6'} strokeOpacity={i===3?.65:.24} strokeDasharray={i===3?undefined:'2 7'}/>)}
     <path d="M300 12V508M22 260H578" stroke="#9681d6" strokeOpacity=".13" strokeDasharray="2 8"/>
     <ellipse cx="300" cy="349" rx="110" ry="18" fill="none" stroke="#9869ed" strokeOpacity=".4"/>
     {nodes.map(n=>{const x=n.x*6,y=n.y*5.2,dx=x-300,dy=y-260,d='M300 260 Q'+(300+dx*.55-dy*.08)+' '+(260+dy*.55+dx*.08)+' '+x+' '+y;return <g key={n.key} className={'atlas-route '+(active===n.key?'route-active':'')} style={{color:n.color}}><path d={d} stroke="currentColor" strokeWidth="7" opacity=".11" fill="none"/><path d={d} stroke="currentColor" strokeWidth="1.25" opacity=".75" fill="none"/><path d={d} stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" fill="none" pathLength="100" strokeDasharray="3 97" className="atlas-pulse"/></g>})}
    </svg>
    <div className="atlas-core"><div className="atlas-core-ring"/><img src={asset('logo.svg')} alt=""/><strong>NAI <span>AI HUB</span></strong><b>NEURAL ATLAS</b></div>
    {nodes.map(n=><Link key={n.key} to={href(n.key)} className={'atlas-node '+(active===n.key?'node-active':'')} style={{'--x':n.x+'%','--y':n.y+'%','--mark':n.color} as CSSProperties} onPointerEnter={e=>{if(e.pointerType!=='touch')setActive(n.key)}} onFocus={()=>setActive(n.key)}><Icon name={n.icon}/><b>{n.label}</b><small>{n.key==='workspace'?saved:catalog.filter(r=>r.group===n.key).length}</small></Link>)}
   </div>
   <div className="atlas-preview"><span className="atlas-preview-icon"><Icon name={activeNode?.icon||'spark'}/></span><div><b>{activeNode?.label||t('استكشف الأطلس','Explore the atlas')}</b><p>{activeNode?loc(activeNode.desc):t('اختار أي دائرة عشان تستكشف القسم','Select a node to explore its library')}</p></div><Link className="button" to={activeNode?href(activeNode.key):'/tools'}>{t('افتح','Open')} <Icon name="arrow"/></Link></div>
  </div>
 </section>
 <div className="section-head editorial-title"><h2>{t('مختارات ناي','Curated for you')}</h2><Link to="/tools">{t('كل الأدوات','All tools')} ↗</Link></div>
 <div className="editorial editorial-v4">{catalog.filter(x=>[0,5,12,'impeccable'].includes(x.id)).map((x,i)=><Link className="editorial-card" key={x.group+x.id} to={x.href} style={{'--card-color':x.color,'--order':i} as CSSProperties}><span className="feature-art"><Icon group={x.group} id={x.id} category={x.category}/></span><Mark group={x.group} id={x.id} category={x.category} color={x.color}/><small>{loc(names[x.group])}</small><h3>{loc(x.title)}</h3><p>{loc(x.desc)}</p><span className="editorial-cta">{t('استكشف','Explore')} <Icon name="arrow"/></span></Link>)}</div>
 <section className="home-rail">{prompt&&<article className="panel prompt-preview"><div className="panel-head"><div className="inline-mark"><Mark group="prompts" id={prompt.id} category={prompt.category}/><div><small>PROMPT STUDIO</small><h2>{loc(prompt.title)}</h2></div></div><Link to={'/prompts?resource='+prompt.id} className="button">{t('خصص','Customize')} ↗</Link></div><p>{loc(prompt.description)}</p><pre dir="ltr">{prompt.template.split('\n').slice(0,7).join('\n')}</pre></article>}<article className="panel benchmark-preview"><div className="panel-head"><div><small>MODEL ARENA</small><h2>{t('مقارنة النماذج','Model comparison')}</h2></div><Link to="/arena" className="button">{t('قارن','Compare')} ↗</Link></div>{selectedIds.map(id=>models.find(m=>m.id===id)).filter(m=>m!==undefined).map(m=><Link key={m.id} to={'/arena?resource='+m.id} className="mini-benchmark"><Mark group="models" id={m.id} color={m.color}/><span>{m.name}<span className="track"><i style={{width:Math.max(0,Math.min(100,m.index??0))+'%',background:m.color}}/></span></span><b>{m.index??'—'}</b></Link>)}<small>{t('لقطة بيانات محفوظة','Dated snapshot')} · {snapshot.date} · AA v{snapshot.version}</small></article></section>
 </>;
}
