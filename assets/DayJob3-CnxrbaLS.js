import{_ as b,r,a as s,b as e,F as p,q as _,d as u,t as l,w as v,e as g,c as k,o as a,f,p as y,i as w}from"./index-SODZljVL.js";const i=o=>(y("data-v-875096c5"),o=o(),w(),o),x=k('<h1 class="h1" data-v-875096c5>🏅Day3 - Vue.js 的基礎魔法：v-model 表單運用</h1><p data-v-875096c5><a href="https://hackmd.io/FKzZqZ3IT4SR_KAds4ivpw" target="_blank" data-v-875096c5>題目</a>｜ <a href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob3.vue" target="_blank" data-v-875096c5>Code</a>｜ <a href="https://codepen.io/codepenplayer/pen/GRbrbYd" target="_blank" data-v-875096c5>CodePen</a></p><hr class="hr mt-0" data-v-875096c5>',3),S={id:"app"},D={class:"container"},I={class:"Q1"},j=i(()=>e("h2",{class:"h2"},"Q1",-1)),U={class:"box mb-20"},V=["id","value"],F=["for"],Q={class:"fw-bold"},B=i(()=>e("hr",{class:"hr"},null,-1)),C={class:"Q2"},J=i(()=>e("h2",{class:"h2"},"Q2",-1)),M=i(()=>e("option",{value:"",disabled:""},"--- 請選擇 ---",-1)),N=["value"],P={class:"fw-bold"},T={__name:"DayJob3",setup(o){const d=r([]),n=r(""),h=r([{title:"apple",price:25,count:50,imgUrl:"https://i.imgur.com/w4sYWlS.jpeg"},{title:"orange",price:15,count:20,imgUrl:"https://i.imgur.com/PSmzmXi.jpeg"},{title:"strawberry",price:45,count:10,imgUrl:"https://i.imgur.com/FIMmh6h.png"},{title:"kiwi",price:55,count:20,imgUrl:"https://i.imgur.com/TIA6v4m.jpeg"}]);return(Z,c)=>(a(),s(p,null,[x,e("div",S,[e("div",D,[e("div",I,[j,e("form",U,[(a(!0),s(p,null,_(h.value,t=>(a(),s("div",{key:t.title,class:"form-check"},[v(e("input",{type:"checkbox",id:t.title,value:t.title,class:"form-check-input","onUpdate:modelValue":c[0]||(c[0]=m=>d.value=m)},null,8,V),[[f,d.value]]),e("label",{for:t.title,class:"form-check-label"},l(t.title),9,F)]))),128))]),e("div",null,[u(" 透過 checkbox 選擇的水果： "),e("span",Q,l(d.value.join(", ")),1)])]),B,e("div",C,[J,v(e("select",{class:"form-select mb-20","onUpdate:modelValue":c[1]||(c[1]=t=>n.value=t)},[M,(a(!0),s(p,null,_(h.value,t=>(a(),s("option",{key:t.title,value:t.title},l(t.title),9,N))),128))],512),[[g,n.value]]),e("div",null,[u(" 透過 select 選擇的水果："),e("span",P,l(n.value),1)])])])])],64))}},z=b(T,[["__scopeId","data-v-875096c5"]]);export{z as default};
