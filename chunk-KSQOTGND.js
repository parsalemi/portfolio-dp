import{a as D,q as O}from"./chunk-GDAWYE3H.js";import{v as S}from"./chunk-ZDAKQIPT.js";import{D as m,Ea as p,Fa as j,Ia as R,Na as C,Sb as A,aa as y,ba as E,ca as l,ea as c,eb as h,ga as a,gc as I,la as w,m as b,ma as f,na as x,q as v,vb as M}from"./chunk-WMBLZDSM.js";var L=new c("recaptcha-language"),N=new c("recaptcha-base-url"),z=new c("recaptcha-nonce-tag"),P=new c("recaptcha-settings"),F=new c("recaptcha-v3-site-key"),H=new c("recaptcha-loader-options");function _(e,u,t,{url:i,lang:n,nonce:s}={}){window.ng2recaptchaloaded=()=>{t(grecaptcha)};let r=document.createElement("script");r.innerHTML="";let{url:o,nonce:d}=u(new URL(i||"https://www.google.com/recaptcha/api.js"));o.searchParams.set("render",e==="explicit"?e:e.key),o.searchParams.set("onload","ng2recaptchaloaded"),o.searchParams.set("trustedtypes","true"),n&&o.searchParams.set("hl",n),r.src=o.href;let g=d||s;g&&r.setAttribute("nonce",g),r.async=!0,r.defer=!0,document.head.appendChild(r)}function V({v3SiteKey:e,onBeforeLoad:u,onLoaded:t}){let i=e?{key:e}:"explicit";B.loadScript(i,u,t)}var B={loadScript:_,newLoadScript:V};function K(e){return e.asObservable().pipe(m(u=>u!==null))}var k=(()=>{class e{static{this.ready=null}constructor(t,i,n,s,r,o){this.platformId=t,this.language=i,this.baseUrl=n,this.nonce=s,this.v3SiteKey=r,this.options=o;let d=this.init();this.ready=d?K(d):v()}init(){if(e.ready)return e.ready;if(!S(this.platformId))return;let t=new b(null);return e.ready=t,B.newLoadScript({v3SiteKey:this.v3SiteKey,onBeforeLoad:i=>{if(this.options?.onBeforeLoad)return this.options.onBeforeLoad(i);let n=new URL(this.baseUrl??i);return this.language&&n.searchParams.set("hl",this.language),{url:n,nonce:this.nonce}},onLoaded:i=>{let n=i;this.options?.onLoaded&&(n=this.options.onLoaded(i)),t.next(n)}}),t}static{this.\u0275fac=function(i){return new(i||e)(a(C),a(L,8),a(N,8),a(z,8),a(F,8),a(H,8))}}static{this.\u0275prov=E({token:e,factory:e.\u0275fac})}}return e})(),U=0,q=(()=>{class e{constructor(t,i,n,s){this.elementRef=t,this.loader=i,this.zone=n,this.id=`ngrecaptcha-${U++}`,this.errorMode="default",this.resolved=new p,this.error=new p,this.errored=new p,s&&(this.siteKey=s.siteKey,this.theme=s.theme,this.type=s.type,this.size=s.size,this.badge=s.badge)}ngAfterViewInit(){this.subscription=this.loader.ready.subscribe(t=>{t!=null&&t.render instanceof Function&&(this.grecaptcha=t,this.renderRecaptcha())})}ngOnDestroy(){this.grecaptchaReset(),this.subscription&&this.subscription.unsubscribe()}execute(){this.size==="invisible"&&(this.widget!=null?this.grecaptcha.execute(this.widget):this.executeRequested=!0)}reset(){this.widget!=null&&(this.grecaptcha.getResponse(this.widget)&&this.resolved.emit(null),this.grecaptchaReset())}get __unsafe_widgetValue(){return this.widget!=null?this.grecaptcha.getResponse(this.widget):null}expired(){this.resolved.emit(null)}onError(t){this.error.emit(t),this.errored.emit(t)}captchaResponseCallback(t){this.resolved.emit(t)}grecaptchaReset(){this.widget!=null&&this.zone.runOutsideAngular(()=>this.grecaptcha.reset(this.widget))}renderRecaptcha(){let t={badge:this.badge,callback:i=>{this.zone.run(()=>this.captchaResponseCallback(i))},"expired-callback":()=>{this.zone.run(()=>this.expired())},sitekey:this.siteKey,size:this.size,tabindex:this.tabIndex,theme:this.theme,type:this.type};this.errorMode==="handled"&&(t["error-callback"]=(...i)=>{this.zone.run(()=>this.onError(i))}),this.widget=this.grecaptcha.render(this.elementRef.nativeElement,t),this.executeRequested===!0&&(this.executeRequested=!1,this.execute())}static{this.\u0275fac=function(i){return new(i||e)(h(R),h(k),h(j),h(P,8))}}static{this.\u0275cmp=w({type:e,selectors:[["re-captcha"]],hostVars:1,hostBindings:function(i,n){i&2&&M("id",n.id)},inputs:{id:"id",siteKey:"siteKey",theme:"theme",type:"type",size:"size",tabIndex:"tabIndex",badge:"badge",errorMode:"errorMode"},outputs:{resolved:"resolved",error:"error",errored:"errored"},exportAs:["reCaptcha"],decls:0,vars:0,template:function(i,n){},encapsulation:2})}}return e})(),T=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=l({})}}return e})(),he=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=l({providers:[k],imports:[T]})}}return e})();var ue=(()=>{class e{constructor(t){this.host=t,this.requiresControllerReset=!1}writeValue(t){t?this.host.__unsafe_widgetValue!==t&&!this.host.__unsafe_widgetValue&&(this.requiresControllerReset=!0):this.host.reset()}registerOnChange(t){this.onChange=t,this.requiresControllerReset&&(this.requiresControllerReset=!1,this.onChange(null))}registerOnTouched(t){this.onTouched=t}onResolve(t){this.onChange&&this.onChange(t),this.onTouched&&this.onTouched()}static{this.\u0275fac=function(i){return new(i||e)(h(q))}}static{this.\u0275dir=x({type:e,selectors:[["re-captcha","formControlName",""],["re-captcha","formControl",""],["re-captcha","ngModel",""]],hostBindings:function(i,n){i&1&&A("resolved",function(r){return n.onResolve(r)})},features:[I([{multi:!0,provide:D,useExisting:y(()=>e)}])]})}}return e})(),de=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=f({type:e})}static{this.\u0275inj=l({imports:[O,T]})}}return e})();export{P as a,q as b,he as c,ue as d,de as e};
