(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6339],{29149:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/farms/edit-review",function(){return n(72011)}])},14033:function(e,t,n){"use strict";n.d(t,{S:function(){return a}});var i=n(99881),r=n(84207);function a(e,t){var n;let a=e=>(0,i.Z)(e.toFixed(null!==(n=null==t?void 0:t.decimalPlace)&&void 0!==n?n:2,null==t?void 0:t.format,null==t?void 0:t.rounding),{fractionLength:"auto",...t}),s=(0,r.Z)(e);try{let e=s.toFixed(0),n=e.length;if(!(null==t?void 0:t.disabled)&&n>9)return"".concat(a(s.div(1e9)),"B");if(!(null==t?void 0:t.disabled)&&n>6)return"".concat(a(s.div(1e6)),"M");if(!(null==t?void 0:t.disabled)&&n>3)return"".concat(a(s.div(1e3)),"K");return"".concat(a(s))}catch(e){return"0"}}},99881:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(72573);function r(e){let{groupSeparator:t=",",fractionLength:n=2,groupSize:r=3}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===e?"0":[e=>(0,i.B)(e),e=>"auto"===n?e:function(e,t){var n;let[,i="",r="",a=""]=null!==(n=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==n?n:[];return a?a.length<t?String(e):Number(e).toFixed(t):String(e)}(e,n),e=>{var n;let[,i="",a="",s=""]=null!==(n=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==n?n:[],d=[...a].reduceRight((e,n,i,a)=>{let s=a.length-1-i;return n+(0!==s&&s%r==0?t:"")+e},"");return s?"".concat(i).concat(d,".").concat(s):"".concat(i).concat(d)}].reduce((e,t)=>t(e),e)}},95865:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(14033);function r(e,t){return e?"$".concat((0,i.S)(e,{...t,disabled:!(null==t?void 0:t.autoSuffix)})):"$0"}},72011:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var i=n(85893),r=n(91371),a=n(95657),s=n(57751),d=n(8667),o=n(34003),l=n(98360),c=n(56419),m=n(90547),u=n(3363),f=n(4465),w=n(14209),h=n(51523),x=n(71375),v=n(49641),Z=n(42186),g=n(80582),b=n(19036),T=n(53002),p=n(13521),k=n(43724);async function j(e){let{...t}=e;return(0,d.ZP)(async e=>{let{transactionCollector:n,baseUtils:{owner:i,connection:r}}=e,{hydratedInfos:j}=v.Z.getState(),{rewards:y,farmId:N}=p.Z.getState(),E=j.find(e=>(0,u.ZP)(e.id)===N);(0,o.Z)(N,"target farm id is missing"),(0,o.Z)(E,"can't find target farm");let S=y.filter(e=>(0,a.uk)(e)&&"existed reward"===e.type),C=y.filter(e=>"new added"===e.type),{valid:P,reason:F}=(0,k.f6)(C);(0,o.Z)(P,F);let _=await (0,l.ZP)(S,async e=>{let{innerTransactions:t}=await function(e){var t,n,i,r;let{connection:a,reward:l,farmInfo:u}=e,{owner:v,tokenAccountRawInfos:p,txVersion:k}=T.Z.getState();(0,o.Z)(v&&(0,f.aT)(v,l.owner),"reward is not created by walletOwner"),(0,o.Z)(l.token,"reward must have token"),(0,o.Z)(l.endTime,"reward must have endTime"),(0,o.Z)(null===(t=l.originData)||void 0===t?void 0:t.endTime,"reward's originData must have endTime"),(0,o.Z)(l.startTime,"reward must have startTime"),(0,o.Z)(l.amount,"reward must have amount"),(0,o.Z)(l.owner,"reward must have creator");let j=(0,c.V1)(l.startTime).getTime(),y=(0,c.V1)(l.endTime).getTime(),N=(0,h.hi)(l.amount,(0,m.nB)(y-j).seconds),E={rewardMint:(0,Z.Dn)(l.token)?g.YG:null===(n=l.token)||void 0===n?void 0:n.mint,rewardOpenTime:(0,x.Z)((0,h.hi)(j,1e3)).toNumber(),rewardEndTime:(0,x.Z)((0,h.hi)(y,1e3)).toNumber(),rewardPerSecond:(0,x.Z)((0,h.dC)(N,(0,w.Bd)("1",null!==(r=null===(i=l.token)||void 0===i?void 0:i.decimals)&&void 0!==r?r:6))),rewardType:l.isOptionToken?"Option tokens":"Standard SPL"};return s.l6j.makeRestartFarmInstructionSimple({poolKeys:(0,b.R)(u.jsonInfo),connection:a,userKeys:{owner:v,tokenAccounts:p},newRewardInfo:E,makeTxVersion:k,lookupTableCache:d.eq})}({reward:e,farmInfo:E,connection:r});return t}),O=await (0,l.ZP)(C,async e=>{let{innerTransactions:t}=await function(e){let{connection:t,reward:n,farmInfo:i}=e,{owner:r,tokenAccountRawInfos:a,txVersion:l}=T.Z.getState();(0,o.Z)(r,"Wallet not connected");let u=n.token;(0,o.Z)(n.startTime,"reward start time is required"),(0,o.Z)(n.endTime,"reward end time is required"),(0,o.Z)(n.amount,"reward amount is required"),(0,o.Z)(u,"can't find selected reward token");let f=(0,c.V1)(n.startTime).getTime(),v=(0,c.V1)(n.endTime).getTime(),p=(0,h.hi)(n.amount,(0,m.nB)(v-f).seconds),k={rewardOpenTime:(0,x.Z)((0,h.hi)(f,1e3)),rewardEndTime:(0,x.Z)((0,h.hi)(v,1e3)),rewardMint:(0,Z.Dn)(u)?g.YG:u.mint,rewardPerSecond:(0,x.Z)((0,h.dC)(p,(0,w.Bd)(1,u.decimals))),rewardType:n.isOptionToken?"Option tokens":"Standard SPL"};return s.l6j.makeFarmCreatorAddRewardTokenInstructionSimple({poolKeys:(0,b.R)(i.jsonInfo),connection:t,userKeys:{owner:r,tokenAccounts:a},newRewardInfo:k,makeTxVersion:l,lookupTableCache:d.eq})}({reward:e,farmInfo:E,connection:r});return t});n.add([..._.flat(),...O.flat()],{...t,txHistoryInfo:{title:"Edit Farm",description:"(Click to see details)"}})})}var y=n(31555),N=n(31166),E=n(99522),S=n(43067),C=n(54592),P=n(29120),F=n(51800),_=n(44516),O=n(28723),B=n(3113),I=n(56053),R=n(67294);function D(){let e=(0,N.ZP)(e=>e.getToken),{poolId:t,rewards:n,farmId:s}=(0,p.Z)(),d=(0,r.ZP)(e=>e.isApprovePanelShown),l=(0,r.ZP)(e=>e.isMobile);(0,R.useMemo)(()=>(0,_.Z)(()=>((0,o.Z)(t,"poolId is not defined"),n.forEach(e=>{(0,o.Z)(e.amount,"reward amount is not defined"),(0,o.Z)(e.token,"reward token is not defined"),(0,o.Z)(e.startTime,"reward start time is not defined"),(0,o.Z)(e.endTime,"reward end time is not defined")}),!0),()=>!1),[t,n,e]);let c=n.filter(e=>"new added"===e.type),m=n.filter(e=>(0,a.uk)(e));(0,R.useEffect)(()=>{p.Z.getState().isRoutedByCreateOrEdit||(0,y.Eh)("/farms",{queryProps:{currentTab:"Ecosystem"}})},[]);let u=(0,i.jsx)(S.Z,{className:"frosted-glass-teal",isLoading:d,size:l?"sm":"lg",validators:[{should:c.length>0||m.length>0}],onClick:()=>{j({onTxSuccess:()=>{setTimeout(()=>{(0,y.Eh)("/farms",{queryProps:{currentTab:"Ecosystem"}}),p.Z.setState({rewards:[(0,a.k8)()]}),v.Z.getState().refreshFarmInfos(),p.Z.setState({isRoutedByCreateOrEdit:!1})},1e3)}})},children:"Confirm Farm Changes"}),f=(0,i.jsx)(S.Z,{className:"frosted-glass-skygray mobile:w-full",size:l?"sm":"lg",onClick:y.Bv,children:"Edit"});return(0,i.jsx)(P.Z,{metaTitle:"Farms - MakiDEX",mobileBarTitle:"Edit Farm",children:(0,i.jsxs)("div",{className:"self-center w-[min(720px,90vw)]",children:[!l&&(0,i.jsxs)(F.Z,{className:"mb-8 justify-self-start items-baseline gap-2",children:[(0,i.jsx)("div",{className:"text-2xl mobile:text-lg font-semibold text-white",children:"Edit Farm"}),s&&(0,i.jsxs)("div",{className:"text-sm mobile:text-xs font-semibold text-[#abc4ff80]",children:["Farm ID:",(0,i.jsx)("div",{className:"inline-block ml-1",children:(0,i.jsx)(E.U,{className:"flex-nowrap whitespace-nowrap",canCopy:!0,iconClassName:"hidden",textClassName:"text-sm mobile:text-xs font-semibold text-[#abc4ff80] whitespace-nowrap",showDigitCount:6,children:s})})]})]}),(0,i.jsx)("div",{className:"mb-8 text-xl mobile:text-lg font-semibold justify-self-start text-white",children:"Review farm details"}),(0,i.jsxs)("div",{className:"mb-8",children:[(0,i.jsx)("div",{className:"mb-3 text-[#abc4ff] text-sm font-medium justify-self-start",children:"Pool"}),(0,i.jsx)(I.j,{})]}),(0,i.jsxs)("div",{className:"mb-6",children:[(0,i.jsx)("div",{className:"mb-3 text-[#abc4ff] text-sm font-medium justify-self-start",children:"Existing farm rewards"}),(0,i.jsx)(O.t,{canUserEdit:!1})]}),c.length>0&&(0,i.jsxs)("div",{className:"mb-6",children:[(0,i.jsx)("div",{className:"mb-3 text-[#abc4ff] text-sm font-medium justify-self-start",children:"New farm rewards"}),(0,i.jsx)(B.D,{canUserEdit:!1})]}),l?(0,i.jsxs)(C.Z,{className:"gap-3 mt-12 justify-center",children:[u,f]}):(0,i.jsxs)(F.Z,{className:"gap-5 mt-12 justify-center",children:[u,f]})]})})}}},function(e){e.O(0,[7239,9120,1671,3129,6523,9774,2888,179],function(){return e(e.s=29149)}),_N_E=e.O()}]);