import{a as n}from"./chunk-PZDGU76M.js";import{a as w,f as L}from"./chunk-UACS7BHC.js";import{d as b,v as k}from"./chunk-ZDAKQIPT.js";import{Fa as h,Ia as u,Lc as C,Na as f,Ub as y,Vb as I,ca as d,eb as r,hc as D,kb as g,la as c,ma as p,na as m,qb as v}from"./chunk-WMBLZDSM.js";var R=(()=>{class i{document;platformId;renderer;el;zone;config;constructor(e,t,o,a,l,s){this.document=e,this.platformId=t,this.renderer=o,this.el=a,this.zone=l,this.config=s}animationListener;mouseDownListener;timeout;ngAfterViewInit(){k(this.platformId)&&this.config&&this.config.ripple&&this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))})}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(n.removeClass(t,"p-ink-active"),!n.getHeight(t)&&!n.getWidth(t)){let s=Math.max(n.getOuterWidth(this.el.nativeElement),n.getOuterHeight(this.el.nativeElement));t.style.height=s+"px",t.style.width=s+"px"}let o=n.getOffset(this.el.nativeElement),a=e.pageX-o.left+this.document.body.scrollTop-n.getWidth(t)/2,l=e.pageY-o.top+this.document.body.scrollLeft-n.getHeight(t)/2;this.renderer.setStyle(t,"top",l+"px"),this.renderer.setStyle(t,"left",a+"px"),n.addClass(t,"p-ink-active"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&n.removeClass(s,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&n.removeClass(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),n.removeClass(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,n.removeElement(e))}ngOnDestroy(){this.config&&this.config.ripple&&this.remove()}static \u0275fac=function(t){return new(t||i)(r(b),r(f),r(g),r(u),r(h),r(L,8))};static \u0275dir=m({type:i,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple","p-element"],standalone:!0})}return i})(),S=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=p({type:i});static \u0275inj=d({})}return i})();var M=["*"],G=(()=>{class i{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){this.getAttributes()}getAttributes(){let e=w.isEmpty(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=c({type:i,selectors:[["ng-component"]],hostAttrs:[1,"p-element","p-icon-wrapper"],inputs:{label:"label",spin:[2,"spin","spin",C],styleClass:"styleClass"},standalone:!0,features:[v,D],ngContentSelectors:M,decls:1,vars:0,template:function(t,o){t&1&&(y(),I(0))},encapsulation:2,changeDetection:0})}return i})();export{G as a,R as b,S as c};
