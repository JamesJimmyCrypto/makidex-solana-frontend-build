(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{52837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n(37702)}])},32029:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(85893),l=n(67294),a=n(17097),i=n(51523),o=n(72573),u=n(31139),c=n(96398),s=n(62361),d=n(48162),m=n(82727);function p(e){let{defaultValue:t,value:n,decimalCount:p=6,showArrowControls:f,showPlusMinusControls:v,minN:x=0,maxN:g,step:b=Number((1/10**Math.floor(p)).toFixed(p)),onInvalid:h,canNegative:N,onValid:R,skipAutoIncrease:E,skipAutoDecrease:y,increaseFn:k,decreaseFn:j,prefix:C,prefixClassName:Z,suffix:w,valueToStringOptions:S,...P}=e,[O,T,I]=(0,s.$)(t);(0,c.L)(()=>{T(n)},[n]);let F={canNegativeLetter:/^[0-9-,.]$/,canNegativeRegexpString:"^[0-9-]*[.,]?[0-9]{0,".concat(p,"}$"),decimalRegexpString:"^[0-9]*[.,]?[0-9]{0,".concat(p,"}$"),decimalLetter:/^[0-9,.]$/},A=(0,l.useRef)();(0,l.useEffect)(()=>{var e;let t=N?F.canNegativeLetter:F.decimalLetter,n=e=>{let n=e.key,r=n.length>1||t.test(n),l=e.ctrlKey||e.altKey;r||l||e.preventDefault()};return null===(e=A.current)||void 0===e||e.addEventListener("keydown",n,{capture:!0,passive:!1}),()=>{var e;null===(e=A.current)||void 0===e||e.removeEventListener("keydown",n,{capture:!0})}},[]);let _=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user-input";if((0,a.ve)(e)){var n;T(e),null===(n=P.onUserInput)||void 0===n||n.call(P,e,{canSafelyCovertToNumber:Number(e)<Number.MAX_SAFE_INTEGER&&Number(e)>Number.MIN_SAFE_INTEGER,triggerBy:t})}},D=e=>{var t;let n=A.current;if(!n)return;null===(t=P.onDangerousValueChange)||void 0===t||t.call(P,e,n);let r=n.checkValidity();r&&(null==R||R()),r||null==h||h()},L=()=>{var e;let t=null!==(e=null==k?void 0:k((0,o.B)(I())))&&void 0!==e?e:(0,i.IH)((0,o.B)(I()),b),n=(0,i.uZ)(x,t,g),r=(0,o.B)(n);_(r,"increase-decrease"),D(r)},M=()=>{var e;let t=null!==(e=null==j?void 0:j((0,o.B)(I())))&&void 0!==e?e:(0,i.h9)((0,o.B)(I()),b),n=(0,i.uZ)(x,t,g),r=(0,o.B)(n);_(r,"increase-decrease"),D(r)};return(0,r.jsx)(m.Z,{inputMode:"decimal",inputHTMLProps:{pattern:N?F.canNegativeRegexpString:F.decimalRegexpString,inputMode:"decimal",min:String(x),max:g?String(g):void 0,step:b},...P,inputDomRef:(0,u.Z)(A,P.inputDomRef),pattern:new RegExp(N?F.canNegativeRegexpString:F.decimalRegexpString),value:O?(0,o.B)(O,S):"",defaultValue:(0,o.B)(t,S),onUserInput:e=>{_(e)},onDangerousValueChange:e=>{D(e)},prefix:C||(v?(0,r.jsx)(d.Z,{className:"text-light-blue clickable",heroIconName:"minus",size:"xs",onClick:M}):void 0),prefixClassName:Z||"",suffix:w||(f?(0,r.jsxs)("div",{children:[(0,r.jsx)(d.Z,{className:"opacity-50 hover:opacity-100 clickable",heroIconName:"chevron-up",size:"xs",onClick:L,canLongClick:!0}),(0,r.jsx)(d.Z,{className:"opacity-50 hover:opacity-100 clickable",heroIconName:"chevron-down",size:"xs",onClick:M,canLongClick:!0})]}):v?(0,r.jsx)(d.Z,{className:"text-light-blue clickable",heroIconName:"plus",size:"xs",onClick:L}):void 0)})}},72259:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(85893),l=n(67294),a=n(66180),i=n(27993),o=n(31139),u=n(54592),c=n(32029),s=n(82727);function d(e){var t;let{decimalMode:n,className:d,disabled:m,noDisableStyle:p,label:f,labelClassName:v,inputProps:x,renderInput:g,...b}=e,h=(0,l.useRef)(null);return(0,r.jsxs)(u.Z,{onClick:function(){var e,t,n,r;null===(e=h.current)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e),null===(n=h.current)||void 0===n||null===(r=n.click)||void 0===r||r.call(n)},className:(0,a.m)("bg-[#141041] justify-between rounded-xl mobile:rounded-lg py-3 px-6 mobile:py-2 mobile:px-4 cursor-text ".concat(m&&!p?"pointer-events-none-entirely cursor-default opacity-50":""),d),children:[f&&(0,r.jsx)("div",{className:(0,a.m)("text-xs mobile:text-2xs text-[#abc4ff80] font-medium ",v),children:f}),null!==(t=(0,i.u)(g,[h]))&&void 0!==t?t:n?(0,r.jsx)(c.Z,{noCSSInputDefaultWidth:!0,...b,...x,className:(0,a.m)("w-full py-1 mobile:py-1 font-medium",null==x?void 0:x.className),componentRef:(0,o.Z)(h,null==x?void 0:x.componentRef)}):(0,r.jsx)(s.Z,{noCSSInputDefaultWidth:!0,...b,...x,className:(0,a.m)("w-full py-1 mobile:py-1 font-medium",null==x?void 0:x.className),componentRef:(0,o.Z)(h,null==x?void 0:x.componentRef)})]})}},29197:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893),l=n(18074),a=n(27993),i=n(66180),o=n(45826),u=n(91107);function c(e){let{className:t,style:n,vertical:l,itemClassName:o,itemStyle:c,values:s,currentValue:d=s[0],labels:m=s,onChange:p}=e;return s.filter(Boolean).length?(0,r.jsx)(u.E,{value:d,onChange:null!=p?p:()=>{},className:(0,i.m)("".concat(l?"flex-col":"flex"," ").concat(null!=t?t:"")),style:n,children:s.map((e,t,n)=>(0,r.jsx)(u.E.Option,{value:e,className:"cursor-pointer flex grow",children:i=>{let{checked:u}=i;return e&&(0,r.jsx)("div",{className:"grid grow ".concat(l?"":"place-items-center"," ").concat((0,a.u)(o,[u])),style:(0,a.u)(c,[u,t,n]),children:(0,a.u)(m[t],[u,t,n])})}},t))}):(0,r.jsx)(r.Fragment,{})}function s(e){let{size:t,$valuesLength:n,$transparentBg:u,urlSearchQueryKey:s,className:d,...m}=e;(0,o.i)({currentValue:m.currentValue,values:m.values,onChange:m.onChange,queryKey:s});let p=m.currentValue&&m.values.includes(m.currentValue),f=null!=n?n:m.values.length,v=(p?m.values.findIndex(e=>e===m.currentValue):0)+0;return(0,r.jsx)(c,{...m,currentValue:m.currentValue,className:(0,i.m)("rounded-full p-1",u?"bg-transparent":"bg-cyberpunk-card-bg",d),itemClassName:e=>(0,i.m)("sm"===t?"min-w-[82px] mobile:min-w-[64px] px-2 mobile:px-1.5 h-7 mobile:h-5 text-sm mobile:text-xs":"min-w-[96px] mobile:min-w-[76px] px-3 mobile:px-2 h-9 mobile:h-7 text-sm mobile:text-xs ","grid rounded-full place-items-center font-medium whitespace-nowrap ".concat(e?"text-white":"text-[#ABC4FF]"),(0,a.u)(m.itemClassName,[e])),itemStyle:e=>e?{background:"linear-gradient(245.22deg, rgb(218, 46, 239), rgb(43, 106, 255), rgb(57, 208, 216))",backgroundSize:"".concat(f,"00% 10%"),backgroundPosition:(0,l.Z)(1/(f-1)*v)}:{}})}},99881:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(72573);function l(e){let{groupSeparator:t=",",fractionLength:n=2,groupSize:l=3}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===e?"0":[e=>(0,r.B)(e),e=>"auto"===n?e:function(e,t){var n;let[,r="",l="",a=""]=null!==(n=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==n?n:[];return a?a.length<t?String(e):Number(e).toFixed(t):String(e)}(e,n),e=>{var n;let[,r="",a="",i=""]=null!==(n=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==n?n:[],o=[...a].reduceRight((e,n,r,a)=>{let i=a.length-1-r;return n+(0!==i&&i%l==0?t:"")+e},"");return i?"".concat(r).concat(o,".").concat(i):"".concat(r).concat(o)}].reduce((e,t)=>t(e),e)}},18074:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(81451),l=n(51523),a=n(84207),i=n(72573),o=n(99881);function u(e,t){try{var n,u;let c=(0,a.Z)(null!=e?e:0),s=c.mul((null==t?void 0:t.alreadyPercented)?1:100).toFixed(null!==(n=null==t?void 0:t.fixed)&&void 0!==n?n:2);if((0,r.eq)(c,0))return"0%";if(!(null==t?void 0:t.exact)&&s===0..toFixed(null!==(u=null==t?void 0:t.fixed)&&void 0!==u?u:2))return(null==t?void 0:t.alwaysSigned)?"<+0.01%":"<0.01%";return(null==t?void 0:t.alwaysSigned)?"".concat((0,r.gt)(s,0)?"+":"-").concat((0,o.Z)((0,r.gt)(s,0)?(0,i.B)(s):(0,i.B)((0,l.dC)(s,-1))),"%"):"".concat((0,o.Z)(s,{fractionLength:null==t?void 0:t.fixed}),"%")}catch(e){return"0%"}}},37702:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(85893),l=n(67294),a=n(57751),i=n(59277),o=n(43067),u=n(54592),c=n(60421),s=n(48162),d=n(72259),m=n(29120),p=n(51800),f=n(29197),v=n(92618),x=n(65408),g=n(3363),b=n(4465),h=n(16938);function N(){return(0,r.jsxs)(m.Z,{mobileBarTitle:"Settings",metaTitle:"Settings - MakiDEX",children:[(0,r.jsx)("div",{className:"text-3xl font-semibold",children:"Settings"}),(0,r.jsx)(R,{})]})}function R(){let e=(0,i.ZP)(e=>e.mode),[t,n]=(0,l.useState)(e);(0,l.useEffect)(()=>{n(e)},[e]);let c=(0,i.ZP)(e=>e.apiUrlOrigin),[s,m]=(0,l.useState)(c);(0,l.useEffect)(()=>{m(c)},[c]);let p=(0,i.ZP)(e=>e.apiUrlPathnames),v=(0,l.useMemo)(()=>(0,h.xh)(p,e=>"".concat(s).concat(e)),[s,p]),N=(0,i.ZP)(e=>e.programIds),[R,y]=(0,l.useState)(()=>(0,h.xh)(N,e=>(0,g.ZP)(e)));(0,l.useEffect)(()=>{y((0,h.xh)(N,e=>(0,g.ZP)(e)))},[N]);let k=Object.entries(N).some(e=>{let[t,n]=e;return!(0,b.$F)(R[t],n)})||c!==s;return(0,r.jsxs)(u.Z,{className:"py-4 gap-8 mx-auto w-[min(1100px,100%)] items-center",children:[(0,r.jsx)(f.Z,{values:["mainnet","devnet"],currentValue:t,onChange:e=>{y("mainnet"===e?(0,h.xh)(a.krz,g.ZP):(0,h.xh)(a.Kat,g.ZP)),n(e)}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-xl font-semibold text-center mb-2",children:"Program ID"}),(0,r.jsx)(u.Z,{className:"mobile:gap-6",children:Object.entries(R).map(e=>{let[t,n]=e;return(0,r.jsx)(E,{name:"".concat((0,x.wR)(t)),renderFormItem:n},t)})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-xl font-semibold text-center mb-2",children:"API"}),(0,r.jsx)(d.Z,{className:"mobile:text-base text-[#abc4ff80] my-4",value:s,prefix:"origin: ",suffix:(0,r.jsx)("div",{onClick:()=>{m(i.rH)},className:"text-[#abc4ff] cursor-pointer clickable",children:"↻ reset"}),onUserInput:e=>{m(e)}}),(0,r.jsx)(u.Z,{className:"mobile:gap-6",children:Object.entries(v).map(e=>{let[t,n]=e;return(0,r.jsx)(E,{name:"".concat((0,x.wR)(t)),renderFormItem:n},t)})})]}),(0,r.jsx)(o.Z,{size:"lg",className:"w-[320px] frosted-glass-teal mt-5",validators:[{should:k}],onClick:()=>{i.ZP.setState({programIds:(0,h.xh)(R,e=>(0,g.uI)(e)),apiUrlOrigin:s,mode:t})},children:"Save"})]})}function E(e){let{name:t,tooltip:n,renderFormItem:l}=e;return(0,r.jsxs)(c.Z,{className:"grid-cols-[12em,32em] mobile:grid-cols-1 gap-8 mobile:gap-1",children:[(0,r.jsxs)(p.Z,{className:"justify-self-end mobile:justify-self-start items-center",children:[(0,r.jsx)("div",{className:"text-lg mobile:text-sm text-[#abc4ff]",children:t}),n&&(0,r.jsxs)(v.Z,{panelClassName:"bg-[#3b4146]",arrowClassName:"bg-[#3b4146]",children:[(0,r.jsx)(s.Z,{size:"sm",heroIconName:"question-mark-circle",className:"mx-1 cursor-help text-[#abc4ff]"}),(0,r.jsx)(v.Z.Panel,{children:(0,r.jsx)("p",{className:"w-80",children:n})})]}),(0,r.jsx)("div",{className:"text-lg mobile:hidden text-[#abc4ff]",children:": "})]}),(0,r.jsx)("div",{className:"mobile:text-sm mobile:break-words",children:l})]})}},91107:function(e,t,n){"use strict";n.d(t,{E:function(){return P}});var r,l,a=n(67294),i=n(12351),o=n(19946),u=n(32984),c=n(16723),s=n(61363),d=n(84575),m=n(95389),p=n(39516),f=n(15466),v=n(23784),x=n(46045),g=n(18689),b=n(73781),h=n(31147),N=n(64103),R=n(3855),E=n(94192),y=((r=y||{})[r.RegisterOption=0]="RegisterOption",r[r.UnregisterOption=1]="UnregisterOption",r);let k={0(e,t){let n=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,d.z2)(n,e=>e.element.current)}},1(e,t){let n=e.options.slice(),r=e.options.findIndex(e=>e.id===t.id);return -1===r?e:(n.splice(r,1),{...e,options:n})}},j=(0,a.createContext)(null);j.displayName="RadioGroupDataContext";let C=(0,a.createContext)(null);function Z(e,t){return(0,u.E)(t.type,k,e,t)}C.displayName="RadioGroupActionsContext";let w=(0,i.yV)(function(e,t){let n=(0,o.M)(),{id:r=`headlessui-radiogroup-${n}`,value:l,defaultValue:u,name:N,onChange:R,by:y=(e,t)=>e===t,disabled:k=!1,...w}=e,S=(0,b.z)("string"==typeof y?(e,t)=>(null==e?void 0:e[y])===(null==t?void 0:t[y]):y),[P,O]=(0,a.useReducer)(Z,{options:[]}),T=P.options,[I,F]=(0,m.b)(),[A,_]=(0,p.f)(),D=(0,a.useRef)(null),L=(0,v.T)(D,t),[M,z]=(0,h.q)(l,R,u),B=(0,a.useMemo)(()=>T.find(e=>!e.propsRef.current.disabled),[T]),G=(0,a.useMemo)(()=>T.some(e=>S(e.propsRef.current.value,M)),[T,M]),V=(0,b.z)(e=>{var t;if(k||S(e,M))return!1;let n=null==(t=T.find(t=>S(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==n||!n.disabled)&&(null==z||z(e),!0)});!function({container:e,accept:t,walk:n,enabled:r=!0}){let l=(0,a.useRef)(t),i=(0,a.useRef)(n);(0,a.useEffect)(()=>{l.current=t,i.current=n},[t,n]),(0,c.e)(()=>{if(!e||!r)return;let t=(0,f.r)(e);if(!t)return;let n=l.current,a=i.current,o=Object.assign(e=>n(e),{acceptNode:n}),u=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;u.nextNode();)a(u.currentNode)},[e,r,l,i])}({container:D.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let $=(0,b.z)(e=>{let t=D.current;if(!t)return;let n=(0,f.r)(t),r=T.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case s.R.Enter:(0,g.g)(e.currentTarget);break;case s.R.ArrowLeft:case s.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(r,d.TO.Previous|d.TO.WrapAround)===d.fE.Success){let e=T.find(e=>e.element.current===(null==n?void 0:n.activeElement));e&&V(e.propsRef.current.value)}break;case s.R.ArrowRight:case s.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(r,d.TO.Next|d.TO.WrapAround)===d.fE.Success){let e=T.find(e=>e.element.current===(null==n?void 0:n.activeElement));e&&V(e.propsRef.current.value)}break;case s.R.Space:{e.preventDefault(),e.stopPropagation();let t=T.find(e=>e.element.current===(null==n?void 0:n.activeElement));t&&V(t.propsRef.current.value)}}}),U=(0,b.z)(e=>(O({type:0,...e}),()=>O({type:1,id:e.id}))),K=(0,a.useMemo)(()=>({value:M,firstOption:B,containsCheckedOption:G,disabled:k,compare:S,...P}),[M,B,G,k,S,P]),W=(0,a.useMemo)(()=>({registerOption:U,change:V}),[U,V]),H=(0,a.useMemo)(()=>({value:M}),[M]),q=(0,a.useRef)(null),X=(0,E.G)();return(0,a.useEffect)(()=>{q.current&&void 0!==u&&X.addEventListener(q.current,"reset",()=>{V(u)})},[q,V]),a.createElement(_,{name:"RadioGroup.Description"},a.createElement(F,{name:"RadioGroup.Label"},a.createElement(C.Provider,{value:W},a.createElement(j.Provider,{value:K},null!=N&&null!=M&&(0,g.t)({[N]:M}).map(([e,t],n)=>a.createElement(x._,{features:x.A.Hidden,ref:0===n?e=>{var t;q.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,i.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})})),(0,i.sY)({ourProps:{ref:L,id:r,role:"radiogroup","aria-labelledby":I,"aria-describedby":A,onKeyDown:$},theirProps:w,slot:H,defaultTag:"div",name:"RadioGroup"})))))});var S=((l=S||{})[l.Empty=1]="Empty",l[l.Active=2]="Active",l);let P=Object.assign(w,{Option:(0,i.yV)(function(e,t){var n;let r=(0,o.M)(),{id:l=`headlessui-radiogroup-option-${r}`,value:u,disabled:s=!1,...d}=e,f=(0,a.useRef)(null),x=(0,v.T)(f,t),[g,h]=(0,m.b)(),[E,y]=(0,p.f)(),{addFlag:k,removeFlag:Z,hasFlag:w}=function(e=0){let[t,n]=(0,a.useState)(e);return{addFlag:(0,a.useCallback)(e=>n(t=>t|e),[t]),hasFlag:(0,a.useCallback)(e=>!!(t&e),[t]),removeFlag:(0,a.useCallback)(e=>n(t=>t&~e),[n]),toggleFlag:(0,a.useCallback)(e=>n(t=>t^e),[n])}}(1),S=(0,R.E)({value:u,disabled:s}),P=function e(t){let n=(0,a.useContext)(j);if(null===n){let n=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("RadioGroup.Option"),O=function e(t){let n=(0,a.useContext)(C);if(null===n){let n=Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("RadioGroup.Option");(0,c.e)(()=>O.registerOption({id:l,element:f,propsRef:S}),[l,O,f,e]);let T=(0,b.z)(e=>{var t;if((0,N.P)(e.currentTarget))return e.preventDefault();O.change(u)&&(k(2),null==(t=f.current)||t.focus())}),I=(0,b.z)(e=>{if((0,N.P)(e.currentTarget))return e.preventDefault();k(2)}),F=(0,b.z)(()=>Z(2)),A=(null==(n=P.firstOption)?void 0:n.id)===l,_=P.disabled||s,D=P.compare(P.value,u),L={ref:x,id:l,role:"radio","aria-checked":D?"true":"false","aria-labelledby":g,"aria-describedby":E,"aria-disabled":!!_||void 0,tabIndex:_?-1:D||!P.containsCheckedOption&&A?0:-1,onClick:_?void 0:T,onFocus:_?void 0:I,onBlur:_?void 0:F},M=(0,a.useMemo)(()=>({checked:D,disabled:_,active:w(2)}),[D,_,w]);return a.createElement(y,{name:"RadioGroup.Description"},a.createElement(h,{name:"RadioGroup.Label"},(0,i.sY)({ourProps:L,theirProps:d,slot:M,defaultTag:"div",name:"RadioGroup.Option"})))}),Label:m._,Description:p.d})}},function(e){e.O(0,[7239,9120,9774,2888,179],function(){return e(e.s=52837)}),_N_E=e.O()}]);