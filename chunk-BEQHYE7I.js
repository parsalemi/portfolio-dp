import{a as te,b as ie}from"./chunk-4E55EFCG.js";import{a as V,b as J}from"./chunk-PYDXHWLA.js";import"./chunk-FQG7G5OZ.js";import"./chunk-A3M4MQS5.js";import{a as K}from"./chunk-FNC4B3GC.js";import{a as X,g as Y,h as Z,i as S,j as ee}from"./chunk-UACS7BHC.js";import{k as R,m as q,n as B,o as G,t as H}from"./chunk-ZDAKQIPT.js";import{$a as d,$b as w,Ab as Q,Db as _,Fb as j,Gb as g,Hb as f,Ia as U,Ib as r,Jb as o,Kb as m,Nb as v,Tb as p,Ub as z,Vb as P,Yb as u,Zb as T,ac as b,ca as O,cc as C,db as n,dc as F,eb as W,ec as I,hc as N,ic as M,la as x,ma as $,ob as D,tb as c,vb as L,wb as s,zb as y}from"./chunk-WMBLZDSM.js";var re=["*",[["p-header"]],[["p-footer"]]],le=["*","p-header","p-footer"];function ce(e,i){e&1&&v(0)}function pe(e,i){if(e&1&&(r(0,"div",8),P(1,1),c(2,ce,1,0,"ng-container",6),o()),e&2){let t=p();n(2),s("ngTemplateOutlet",t.headerTemplate)}}function se(e,i){e&1&&v(0)}function me(e,i){if(e&1&&(r(0,"div",9),C(1),c(2,se,1,0,"ng-container",6),o()),e&2){let t=p();n(),I(" ",t.header," "),n(),s("ngTemplateOutlet",t.titleTemplate)}}function de(e,i){e&1&&v(0)}function _e(e,i){if(e&1&&(r(0,"div",10),C(1),c(2,de,1,0,"ng-container",6),o()),e&2){let t=p();n(),I(" ",t.subheader," "),n(),s("ngTemplateOutlet",t.subtitleTemplate)}}function ge(e,i){e&1&&v(0)}function fe(e,i){e&1&&v(0)}function ue(e,i){if(e&1&&(r(0,"div",11),P(1,2),c(2,fe,1,0,"ng-container",6),o()),e&2){let t=p();n(2),s("ngTemplateOutlet",t.footerTemplate)}}var ne=(()=>{class e{el;header;subheader;set style(t){X.equals(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;templates;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_style=D(null);constructor(t){this.el=t}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"title":this.titleTemplate=t.template;break;case"subtitle":this.subtitleTemplate=t.template;break;case"content":this.contentTemplate=t.template;break;case"footer":this.footerTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}getBlockableElement(){return this.el.nativeElement.children[0]}static \u0275fac=function(a){return new(a||e)(W(U))};static \u0275cmp=x({type:e,selectors:[["p-card"]],contentQueries:function(a,l,k){if(a&1&&(T(k,Y,5),T(k,Z,5),T(k,S,4)),a&2){let h;w(h=b())&&(l.headerFacet=h.first),w(h=b())&&(l.footerFacet=h.first),w(h=b())&&(l.templates=h)}},hostAttrs:[1,"p-element"],inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},ngContentSelectors:le,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(a,l){a&1&&(z(re),r(0,"div",0),c(1,pe,3,1,"div",1),r(2,"div",2),c(3,me,3,2,"div",3)(4,_e,3,2,"div",4),r(5,"div",5),P(6),c(7,ge,1,0,"ng-container",6),o(),c(8,ue,3,1,"div",7),o()()),a&2&&(Q(l.styleClass),s("ngClass","p-card p-component")("ngStyle",l._style()),L("data-pc-name","card"),n(),s("ngIf",l.headerFacet||l.headerTemplate),n(2),s("ngIf",l.header||l.titleTemplate),n(),s("ngIf",l.subheader||l.subtitleTemplate),n(3),s("ngTemplateOutlet",l.contentTemplate),n(),s("ngIf",l.footerFacet||l.footerTemplate))},dependencies:[R,q,G,B],styles:[`@layer primeng{.p-card-header img{width:100%}}
`],encapsulation:2,changeDetection:0})}return e})(),ae=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=$({type:e});static \u0275inj=O({imports:[H,ee]})}return e})();var A=(e,i)=>i.title,E=()=>({width:"300px",height:"500px"});function he(e,i){if(e&1&&m(0,"img",10),e&2){let t=p().$implicit,a=p();u("src","",a.env.staticFileUrl,"/projectsImg/",t.img,".webp",d)}}function ve(e,i){if(e&1&&m(0,"svg-icon",10),e&2){let t=i.$implicit,a=p(3);u("src","",a.env.staticFileUrl,"/svg/",t,".svg")}}function xe(e,i){e&1&&m(0,"p-tag",15)}function ye(e,i){if(e&1&&(r(0,"div",13),m(1,"p-tag",14),c(2,xe,1,0,"p-tag",15),o()),e&2){let t=p(2).$implicit;n(2),_(t.finished?-1:2)}}function je(e,i){if(e&1&&(r(0,"div",11)(1,"div",12),g(2,ve,1,3,"svg-icon",10,j),o(),c(4,ye,3,1,"div",13),o()),e&2){let t=p().$implicit;n(2),f(t.techsSvg),n(2),_(t.ownProject?4:-1)}}function Pe(e,i){if(e&1&&(r(0,"div",1)(1,"a",6)(2,"p-card",7),c(3,he,1,3,"ng-template",8),r(4,"p"),C(5),o(),c(6,je,5,1,"ng-template",9),o()()()),e&2){let t=i.$implicit;n(),s("href",t.ownProject?"#/projects/"+t.link:t.link,d),n(),y(M(5,E)),s("header",t.title),n(3),F(t.description)}}function Te(e,i){if(e&1&&m(0,"img",10),e&2){let t=p().$implicit,a=p();u("src","",a.env.staticFileUrl,"/projectsImg/",t.img,".webp",d)}}function we(e,i){if(e&1&&m(0,"svg-icon",10),e&2){let t=i.$implicit,a=p(3);u("src","",a.env.staticFileUrl,"/svg/",t,".svg")}}function be(e,i){e&1&&m(0,"p-tag",15)}function Fe(e,i){if(e&1&&(r(0,"div",13),m(1,"p-tag",14),c(2,be,1,0,"p-tag",15),o()),e&2){let t=p(2).$implicit;n(2),_(t.finished?-1:2)}}function Me(e,i){if(e&1&&(r(0,"div",11)(1,"div",12),g(2,we,1,3,"svg-icon",10,j),o(),c(4,Fe,3,1,"div",13),o()),e&2){let t=p().$implicit;n(2),f(t.techsSvg),n(2),_(t.ownProject?4:-1)}}function Se(e,i){if(e&1&&(r(0,"div",3)(1,"a",6)(2,"p-card",16),c(3,Te,1,3,"ng-template",8),r(4,"p"),C(5),o(),c(6,Me,5,1,"ng-template",9),o()()()),e&2){let t=i.$implicit;n(),s("href",t.ownProject?"#/projects/"+t.link:t.link,d),n(),y(M(5,E)),s("header",t.title),n(3),F(t.description)}}function ke(e,i){if(e&1&&m(0,"img",10),e&2){let t=p().$implicit,a=p();u("src","",a.env.staticFileUrl,"/projectsImg/",t.img,".webp",d)}}function Ie(e,i){if(e&1&&m(0,"svg-icon",10),e&2){let t=i.$implicit,a=p(3);u("src","",a.env.staticFileUrl,"/svg/",t,".svg")}}function Ae(e,i){e&1&&m(0,"p-tag",15)}function Ee(e,i){if(e&1&&(r(0,"div",13),m(1,"p-tag",14),c(2,Ae,1,0,"p-tag",15),o()),e&2){let t=p(2).$implicit;n(2),_(t.finished?-1:2)}}function Oe(e,i){if(e&1&&(r(0,"div",11)(1,"div",12),g(2,Ie,1,3,"svg-icon",10,j),o(),c(4,Ee,3,1,"div",13),o()),e&2){let t=p().$implicit;n(2),f(t.techsSvg),n(2),_(t.ownProject?4:-1)}}function $e(e,i){if(e&1&&(r(0,"div",5)(1,"a",6)(2,"p-card",16),c(3,ke,1,3,"ng-template",8),r(4,"p"),C(5),o(),c(6,Oe,5,1,"ng-template",9),o()()()),e&2){let t=i.$implicit;n(),s("href",t.ownProject?"#/projects/"+t.link:t.link,d),n(),y(M(5,E)),s("header",t.title),n(3),F(t.description)}}var tt=(()=>{class e{constructor(){this.env=K,this.projects=[{title:"Weather App",description:"Weather status of any city using visual crossing weather API",img:"weather",techsSvg:["angular","sass","tailwind","rxjs"],link:"weather",ownProject:!0,finished:!0},{title:"Sudoku",description:"Sudoku game (In progress)",img:"sudoku",techsSvg:["angular","tailwind"],link:"sudoku",ownProject:!0,finished:!1},{title:"Word guess",description:"Word guess game (5 letters)",img:"wordguess",techsSvg:["html","css","js"],link:"wordGuess",ownProject:!0,finished:!0},{title:"OMP Finex",description:"A cryptocurrency exchange",img:"ompfinex",techsSvg:["angular","rxjs","tailwind","svelte"],link:"https://ompfinex.com",ownProject:!1,finished:!0},{title:"E-Commerce",description:"A simple e-commerce with shopping cart",img:"e-commerce",techsSvg:["angular","rxjs","express","tailwind"],link:"e-commerce",ownProject:!0,finished:!1}]}handleLink(t,a,l){a?(t.setAttribute("routerLink","../"+l),t.setAttribute("router-link","../"+l)):t.setAttribute("href",l)}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=x({type:e,selectors:[["app-all-projects"]],standalone:!0,features:[N],decls:9,vars:0,consts:[[1,"lgWrapper","w-full","hidden","lg:flex","h-[600px]","relative","items-center","justify-center"],[1,"lgProjectCard","absolute"],[1,"mdWrapper","h-[550px]","w-full","hidden","md:flex","lg:hidden","relative"],[1,"mdProjectCard","absolute"],[1,"smWrapper","w-full","md:hidden","flex","flex-col","items-center","justify-center","gap-10","last:mb-28"],[1,""],[3,"href"],["styleClass","relative shadow-3 bg-basic-1100 text-basic-400",3,"header"],["pTemplate","header"],["pTemplate","footer"],[3,"src"],[1,"flex","justify-between"],[1,"flex","gap-2","absolute","bottom-5"],[1,"absolute","bottom-5","right-5"],["styleClass","mt-5 ml-5 bg-basic-900 text-lg text-basic-100","value","own"],["styleClass","mt-5 ml-2 bg-error-200 text-lg text-error-900","value","unfinished"],["styleClass","relative shadow-3 hover:shadow-1 bg-basic-1100 text-basic-400",3,"header"]],template:function(a,l){a&1&&(r(0,"div",0),g(1,Pe,7,6,"div",1,A),o(),r(3,"div",2),g(4,Se,7,6,"div",3,A),o(),r(6,"div",4),g(7,$e,7,6,"div",5,A),o()),a&2&&(n(),f(l.projects),n(3),f(l.projects),n(3),f(l.projects))},dependencies:[ae,ne,S,J,V,ie,te],styles:[".lgWrapper[_ngcontent-%COMP%]{margin-inline:auto;overflow-x:hidden;mask-image:linear-gradient(to right,#0000,#000 20% 80%,#0000)}.lgWrapper[_ngcontent-%COMP%]:hover   .lgProjectCard[_ngcontent-%COMP%]{animation-play-state:paused}.lgProjectCard[_ngcontent-%COMP%]{left:max(1200px,100%);animation:_ngcontent-%COMP%_toLeftLg 10s infinite linear;transition:transform .5s}.lgProjectCard[_ngcontent-%COMP%]:hover{transition:.5s;transform:scale(1.1);--tw-shadow: 0 10px 24px hsla(0, 0%, 0%, .3);--tw-shadow-colored: 0 10px 24px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.lgProjectCard[_ngcontent-%COMP%]:nth-child(1){animation-delay:-7.5s}.lgProjectCard[_ngcontent-%COMP%]:nth-child(2){animation-delay:-5s}.lgProjectCard[_ngcontent-%COMP%]:nth-child(3){animation-delay:-2.5s}.lgProjectCard[_ngcontent-%COMP%]:nth-child(4){animation-delay:0s}.mdWrapper[_ngcontent-%COMP%]{flex-wrap:wrap;gap:20px;margin-inline:auto;overflow-x:hidden;mask-image:linear-gradient(to right,#0000,#000 20% 80%,#0000)}.mdWrapper[_ngcontent-%COMP%]:hover   .mdProjectCard[_ngcontent-%COMP%]{animation-play-state:paused}.mdProjectCard[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_toLeftMd 10s infinite linear;left:max(1200px,100%)}.mdProjectCard[_ngcontent-%COMP%]:nth-child(1){animation-delay:-7.5s}.mdProjectCard[_ngcontent-%COMP%]:nth-child(2){animation-delay:-5s}.mdProjectCard[_ngcontent-%COMP%]:nth-child(3){animation-delay:-2.5s}.mdProjectCard[_ngcontent-%COMP%]:nth-child(4){animation-delay:0s}@keyframes _ngcontent-%COMP%_toLeftLg{to{left:-30%}}@keyframes _ngcontent-%COMP%_toLeftMd{to{left:-35%}}"]})}}return e})();export{tt as AllProjectsComponent};
