"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9525],{69525:function(e,t,n){let i;n.r(t),n.d(t,{StandardSolflareMetaMaskWalletAccount:function(){return P},default:function(){return W}});var r,s,o,a,c,l,h=n(50705),d=n(15332),u=n(77191),f=n.n(u);let m="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var p={randomUUID:m};let v=new Uint8Array(16);function _(){if(!i&&!(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(v)}let g=[];for(let e=0;e<256;++e)g.push((e+256).toString(16).slice(1));var y=function(e,t,n){if(p.randomUUID&&!t&&!e)return p.randomUUID();e=e||{};let i=e.random||(e.rng||_)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=i[e];return t}return function(e,t=0){return(g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]).toLowerCase()}(i)},w=n(48764).Buffer;function b(e){return void 0===e.version}function E(e){return b(e)?e.serializeMessage():e.message.serialize()}function x(e,t,n){if(b(e))e.addSignature(t,w.from(n));else{let i=e.message.staticAccountKeys.slice(0,e.message.header.numRequiredSignatures),r=i.findIndex(e=>e.equals(t));r>=0&&(e.signatures[r]=n)}}var M=function(e,t,n,i){return new(n||(n=Promise))(function(r,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function a(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,a)}c((i=i.apply(e,t||[])).next())})};function S(e){return M(this,void 0,void 0,function*(){try{return yield e.request({method:"wallet_getSnaps"}),!0}catch(e){return!1}})}var A=n(83149),C=n(38112),K=n(61999);let k=["solana:mainnet","solana:devnet","solana:testnet","solana:localnet"];function T(e){return k.includes(e)}var I=function(e,t,n,i){if("a"===n&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)},j=function(e,t,n,i,r){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!r)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(e,n):r?r.value=n:t.set(e,n),n};let z=[A.G,C.R,K.g];class P{get address(){return I(this,r,"f")}get publicKey(){return I(this,s,"f").slice()}get chains(){return I(this,o,"f").slice()}get features(){return I(this,a,"f").slice()}get label(){return I(this,c,"f")}get icon(){return I(this,l,"f")}constructor({address:e,publicKey:t,label:n,icon:i}){r.set(this,void 0),s.set(this,void 0),o.set(this,void 0),a.set(this,void 0),c.set(this,void 0),l.set(this,void 0),new.target===P&&Object.freeze(this),j(this,r,e,"f"),j(this,s,t,"f"),j(this,o,k,"f"),j(this,a,z,"f"),j(this,c,n,"f"),j(this,l,i,"f")}}r=new WeakMap,s=new WeakMap,o=new WeakMap,a=new WeakMap,c=new WeakMap,l=new WeakMap;var H=function(e,t,n,i){return new(n||(n=Promise))(function(r,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function a(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,a)}c((i=i.apply(e,t||[])).next())})};class O extends d{constructor(e){super(),this._network="mainnet-beta",this._iframeParams={},this._element=null,this._iframe=null,this._publicKey=null,this._account=null,this._isConnected=!1,this._connectHandler=null,this._messageHandlers={},this._handleEvent=e=>{var t,n;switch(e.type){case"connect":this._collapseIframe(),(null===(t=e.data)||void 0===t?void 0:t.publicKey)?(this._publicKey=e.data.publicKey,this._isConnected=!0,this._connectHandler&&(this._connectHandler.resolve(),this._connectHandler=null),this._connected()):(this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected());return;case"disconnect":this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected();return;case"accountChanged":(null===(n=e.data)||void 0===n?void 0:n.publicKey)?(this._publicKey=e.data.publicKey,this.emit("accountChanged",this.publicKey),this._standardConnected()):(this.emit("accountChanged",void 0),this._standardDisconnected());return;default:return}},this._handleResize=e=>{"full"===e.resizeMode?"fullscreen"===e.params.mode?this._expandIframe():"hide"===e.params.mode&&this._collapseIframe():"coordinates"===e.resizeMode&&this._resizeIframe(e.params)},this._handleMessage=e=>{var t;if((null===(t=e.data)||void 0===t?void 0:t.channel)!=="solflareIframeToWalletAdapter")return;let n=e.data.data||{};if("event"===n.type)this._handleEvent(n.event);else if("resize"===n.type)this._handleResize(n);else if("response"===n.type&&this._messageHandlers[n.id]){let{resolve:e,reject:t}=this._messageHandlers[n.id];delete this._messageHandlers[n.id],n.error?t(n.error):e(n.result)}},this._removeElement=()=>{this._element&&(this._element.remove(),this._element=null)},this._removeDanglingElements=()=>{let e=document.getElementsByClassName("solflare-metamask-wallet-adapter-iframe");for(let t of e)t.parentElement&&t.remove()},this._injectElement=()=>{this._removeElement(),this._removeDanglingElements();let e=Object.assign(Object.assign({},this._iframeParams),{mm:!0,v:1,cluster:this._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||""}),t=Object.keys(e).map(t=>`${t}=${encodeURIComponent(e[t])}`).join("&"),n=`${O.IFRAME_URL}?${t}`;this._element=document.createElement("div"),this._element.className="solflare-metamask-wallet-adapter-iframe",this._element.innerHTML=`
      <iframe src='${n}' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `,document.body.appendChild(this._element),this._iframe=this._element.querySelector("iframe"),window.addEventListener("message",this._handleMessage,!1)},this._collapseIframe=()=>{this._iframe&&(this._iframe.style.top="",this._iframe.style.right="",this._iframe.style.height="2px",this._iframe.style.width="2px")},this._expandIframe=()=>{this._iframe&&(this._iframe.style.top="0px",this._iframe.style.bottom="0px",this._iframe.style.left="0px",this._iframe.style.right="0px",this._iframe.style.width="100%",this._iframe.style.height="100%")},this._resizeIframe=e=>{this._iframe&&(this._iframe.style.top=isFinite(e.top)?`${e.top}px`:"",this._iframe.style.bottom=isFinite(e.bottom)?`${e.bottom}px`:"",this._iframe.style.left=isFinite(e.left)?`${e.left}px`:"",this._iframe.style.right=isFinite(e.right)?`${e.right}px`:"",this._iframe.style.width=isFinite(e.width)?`${e.width}px`:e.width,this._iframe.style.height=isFinite(e.height)?`${e.height}px`:e.height)},this._sendIframeMessage=e=>{if(!this.connected||!this.publicKey)throw Error("Wallet not connected");return new Promise((t,n)=>{var i,r;let s=y();this._messageHandlers[s]={resolve:t,reject:n},null===(r=null===(i=this._iframe)||void 0===i?void 0:i.contentWindow)||void 0===r||r.postMessage({channel:"solflareWalletAdapterToIframe",data:Object.assign({id:s},e)},"*")})},this._connected=()=>{this._isConnected=!0,this.emit("connect",this.publicKey),this._standardConnected()},this._disconnected=()=>{this._publicKey=null,this._isConnected=!1,window.removeEventListener("message",this._handleMessage,!1),this._removeElement(),this.emit("disconnect"),this._standardDisconnected()},this._standardConnected=()=>{if(!this.publicKey)return;let e=this.publicKey.toString();this._account&&this._account.address===e||(this._account=new P({address:e,publicKey:this.publicKey.toBytes()}),this.emit("standard_change",{accounts:this.standardAccounts}))},this._standardDisconnected=()=>{this._account&&(this._account=null,this.emit("standard_change",{accounts:this.standardAccounts}))},(null==e?void 0:e.network)&&(this._network=null==e?void 0:e.network),window.SolflareMetaMaskParams&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),window.SolflareMetaMaskParams)),(null==e?void 0:e.params)&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),null==e?void 0:e.params))}get publicKey(){return this._publicKey?new h.nh(this._publicKey):null}get standardAccount(){return this._account}get standardAccounts(){return this._account?[this._account]:[]}get isConnected(){return this._isConnected}get connected(){return this.isConnected}get autoApprove(){return!1}connect(){return H(this,void 0,void 0,function*(){this.connected||(this._injectElement(),yield new Promise((e,t)=>{this._connectHandler={resolve:e,reject:t}}))})}disconnect(){return H(this,void 0,void 0,function*(){yield this._sendIframeMessage({method:"disconnect"}),this._disconnected()})}signTransaction(e){var t;return H(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw Error("Wallet not connected");try{let t=E(e),{signature:n}=yield this._sendIframeMessage({method:"signTransaction",params:{message:f().encode(t)}});return x(e,this.publicKey,f().decode(n)),e}catch(e){throw Error((null===(t=null==e?void 0:e.toString)||void 0===t?void 0:t.call(e))||"Failed to sign transaction")}})}signAllTransactions(e){var t;return H(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw Error("Wallet not connected");try{let t=e.map(e=>E(e)),{signatures:n}=yield this._sendIframeMessage({method:"signAllTransactions",params:{messages:t.map(e=>f().encode(e))}});for(let t=0;t<e.length;t++)x(e[t],this.publicKey,f().decode(n[t]));return e}catch(e){throw Error((null===(t=null==e?void 0:e.toString)||void 0===t?void 0:t.call(e))||"Failed to sign transactions")}})}signAndSendTransaction(e,t){var n;return H(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw Error("Wallet not connected");try{let n=b(e)?e.serialize({verifySignatures:!1,requireAllSignatures:!1}):e.serialize(),{signature:i}=yield this._sendIframeMessage({method:"signAndSendTransaction",params:{transaction:f().encode(n),options:t}});return i}catch(e){throw Error((null===(n=null==e?void 0:e.toString)||void 0===n?void 0:n.call(e))||"Failed to sign and send transaction")}})}signMessage(e,t="utf8"){var n;return H(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw Error("Wallet not connected");try{let{signature:n}=yield this._sendIframeMessage({method:"signMessage",params:{data:f().encode(e),display:t}});return Uint8Array.from(f().decode(n))}catch(e){throw Error((null===(n=null==e?void 0:e.toString)||void 0===n?void 0:n.call(e))||"Failed to sign message")}})}sign(e,t="utf8"){return H(this,void 0,void 0,function*(){return yield this.signMessage(e,t)})}static isSupported(){return H(this,void 0,void 0,function*(){let e=yield function(){return M(this,void 0,void 0,function*(){try{let e=window.ethereum;if(!e)return null;if(e.providers&&Array.isArray(e.providers)){let t=e.providers;for(let e of t)if(yield S(e))return e}if(e.detected&&Array.isArray(e.detected)){let t=e.detected;for(let e of t)if(yield S(e))return e}if(yield S(e))return e;return null}catch(e){return console.error(e),null}})}();return!!e})}standardSignAndSendTransaction(...e){return H(this,void 0,void 0,function*(){if(!this.connected)throw Error("not connected");let t=[];if(1===e.length){let{transaction:n,account:i,chain:r,options:s}=e[0],{minContextSlot:o,preflightCommitment:a,skipPreflight:c,maxRetries:l}=s||{};if(i!==this._account)throw Error("invalid account");if(!T(r))throw Error("invalid chain");let d=yield this.signAndSendTransaction(h.GS.deserialize(n),{preflightCommitment:a,minContextSlot:o,maxRetries:l,skipPreflight:c});t.push({signature:f().decode(d)})}else if(e.length>1)for(let n of e)t.push(...yield this.standardSignAndSendTransaction(n));return t})}standardSignTransaction(...e){return H(this,void 0,void 0,function*(){if(!this.connected)throw Error("not connected");let t=[];if(1===e.length){let{transaction:n,account:i,chain:r}=e[0];if(i!==this._account)throw Error("invalid account");if(r&&!T(r))throw Error("invalid chain");let s=yield this.signTransaction(h.GS.deserialize(n));t.push({signedTransaction:s.serialize()})}else if(e.length>1){let n;for(let t of e){if(t.account!==this._account)throw Error("invalid account");if(t.chain){if(!T(t.chain))throw Error("invalid chain");if(n){if(t.chain!==n)throw Error("conflicting chain")}else n=t.chain}}let i=e.map(({transaction:e})=>h.GS.deserialize(e)),r=yield this.signAllTransactions(i);t.push(...r.map(e=>({signedTransaction:e.serialize()})))}return t})}standardSignMessage(...e){return H(this,void 0,void 0,function*(){if(!this.connected)throw Error("not connected");let t=[];if(1===e.length){let{message:n,account:i}=e[0];if(i!==this._account)throw Error("invalid account");let r=yield this.signMessage(n);t.push({signedMessage:n,signature:r})}else if(e.length>1)for(let n of e)t.push(...yield this.standardSignMessage(n));return t})}}O.IFRAME_URL="https://widget.solflare.com/";var W=O},15332:function(e){var t=Object.prototype.hasOwnProperty,n="~";function i(){}function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function s(e,t,i,s,o){if("function"!=typeof i)throw TypeError("The listener must be a function");var a=new r(i,s||e,o),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function o(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function a(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1)),a.prototype.eventNames=function(){var e,i,r=[];if(0===this._eventsCount)return r;for(i in e=this._events)t.call(e,i)&&r.push(n?i.slice(1):i);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},a.prototype.listeners=function(e){var t=n?n+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,o=Array(s);r<s;r++)o[r]=i[r].fn;return o},a.prototype.listenerCount=function(e){var t=n?n+e:e,i=this._events[t];return i?i.fn?1:i.length:0},a.prototype.emit=function(e,t,i,r,s,o){var a=n?n+e:e;if(!this._events[a])return!1;var c,l,h=this._events[a],d=arguments.length;if(h.fn){switch(h.once&&this.removeListener(e,h.fn,void 0,!0),d){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,t),!0;case 3:return h.fn.call(h.context,t,i),!0;case 4:return h.fn.call(h.context,t,i,r),!0;case 5:return h.fn.call(h.context,t,i,r,s),!0;case 6:return h.fn.call(h.context,t,i,r,s,o),!0}for(l=1,c=Array(d-1);l<d;l++)c[l-1]=arguments[l];h.fn.apply(h.context,c)}else{var u,f=h.length;for(l=0;l<f;l++)switch(h[l].once&&this.removeListener(e,h[l].fn,void 0,!0),d){case 1:h[l].fn.call(h[l].context);break;case 2:h[l].fn.call(h[l].context,t);break;case 3:h[l].fn.call(h[l].context,t,i);break;case 4:h[l].fn.call(h[l].context,t,i,r);break;default:if(!c)for(u=1,c=Array(d-1);u<d;u++)c[u-1]=arguments[u];h[l].fn.apply(h[l].context,c)}}return!0},a.prototype.on=function(e,t,n){return s(this,e,t,n,!1)},a.prototype.once=function(e,t,n){return s(this,e,t,n,!0)},a.prototype.removeListener=function(e,t,i,r){var s=n?n+e:e;if(!this._events[s])return this;if(!t)return o(this,s),this;var a=this._events[s];if(a.fn)a.fn!==t||r&&!a.once||i&&a.context!==i||o(this,s);else{for(var c=0,l=[],h=a.length;c<h;c++)(a[c].fn!==t||r&&!a[c].once||i&&a[c].context!==i)&&l.push(a[c]);l.length?this._events[s]=1===l.length?l[0]:l:o(this,s)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&o(this,t)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a}}]);