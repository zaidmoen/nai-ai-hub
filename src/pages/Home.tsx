import {useState} from 'react';
import {Link} from 'react-router-dom';
import {catalog,prompts} from '../data/catalog';
import {learningTracks} from '../data/roadmaps';
import {Icon,Modal} from '../components/UI';
import {useHub} from '../state';
import {LogoStage} from '../components/LogoStage';
import '../home.css';import '../gateway-home.css';
const hubs=[
 {to:'/tools',icon:'layers',title:['أدوات الذكاء','AI Tools'],desc:['أدوات عملية للدراسة والبناء','Practical tools for real AI workflows']},
 {to:'/skills',icon:'spark',title:['مركز المهارات','Skills Hub'],desc:['أتقن مهارات التصميم والتطوير','Master practical AI and engineering skills']},
 {to:'/prompts',icon:'terminal',title:['استوديو التوجيه','Prompt Studio'],desc:['صمّم وخصّص برومبتات قوية','Design, test, and refine powerful prompts']},
 {to:'/arena',icon:'chart',title:['ساحة النماذج','Model Arena'],desc:['استكشف النماذج وقارن بينها','Compare and explore leading AI models']},
 {to:'/roadmaps',icon:'study',title:['مسارات التعلم','Learning Roadmaps'],desc:['تعلّم وابنِ خطوة بخطوة','Follow connected paths from learning to building']},
 {to:'/mcp',icon:'plug',title:['تكاملات MCP','MCP Hub'],desc:['اربط مساعدك بأدوات التطوير','Connect and extend your development tools']}
];
export function Home(){const {t,loc}=useHub(),[tour,setTour]=useState(false);return <div className="gateway-home">
 <LogoStage/>
 <section className="gateway-hero"><div className="gateway-copy"><p className="gateway-society">NAJAH AI SOCIETY <span/></p><h1>{t('ملتقى الذكاء','The AI Hub')}<span>{t('لصنّاع المستقبل','for Builders')}</span></h1><p className="gateway-verbs">{t('تعلّم','Learn')}<i>·</i>{t('ابنِ','Build')}<i>·</i>{t('جرّب','Experiment')}<i>·</i>{t('أطلق','Deploy')}</p><p className="gateway-description">{t('مساحة تجمع أدوات الذكاء الاصطناعي، والمهارات العملية، ومسارات التعلّم — لتُحوّل أفكارك إلى حلول ذكية.','A unified space for AI tools, hands-on skills, and learning paths — everything you need to turn ideas into intelligent solutions.')}</p><div className="gateway-actions"><a href="#explore-atlas" className="gateway-primary"><Icon name="spark"/>{t('استكشف المنصة','Explore the Hub')}<Icon name="arrow"/></a><button className="gateway-secondary" onClick={()=>setTour(true)}><svg viewBox="0 0 24 24" className="glyph" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/></svg>{t('جولة في المنصة','Explore the platform')}</button></div></div></section>
 <nav id="explore-atlas" className="gateway-hubs" aria-label={t('أقسام المنصة','Explore platform hubs')}>{hubs.map(x=><Link key={x.to} to={x.to}><span className="gateway-hub-icon"><Icon name={x.icon}/></span><h2>{loc(x.title)}</h2><p>{loc(x.desc)}</p><span className="gateway-hub-arrow"><Icon name="arrow"/></span></Link>)}</nav>
 <section className="gateway-facts" aria-label={t('مكتبة ناي بالأرقام','NAI library at a glance')}>{[[catalog.length,t('موارد منتقاة','Curated resources'),'layers'],[prompts.length,t('قوالب برومبت','Prompt templates'),'terminal'],[learningTracks.length,t('مسارات تعلم','Learning tracks'),'study'],[hubs.length,t('أقسام للاستكشاف','Core destinations'),'globe']].map(([value,label,icon])=><div key={String(label)}><Icon name={String(icon)}/><span><b>{value}</b><small>{label}</small></span></div>)}</section>
 <div className="gateway-personal"><Link to="/radar"><Icon name="globe"/><span>{t('تابع إشارات الذكاء الاصطناعي','Follow the AI Radar')}</span><Icon name="arrow"/></Link><span/><Link to="/workspace"><Icon name="folder"/><span>{t('ارجع إلى مواردك المحفوظة','Return to your saved resources')}</span><Icon name="arrow"/></Link></div>
 {tour&&<Modal title={t('مرحبًا في NAI AI Hub','Welcome to NAI AI Hub')} onClose={()=>setTour(false)}><p>{t('استكشف الأدوات، اختر مسار تعلم، وخصّص البرومبتات لمشروعك. احفظ الموارد المفيدة في مساحتك، وتابع الإصدارات والأبحاث عبر الرادار.','Explore tools, choose a learning path, and tailor prompts to your project. Save useful resources in your workspace and follow curated releases and research in the radar.')}</p><div className="tour-destinations">{hubs.map(x=><Link key={x.to} to={x.to} className="button" onClick={()=>setTour(false)}><Icon name={x.icon}/>{loc(x.title)}<Icon name="arrow"/></Link>)}</div></Modal>}
 </div>}
