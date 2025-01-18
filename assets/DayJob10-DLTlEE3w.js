import{_,r as h,K as b,a as o,c as g,b as t,t as l,F as d,m as v,o as c,e as n,f as p,v as u}from"./index-hDkxGt-s.js";const f={id:"app",class:"container"},y={class:"mb-32"},x={class:"h4"},w={class:"row"},U={class:"card p-3 flex-lg-row-reverse align-items-center"},k=["src","alt","title"],D={class:"card-body p-0"},V={class:"card-title"},j={class:"card-text my-2"},P=["onUpdate:modelValue"],T={class:"card-text mb-3"},J=["onUpdate:modelValue"],S={__name:"DayJob10",setup(B){const r=h([{title:"apple",price:25,count:50,imgUrl:"https://i.imgur.com/w4sYWlS.jpeg"},{title:"orange",price:15,count:20,imgUrl:"https://i.imgur.com/PSmzmXi.jpeg"},{title:"strawberry",price:45,count:10,imgUrl:"https://i.imgur.com/FIMmh6h.png"},{title:"kiwi",price:55,count:20,imgUrl:"https://i.imgur.com/TIA6v4m.jpeg"}]),m=b(()=>r.value.reduce((i,s)=>i+s.price*s.count,0));return(i,s)=>(c(),o(d,null,[s[2]||(s[2]=g('<h1 class="h1" data-v-e3bc55fd>🏅 Day10 - Vue.js 的黑魔法：Computed</h1><p data-v-e3bc55fd><a href="https://hackmd.io/8DiAOsTxRTW9lvna-yiGqw" target="_blank" data-v-e3bc55fd>題目</a>｜ <a href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob10.vue" target="_blank" data-v-e3bc55fd>Code</a>｜ <a href="https://codepen.io/codepenplayer/pen/JjQrPyy" target="_blank" data-v-e3bc55fd>CodePen</a></p><hr class="hr mt-0" data-v-e3bc55fd>',3)),t("div",f,[t("div",y,[t("p",x,"總價："+l(m.value)+" 元",1)]),t("div",w,[(c(!0),o(d,null,v(r.value,e=>(c(),o("div",{key:e.title,class:"col-md-6 mb-3"},[t("div",U,[t("img",{src:e.imgUrl,alt:e.title,title:`${e.title} 只要 $${e.price} 元`,class:"img-fluid mb-3 mb-lg-0",style:{width:"40%"}},null,8,k),t("div",D,[t("h5",V,"水果名稱："+l(e.title),1),t("p",j,[s[0]||(s[0]=n(" 價錢： ")),p(t("input",{type:"number",min:"0","onUpdate:modelValue":a=>e.price=a,class:"input"},null,8,P),[[u,e.price]])]),t("p",T,[s[1]||(s[1]=n(" 數量： ")),p(t("input",{type:"number",min:"0","onUpdate:modelValue":a=>e.count=a,class:"input"},null,8,J),[[u,e.count]])])])])]))),128))])])],64))}},F=_(S,[["__scopeId","data-v-e3bc55fd"]]);export{F as default};