(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7317],{78608:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/farms/edit",function(){return a(34613)}])},34613:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return q},useEditFarmUrlParser:function(){return X}});var i=a(85893),s=a(67294),n=a(11163),l=a(93513),r=a(66180),o=a(91371),d=a(95657),m=a(57751),c=a(8667),u=a(34003),f=a(98360),h=a(3363),x=a(4465),w=a(49641),b=a(42186),v=a(80582),p=a(19036),k=a(53002),j=a(13521);async function N(e){let{reward:t,...a}=e;return(0,c.ZP)(async e=>{let{transactionCollector:i,baseUtils:{connection:s}}=e,{hydratedInfos:n}=w.Z.getState(),{farmId:l}=j.Z.getState();(0,u.Z)(l,"target farm id is missing");let r=n.find(e=>(0,h.ZP)(e.id)===l);(0,u.Z)(r,"can't find target farm");let o=(await (0,f.ZP)([t].flat(),e=>Z({reward:e,farmInfo:r,connection:s}))).flat();i.add(o,{...a,txHistoryInfo:{title:"Claim Reward",description:"(Click to see details)"}})})}async function Z(e){var t;let{connection:a,reward:i,farmInfo:s}=e,{owner:n,tokenAccountRawInfos:l,txVersion:r}=k.Z.getState();(0,u.Z)(n,"Wallet not connected"),(0,u.Z)((0,x.aT)(n,i.owner),"reward is not created by walletOwner"),(0,u.Z)(i.token,"reward token haven't set");let{innerTransactions:o}=await m.l6j.makeCreatorWithdrawFarmRewardInstructionSimple({connection:a,poolKeys:(0,p.R)(s.jsonInfo),userKeys:{tokenAccounts:l,owner:n},withdrawMint:(0,b.Dn)(i.token)?v.YG:null===(t=i.token)||void 0===t?void 0:t.mint,makeTxVersion:r,lookupTableCache:c.eq});return(0,u.Z)(o,"withdraw farm valid failed"),o}var y=a(31555),g=a(99522),T=a(43067),C=a(6994),I=a(48162),P=a(29120),S=a(51800),E=a(95793),F=a(90547),_=a(17097),R=a(81451),B=a(51523),A=a(16938),D=a(87659),M=a(28723),z=a(47617),U=a(56053),O=a(61747);function W(e){let{className:t}=e;return(0,i.jsx)(S.Z,{className:(0,r.m)("items-center justify-between mobile:hidden",t),children:(0,i.jsx)(T.Z,{type:"text",className:"text-sm text-[#ABC4FF] opacity-50 px-0",prefix:(0,i.jsx)(I.Z,{heroIconName:"chevron-left",size:"sm"}),onClick:()=>(0,y.Bv)(),children:"Back to Farms"})})}function X(){let{query:e}=(0,n.useRouter)(),t=(0,k.Z)(e=>e.owner),a=(0,w.Z)(e=>e.hydratedInfos);(0,s.useEffect)(()=>{let i=String(null==e?void 0:e.farmId);if(!(0,_.gm)(i))return;let s=j.Z.getState().farmId===i;if(s)return;let n=a.find(e=>(0,h.ZP)(e.id)===i);n&&j.Z.setState((0,A.Nh)({farmId:(0,h.ZP)(n.id),poolId:n.ammId,rewards:n.rewards.map(e=>(0,d.Ny)(e)),disableAddNewReward:!(0,x.aT)(n.creator,t)}))},[null==e?void 0:e.farmId,a,t])}function q(){var e,t;X();let a=(0,k.Z)(e=>e.connected),n=(0,k.Z)(e=>e.getBalance),{rewards:r,cannotAddNewReward:m,farmId:c}=(0,j.Z)(),u=(0,w.Z)(e=>e.hydratedInfos),f=(0,o.ZP)(e=>e.isMobile),[h,b]=(0,s.useState)(),v=!m&&r.length<5,p=r.filter(e=>"existed reward"===e.type),Z=p.filter(e=>(0,d.uk)(e)),_=r.filter(e=>"new added"===e.type),A=_.filter(e=>null!=e.amount||null!=e.startTime||null!=e.endTime||null!=e.token),q=u.find(e=>(0,x.aT)(e.id,c)),H=(0,D.j)(),K=(0,s.useMemo)(()=>(0,i.jsx)(z.k,{className:"mt-8 mb-4"}),[]);return(0,i.jsxs)(P.Z,{metaTitle:"Farms - MakiDEX",mobileBarTitle:"Edit Farm",children:[(0,i.jsx)(W,{className:"sticky top-0 mobile:-translate-y-2 z-10 mobile:bg-[#0f0b2f]"}),(0,i.jsxs)("div",{className:"self-center w-[min(720px,90vw)] z-20",children:[!f&&(0,i.jsxs)(S.Z,{className:"mb-10 justify-self-start items-baseline gap-2",children:[(0,i.jsx)("div",{className:"text-2xl mobile:text-lg font-semibold text-white",children:"Edit Farm"}),c&&(0,i.jsxs)("div",{className:"text-sm mobile:text-xs font-semibold text-[#abc4ff80]",children:["Farm ID:",(0,i.jsx)("div",{className:"inline-block ml-1",children:(0,i.jsx)(g.U,{className:"flex-nowrap whitespace-nowrap",canCopy:!0,iconClassName:"hidden",textClassName:"text-sm mobile:text-xs font-semibold text-[#abc4ff80] whitespace-nowrap",showDigitCount:6,children:c})})]})]}),(0,i.jsxs)("div",{className:"mb-8",children:[(0,i.jsx)("div",{className:"mb-3 text-[#abc4ff] text-sm font-medium justify-self-start",children:"Pool"}),(0,i.jsx)(U.j,{})]}),(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)("div",{className:"mb-3 text-[#abc4ff] text-sm font-medium justify-self-start",children:"Farm rewards"}),(0,i.jsx)(M.t,{canUserEdit:!0,onClickIncreaseReward:e=>{let{reward:t}=e;b(t)},onClaimReward:e=>{let{reward:t,onTxSuccess:a}=e;return N({reward:t,onTxSuccess:a})},onClaimAllReward:e=>{let{rewards:t,onTxSuccess:a}=e;return N({reward:t,onTxSuccess:a})}})]}),K,(0,i.jsxs)(S.Z,{className:"items-center my-2 mb-12 text-sm clickable ".concat(v?"":"not-clickable-with-disallowed"),onClick:()=>{v&&j.Z.setState({rewards:(0,l.Uy)(r,e=>{e.push((0,d.k8)())})})},children:[(0,i.jsx)(I.Z,{className:"text-[#abc4ff]",heroIconName:"plus-circle",size:"sm"}),(0,i.jsx)("div",{className:"ml-1.5 text-[#abc4ff] font-medium mobile:text-sm",children:"Add another reward token"}),(0,i.jsxs)("div",{className:"ml-1.5 text-[#abc4ff80] font-medium mobile:text-sm",children:["(",5-r.length," more)"]})]}),(0,i.jsx)(T.Z,{className:"flex frosted-glass-teal mx-auto mt-4 mb-12 mobile:w-full",size:f?"sm":"lg",validators:[{should:A.length||Z.length},{should:a,forceActive:!0,fallbackProps:{onClick:()=>o.ZP.setState({isWalletSelectorShown:!0}),children:"Connect Wallet"}},{should:A.every(e=>e.token),fallbackProps:{children:"Confirm reward token"}},...A.map(t=>{var a;return{should:t.amount,fallbackProps:{children:"Enter ".concat(null!==(e=null===(a=t.token)||void 0===a?void 0:a.symbol)&&void 0!==e?e:"--"," token amount")}}}),...A.map(e=>{var a;return{should:(0,R.$u)(e.amount),fallbackProps:{children:"Insufficient ".concat(null!==(t=null===(a=e.token)||void 0===a?void 0:a.symbol)&&void 0!==t?t:"--"," token amount")}}}),...A.map(e=>{var t;let a=(0,R.eg)(n(e.token),e.amount);return{should:a,fallbackProps:{children:"Insufficient ".concat(null===(t=e.token)||void 0===t?void 0:t.symbol," balance")}}}),{should:A.every(e=>e.startTime&&e.endTime),fallbackProps:{children:"Confirm emission time setup"}},{should:A.every(e=>e.startTime&&(0,E.hF)(H,e.startTime)),fallbackProps:{children:"Insufficient start time"}},...A.map(e=>{let t=e.endTime&&e.startTime&&e.token?(0,B.hi)((0,F.g9)(e.endTime,e.startTime)/1e3,10**e.token.decimals):void 0;return{should:(0,R.eg)(e.amount,t),fallbackProps:{children:"Emission rewards is lower than min required"}}}),{should:A.every(e=>{let t=(null==e?void 0:e.endTime)&&e.startTime?e.endTime.getTime()-e.startTime.getTime():void 0,a=(null==e?void 0:e.amount)&&t?(0,B.hi)(e.amount,(0,F.nB)(t).days):void 0;return(0,R.$u)(a)}),fallbackProps:{children:"Insufficient estimated value"}}],onClick:()=>{var e;j.Z.setState({isRoutedByCreateOrEdit:!0}),null===(e=(0,y.Eh)("/farms/edit-review"))||void 0===e||e.then(()=>{(0,j.X)()})},children:"Review changes"}),(0,i.jsxs)(C.Z,{className:"p-6 mobile:p-4 rounded-3xl mobile:rounded-xl ring-1 ring-inset ring-[#abc4ff1a] bg-[#1B1659] relative",children:[!f&&(0,i.jsx)("div",{className:"absolute -left-4 top-5 -translate-x-full",children:(0,i.jsx)(I.Z,{iconSrc:"/icons/create-farm-info-circle.svg",iconClassName:"w-7 h-7"})}),(0,i.jsx)("div",{className:"font-medium text-base mobile:text-sm text-[#abc4ff] mb-3",children:"How to add more rewards?"}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"font-medium text-sm mobile:text-xs text-[#ABC4FF80] mb-4",children:(0,i.jsxs)("ol",{className:"list-decimal ml-4 space-y-4",children:[(0,i.jsx)("li",{children:"You can add additional rewards to the farm 72 hrs prior to rewards ending, but this can only be done if rate of rewards for that specific reward token doesn't change."}),(0,i.jsx)("li",{children:"If you want to increase or decrease the rewards rate, you must wait until the previous rewards period ends before starting a new period and rewards amount."})]})})})]}),null!=h&&(0,i.jsx)(O.Z,{cardTitle:"Add more rewards",reward:h,minDurationSeconds:null==q?void 0:q.jsonInfo.rewardPeriodMin,maxDurationSeconds:null==q?void 0:q.jsonInfo.rewardPeriodMax,open:!!h,onClose:()=>b(void 0)})]})]})}}},function(e){e.O(0,[7239,9120,1671,7664,7980,5194,3129,7867,6523,9774,2888,179],function(){return e(e.s=78608)}),_N_E=e.O()}]);