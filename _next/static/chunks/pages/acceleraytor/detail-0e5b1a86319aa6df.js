(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2152],{47369:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/acceleraytor/detail",function(){return t(8729)}])},8729:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return ed}});var i=t(85893),l=t(67294),n=t(4929),o=t(53002),a=t(48162),d=t(51800);function c(e){let{children:s,className:t,iconSize:l}=e;return(0,i.jsxs)(d.Z,{type:"grid-x",className:"AlertText gap-2 items-center ".concat(t),children:[(0,i.jsx)(a.Z,{className:"flex-shrink-0",size:l,heroIconName:"exclamation-circle"}),(0,i.jsx)("div",{children:s})]})}var r=t(43067),m=t(70745),u=t(89593),x=t(66042),h=t(29120),p=t(56419),f=t(95793),b=t(99881),v=t(62952),g=t(91371),j=t(72573),N=t(81451),y=t(8667),k=t(34003),Z=t(51523),w=t(71375),C=t(26416),F=t(50705),A=t(14200),I=t(88393),T=t(99171),P=t(65756);async function B(e){let{idoInfo:s,ticketAmount:t,forceKeyPairs:i,...l}=e;return(0,k.Z)(s.state,"opps sdk fail to load"),(0,y.ZP)(async e=>{let{transactionCollector:i,baseUtils:{connection:n,owner:o,tokenAccounts:a}}=e;if(!s.base||!s.quote)return;let d=s.state.perLotteryQuoteAmount.mul((0,w.Z)(t)),c=[],r=[],m=[],u=(0,A.D)(s.base.mint),x=(0,A.D)(s.quote.mint),h=C.RGo.getAssociatedTokenAccount({mint:s.base.mint,owner:o,programId:u}),p=C.RGo.getAssociatedTokenAccount({mint:s.quote.mint,owner:o,programId:x});if(s.quote.mint.toBase58()===C.VbZ.mint){let{innerTransaction:e,address:s}=await C.RGo.makeCreateWrappedNativeAccountInstructions({connection:n,owner:o,payer:o,amount:d});p=s.newAccount,c.push(...e.instructions),r.push(...e.signers),m.push(...e.instructionTypes),c.push(C.RGo.makeCloseAccountInstruction({programId:x,tokenAccount:p,owner:o,payer:o,instructionsType:m}))}else a.find(e=>{var s;return null===(s=e.publicKey)||void 0===s?void 0:s.equals(p)})||c.push(C.RGo.makeCreateAssociatedTokenAccountInstruction({programId:x,mint:s.quote.mint,associatedAccount:p,owner:o,payer:o,instructionsType:m}));a.find(e=>{var s;return null===(s=e.publicKey)||void 0===s?void 0:s.equals(h)})||c.push(C.RGo.makeCreateAssociatedTokenAccountInstruction({programId:u,mint:s.base.mint,associatedAccount:h,owner:o,payer:o,instructionsType:m}));let f=await T.L.getAssociatedLedgerAccountAddress({programId:new F.nh(s.programId),owner:o,poolId:new F.nh(s.id)}),b=await P.a.getAssociatedSnapshotAddress({programId:new F.nh(s.snapshotProgramId),owner:o,seedId:new F.nh(s.seedId)});try{c.push(await T.L.makePurchaseInstruction({poolConfig:{id:new F.nh(s.id),programId:new F.nh(s.programId),authority:new F.nh(s.authority),baseVault:new F.nh(s.baseVault),quoteVault:new F.nh(s.quoteVault)},userKeys:{baseTokenAccount:h,quoteTokenAccount:p,ledgerAccount:f,snapshotAccount:b,owner:o},amount:(0,w.Z)(t)})),m.push("-1")}catch(e){console.error(e)}i.add((0,I.A)({rawNativeInstructions:c,rawNativeInstructionTypes:m,signer:r,wallet:o}),{...l,txHistoryInfo:{title:"AccelerRaytor Deposit",description:"Deposit ".concat((0,Z.dC)(t,s.ticketPrice)," ").concat(s.baseSymbol)}})},{forceKeyPairs:i})}var S=t(11163),E=t(28948),W=t(6994),U=t(66180),D=t(54592),L=t(60421),q=t(88132),z=t(11601),M=t(29197),V=t(91148),O=t(27040),R=t(97664),K=t(18074),H=t(65737),_=t(60534),G=t(87479),J=t(94059),Y=t(69651),$=t(31555),X=t(33674),Q=t(43066),ee=t(68186),es=t(92618),et=t(99645),ei=t(96662),el=t(27993),en=t(43487);function eo(e){let{className:s}=e,t=(0,n.Z)(e=>e.currentIdoId?e.idoHydratedInfos[e.currentIdoId]:void 0);return(0,i.jsxs)(d.Z,{className:(0,U.m)("items-center justify-between",s),children:[(0,i.jsx)(r.Z,{type:"text",className:"text-sm text-[#ABC4FF] opacity-50 px-0",prefix:(0,i.jsx)(a.Z,{heroIconName:"chevron-left",size:"sm"}),onClick:()=>(0,$.Eh)("/acceleraytor/list"),children:"Back to all pools"}),(0,i.jsxs)(x.Z,{className:"rounded-none font-medium text-sm text-[#ABC4FF] opacity-50 flex gap-1 items-center ".concat((null==t?void 0:t.projectDetailLink)?"opacity-50":"opacity-0"," transition"),href:null==t?void 0:t.projectDetailLink,children:[(0,i.jsx)(a.Z,{size:"sm",inline:!0,heroIconName:"information-circle"}),"Read full details"]})]})}function ea(e){let{children:s}=e,t=(0,n.Z)(e=>e.currentIdoId?e.idoHydratedInfos[e.currentIdoId]:void 0),l=(0,g.ZP)(e=>e.isMobile),o=l?(null==t?void 0:t.isClosed)?'\n          "b" auto\n          "c" auto\n          "a" auto\n          "d" auto\n          "e" auto / 1fr':'\n          "a" auto\n          "b" auto\n          "c" auto\n          "d" auto\n          "e" auto / 1fr':(null==t?void 0:t.isUpcoming)?'\n        "b b" auto\n        "c a" auto\n        "d a" auto\n        "e a" auto / 3fr minmax(350px, 1fr)':' \n        "b a" auto\n        "c a" auto\n        "d a" auto\n        "e a" auto / 3fr minmax(350px, 1fr)';return(0,i.jsx)(L.Z,{className:"gap-5",style:{gridTemplate:o},children:s})}function ed(){!function(){let e=(0,n.Z)(e=>e.idoHydratedInfos),s=(0,n.Z)(e=>e.currentIdoId?e.idoHydratedInfos[e.currentIdoId]:void 0),{query:t}=(0,S.useRouter)();(0,l.useEffect)(()=>{if(s)return;let e=t.idoId;e&&n.Z.setState({currentIdoId:e})},[e])}(),(0,en.Z)();let e=(0,n.Z)(e=>e.currentIdoId?e.idoHydratedInfos[e.currentIdoId]:void 0);return(0,i.jsxs)(h.Z,{metaTitle:"AcceleRaytor",mobileBarTitle:"AcceleRaytor",contentYPaddingShorter:!0,children:[(0,i.jsx)(eo,{className:"mb-8 sticky top-0"}),e?(0,i.jsxs)("div",{className:"max-w-[1130px] mobile:max-w-[530px] mx-auto",children:[(0,i.jsx)("div",{className:"-z-10 cyberpunk-bg-light-acceleraytor-detail-page top-1/2 left-1/2"}),(0,i.jsx)(er,{className:"mb-5"}),(0,i.jsxs)(ea,{children:[(0,i.jsx)(eh,{className:"grid-area-a self-start"}),(0,i.jsx)(em,{className:"grid-area-b"}),(0,i.jsx)(eu,{className:"grid-area-c"}),(0,i.jsx)(ex,{className:"grid-area-d"}),(0,i.jsx)(ep,{className:"grid-area-e"})]})]}):(0,i.jsx)(et.Z,{className:"mx-auto my-12"})]})}function ec(e){let{idoInfo:s,ticket:t,className:l,style:n}=e;return t?(0,i.jsxs)(d.Z,{className:(0,U.m)("items-center gap-1",l),style:n,children:[(0,i.jsx)("div",{className:"text-xs font-semibold ".concat(t.isWinning?"text-[#39D0D8]":"text-[#ABC4FF]"," "),children:t.no}),(null==s?void 0:s.isClosed)&&(0,i.jsx)(a.Z,{size:"smi",className:t.isWinning?"text-[#39D0D8]":"invisible",heroIconName:t.isWinning?"check-circle":"x-circle"})]}):null}function er(e){var s,t,a,c,m,x,h,p,f,b,v,j,y,k,Z,w,C,F,A,I,T,P,B,S,q,z;let{className:M}=e,V=(0,o.Z)(e=>e.connected),O=(0,o.Z)(e=>e.owner),R=(0,n.Z)(e=>e.currentIdoId?e.idoHydratedInfos[e.currentIdoId]:void 0),K=(0,g.ZP)(e=>e.isMobile),H=(0,g.ZP)(e=>e.isApprovePanelShown),_=(0,n.Z)(e=>e.refreshIdo),[,J]=(0,Q.N)(),[Y,$]=(0,l.useState)(!1),[X,ee]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{$(!1),ee(!1)},[O]),(0,l.useEffect)(()=>{var e,s;(0,N.$u)(null==R?void 0:null===(e=R.ledger)||void 0===e?void 0:e.baseWithdrawn)&&$(!0),(0,N.$u)(null==R?void 0:null===(s=R.ledger)||void 0===s?void 0:s.quoteWithdrawn)&&ee(!0)},[R]),(0,i.jsx)(E.U,{ignoreEnterTransition:!0,children:(null==R?void 0:R.canWithdrawBase)||(null==R?void 0:R.isClosed)||(null==R?void 0:null===(s=R.depositedTickets)||void 0===s?void 0:s.length)?(0,i.jsxs)(W.Z,{className:(0,U.m)("overflow-hidden rounded-3xl border-1.5 border-[rgba(171,196,255,0.1)] bg-cyberpunk-card-bg",M),size:"lg",children:[R.isClosed&&(0,i.jsxs)(d.Z,{className:"flex-wrap gap-7 justify-between p-8 mobile:p-5",children:[(0,i.jsxs)(D.Z,{className:"gap-1",children:[R.winningTicketsTailNumber?(0,i.jsx)("div",{className:"mobile:text-sm font-semibold text-base text-white",children:["1","2"].includes(String(null===(t=R.winningTicketsTailNumber)||void 0===t?void 0:t.isWinning))?(0,i.jsx)("div",{children:null===(a=R.winningTicketsTailNumber)||void 0===a?void 0:a.tickets.map(e=>{let{no:s,isPartial:t}=e;return"".concat(s).concat(t?" (partial)":"")}).join(", ")}):["3"].includes(String(null===(c=R.winningTicketsTailNumber)||void 0===c?void 0:c.isWinning))?(0,i.jsx)("div",{children:"(Every deposited ticket wins)"}):(0,i.jsx)("div",{className:"opacity-50",children:(null==R?void 0:R.isClosed)?"(Lottery in progress)":"(Numbers selected when lottery ends)"})}):(0,i.jsx)("div",{}),(0,i.jsx)("div",{className:"text-xs font-semibold  text-[#ABC4FF] opacity-50",children:{0:"Lucky Ending Numbers",1:"All numbers not ending with",2:"Lucky Ending Numbers",3:"All Tickets Win",undefined:"Lucky Ending Numbers"}[String(null===(m=R.winningTicketsTailNumber)||void 0===m?void 0:m.isWinning)]})]}),(0,i.jsx)(E.U,{children:R.ledger&&(null==R?void 0:null===(x=R.depositedTickets)||void 0===x?void 0:x.length)&&(0,i.jsxs)(d.Z,{className:"gap-8 mobile:gap-6 mobile:w-full mobile:grid mobile:grid-cols-2",children:[(0,i.jsxs)(D.Z,{className:"items-center",children:[(0,i.jsx)(r.Z,{size:K?"sm":"md",className:"frosted-glass-teal mobile:w-full",isLoading:H,validators:[{should:!Y},{should:V,fallbackProps:{onClick:()=>g.ZP.setState({isWalletSelectorShown:!0})}},{should:(0,N.gt)(null===(h=R.winningTickets)||void 0===h?void 0:h.length,0)&&(0,N.eq)(R.ledger.baseWithdrawn,0)},{should:R.canWithdrawBase,fallbackProps:{children:(0,i.jsxs)(d.Z,{children:["Claim ",null!==(I=null===(p=R.base)||void 0===p?void 0:p.symbol)&&void 0!==I?I:"UNKNOWN"," in"," ",(0,i.jsx)(u.Z,{className:"ml-1",singleValueMode:!0,labelClassName:"text-base",endTime:Number(R.startWithdrawTime),onEnd:J})]})}}],onClick:()=>{(0,G.Z)({idoInfo:R,side:"base",onTxSuccess:()=>{ee(!0),_(R.id)}})},children:Y?"".concat(null!==(T=null===(f=R.base)||void 0===f?void 0:f.symbol)&&void 0!==T?T:"UNKNOWN"," Claimed"):"Claim ".concat(null!==(P=null===(b=R.base)||void 0===b?void 0:b.symbol)&&void 0!==P?P:"UNKNOWN")}),(0,i.jsx)(E.U,{children:(0,N.gt)(null===(v=R.winningTickets)||void 0===v?void 0:v.length,0)&&(0,N.eq)(R.ledger.baseWithdrawn,0)&&(0,i.jsxs)("div",{className:"text-xs mt-1 font-semibold text-[#ABC4FF] opacity-50",children:[null===(j=R.winningTickets)||void 0===j?void 0:j.length," winning tickets"]})})]}),(0,i.jsxs)(D.Z,{className:"items-center",children:[(0,i.jsx)(r.Z,{size:K?"sm":"md",className:"frosted-glass-teal mobile:w-full",isLoading:H,validators:[{should:!X},{should:V},{should:(0,N.eq)(R.ledger.quoteWithdrawn,0)},{should:R.isClosed},{should:V,forceActive:!0,fallbackProps:{onClick:()=>g.ZP.setState({isWalletSelectorShown:!0})}}],onClick:()=>{(0,G.Z)({idoInfo:R,side:"quote",onTxSuccess:()=>{ee(!0),_(R.id)}})},children:X?"".concat(null!==(B=null===(y=R.quote)||void 0===y?void 0:y.symbol)&&void 0!==B?B:"UNKNOWN"," Claimed"):"Claim ".concat(null!==(S=null===(k=R.quote)||void 0===k?void 0:k.symbol)&&void 0!==S?S:"UNKNOWN")}),(0,i.jsx)(E.U,{children:(0,N.eq)(null===(Z=R.ledger)||void 0===Z?void 0:Z.quoteWithdrawn,0)&&(0,i.jsxs)("div",{className:"text-xs mt-1 font-semibold text-[#ABC4FF] opacity-50",children:[(null!==(q=null===(w=R.depositedTickets)||void 0===w?void 0:w.length)&&void 0!==q?q:0)-(null!==(z=null===(C=R.winningTickets)||void 0===C?void 0:C.length)&&void 0!==z?z:0)," ","non-winning tickets"]})})]})]})})]}),(0,i.jsx)(E.U,{children:(0,N.$u)(null===(F=R.depositedTickets)||void 0===F?void 0:F.length)&&(0,i.jsxs)(D.Z,{className:"bg-[#141041] py-5 px-6",children:[!R.isClosed&&(0,i.jsx)("div",{className:"text-xl mobile:text-sm font-semibold  text-white",children:"You have deposited successfully"}),(0,i.jsx)("div",{className:"text-sm mb-5 font-semibold  text-[#ABC4FF] opacity-50",children:"Your ticket numbers"}),(0,i.jsx)(L.Z,{className:"gap-board -mx-5",style:{gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",clipPath:"inset(1px 16px)"},children:null===(A=R.depositedTickets)||void 0===A?void 0:A.map(e=>(0,i.jsx)(ec,{idoInfo:R,ticket:e,className:"px-5 py-3"},e.no))})]})})]}):null})}function em(e){var s,t,l,c,x,h,v,N,y,k;let{className:Z}=e,w=(0,n.Z)(e=>e.currentIdoId?e.idoHydratedInfos[e.currentIdoId]:void 0),C=(0,H.Z)(e=>e.stakeDialogInfo),F=(0,o.Z)(e=>e.connected),A=(0,g.ZP)(e=>e.isMobile),I=(0,ei.ZP)(e=>e.getChainDate);if(!w)return null;let T=e=>{let{fieldName:s,fieldValue:t,className:l}=e;return A?(0,i.jsxs)(L.Z,{className:(0,U.m)("grid-cols-[3fr,4fr] items-center p-3 px-4 gap-3",l),children:[(0,i.jsx)("div",{className:"text-xs font-bold text-[#ABC4FF] opacity-50",children:s}),(0,i.jsx)("div",{className:"text-sm font-semibold text-white",children:t})]}):(0,i.jsxs)("div",{className:(0,U.m)("py-3 px-4",l),children:[(0,i.jsx)("div",{children:t}),(0,i.jsx)("div",{className:"text-[#abc4ff] font-bold text-xs mt-1",children:s})]})};return(0,i.jsxs)(W.Z,{className:(0,U.m)("flex ".concat(A?"flex-col items-stretch":""," overflow-hidden rounded-3xl mobile:rounded-2xl border-1.5 border-[rgba(171,196,255,0.1)] bg-[#141041]"),Z),size:"lg",children:[(0,i.jsxs)(q.Z,{className:"flex flex-col mobile:flex-row mobile:rounded-2xl mobile:py-4 mobile:px-5 items-center justify-center mobile:justify-start gap-2",wrapperClassName:"w-[140px] mobile:w-auto mobile:rounded-2xl",children:[(0,i.jsx)(m.Z,{noCoinIconBorder:!0,size:"lg",token:w.base}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"text-center mobile:text-left text-base font-semibold text-white",children:null!==(h=null===(s=w.base)||void 0===s?void 0:s.symbol)&&void 0!==h?h:"UNKNOWN"}),(0,i.jsx)("div",{className:"text-center mobile:text-left text-sm text-[#ABC4FF] opacity-50",children:w.projectName})]}),(0,i.jsx)(z.C,{size:"md",className:"mobile:ml-auto",cssColor:w.isUpcoming?"#ABC4FF":w.isOpen?"#39D0D8":"#DA2EEF",children:w.isUpcoming?"upcoming":w.isOpen?"open":"closed"})]}),(0,i.jsx)("div",{className:"".concat(A?"":"w-0 grow"," m-4"),children:(0,i.jsxs)(L.Z,{className:"".concat(A?"":w.isUpcoming?"grid-cols-[repeat(auto-fit,minmax(200px,1fr))]":"grid-cols-[repeat(auto-fit,minmax(154px,1fr))]"," gap-board"),children:[(0,i.jsx)(T,{fieldName:"Total Raise",fieldValue:(0,i.jsxs)(d.Z,{className:"items-baseline gap-1",children:[(0,i.jsx)("div",{className:"text-white font-medium",children:(0,b.Z)((0,j.B)(w.totalRaise))}),(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:null!==(v=null===(t=w.totalRaise)||void 0===t?void 0:t.token.symbol)&&void 0!==v?v:"UNKNOWN"})]})}),(0,i.jsx)(T,{fieldName:"Allocation / Winning Ticket",fieldValue:(0,i.jsxs)(d.Z,{className:"items-baseline gap-1",children:[(0,i.jsx)("div",{className:"text-white font-medium",children:(0,b.Z)((0,j.B)(w.ticketPrice),{fractionLength:"auto"})}),(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:null!==(N=null===(l=w.quote)||void 0===l?void 0:l.symbol)&&void 0!==N?N:"UNKNOWN"})]})}),(0,i.jsx)(T,{fieldName:"Per ".concat(null!==(y=null===(c=w.base)||void 0===c?void 0:c.symbol)&&void 0!==y?y:"UNKNOWN"),fieldValue:(0,i.jsxs)(d.Z,{className:"items-baseline gap-1",children:[(0,i.jsx)("div",{className:"text-white font-medium",children:(0,b.Z)((0,j.B)(w.coinPrice),{fractionLength:"auto"})}),(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:null!==(k=null===(x=w.quote)||void 0===x?void 0:x.symbol)&&void 0!==k?k:"UNKNOWN"})]})}),(0,i.jsxs)("div",{children:[(0,i.jsx)(T,{fieldName:"Total tickets deposited",fieldValue:(0,i.jsxs)(d.Z,{className:"items-baseline gap-1",children:[(0,i.jsx)("div",{className:"text-white font-medium",children:(0,b.Z)(w.depositedTicketCount)}),(0,i.jsxs)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:[" / ",(0,b.Z)(w.maxWinLotteries)]}),(0,i.jsxs)(es.Z,{placement:"bottom",className:"self-center",children:[(0,i.jsx)(a.Z,{size:"sm",heroIconName:"information-circle",className:"text-[#ABC4FF80]"}),(0,i.jsx)(es.Z.Panel,{children:(0,i.jsx)("div",{className:"max-w-[260px]",children:(0,i.jsx)("div",{className:"font-normal text-xs opacity-50",children:"The amount shows the number of winning tickets. A pool can be oversubscribed if more tickets are deposited."})})})]})]})}),(0,i.jsx)(Y.Z,{className:"-mt-2 px-4",slotClassName:"h-1",labelClassName:"text-xs font-bold px-4",value:(0,J.Z)(w.filled)})]}),(0,i.jsx)(T,{fieldName:"Pool open",fieldValue:(0,i.jsx)(d.Z,{className:"items-baseline gap-1",children:(0,f.hF)(I(),w.startTime)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"in"}),(0,i.jsx)("div",{className:"text-white font-medium",children:(0,i.jsx)(u.Z,{endTime:w.startTime})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"text-white font-medium",children:(0,p.xn)(w.startTime,{hideUTCBadge:!0})}),(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"UTC"})]})})}),(0,i.jsx)(T,{fieldName:"Pool close",fieldValue:(0,i.jsx)(d.Z,{className:"items-baseline gap-1",children:(0,f.hF)(I(),w.endTime)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"in"}),(0,i.jsx)("div",{className:"text-white font-medium",children:(0,i.jsx)(u.Z,{endTime:Number(w.endTime)})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"text-white font-medium",children:(0,p.xn)(Number(w.endTime),{hideUTCBadge:!0})}),(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"UTC"})]})})}),w.isUpcoming&&(0,i.jsxs)(ee.Z,{is:A?"Col":"Row",className:"items-center mobile:items-stretch justify-between gap-4 p-3 px-4",children:[(0,i.jsx)(T,{className:"p-0",fieldValue:(0,i.jsx)(d.Z,{className:"items-baseline gap-1",children:(0,i.jsxs)("div",{className:"text-white font-medium",children:[(0,b.Z)((0,j.B)(null==C?void 0:C.userStakedLpAmount))||"--"," MAKI"]})}),fieldName:(0,i.jsxs)(d.Z,{className:"gap-1 items-center",children:[(0,i.jsx)("div",{children:"Your staking"}),(0,i.jsxs)(es.Z,{placement:"bottom",children:[(0,i.jsx)(a.Z,{size:"sm",heroIconName:"information-circle",className:"text-[#ABC4FF80]"}),(0,i.jsx)(es.Z.Panel,{children:(0,i.jsxs)("div",{className:"text-sm font-semibold max-w-[160px]",children:[(0,i.jsxs)("div",{className:"text-white pb-1",children:["Your Stake Ray:"," ",F?(0,b.Z)((0,j.B)(null==C?void 0:C.userStakedLpAmount)):"(not connected)"]}),(0,i.jsx)("div",{className:"font-normal text-xs opacity-50",children:"The more and longer you stake MAKI the more tickets you will receive."})]})})]})]})}),(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(r.Z,{className:"frosted-glass-skygray",size:"xs",validators:[{should:F,fallbackProps:{onClick:()=>g.ZP.setState({isWalletSelectorShown:!0})}},{should:(0,f.hF)(I(),w.stakeTimeEnd)}],disabled:!(0,f.hF)(I(),w.stakeTimeEnd),onClick:()=>{H.Z.setState({isStakeDialogOpen:!0,stakeDialogMode:"deposit"})},children:"Stake"}),(0,i.jsxs)("div",{className:"text-xs text-center text-[#ABC4FF] mt-1",children:["APR: ",(0,K.Z)(null==C?void 0:C.totalApr7d)]})]})]}),w.isUpcoming&&(0,i.jsx)(T,{fieldName:"MAKI staking deadline",fieldValue:(0,i.jsx)(d.Z,{className:"items-baseline gap-1",children:(0,f.hF)(I(),w.stakeTimeEnd)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"in"}),(0,i.jsx)("div",{className:"text-white font-medium",children:(0,i.jsx)(u.Z,{endTime:w.stakeTimeEnd})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"text-white font-medium",children:(0,p.xn)(w.stakeTimeEnd,{hideUTCBadge:!0})}),(0,i.jsx)("div",{className:"text-[#ABC4FF80] font-medium text-xs",children:"UTC"})]})})})]})})]})}function eu(e){var s,t,l,a,c,r,m;let{className:u}=e,x=(0,n.Z)(e=>e.currentIdoId?e.idoHydratedInfos[e.currentIdoId]:void 0),h=(0,o.Z)(e=>e.connected),p=(0,g.ZP)(e=>e.isMobile),f=e=>p?(0,i.jsxs)(L.Z,{className:"grid-cols-[3fr,1fr] items-center p-3 px-4 gap-3",children:[(0,i.jsx)("div",{className:"text-xs font-bold text-[#ABC4FF] opacity-50",children:e.fieldName}),(0,i.jsx)("div",{className:"text-sm font-semibold text-white",children:e.fieldValue})]}):(0,i.jsxs)("div",{className:"px-6",children:[(0,i.jsx)("div",{className:"text-base font-semibold text-white",children:e.fieldValue}),(0,i.jsx)("div",{className:"text-sm text-[#ABC4FF] font-bold",children:e.fieldName})]});return x?(0,i.jsx)(W.Z,{className:(0,U.m)("py-5 mobile:py-1 rounded-3xl border-1.5 border-[rgba(171,196,255,0.1)] bg-[#141041]",u),size:"lg",children:(0,i.jsxs)(L.Z,{className:"grid-cols-4 mobile:grid-cols-1 gap-board",children:[(0,i.jsx)(f,{fieldName:"Eligible Tickets",fieldValue:h?"".concat((0,b.Z)(x.userEligibleTicketAmount)):"--"}),(0,i.jsx)(f,{fieldName:"Deposited Tickets",fieldValue:h?"".concat((0,b.Z)(null!==(c=null===(s=x.depositedTickets)||void 0===s?void 0:s.length)&&void 0!==c?c:0)):"--"}),(0,i.jsx)(f,{fieldName:"Winning Tickets",fieldValue:h?"".concat((0,b.Z)(null!==(r=null===(t=null===(l=x.depositedTickets)||void 0===l?void 0:l.filter(e=>e.isWinning))||void 0===t?void 0:t.length)&&void 0!==r?r:0)):"--"}),(0,i.jsx)(f,{fieldName:"Allocation",fieldValue:(0,i.jsxs)(d.Z,{className:"items-baseline gap-1",children:[(0,i.jsx)("div",{children:h?(0,b.Z)((0,j.B)(x.userAllocation)||0):"--"}),(0,i.jsxs)("div",{className:"text-sm text-[#ABC4FF] opacity-50",children:[" ",null!==(m=null===(a=x.base)||void 0===a?void 0:a.symbol)&&void 0!==m?m:""]})]})})]})}):null}function ex(e){var s,t,c,m,u,h;let{className:p}=e,f=(0,n.Z)(e=>e.currentIdoId?e.idoHydratedInfos[e.currentIdoId]:void 0),b=(0,o.Z)(e=>e.connected),v=(0,H.Z)(e=>e.stakeDialogInfo),j=(0,g.ZP)(e=>e.isMobile),[N,y]=(0,l.useState)("Project Details");if(!f)return null;let k=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(O.U,{className:"py-6",children:null!==(m=f.projectDetails)&&void 0!==m?m:""}),(0,i.jsxs)(d.Z,{className:"justify-between mobile:gap-board",children:[(0,i.jsx)(ee.Z,{is:j?"Col":"Row",className:"gap-6 mobile:gap-3",children:Object.entries(null!==(u=f.projectDocs)&&void 0!==u?u:{}).map(e=>{let[s,t]=e;return(0,i.jsx)(x.Z,{href:t,className:"text-[#ABC4FF] opacity-50 capitalize mobile:text-xs font-semibold",children:s},s)})}),(0,i.jsx)(d.Z,{className:"gap-6 mobile:gap-3",children:Object.entries(null!==(h=f.projectSocials)&&void 0!==h?h:{}).map(e=>{let[s,t]=e;return(0,i.jsx)(x.Z,{href:t,className:"flex items-center",children:(0,i.jsx)(a.Z,{className:"frosted-glass-skygray p-2.5 rounded-lg text",iconClassName:"w-3 h-3 opacity-50",iconSrc:a.A[s.toLowerCase()]})},s)})})]})]}),Z=(0,i.jsxs)("div",{children:[(0,i.jsx)(d.Z,{children:(0,i.jsxs)(d.Z,{className:"overflow-auto gap-6 grow w-0",children:[(0,i.jsxs)(W.Z,{size:"lg",className:"shrink-0 flex flex-col py-5 px-4 gap-3 bg-[#1B1659] grow w-[206px] cyberpunk-bg-acceleraytor-prject-step-1",children:[(0,i.jsxs)(D.Z,{className:"items-center gap-3",children:[(0,i.jsx)(ef,{n:1}),(0,i.jsx)("div",{className:"text-sm text-center text-[#ABC4FF] font-semibold",children:"Stake MAKI"})]}),(0,i.jsxs)(D.Z,{className:"grow gap-3",children:[(0,i.jsx)("div",{className:"text-xs text-center text-[#ABC4FF] opacity-50",children:"Stake and Earn MAKI to participate in pools. The more and longer you stake the more lottery tickets you'll be eligible to join with."}),(0,i.jsxs)(D.Z,{className:"items-center",children:[(0,i.jsx)(r.Z,{className:"frosted-glass-skygray",size:"xs",validators:[{should:b,forceActive:!0,fallbackProps:{onClick:()=>g.ZP.setState({isWalletSelectorShown:!0})}}],onClick:()=>{H.Z.setState({isStakeDialogOpen:!0,stakeDialogMode:"deposit"})},children:"Stake"}),(0,i.jsxs)("div",{className:"text-xs text-center text-[#ABC4FF] opacity-50 mt-1",children:["APR: ",(0,K.Z)(null==v?void 0:v.totalApr7d)]})]})]})]}),(0,i.jsxs)(W.Z,{size:"lg",className:"shrink-0 flex flex-col py-5 px-4 gap-3 bg-[#1B1659] grow w-[206px] cyberpunk-bg-acceleraytor-prject-step-2",children:[(0,i.jsxs)(D.Z,{className:"items-center gap-3",children:[(0,i.jsx)(ef,{n:2}),(0,i.jsxs)("div",{className:"text-sm text-center text-[#ABC4FF] font-semibold",children:["Deposit ",null===(s=f.quote)||void 0===s?void 0:s.symbol]})]}),(0,i.jsx)(D.Z,{className:"grow gap-3",children:(0,i.jsxs)("div",{className:"text-xs text-center text-[#ABC4FF] opacity-50 space-y-3",children:[(0,i.jsxs)("p",{children:["When the pool opens, deposit ",null===(t=f.quote)||void 0===t?void 0:t.symbol," for each ticket in order for it to be counted in the lottery."]}),(0,i.jsx)("p",{children:"The lottery will be done on-chain, with lottery numbers assigned to tickets in the order that users deposit."})]})})]}),(0,i.jsxs)(W.Z,{size:"lg",className:"shrink-0 flex flex-col py-5 px-4 gap-3 bg-[#1B1659] grow w-[206px] cyberpunk-bg-acceleraytor-prject-step-3",children:[(0,i.jsxs)(D.Z,{className:"items-center gap-3",children:[(0,i.jsx)(ef,{n:3}),(0,i.jsx)("div",{className:"text-sm text-center text-[#ABC4FF] font-semibold",children:"Claim tokens"})]}),(0,i.jsx)(D.Z,{className:"grow gap-3",children:(0,i.jsxs)("div",{className:"text-xs text-center text-[#ABC4FF] opacity-50 space-y-3",children:[(0,i.jsx)("p",{children:"If you have winning tickets you can claim your token allocation. You can then stake these tokens to earn yield on them."}),(0,i.jsxs)("p",{children:["For the non-winning tickets you can withdraw your ",null===(c=f.quote)||void 0===c?void 0:c.symbol,"."]})]})})]})]})}),(0,i.jsxs)(x.Z,{className:"pt-4 rounded-none flex-grow font-medium text-[#ABC4FF] text-xs flex justify-center gap-1 items-center",href:f.projectDetailLink,children:[(0,i.jsx)(a.Z,{size:"sm",inline:!0,heroIconName:"information-circle"}),"Read full details on Medium"]})]});return(0,i.jsxs)(W.Z,{className:(0,U.m)("p-6 rounded-3xl border-1.5 border-[rgba(171,196,255,0.1)] bg-[#141041]",p),size:"lg",children:[(0,i.jsx)(M.Z,{className:"mb-6",currentValue:N,values:(0,V.DB)(["Project Details","How to join?"]),onChange:e=>y(e)}),"Project Details"===N?k:Z,(0,i.jsx)(_.r,{})]})}function eh(e){var s,t,a,m,h,f,b,y,k;let{className:C}=e,F=(0,n.Z)(e=>e.tempJoined),A=(0,n.Z)(e=>e.currentIdoId?e.idoHydratedInfos[e.currentIdoId]:void 0),I=(0,g.ZP)(e=>e.isApprovePanelShown),{connected:T,balances:P,checkWalletHasEnoughBalance:S,owner:W}=(0,o.Z)(),U=(0,n.Z)(e=>e.refreshIdo),D=()=>U(null==A?void 0:A.id),[L,z]=(0,l.useState)(void 0),M=(null==A?void 0:A.quote)&&L&&(0,v.n)(A.quote,(0,Z.dC)(L,A.ticketPrice),{alreadyDecimaled:!0}),V=(0,l.useMemo)(()=>!!(M&&S(M)),[M,S,P]),O=async()=>{if(A&&L)try{await B({idoInfo:A,ticketAmount:(0,w.Z)(L),onTxSuccess:()=>{n.Z.setState({tempJoined:!0}),function e(s){var t;let{maxLoopCount:i=4,stopWhen:l,currentLoopCount:n=0,retrySpeed:o="normal",retryCD:a=e=>{let{currentLoopCount:s}=e;return("slow"===o?1e3:500)*2**s},prevPayload:d}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=s({currentLoopCount:n,prevPayload:d}),r=null!==(t=null==l?void 0:l(c,d))&&void 0!==t&&t;r||i<n||setTimeout(()=>{e(s,{maxLoopCount:i,retryCD:a,currentLoopCount:n+1,retrySpeed:o,stopWhen:l,prevPayload:c})},(0,el.u)(a,[{currentLoopCount:n}]))}(()=>{var e;return console.info("refresh idoInfo by txIdoPurchase"),U(A.id),{ticketCount:null===(e=A.depositedTickets)||void 0===e?void 0:e.length}},{retrySpeed:"slow",stopWhen:e=>{let{ticketCount:s}=e;return(0,N.$u)(s)}})}})}catch(e){}};if(!A)return null;let K=(0,i.jsxs)(d.Z,{className:"items-center",children:[(0,i.jsxs)(d.Z,{className:"items-center gap-1",children:[(0,i.jsx)("span",{children:"Pool opens in"}),(0,i.jsx)(u.Z,{singleValueMode:!0,labelClassName:"text-base",endTime:A.startTime,onEnd:D})]}),(0,i.jsx)("div",{className:"ml-auto",children:(0,i.jsx)(X.Z,{refreshKey:"acceleraytor",freshFunction:()=>{U(A.id)}})})]}),H=(0,i.jsxs)(d.Z,{className:"items-center",children:[A.isEligible||null==A.isEligible||!T?"Join Lottery":"You're not eligible to join pool",(0,i.jsx)("div",{className:"ml-auto",children:(0,i.jsx)(X.Z,{refreshKey:"acceleraytor",freshFunction:()=>{U(A.id)}})})]}),_=(0,i.jsxs)(d.Z,{className:"items-center",children:["Pool Closed",(0,i.jsx)("div",{className:"ml-auto"})]}),G=!!(W&&(0,N.$u)(null===(s=A.ledger)||void 0===s?void 0:s.quoteDeposited)),J=!G;return(0,i.jsxs)(q.Z,{className:"flex flex-col mobile:rounded-2xl p-6 mobile:px-4 space-y-5",wrapperClassName:C,children:[(0,i.jsx)("div",{className:"font-semibold text-base text-white",children:A.isUpcoming?K:A.isOpen?H:_}),(0,i.jsx)(E.U,{children:T&&(A.isUpcoming||A.isOpen&&null!=A.isEligible)&&(0,i.jsx)(c,{className:"p-3 bg-[rgba(171,196,255,0.1)] rounded-xl text-[#ABC4FF80] text-xs font-semibold",iconSize:"sm",children:A.isUpcoming?"Eligible tickets will be visible a couple of hourse before the pool opens.":A.isEligible?"Once deposited ".concat(null!==(f=null===(t=A.quote)||void 0===t?void 0:t.symbol)&&void 0!==f?f:"--"," can be claimed after lottery ends and tokens after ").concat((0,p.xn)(A.startWithdrawTime),"."):(0,i.jsxs)("div",{children:[(0,i.jsx)(x.Z,{className:"text-[#ABC4FF]",href:"https://twitter.com/makiswap",children:"Follow us on Twitter"})," ","or"," ",(0,i.jsx)(x.Z,{className:"text-[#ABC4FF]",href:"https://discord.gg/CeWJwHn2Qn",children:"join our Discord"}),"to get notified when we lunch our next pool."]})})}),(0,i.jsxs)("div",{className:"space-y-3 ".concat(F||!J||A.isClosed?"not-clickable":""),children:[(0,i.jsx)(R.Z,{className:"px-4",topLeftLabel:"Tickets",topRightLabel:"Eligible tickets: ".concat((0,j.B)(null!==(b=A.userEligibleTicketAmount)&&void 0!==b?b:0)),maxValue:A.userEligibleTicketAmount,hideTokenPart:!0,hidePricePredictor:!0,onUserInput:e=>z(e)}),(0,i.jsx)(R.Z,{className:"px-4",topLeftLabel:"Deposit",token:A.quote,value:(0,j.B)(M),disabled:!0,noDisableStyle:!0,haveCoinIcon:!0,hideMaxButton:!0})]}),(0,i.jsx)(r.Z,{className:"block w-full frosted-glass-teal",isLoading:I,validators:[{should:!(null==A?void 0:A.isClosed),fallbackProps:{children:"Pool Closed"}},{should:T,forceActive:!0,fallbackProps:{onClick:()=>g.ZP.setState({isWalletSelectorShown:!0}),children:"Connect Wallet"}},{should:null==A?void 0:A.isEligible,fallbackProps:{children:(null==A?void 0:A.isEligible)==null?"Data Loading":"Not eligible"}},{should:!(null==A?void 0:A.isUpcoming),fallbackProps:{children:"Upcoming Pool"}},{should:J,fallbackProps:{children:"Deposited"}},{should:(null!==(y=null===(a=A.depositedTickets)||void 0===a?void 0:a.length)&&void 0!==y?y:0)===0,fallbackProps:{children:"You have already deposited"}},{should:(0,N.gt)(L,0),fallbackProps:{children:"Enter ticket amount"}},{should:(0,N.$u)(A.userEligibleTicketAmount),fallbackProps:{children:"No eligible tickets"}},{should:L&&A.state&&(0,N.eg)(L,A.state.perUserMinLotteries),fallbackProps:{children:"Min. tickets amount is ".concat(null===(m=A.state)||void 0===m?void 0:m.perUserMinLotteries)}},{should:L&&A.state&&(0,N.G)(L,A.state.perUserMaxLotteries),fallbackProps:{children:"Max. tickets amount is ".concat(A.userEligibleTicketAmount)}},{should:L&&(0,N.G)(L,A.userEligibleTicketAmount),fallbackProps:{children:"Not enough eligible tickets"}},{should:V,fallbackProps:{children:"Not enough ".concat(null!==(k=null===(h=A.quote)||void 0===h?void 0:h.symbol)&&void 0!==k?k:"")}}],onClick:O,children:"Join Lottery"}),(0,i.jsx)(x.Z,{href:A.projectDetailLink,className:"text-xs text-center text-[#ABC4FF] opacity-50 font-semibold pt-3 border-t border-[rgba(171,196,255,0.1)]",children:"When can I withdraw?"})]})}function ep(e){let{className:s}=e;return(0,i.jsx)("div",{className:(0,U.m)("text-2xs text-[#ABC4FF80] leading-relaxed pt-5 font-medium text-justify border-t border-[rgba(171,196,255,0.1)] mobile:p-4",s),children:'People located in or residents of the United States, North Korea, Iran, Venezuela, any sanctioned countries as provided by OFAC, or any other jurisdiction in which it is prohibited from using any of the services offered on the MakiDEX website, including AcceleRaytor, (the "Prohibited Jurisdictions") are not permitted to make use of these services or participate in this token sale. For the avoidance of doubt, the foregoing restrictions on any of the services offered on the MakiDEX website from Prohibited Jurisdictions apply equally to residents and citizens of other nations while located in a Prohibited Jurisdiction.'})}function ef(e){return(0,i.jsx)(q.Z,{wrapperClassName:"w-8 h-8",className:"grid place-content-center bg-[#2f2c78]",children:(0,i.jsx)("div",{className:"font-semibold text-white",children:e.n})})}}},function(e){e.O(0,[7239,9120,1671,7664,1690,4847,9774,2888,179],function(){return e(e.s=47369)}),_N_E=e.O()}]);