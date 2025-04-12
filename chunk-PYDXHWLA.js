import{a as T}from"./chunk-A3M4MQS5.js";import{d as O}from"./chunk-ZDAKQIPT.js";import{F as y,Ha as o,Ia as k,Ic as V,M as m,Pc as l,R as S,Ub as M,Vb as L,Y as b,ba as v,ca as C,ea as A,ga as w,ha as h,hc as N,ia as B,ja as E,kb as D,la as R,ma as U,ob as I,q as g,r as u,u as p}from"./chunk-WMBLZDSM.js";var j=["*"],a=class{},x=(()=>{class r extends a{constructor(t){super(),this.http=t}getSvg(t){return this.http.get(t,{responseType:"text"})}static{this.\u0275fac=function(e){return new(e||r)(w(T))}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac})}}return r})(),_=new A("SERVER_URL"),c=(()=>{class r{constructor(){this.loader=h(a),this.serverUrl=h(_,{optional:!0}),this.document=h(O),this.iconsByUrl=new Map,this.iconsLoadingByUrl=new Map}addSvg(t,e){if(!this.iconsByUrl.has(t)){let s=this.document.createElement("DIV");s.innerHTML=e;let i=s.querySelector("svg");this.iconsByUrl.set(t,i)}}loadSvg(t,e=t){if(this.serverUrl&&t.match(/^(http(s)?):/)===null&&(t=this.serverUrl+t,e=t),this.iconsByUrl.has(e))return g(this.iconsByUrl.get(e));if(this.iconsLoadingByUrl.has(e))return this.iconsLoadingByUrl.get(e);let s=this.loader.getSvg(t).pipe(p(i=>{let n=this.document.createElement("DIV");return n.innerHTML=i,n.querySelector("svg")}),b(i=>this.iconsByUrl.set(e,i)),y(i=>(console.error(i),u(i))),m(()=>this.iconsLoadingByUrl.delete(e)),S());return this.iconsLoadingByUrl.set(e,s),s}getSvgByName(t){return this.iconsByUrl.has(t)?g(this.iconsByUrl.get(t)):this.iconsLoadingByUrl.has(t)?this.iconsLoadingByUrl.get(t):u(`No svg with name '${t}' has been loaded`)}unloadSvg(t){this.iconsByUrl.has(t)&&this.iconsByUrl.delete(t)}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275prov=v({token:r,factory:r.\u0275fac})}}return r})();function F(r){return r||new c}var $={provide:c,deps:[[new B,new E,c]],useFactory:F},d=class{constructor(){this.loaded=!1}},Z=(()=>{class r{constructor(){this.element=h(k),this.differs=h(V),this.renderer=h(D),this.iconReg=h(c),this.src=o(),this.name=o(),this.stretch=o(!1),this.applyClass=o(!1),this.svgClass=o(),this.klass=o(void 0,{alias:"class"}),this.viewBox=o(),this.svgAriaLabel=o(),this.svg=I(0),this.svgStyle=o(),this.helper=new d,l(()=>{(this.src()||this.name())&&(this.destroy(),this.init(this.src(),this.name()))},{allowSignalWrites:!0}),l(()=>{let s=this.viewBox();this.svg()&&this.updateViewBox(s)}),l(()=>{let s=this.svgStyle()||{};this.svg()&&this.applyChanges(this.helper.differ.diff(s))}),l(()=>{let s=this.svg();this.applyClass()?this.setClass(this.elemSvg,null,this.klass()):this.setClass(this.elemSvg,this.klass(),null)});let t;l(()=>{let s=this.svg();this.setClass(this.elemSvg,t,this.svgClass()),t=this.svgClass()});let e;l(()=>{let s=this.svg(),i=this.element.nativeElement;this.setClass(i,e,this.klass()),this.setClass(this.elemSvg,e,this.applyClass()?this.klass():null),e=this.klass()}),l(()=>{let s=this.svg();this.doAria(this.svgAriaLabel())}),l(()=>{let s=this.svg();this.stylize(this.stretch())})}ngOnDestroy(){this.destroy()}get elemSvg(){return this.element.nativeElement.firstChild}init(t,e){if(t&&e){let s=this.iconReg.loadSvg(t,e);s&&(this.helper.icnSub=s.subscribe(i=>this.initSvg(i)))}else if(e){let s=this.iconReg.getSvgByName(e);s&&(this.helper.icnSub=s.subscribe(i=>this.initSvg(i)))}else if(t){let s=this.iconReg.loadSvg(t);s&&(this.helper.icnSub=s.subscribe(i=>this.initSvg(i)))}else this.element.nativeElement.innerHTML="",this.svg.set(0)}initSvg(t){!this.helper.loaded&&t&&this.setSvg(t)}destroy(){this.helper.icnSub?.unsubscribe(),this.helper=new d,this.helper.differ=this.differs.find({}).create()}setSvg(t){if(!this.helper.loaded&&t){this.helper.svg=t;let e=t.cloneNode(!0),s=this.element.nativeElement;s.innerHTML="",this.renderer.appendChild(s,e),this.helper.loaded=!0,this.copyNgContentAttribute(s,e),this.svg.update(i=>i+1)}}updateViewBox(t){if(t){let e=this.elemSvg;if(t==="auto"){let s=e.getAttribute("width"),i=e.getAttribute("height");if(i&&s){let n=`0 0 ${s} ${i}`;this.renderer.setAttribute(e,"viewBox",n),this.renderer.removeAttribute(e,"width"),this.renderer.removeAttribute(e,"height")}}else t!==""&&(this.renderer.setAttribute(e,"viewBox",t),this.renderer.removeAttribute(e,"width"),this.renderer.removeAttribute(e,"height"))}}copyNgContentAttribute(t,e){let s=t.attributes,i=s.length;for(let n=0;n<i;n+=1){let f=s.item(n);if(f&&f.name.startsWith("_ngcontent")){this.setNgContentAttribute(e,f.name);break}}}setNgContentAttribute(t,e){this.renderer.setAttribute(t,e,"");let s=t.childNodes.length;for(let i=0;i<s;i+=1){let n=t.childNodes[i];n instanceof Element&&this.setNgContentAttribute(n,e)}}stylize(t){if(this.helper.svg){let e=this.element.nativeElement.firstChild;t===!0?this.renderer.setAttribute(e,"preserveAspectRatio","none"):t===!1&&this.renderer.removeAttribute(e,"preserveAspectRatio")}}applyChanges(t){t&&(t.forEachRemovedItem(e=>this.setStyle(e.key,null)),t.forEachAddedItem(e=>this.setStyle(e.key,e.currentValue)),t.forEachChangedItem(e=>this.setStyle(e.key,e.currentValue)))}setStyle(t,e){let[s,i]=t.split(".");e=e!==null&&i?`${e}${i}`:e;let n=this.elemSvg;e!==null?this.renderer.setStyle(n,s,e):this.renderer.removeStyle(n,s)}setClass(t,e,s){if(t){if(e){let i=(Array.isArray(e)?e:e.split(" ")).filter(n=>n);for(let n of i)this.renderer.removeClass(t,n)}if(s){let i=(Array.isArray(s)?s:s.split(" ")).filter(n=>n);for(let n of i)this.renderer.addClass(t,n)}}}doAria(t){if(t!==void 0){let e=this.element.nativeElement.firstChild;e&&!e.hasAttribute("aria-label")&&(t===""?(this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.removeAttribute(e,"aria-label")):(this.renderer.removeAttribute(e,"aria-hidden"),this.renderer.setAttribute(e,"aria-label",t)))}}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275cmp=R({type:r,selectors:[["svg-icon"]],inputs:{src:[1,"src"],name:[1,"name"],stretch:[1,"stretch"],applyClass:[1,"applyClass"],svgClass:[1,"svgClass"],klass:[1,"class","klass"],viewBox:[1,"viewBox"],svgAriaLabel:[1,"svgAriaLabel"],svgStyle:[1,"svgStyle"]},standalone:!0,features:[N],ngContentSelectors:j,decls:1,vars:0,template:function(e,s){e&1&&(M(),L(0))},encapsulation:2,changeDetection:0})}}return r})();var ee=(()=>{class r{static forRoot(t={}){return{ngModule:r,providers:[$,t.loader||{provide:a,useClass:x}]}}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275mod=U({type:r})}static{this.\u0275inj=C({})}}return r})();export{Z as a,ee as b};
