import{d as K,r as C,a as I,b as n,e as t,w as a,c as A,F as N,o as P}from"./index-Cw4RCaRR.js";import{S as c}from"./sweetalert2.esm.all-D3pEHXw3.js";const V={color:"blue",zIndex:1059,enforceFocus:!1};function G(g={}){const y=K.useLoading({...V,...g});function b(s={}){const m=document.activeElement;m.blur();const f=y.show({...s});function i(){f.hide(),m.focus()}return{close:i}}return{open:b}}const H={color:"blue",zIndex:1059,enforceFocus:!1};function Z(g={}){const y=K.useLoading({...H,...g});function b(s={}){const m=s.container??document.querySelector("#app"),f=new AbortController,i=f.signal;["keydown","keyup"].forEach(l=>{m.addEventListener(l,u=>{console.log(`disable keyboard [${l}]`),u.preventDefault(),u.stopPropagation()},{signal:i,capture:!0})});const r=y.show({...s});function p(){r.hide(),f.abort()}return{close:p}}return{open:b}}const T={color:"blue",zIndex:1059,enforceFocus:!1};function w(g,y){const b={capture:!0};y&&(b.signal=y),["keydown","keyup"].forEach(s=>{g.addEventListener(s,m=>{m.preventDefault(),m.stopPropagation()},b)})}function J(g={}){const y=K.useLoading({...T,...g});function b(s={}){const m=document.activeElement,f=new AbortController;w(document.querySelector("#app"),f.signal);const i=y.show({...s,container:void 0}),r=document.querySelector(".vl-overlay.vl-full-page");w(r),r.focus();function p(){f.abort(),m.focus(),i.hide()}return{close:p}}return{open:b}}function Q(g={}){const y=K.useLoading({...T,...g});function b(s={}){if(!s.container){console.error("container 參數不可為空！");return}const m=y.show(s),f=document.activeElement,i=s.container.getAttribute("tabindex"),r=new AbortController;w(s.container,r.signal),s.container.setAttribute("tabindex","0"),s.container.focus();function p(){s.container.setAttribute("tabindex",i);const l=document.activeElement;(l===s.container||l===s.container.querySelector(".vl-overlay"))&&f.focus(),r.abort(),m.hide()}return{close:p}}return{open:b}}const X={__name:"EventTest",setup(g){const y=K.useLoading({color:"#00f",backgroundColor:"rgba(0,0,123,0.4)"}),b=G(),s=Z(),m=J(),f=Q();function i(e){}function r(e){}function p(e){}function l(e){console.log("[input] keydown"),console.log("[input] event ==>",e)}function u(e){console.log("[input] keypress"),console.log("[input] event ==>",e)}function d(e){console.log("[input] keyup"),console.log("[input] event ==>",e)}function L(e){console.log("[input] compositionstart"),console.log("[input] event ==>",e)}function x(e){console.log("[input] compositionupdate"),console.log("[input] event ==>",e)}function k(e){console.log("[input] compositionend"),console.log("[input] event ==>",e)}function j(e){console.log("[form] submit")}function $(e){const o=y.show();console.log("[form] submit"),setTimeout(()=>{o.hide()},5e3)}function W(e){console.log("[form] submit");const o=b.open();setTimeout(()=>{o.close()},5e3)}function F(e){console.log("[form] submit");const o=s.open();setTimeout(()=>{c.fire({title:"訊息測試",didDestroy(){setTimeout(()=>{o.close()},2e3)}})},4e3)}function M(e){console.log("[form] submit");const o=m.open();setTimeout(()=>{c.fire({title:"訊息測試",didDestroy(){setTimeout(()=>{o.close()},6e3)}})},4e3)}const S=C(null);function q(e){console.log("[form] submit");const o=f.open({container:S.value,color:"red",backgroundColor:"rgba(0,0,123,0.4)"});setTimeout(()=>{o.close()},6e3)}const E=C(null);function B(e){console.log("[form] submit");const o=f.open({container:E.value,color:"red",backgroundColor:"rgba(0,0,123,0.4)"});setTimeout(()=>{o.close()},6e3)}function D(e){console.log("[form] submit"),alert("訊息")}function O(e){console.log("[form] submit"),c.fire({title:"訊息",focusConfirm:!1,didOpen(o){o.addEventListener("keydown",v=>{console.log("[popup] keydown")}),o.addEventListener("keypress",v=>{console.log("[popup] keypress")}),o.addEventListener("keyup",v=>{console.log("[popup] keyup")}),o.addEventListener("click",v=>{console.log("[popup] click")})}})}function z(e){console.log("[form] submit"),c.fire({title:"請好好將訊息看完再關閉！",allowEscapeKey:!1,allowOutsideClick:!1,confirmButtonText:"我知道了",didOpen(o){o.focus(),o.addEventListener("keydown",v=>{console.log("[popup] keydown")}),o.addEventListener("keypress",v=>{console.log("[popup] keypress")}),o.addEventListener("keyup",v=>{console.log("[popup] keyup")}),o.addEventListener("click",v=>{console.log("[popup] click")})}})}return(e,o)=>(P(),I(N,null,[o[27]||(o[27]=n("h1",{class:"h1"},"測試事件觸發",-1)),o[28]||(o[28]=n("p",null,[n("a",{href:"https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/EventTest.vue",target:"_blank"},"Code")],-1)),o[29]||(o[29]=n("hr",{class:"hr mt-0"},null,-1)),o[30]||(o[30]=n("h2",{class:"h2"},"基本 form 事件觸發",-1)),o[31]||(o[31]=n("p",null,"連續按 Enter 得連續觸發 submit。",-1)),n("form",{action:"javascript:alert('form action')",class:"box",onKeydown:i,onKeypress:r,onKeyup:p,onSubmit:a(j,["prevent"])},[n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d},null,32),o[0]||(o[0]=t("   ")),o[1]||(o[1]=n("button",null,"提交",-1))],32),o[32]||(o[32]=n("hr",{class:"my-5"},null,-1)),o[33]||(o[33]=n("h2",{class:"h2"},"form 事件觸發 loading",-1)),o[34]||(o[34]=n("p",null,"測試之後才發現，vue-loading-overlay 竟然沒有防鍵盤操作！",-1)),o[35]||(o[35]=n("p",null,"原本的 vue-loading-overlay，使用 Enter 觸發 submit，即使 loading 開啟了也還是可以繼續觸發。",-1)),n("form",{action:"javascript:alert('form action')",class:"box mb-24",onKeydown:i,onKeypress:r,onKeyup:p,onSubmit:a($,["prevent"])},[n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d},null,32),o[2]||(o[2]=t("   ")),o[3]||(o[3]=n("button",null,"提交",-1))],32),o[36]||(o[36]=n("h3",{class:"h3 mt-32"},"改寫成自己的 loading - 第一版",-1)),o[37]||(o[37]=n("p",null,"方式：開啟 loading 時，使用 blur 強制動作中的元素脫離焦點。",-1)),o[38]||(o[38]=n("p",null,"問題：按 tab 時依然能聚焦下一個元素並對其操作。",-1)),n("form",{action:"javascript:alert('form action')",class:"box mb-24",onKeydown:i,onKeypress:r,onKeyup:p,onSubmit:a(W,["prevent"])},[n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d},null,32),o[4]||(o[4]=t("   ")),n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d},null,32),o[5]||(o[5]=t("   ")),o[6]||(o[6]=n("button",null,"提交",-1))],32),o[39]||(o[39]=n("h3",{class:"h3 mt-32"},"改寫成自己的 loading - 第二版",-1)),o[40]||(o[40]=n("p",null,"方式：開啟 loading 時，禁止鍵盤動作，loading 結束後回復允許鍵盤動作。",-1)),o[41]||(o[41]=n("p",null,"問題：無法阻止中文輸入（但也僅僅只能輸入中文，無法做其它動作，因此也不會造成操作異常）。",-1)),o[42]||(o[42]=n("p",null,[t(" 註：原本鍵盤動作是鎖整個 document，但後來發現 SweetAlert2 訊息窗也會變成無法使用鍵盤。"),n("br"),t(" 後來改成鎖 "),n("code",null,"#app"),t(" div，既能達到鎖整個畫面的需求，也能讓 SWAL 正常操作。 ")],-1)),n("form",{action:"javascript:alert('form action')",class:"box mb-24",onKeydown:i,onKeypress:r,onKeyup:p,onSubmit:a(F,["prevent"])},[n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d,onCompositionstart:a(L,["prevent"]),onCompositionupdate:a(x,["prevent"]),onCompositionend:a(k,["prevent"])},null,32),o[7]||(o[7]=t("   ")),n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d},null,32),o[8]||(o[8]=t("   ")),o[9]||(o[9]=n("button",null,"提交",-1))],32),o[43]||(o[43]=A('<h3 class="h3 mt-32">改寫成自己的 loading - 第三版</h3><p>方式：結合第一、二版的做法並改良。</p><p>此版本將整頁 loading 與區域 loading 的功能分開，考量點有：</p><ul><li class="mb-1">整頁 loading 的功能相較於區域 loading 要單純許多。</li><li class="mb-1">兩者性質不太一樣，需要考量的東西也不太一樣，混雜在一起寫會讓程式變得不必要的複雜。</li><li class="mb-1">區域 loading 的使用機會較少。</li></ul><p>綜上考量，覺得不需要因為區域 loading 而讓整個程式變得複雜，因此將兩者功能分開。</p><p><strong>關閉 loading 時的自動回復元素聚焦效果：</strong><br> loading 開啟時，會將原本動作中的元素移除聚焦，以避免使用者繼續對元素動作。<br> 這邊設計關閉 loading 時，會自動回復元素的聚焦。<br> 然而回復元素聚焦只是一個嘗試的、實驗性的效果，在實務上未必會需要此效果。<br> 在我真正用於作品開發時，發現 loading 自帶回復元素聚焦有時反而會干擾我的流程。<br> 而要不要回復聚焦、或是聚焦在哪個元素，其實我也可以在自己的流程中控制，不需要 loading 自動執行。 </p><h4 class="h4 mb-3 mt-32">整頁 loading</h4><p>構思重點：</p><ul><li class="mb-2">開啟 loading 後，使 loading 取得焦點（原本動作中的元素就會失去焦點），並且禁止鍵盤動作（避免使用 tab）。</li><li class="mb-2"> 開啟 loading 時，禁止 <code>#app</code> div 區域的鍵盤動作，loading 結束後回復允許鍵盤動作。<br> 此設定主要是為了防範有人使用其它偏方強行進入 loading 下方的畫面區域。 </li></ul>',9)),n("form",{action:"javascript:alert('form action')",class:"box mb-24",onKeydown:i,onKeypress:r,onKeyup:p,onSubmit:a(M,["prevent"])},[n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d,onCompositionstart:a(L,["prevent"]),onCompositionupdate:a(x,["prevent"]),onCompositionend:a(k,["prevent"])},null,32),o[10]||(o[10]=t("   ")),n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d},null,32),o[11]||(o[11]=t("   ")),o[12]||(o[12]=n("button",null,"提交",-1))],32),o[44]||(o[44]=A('<h4 class="h4 mb-3 mt-32">區域 loading</h4><p>鍵盤的禁止動作只會限制於 loading 的區域。</p><p>構思重點：</p><ul><li class="mb-2"> 區域 loading 只限於某塊區域，使用者依然可以操作其它部份，因此也可以由外部使用 tab 進入 loading 中的區域。<br> 所以 loading 區域（container）必須禁止鍵盤動作。 </li><li class="mb-2"> 為了更嚴謹的阻擋，將 container 的 tabindex 設為 0（loading 結束時會回復原值）。<br> 如此一來，當由外部使用 tab 時，也只能聚焦於 container，無法對其內容做進一步操作（因為 container 已禁止鍵盤動作）。 </li><li class="mb-2">開啟 loading 後，使 container 取得焦點（原本動作中的元素就會失去焦點）。</li><li class="mb-2"> 對於 loading 關閉後的回復元素聚焦，做了更細緻的考量。<br> 由於開啟 loading 後仍能對網頁其它部份進行操作，如果關閉 loading 時自動聚焦原本的元素，可能會中斷使用者的操作，造成體驗不佳。<br> 因此會判斷目前聚焦的元素，是否為 container 或其 loading（代表使用者沒有進行其它操作），是的話才會重新聚焦原本的元素。 </li></ul>',4)),n("div",{class:"vl-parent box mb-24",ref_key:"formLocal",ref:S},[o[16]||(o[16]=n("p",null,"區域 loading 測試 1。",-1)),n("form",{action:"javascript:alert('form action')",onKeydown:i,onKeypress:r,onKeyup:p,onSubmit:a(q,["prevent"])},[n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d},null,32),o[13]||(o[13]=t("   ")),n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d},null,32),o[14]||(o[14]=t("   ")),o[15]||(o[15]=n("button",null,"提交",-1))],32)],512),n("div",{class:"vl-parent box mb-24",ref_key:"formLocal2",ref:E,tabindex:"1"},[o[20]||(o[20]=n("p",null,"區域 loading 測試 2。",-1)),n("form",{action:"javascript:alert('form action')",onKeydown:i,onKeypress:r,onKeyup:p,onSubmit:a(B,["prevent"])},[n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d},null,32),o[17]||(o[17]=t("   ")),n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d},null,32),o[18]||(o[18]=t("   ")),o[19]||(o[19]=n("button",null,"提交",-1))],32)],512),o[45]||(o[45]=n("hr",{class:"my-5"},null,-1)),o[46]||(o[46]=n("h2",{class:"h2"},"form 事件觸發 alert",-1)),n("form",{action:"javascript:alert('form action')",class:"box",onKeydown:i,onKeypress:r,onKeyup:p,onSubmit:a(D,["prevent"])},[n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d},null,32),o[21]||(o[21]=t("   ")),o[22]||(o[22]=n("button",null,"提交",-1))],32),o[47]||(o[47]=n("hr",{class:"my-5"},null,-1)),o[48]||(o[48]=n("h2",{class:"h2"},"form 事件觸發 SweetAlert2",-1)),o[49]||(o[49]=n("p",null,[t(" 由於 SWAL 預設一定會 focus 在某個 button 上，即使只有 confirm button 並且設定為 "),n("code",null,"focusConfirm: false,"),t("，但仍然會 focus confirm button。"),n("br"),t(" 除非把所有 button 都拿掉..."),n("br"),t(" 這會造成——如果使用者持續按著 Enter，就會直接將訊息窗關閉。"),n("br"),t(" 並且，如果使用者再持續按著 Enter，就會再度觸發隱式提交，然後再度開訊息窗、關訊息窗... 動作不斷循環。 ")],-1)),n("form",{action:"javascript:alert('form action')",class:"box mb-24",onKeydown:i,onKeypress:r,onKeyup:p,onSubmit:a(O,["prevent"])},[n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d},null,32),o[23]||(o[23]=t("   ")),o[24]||(o[24]=n("button",null,"提交",-1))],32),o[50]||(o[50]=n("p",null,[t(" 雖然，我們相信大部份的使用者都不會故意這麼做。"),n("br"),t(" 但一方面，為了避免真的有人惡意為之。"),n("br"),t(" 另一方面，也是為了不想讓使用者太容易就能將訊息關閉，這會提升使用者忽略訊息的機率（根據經驗許多使用者不愛看訊息）。"),n("br"),t(" 因此，可以將訊息窗設定為——只有真的手動點擊了按鈕才會關閉。 ")],-1)),n("form",{action:"javascript:alert('form action')",class:"box",onKeydown:i,onKeypress:r,onKeyup:p,onSubmit:a(z,["prevent"])},[n("input",{type:"text",onKeydown:l,onKeypress:u,onKeyup:d},null,32),o[25]||(o[25]=t("   ")),o[26]||(o[26]=n("button",null,"提交",-1))],32)],64))}};export{X as default};
