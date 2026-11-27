/* Intelligence Field: native WebGL filament renderer; no CDN or framework. */
(() => {
 'use strict';
 const hero=document.querySelector('.hero'),stage=document.querySelector('.cinema-stage'),art=document.querySelector('.cinema-art'),canvas=document.querySelector('.cinema-canvas');
 if(!hero||!stage||!art||!canvas)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover:hover) and (pointer:fine)');
 let gl=null,program=null,buffer=null,raf=0,visible=true,ready=false,failed=false,alive=true,elapsed=0,last=0,tx=0,ty=0,px=0,py=0,scrollFrame=0;
 const curves=34,steps=150,vertices=[];
 for(let i=0;i<curves;i++){for(let j=0;j<=steps;j++)vertices.push(j/steps*2*Math.PI,i/curves*2*Math.PI,i%3,i%5===0?1:0);}
 const vert=`attribute vec4 a;uniform float uTime,uAspect,uScale;uniform vec2 uPointer;varying vec3 vColor;varying float vAlpha;
 void main(){float t=a.x,phase=a.y;float r=1.12+.21*cos(3.*t+phase*2.);vec3 p=vec3(r*cos(t),r*sin(t),.68*sin(2.*t+phase));float q=phase+.36+uTime*.09; p.xz=mat2(cos(q),-sin(q),sin(q),cos(q))*p.xz;float yaw=uPointer.x*.25; p.xz=mat2(cos(yaw),-sin(yaw),sin(yaw),cos(yaw))*p.xz;float tilt=uPointer.y*.18; p.yz=mat2(cos(tilt),-sin(tilt),sin(tilt),cos(tilt))*p.yz;float perspective=1./(1.+p.z*.16);vec2 fit=vec2(min(1.,1./uAspect),min(1.,uAspect));gl_Position=vec4(p.xy*perspective*fit*.57*uScale,0.,1.);vColor=a.z<.5?vec3(.55,.83,1.):a.z<1.5?vec3(.78,.65,1.):vec3(.49,.36,.86);vAlpha=(.19+.28*(1.-smoothstep(-1.3,1.3,p.z))+.25*a.w);}`;
 const frag=`precision mediump float;varying vec3 vColor;varying float vAlpha;void main(){gl_FragColor=vec4(vColor,vAlpha);}`;
 function shader(type,source){const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){const info=gl.getShaderInfoLog(s);gl.deleteShader(s);throw Error(info);}return s;}
 function stop(){if(raf)cancelAnimationFrame(raf);raf=0;last=0;}
 function release(){stop();if(gl&&!gl.isContextLost()){if(buffer)gl.deleteBuffer(buffer);if(program)gl.deleteProgram(program);}buffer=program=null;ready=false;stage.classList.remove('is-live');}
 function resize(){if(!gl||!ready)return;const w=art.clientWidth,h=art.clientHeight;if(!w||!h)return;const dpr=Math.min(devicePixelRatio,w<600?1.2:1.6);canvas.width=Math.max(1,Math.round(w*dpr));canvas.height=Math.max(1,Math.round(h*dpr));gl.viewport(0,0,canvas.width,canvas.height);}
 function init(){if(ready||failed||!alive||reduced.matches||!visible||document.hidden)return;try{gl=canvas.getContext('webgl',{alpha:true,antialias:true,premultipliedAlpha:true,powerPreference:'low-power'});if(!gl)throw Error('WebGL unavailable');const vs=shader(gl.VERTEX_SHADER,vert);let fs;try{fs=shader(gl.FRAGMENT_SHADER,frag);program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));}finally{gl.deleteShader(vs);if(fs)gl.deleteShader(fs);}buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertices),gl.STATIC_DRAW);gl.useProgram(program);const loc=gl.getAttribLocation(program,'a');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,4,gl.FLOAT,false,0,0);gl.enable(gl.BLEND);gl.blendFuncSeparate(gl.SRC_ALPHA,gl.ONE,gl.ONE,gl.ONE_MINUS_SRC_ALPHA);gl.clearColor(0,0,0,0);ready=true;resize();}catch(e){failed=true;release();console.debug('NAI: local artwork fallback',e);}}
 function draw(now){raf=0;if(!ready||!visible||document.hidden||reduced.matches||!alive)return;let dt=Math.min(.05,last?(now-last)/1000:1/60);last=now;elapsed+=dt;let k=1-Math.exp(-5*dt);px+=(tx-px)*k;py+=(ty-py)*k;gl.clear(gl.COLOR_BUFFER_BIT);gl.uniform1f(gl.getUniformLocation(program,'uTime'),elapsed);gl.uniform1f(gl.getUniformLocation(program,'uAspect'),canvas.width/canvas.height);gl.uniform1f(gl.getUniformLocation(program,'uScale'),1.02);gl.uniform2f(gl.getUniformLocation(program,'uPointer'),px,py);for(let i=0;i<curves;i++)gl.drawArrays(gl.LINE_STRIP,i*(steps+1),steps+1);stage.classList.add('is-live');raf=requestAnimationFrame(draw);}
 function sync(){if(!alive||!visible||document.hidden||reduced.matches){stop();if(reduced.matches)release();return;}init();if(ready&&!raf)raf=requestAnimationFrame(draw);}
 function scroll(){scrollFrame=0;if(reduced.matches||!visible)return;const r=hero.getBoundingClientRect(),p=Math.max(0,Math.min(1,(-r.top+80)/Math.max(1,r.height)));art.style.setProperty('--hero-shift',Math.round(p*(innerWidth<640?16:55))+'px');art.style.setProperty('--hero-scale',(1+p*.06).toFixed(3));}
 function requestScroll(){if(!scrollFrame&&visible&&!reduced.matches)scrollFrame=requestAnimationFrame(scroll);}
 hero.addEventListener('pointermove',e=>{if(!fine.matches||e.pointerType==='touch'||reduced.matches)return;const r=hero.getBoundingClientRect();tx=(e.clientX-r.left)/r.width*2-1;ty=(e.clientY-r.top)/r.height*2-1;},{passive:true});
 hero.addEventListener('pointerleave',()=>{tx=ty=0;});
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();stop();ready=false;program=buffer=null;stage.classList.remove('is-live');});
 canvas.addEventListener('webglcontextrestored',()=>{failed=false;sync();});
 if('IntersectionObserver'in window)new IntersectionObserver(([e])=>{visible=e.isIntersecting;sync();requestScroll();}).observe(hero);
 if('ResizeObserver'in window)new ResizeObserver(resize).observe(art);else window.addEventListener('resize',resize,{passive:true});
 window.addEventListener('scroll',requestScroll,{passive:true});
 reduced.addEventListener('change',()=>{art.style.removeProperty('--hero-shift');art.style.removeProperty('--hero-scale');sync();});
 document.addEventListener('visibilitychange',sync);
 window.addEventListener('pagehide',()=>{alive=false;release();if(scrollFrame)cancelAnimationFrame(scrollFrame);scrollFrame=0;});
 window.addEventListener('pageshow',()=>{alive=true;sync();});
 // Reveal once, without hiding any content if JS or motion is unavailable.
 if('IntersectionObserver'in window&&typeof Element.prototype.animate==='function'){
 const observer=new IntersectionObserver(entries=>{for(const e of entries){if(!e.isIntersecting)continue;observer.unobserve(e.target);if(!reduced.matches)e.target.animate([{opacity:.5,transform:'translateY(16px)'},{opacity:1,transform:'translateY(0)'}],{duration:540,easing:'cubic-bezier(.16,1,.3,1)'});}},{threshold:.12});
 document.querySelectorAll('.fields-head,.fields-grid,.section-title,.guide').forEach(e=>observer.observe(e));
 }
 if('requestIdleCallback'in window)requestIdleCallback(sync,{timeout:1200});else sync();
})();
