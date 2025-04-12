import{a as Y}from"./chunk-36HXAHSU.js";import{b as ee,c as te,d as ie,e as ne}from"./chunk-KSQOTGND.js";import{a as R}from"./chunk-6Y2Z25OY.js";import{b as j,c as p,e as D,f as G,h as z,i as W,j as $,k as O,l as B,m as K,n as Z,o as H,p as J,q as Q,r as X}from"./chunk-GDAWYE3H.js";import{a as k,b as q}from"./chunk-PYDXHWLA.js";import{g as F,h as M}from"./chunk-FQG7G5OZ.js";import"./chunk-A3M4MQS5.js";import{a as V}from"./chunk-FNC4B3GC.js";import{a as A,b as L}from"./chunk-TRGGHFLV.js";import"./chunk-S5OVVIBB.js";import"./chunk-Q64FFBLU.js";import"./chunk-PZDGU76M.js";import{d as h}from"./chunk-UACS7BHC.js";import{m as T}from"./chunk-ZDAKQIPT.js";import{Ib as t,Jb as n,Kb as m,Lb as g,Mb as u,Ob as I,Sb as S,Tb as y,Yb as b,cc as r,db as a,dc as E,eb as _,gc as N,ha as x,hc as P,la as U,tb as d,va as f,wa as v,wb as o}from"./chunk-WMBLZDSM.js";function re(e,s){e&1&&(t(0,"div",39),r(1,"Username is required"),n())}function ae(e,s){if(e&1&&(t(0,"div",39),r(1,"Username must be at least "),t(2,"strong",40),r(3),n(),r(4," letters"),n()),e&2){let i=y().ngIf;a(3),E(i.getError("minlength").requiredLength)}}function oe(e,s){e&1&&(t(0,"div",39),r(1,"Only "),t(2,"strong",41),r(3,"_"),n(),r(4," and "),t(5,"strong",41),r(6,"."),n(),r(7," is allowed"),n())}function le(e,s){if(e&1&&(g(0),d(1,re,2,0,"div",38)(2,ae,5,1,"div",38)(3,oe,8,0,"div",38),u()),e&2){let i=s.ngIf;a(),o("ngIf",i.dirty&&i.hasError("required")),a(),o("ngIf",i.dirty&&i.hasError("minlength")),a(),o("ngIf",i.dirty&&i.hasError("pattern"))}}function se(e,s){e&1&&(t(0,"div",39),r(1,"Age is requird"),n())}function pe(e,s){e&1&&(t(0,"div",39),r(1,"Don't type letters"),n())}function me(e,s){if(e&1&&(t(0,"div",39),r(1,"Must be "),t(2,"strong"),r(3),n(),r(4," digits"),n()),e&2){let i=y().ngIf;a(3),E(i.getError("minlength").requiredLength)}}function de(e,s){if(e&1&&(g(0),d(1,se,2,0,"div",38)(2,pe,2,0,"div",38)(3,me,5,1,"div",38),u()),e&2){let i=s.ngIf;a(),o("ngIf",i.dirty&&i.hasError("required")),a(),o("ngIf",i.dirty&&i.hasError("pattern")),a(),o("ngIf",i.dirty&&i.hasError("minlength"))}}function ce(e,s){e&1&&(t(0,"div",39),r(1,"Password is required"),n())}function ge(e,s){e&1&&(t(0,"div",43),r(1,"At least 8 characters, using uppercase, lowercase, number nad symbol"),n())}function ue(e,s){if(e&1&&(g(0),d(1,ce,2,0,"div",38)(2,ge,2,0,"div",42),u()),e&2){let i=s.ngIf;a(),o("ngIf",i.dirty&&i.hasError("required")),a(),o("ngIf",i.dirty&&i.hasError("pattern"))}}function fe(e,s){e&1&&(t(0,"div",39),r(1,"Password should match"),n())}function ve(e,s){if(e&1&&(g(0),d(1,fe,2,0,"div",38),u()),e&2){let i=s.ngIf;a(),o("ngIf",i.dirty&&i.hasError("passwordShouldMatch"))}}var Ve=(()=>{class e{constructor(i,c,l){this.message=i,this.fb=c,this.fbNotNull=l,this._api=x(R),this.togglePass=!1,this.env=V,this.router=x(F),this.newUser=this.fbNotNull.group({username:["",[p.required,p.minLength(2),p.pattern(/^[\w.]+$/)]],age:["",[p.required,p.minLength(2),p.pattern(/^[0-9]+$/)]],gender:["male",p.required],password:this.fbNotNull.group({newPassword:["",[p.required,p.minLength(8),p.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],repeatNewPassword:""},{validators:[Y]}),recaptcha:[null,[p.required]]})}register(){this.sub=this._api.registerUser(this.newUser.value).subscribe({next:i=>{this.message.add({severity:"success",summary:"Registered",detail:"Enjoy shopping",life:3e3}),i.token&&(localStorage.setItem("token",i.token),setTimeout(()=>this.router.navigate(["projects/e-commerce/products"]),1e3))},error:()=>{this.message.add({severity:"error",summary:"Attempt failed",detail:"Please try again",life:3e3})}})}showPassword(){this.togglePass=!this.togglePass}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}static{this.\u0275fac=function(c){return new(c||e)(_(h),_(H),_(J))}}static{this.\u0275cmp=U({type:e,selectors:[["app-sign-up"]],standalone:!0,features:[N([h]),P],decls:54,vars:15,consts:[["password",""],["repeat",""],[1,"w-full","h-full","flex","items-center","justify-center","pb-28","lg:pb-0"],["position","top-center"],["autocomplete","off",1,"bg-basic-1100","flex","flex-col","shadow-3","rounded-lg","gap-2","w-80","max-w-80","p-5",3,"ngSubmit","formGroup"],[1,"mb-10","text-center"],[1,"flex","flex-col","gap-1","relative","mb-12","inputWrapper"],["type","text","name","username","placeholder"," ","autocomplete","off","value","","id","username","formControlName","username",1,"inputField"],["for","username",1,"inputLabel"],[1,"pi","pi-user","mr-1","text-lg"],[4,"ngIf"],[1,"flex","gap-2"],[1,"flex","flex-col","gap-1","w-1/2","relative","mb-12","inputWrapper"],["formControlName","age","type","text","placeholder"," ","name","age","autocomplete","new-password","value","","formControlName","age",1,"inputField"],["for","age",1,"inputLabel"],[1,"pi","pi-calendar-times","mr-1","text-lg"],[1,"flex","flex-col","gap-1","w-1/2","relative","inputWrapper"],["formControlName","gender","name","gender","id","gender",1,"inputSelect"],["value","male"],["value","female"],["for","gender",1,"absolute","-top-5","text-basic-500"],[1,"pi","pi-mars","mr-1","text-lg"],["formGroupName","password",1,"w-full","mb-7","self-center","border-2","border-basic-900","rounded-2xl","flex","flex-col","p-5","justify-center","gap-5"],[1,"p-2"],[1,"pi","pi-lock","mr-1","text-lg"],[1,"relative","flex","flex-col","gap-1","mb-14","inputWrapper"],["name","newPassword","autocomplete","off","placeholder"," ","value","","formControlName","newPassword",1,"inputField","mt-2",3,"type"],["for","newPassword",1,"inputLabel"],[1,"absolute","top-3","right-3","cursor-pointer","z-10",3,"click","src"],[1,"relative","flex","flex-col","gap-1","mb-5","inputWrapper"],["formControlName","repeatNewPassword","name","repeatPassword","placeholder"," ","autocomplete","off","value","","id","repeatPassword",1,"inputField",3,"type"],["for","repeatPassword",1,"inputLabel"],[1,"absolute","top-1","right-3","cursor-pointer","z-10",3,"click","src"],[1,"recaptchaContainer","ml-9"],["id","recaptcha","type","image","formControlName","recaptcha","size","normal","theme","dark",3,"siteKey"],["type","submit",1,"btn-primary","mb-3","disabled:btn-primary-disabled",3,"disabled"],[1,"text-center"],["routerLink","../login",1,"text-primary-500","underline"],["class","inputError",4,"ngIf"],[1,"inputError"],[1,"underline"],[1,"text-xl"],["class","inputError top-12 leading-none",4,"ngIf"],[1,"inputError","top-12","leading-none"]],template:function(c,l){if(c&1){let w=I();t(0,"div",2),m(1,"p-toast",3),t(2,"form",4),S("ngSubmit",function(){return f(w),v(l.register())}),t(3,"h2",5),r(4,"Sign Up"),n(),t(5,"div",6),m(6,"input",7),t(7,"label",8),m(8,"i",9),r(9,"Username"),n(),d(10,le,4,3,"ng-container",10),n(),t(11,"div",11)(12,"div",12),m(13,"input",13),t(14,"label",14),m(15,"i",15),r(16,"Age"),n(),d(17,de,4,3,"ng-container",10),n(),t(18,"div",16)(19,"select",17)(20,"option",18),r(21,"Male"),n(),t(22,"option",19),r(23,"Female"),n()(),t(24,"label",20),m(25,"i",21),r(26,"Gender"),n()()(),t(27,"fieldset",22)(28,"legend",23),m(29,"i",24),r(30,"Password"),n(),t(31,"div",25),m(32,"input",26,0),t(34,"label",27),r(35,"Password"),n(),t(36,"svg-icon",28),S("click",function(){return f(w),v(l.showPassword())}),n(),d(37,ue,3,2,"ng-container",10),n(),t(38,"div",29),m(39,"input",30,1),t(41,"label",31),r(42,"Repeat Password"),n(),d(43,ve,2,1,"ng-container",10),t(44,"svg-icon",32),S("click",function(){return f(w),v(l.showPassword())}),n()()(),t(45,"div",33),m(46,"re-captcha",34),n(),t(47,"button",35)(48,"h4"),r(49,"Sign Up"),n()(),t(50,"p",36),r(51,"Already have an account? "),t(52,"a",37),r(53,"Sign in"),n()()()()}c&2&&(a(2),o("formGroup",l.newUser),a(8),o("ngIf",l.newUser.controls.username),a(7),o("ngIf",l.newUser.controls.age),a(15),o("type",l.togglePass?"text":"password"),a(4),b("src","",l.env.staticFileUrl,"/svg/eye-",l.togglePass.toString(),".svg"),a(),o("ngIf",l.newUser.controls.password.controls.newPassword),a(2),o("type",l.togglePass?"text":"password"),a(4),o("ngIf",l.newUser.controls.password.controls.repeatNewPassword),a(),b("src","",l.env.staticFileUrl,"/svg/eye-",l.togglePass.toString(),".svg"),a(2),o("siteKey",l.env.recaptcha.sitekey),a(),o("disabled",l.newUser.invalid))},dependencies:[Q,z,K,Z,j,B,D,G,M,X,W,O,$,L,A,q,k,T,ne,ie,te,ee]})}}return e})();export{Ve as SignUpComponent};
