(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3094],{60467:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/debug",function(){return s(15955)}])},15955:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return S}});var i=s(85893),n=s(91371),l=s(57751),o=s(77043),a=s(56362),c=s(76623),r=s(50705),d=s(8667),m=s(53002),x=s(59277),u=s(31166),f=s(80813),h=s(99522),b=s(43067),g=s(76104),p=s(70745),j=s(54592),v=s(60421),A=s(29120),y=s(51800),N=s(72573),w=s(99779),T=s(67294),k=s(14674);function S(){return(0,i.jsxs)(A.Z,{mobileBarTitle:"Debug",metaTitle:"Debug - MakiDEX",children:[(0,i.jsx)("div",{className:"title text-3xl mobile:text-xl mobile:hidden font-semibold justify-self-start text-white mb-12 mobile:mb-4",children:"Debug"}),(0,i.jsxs)("div",{className:"space-y-20 mobile:space-y-10",children:[(0,i.jsx)(Z,{}),(0,i.jsx)(C,{})]})]})}function Z(){let[e,t]=(0,T.useState)(!1),s=(0,n.ZP)(e=>e.isApprovePanelShown);return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"title text-xl mobile:text-base font-semibold justify-self-start text-white mb-4",children:"Migrate to PDA"}),(0,i.jsx)("div",{className:"text-[#abc4ff] mb-4",children:"Migrate Old Account To PDA And Harvest Reward"}),(0,i.jsx)(b.Z,{className:"frosted-glass-teal",isLoading:e||s,onClick:()=>{t(!0),(function(){let{onInnerTransitionsEmpty:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,d.ZP)(async e=>{let{transactionCollector:t,baseUtils:{connection:s,owner:i}}=e,{programIds:n}=x.ZP.getState(),{tokenAccountRawInfos:o,txVersion:a}=m.Z.getState(),{innerTransactions:c,address:r}=await l.l6j.makeV1InfoToV2PdaAndHarvestSimple({connection:s,wallet:i,programIdV3:n.FarmV3,programIdV5:n.FarmV5,tokenAccounts:o,lookupTableCache:d.eq,makeTxVersion:a});if(!c.length)throw Error("No account needs to be migrate");t.add(c,{txHistoryInfo:{title:"PDA Migrate",description:"Migrate PDA from V1 to V2 and harvest"}})})})().finally(()=>{t(!1)})},children:"Migrate"})]})}function C(){let e=(0,n.ZP)(e=>e.isMobile),t=(0,n.ZP)(e=>e.isApprovePanelShown),s=(0,m.Z)(e=>e.connected),x=(0,u.ZP)(e=>e.toRealSymbol),A=(0,k.Z)(),S="grid-cols-[.1fr,1fr,1fr,1fr,1fr,1fr] mobile:grid-cols-[.1fr,2fr,2fr,2fr,2fr] gap-4 mobile:gap-2 px-3 mobile:px-2",Z=(0,m.Z)(e=>e.allTokenAccounts),[C,P]=(0,T.useState)([]);(0,w.P)((e,t)=>{let[s=0]=e,[i]=t;s>=i&&P([])},[Z.length]);let I=C.length>0;return(0,i.jsxs)(j.Z,{children:[(0,i.jsxs)("div",{className:"mb-2 text-lg mobile:text-sm",children:[(0,i.jsx)("div",{className:"title text-xl mobile:text-base font-semibold justify-self-start text-white mb-4",children:"Migrate to ATA Token"}),(0,i.jsxs)(v.Z,{className:"".concat(S),children:[(0,i.jsx)("div",{children:(0,i.jsx)(g.X,{checked:A.size>=1&&C.length===A.size,onChange:e=>{e?P([...A.keys()]):P([])}})}),(0,i.jsx)("div",{className:"text-[#abc4ff80]",children:"Token"}),(0,i.jsx)("div",{className:"text-[#abc4ff80]",children:"Amount"}),(0,i.jsx)("div",{className:"text-[#abc4ff80]",children:"Mint"}),(0,i.jsx)("div",{className:"text-[#abc4ff80]",children:"Account"}),!e&&(0,i.jsx)("div",{className:"text-[#abc4ff80]",children:"ATA account"})]})]}),A.size>0?[...A.entries()].map(t=>{let[s,{token:n,tokenAccount:l,ataToken:o,ataTokenAccount:a,tokenAmount:c}]=t;return(0,i.jsxs)(v.Z,{className:"".concat(S," rounded-lg items-center py-3 odd:bg-[#abc4ff1a] text-[#abc4ff]"),children:[(0,i.jsx)("div",{children:(0,i.jsx)(g.X,{checked:C.includes(s),onChange:e=>{e?P(e=>[...e,s]):P(e=>e.filter(e=>e!==s))}})}),(0,i.jsxs)(y.Z,{className:"items-center mobile:flex-col gap-2 mobile:gap-0 mobile:items-start",children:[(0,i.jsx)(p.Z,{token:n,size:e?"sm":"md"}),(0,i.jsx)("div",{className:e?"text-sm":void 0,children:x(n)})]}),(0,i.jsx)("div",{className:"text-lg mobile:text-base text-[#fff]",children:(0,N.B)(c)}),(0,i.jsx)("div",{className:"justify-self-start",children:(0,i.jsx)(h.U,{iconSize:e?"xs":void 0,textClassName:"text-md mobile:text-xs text-[#abc4ff]",showDigitCount:e?3:5,canCopy:!0,showCopyIcon:!e,children:l.mint})}),(0,i.jsx)("div",{className:"justify-self-start",children:(0,i.jsx)(h.U,{iconSize:e?"xs":void 0,textClassName:"text-md mobile:text-xs text-[#abc4ff]",showDigitCount:e?3:4,canCopy:!0,showCopyIcon:!e,canExternalLink:!0,children:l.publicKey})}),!e&&(0,i.jsx)("div",{className:"justify-self-start",children:o?(0,i.jsx)(h.U,{iconSize:e?"xs":void 0,textClassName:"text-md mobile:text-xs text-[#abc4ff]",showDigitCount:e?3:4,canCopy:!0,showCopyIcon:!e,canExternalLink:!0,children:null==a?void 0:a.publicKey}):null})]},s)}):null,(0,i.jsx)(b.Z,{size:"lg",className:"mx-auto w-[40em] mobile:w-full frosted-glass-teal mt-5",isLoading:t,validators:[{should:s,forceActive:!0,fallbackProps:{onClick:()=>n.ZP.setState({isWalletSelectorShown:!0}),children:"Connect Wallet"}},{should:I,fallbackProps:{children:"Select accounts to migrate"}}],onClick:()=>{var e;e={onTxSuccess:()=>{setTimeout(()=>{(0,f.wM)()},1e3)}},(0,d.ZP)(async t=>{let{transactionCollector:s,baseUtils:{owner:i,connection:n}}=t,{allTokenAccounts:d}=m.Z.getState(),x={},u={};for(let e of d)e.isAssociated&&(x[e.mint.toString()]=e.publicKey),void 0!==e.publicKey&&(u[e.publicKey.toString()]=e);let f=[];for(let e of C){let t=u[e],s=x[t.mint.toString()],n={instructionTypes:[],instructions:[],signers:[]};if(void 0===s){let e=l.RGo.getAssociatedTokenAccount({mint:t.mint,owner:i,programId:t.programId});x[t.mint.toString()]=e,s=e,n.instructions.push((0,o.Ek)(i,e,i,t.mint,t.programId)),n.instructionTypes.push(l.p01.createATA)}t.amount.isZero()||n.instructions.push((0,a.$B)(new r.nh(e),s,i,BigInt(t.amount.toString()),[],t.programId)),n.instructionTypes.push(l.p01.transferAmount),n.instructions.push((0,c.Zu)(new r.nh(e),i,i,[],t.programId)),n.instructionTypes.push(l.p01.closeAccount),f.push(n)}if(!f.length)throw Error("No account needs to be migrate");s.add(await (0,l.q7f)({connection:n,makeTxVersion:l.eVA.LEGACY,payer:i,innerTransaction:f}),{txHistoryInfo:{title:"Migrate to ATA",description:"Migrate to ATA"},onTxSuccess(){var t;null==e||null===(t=e.onTxSuccess)||void 0===t||t.call(e)}})})},children:"Migrate to ATA"})]})}}},function(e){e.O(0,[7239,9120,1671,9774,2888,179],function(){return e(e.s=60467)}),_N_E=e.O()}]);