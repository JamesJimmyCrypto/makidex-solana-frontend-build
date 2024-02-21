"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4847],{77023:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(26416),o=n(8667),a=n(62707),l=n(34003),s=n(19036),i=n(53002),c=n(49641);async function u(e,t){return(0,o.ZP)(async n=>{let{transactionCollector:u,baseUtils:{owner:d,connection:f}}=n;(0,l.Z)(d,"require connected wallet");let m=c.Z.getState().jsonInfos.find(t=>{let{id:n}=t;return String(n)===String(e.id)});(0,l.Z)(m,"Farm pool not found");let h=(0,s.R)(m),{tokenAccountRawInfos:p,txVersion:k}=i.Z.getState(),{innerTransactions:v}=await r.l6j.makeDepositInstructionSimple({connection:f,poolKeys:h,fetchPoolInfo:e.fetchedMultiInfo,ownerInfo:{feePayer:d,wallet:d,tokenAccounts:p},lookupTableCache:o.eq,makeTxVersion:k,amount:t.amount.raw,checkCreateATAOwner:!0}),g=(0,a.AX)(()=>{c.Z.getState().refreshFarmInfos()},{once:!0});u.add(v,{onTxError:()=>(0,a.Ce)(g),onTxSentError:()=>(0,a.Ce)(g),txHistoryInfo:{title:"Add ".concat(t.amount.token.symbol),description:"Stake ".concat(t.amount.toExact()," ").concat(t.amount.token.symbol)}})})}},1151:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(26416),o=n(82187),a=n(8667),l=n(62707),s=n(34003),i=n(53002),c=n(49641);async function u(e,t){return(0,a.ZP)(async n=>{let{transactionCollector:u,baseUtils:{owner:d,connection:f}}=n,m=(0,o.p)();(0,s.Z)(d,"require connected wallet");let h=c.Z.getState().jsonInfos.find(t=>{let{id:n}=t;return String(n)===String(e.id)});(0,s.Z)(h,"Farm pool not found");let{tokenAccountRawInfos:p,txVersion:k}=i.Z.getState(),v=await r.l6j.makeWithdrawInstructionSimple({connection:f,fetchPoolInfo:e.fetchedMultiInfo,ownerInfo:{feePayer:d,wallet:d,tokenAccounts:p},amount:t.amount.raw,checkCreateATAOwner:!0,makeTxVersion:k,lookupTableCache:a.eq});m.addInnerTransactions(...v.innerTransactions);let g=(0,l.AX)(()=>{c.Z.getState().refreshFarmInfos()},{once:!0});u.add(m.spawnTransactionQueue(),{onTxError:()=>(0,l.Ce)(g),onTxSentError:()=>(0,l.Ce)(g),txHistoryInfo:{title:"Unstake ".concat(t.amount.token.symbol),description:"Unstake ".concat(t.amount.toExact()," ").concat(t.amount.token.symbol)}})})}},82187:function(e,t,n){n.d(t,{p:function(){return o}});var r=n(50705);let o=e=>{let t=null,n=[],o=[],a=[];function l(){let a=t||(null!=e?e:new r.YW);return(n.length||o.length)&&a.add(...n,...o.reverse()),a}return{setRawTransaction:function(e){t=e},addInstruction:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];n.push(...t)},addEndInstruction:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];o.push(...t)},addInnerTransactions:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];a.push(...t)},spawnTransaction:l,spawnTransactionQueue:function(){return n.length||o.length?[...a,l()]:a}}}},33674:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(85893),o=n(67294),a=n(66180),l=n(91371),s=n(14431),i=n(85503);function c(){let{run:e=!0,initPercent:t=0,componentRef:n,className:l,duration:c=6e4,strokeWidth:u=3,updateDelay:d=1e3,svgWidth:f=36,loop:m=!0,onEnd:h,onClick:p}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},k=.5*f/2,v=2*k*Math.PI,g=(0,o.useRef)(!1),{documentVisible:w}=(0,i.x)(),[b,x]=(0,o.useState)(t),Z=(0,o.useRef)(),S=(0,o.useRef)(null);(0,s.e)(S,{onClick:p,disable:!p}),(0,o.useEffect)(()=>{if(e&&w){let t=globalThis.setInterval(()=>{e&&w&&x(e=>e+1/c*d)},d);return Z.current=t,()=>globalThis.clearInterval(t)}globalThis.clearInterval(Z.current)},[c,d,e&&w]);let I=(0,o.useRef)();return(0,o.useEffect)(()=>{if(w&&I.current){let e=Date.now()-I.current;x(t=>t+1/c*e)}w||(I.current=Date.now())},[w]),(0,o.useEffect)(()=>{if(0==Math.floor(b))return;let e=setTimeout(()=>{g.current||(g.current=!0,null==h||h(),setTimeout(()=>{g.current=!1},0))},0);return()=>clearTimeout(e)},[Math.floor(b)]),(0,o.useImperativeHandle)(n,()=>({currentProgressPercent:b%1,restart(){x(0)}})),(0,r.jsx)("div",{className:(0,a.m)("w-full h-full rounded",l),children:(0,r.jsxs)("svg",{ref:S,width:f,height:f,viewBox:"0 0 ".concat(f," ").concat(f),children:[(0,r.jsx)("circle",{r:k,cx:"50%",cy:"50%",fill:"transparent",style:{strokeWidth:u,stroke:"#ffffff2e"}}),(0,r.jsx)("circle",{id:"bar",r:k,cx:"50%",cy:"50%",fill:"transparent",strokeDasharray:v,strokeDashoffset:v-(m?b%1:Math.min(b,1))*v,style:{strokeWidth:u,stroke:"#92e1ffd9",transform:"rotate(-90deg)",transformOrigin:"center",strokeLinecap:"round",transition:"200ms"}})]})})}var u=n(92618),d=n(12839),f=n(43066),m=n(96398),h=n(62361);function p(e){var t,n,s,p;let{run:k=!0,refreshKey:v,popPlacement:g,forceOpen:w,freshFunction:b,freshEach:x=1e3,totalDuration:Z=6e4,className:S,circleBodyClassName:I,disabled:T=!1}=e,y=(0,o.useRef)(),[A,P]=(0,o.useState)(!1);(0,f.N)({loop:x,disable:!A});let{documentVisible:C,documentVisibleRef:M}=(0,i.x)(),[j,N,D]=(0,h.$)(!1),E=()=>N(!0),L=()=>N(!1),R=(0,l.ZP)(e=>e.isMobile),K=null===(t=l.ZP.getState().refreshCircleLastTimestamp[v])||void 0===t?void 0:t.endTimestamp,U=null===(n=l.ZP.getState().refreshCircleLastTimestamp[v])||void 0===n?void 0:n.endProcessPercent,O=K&&U&&(Date.now()-K)/Z+U;return(0,m.L)(()=>{if(!d.N9)return O&&O>1&&(null==b||b()),()=>{var e;l.ZP.setState(t=>{var n;return{refreshCircleLastTimestamp:{...t.refreshCircleLastTimestamp,[v]:{endTimestamp:Date.now(),endProcessPercent:null!==(e=null===(n=y.current)||void 0===n?void 0:n.currentProgressPercent)&&void 0!==e?e:0}}}})}},[]),(0,o.useEffect)(()=>{if(T||!D()||!M.current)return;let e=setTimeout(()=>{!T&&D()&&M.current&&(null==b||b(),L())},0);return()=>clearTimeout(e)},[j,C,T]),(0,r.jsxs)(u.Z,{className:(0,a.m)("select-none",S),placement:g,forceOpen:w,triggerBy:R?"press":void 0,autoClose:!0,onOpen:()=>P(!0),onClose:()=>P(!1),children:[(0,r.jsx)(c,{run:k&&!T,initPercent:O&&O%1,duration:Z,componentRef:y,className:(0,a.m)("clickable clickable-filter-effect",I),onClick:()=>{var e;E(),null===(e=y.current)||void 0===e||e.restart()},onEnd:()=>{var e;E(),null===(e=y.current)||void 0===e||e.restart()}}),(0,r.jsx)(u.Z.Panel,{children:(0,r.jsxs)("div",{className:"w-60",children:["Displayed data will auto-refresh after"," ",Math.round(Z/1e3*(1-(null!==(p=null===(s=y.current)||void 0===s?void 0:s.currentProgressPercent)&&void 0!==p?p:0)))," seconds. Click this circle to update manually."]})})]})}},60534:function(e,t,n){n.d(t,{r:function(){return w}});var r=n(85893),o=n(67294),a=n(91371),l=n(77023),s=n(1151),i=n(65737),c=n(53002),u=n(43067),d=n(6994),f=n(97664),m=n(48162),h=n(6325),p=n(51800),k=n(62952),v=n(81451),g=n(72573);function w(){let e=(0,c.Z)(e=>e.connected),t=(0,c.Z)(e=>e.balances),n=(0,c.Z)(e=>e.tokenAccounts),w=(0,i.Z)(e=>e.stakeDialogInfo),b=(0,i.Z)(e=>e.stakeDialogMode),x=(0,i.Z)(e=>e.isStakeDialogOpen),[Z,S]=(0,o.useState)(),I=(0,a.ZP)(e=>e.isApprovePanelShown),T=(0,o.useMemo)(()=>!!(null==w?void 0:w.lpMint)&&n.some(e=>{let{mint:t}=e;return String(t)===String(null==w?void 0:w.lpMint)}),[n,w]),y=(0,o.useMemo)(()=>"deposit"===b?(null==w?void 0:w.lpMint)&&t[String(w.lpMint)]:null==w?void 0:w.userStakedLpAmount,[w,t,b]),A=(0,o.useMemo)(()=>{if((null==w?void 0:w.lp)&&Z)return(0,k.n)(w.lp,Z,{alreadyDecimaled:!0})},[w,Z]);return(0,r.jsx)(h.Z,{open:x,onClose:()=>{S(void 0),i.Z.setState({isStakeDialogOpen:!1})},placement:"from-bottom",children:t=>{let{close:n}=t;return(0,r.jsxs)(d.Z,{className:"backdrop-filter backdrop-blur-xl p-8 rounded-3xl w-[min(468px,100vw)] mobile:w-full border-1.5 border-[rgba(171,196,255,0.2)] bg-cyberpunk-card-bg shadow-cyberpunk-card",size:"lg",children:[(0,r.jsxs)(p.Z,{className:"justify-between items-center mb-6",children:[(0,r.jsx)("div",{className:"text-xl font-semibold text-white",children:"withdraw"===b?"Unstake MAKI":"Stake MAKI"}),(0,r.jsx)(m.Z,{className:"text-[#ABC4FF] cursor-pointer",heroIconName:"x",onClick:n})]}),(0,r.jsx)(f.Z,{className:"mb-6",topLeftLabel:"Staking MAKI",token:null==w?void 0:w.lp,onUserInput:S,maxValue:"withdraw"===b?null==w?void 0:w.userStakedLpAmount:void 0,topRightLabel:"withdraw"===b?(null==w?void 0:w.userStakedLpAmount)?"Deposited:".concat((0,g.B)(null==w?void 0:w.userStakedLpAmount)):"(no deposited)":void 0}),(0,r.jsxs)(p.Z,{className:"flex-col gap-1",children:[(0,r.jsx)(u.Z,{className:"frosted-glass-teal",isLoading:I,validators:[{should:e},{should:null==w?void 0:w.lp},{should:Z},{should:(0,v.gt)(A,0)},{should:(0,v.eg)(y,A),fallbackProps:{children:"Insufficient MAKI Balance"}},{should:"withdraw"===b||T,fallbackProps:{children:"withdraw"===b?"No Unstakable MAKI":"No Stakable MAKI"}}],onClick:()=>{if(!(null==w?void 0:w.lp)||!Z)return;let e=(0,k.n)(w.lp,Z,{alreadyDecimaled:!0});("withdraw"===b?(0,s.Z)(w,{isStaking:!0,amount:e}):(0,l.Z)(w,{isStaking:!0,amount:e})).then(()=>{n()})},children:"withdraw"===b?"Unstake MAKI":"Stake MAKI"}),(0,r.jsx)(u.Z,{type:"text",disabled:I,className:"text-sm backdrop-filter-none",onClick:n,children:"Cancel"})]})]})}})}}}]);