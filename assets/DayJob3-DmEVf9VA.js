import{_ as h,r as n,a,c as b,b as t,F as d,m as p,e as u,t as o,f as m,g,o as l,h as _}from"./index-Cw4RCaRR.js";const k={id:"app"},f={class:"container"},y={class:"Q1"},x={class:"box mb-20"},w=["id","value"],D=["for"],j={class:"fw-bold"},S={class:"Q2"},U=["value"],V={class:"fw-bold"},F={__name:"DayJob3",setup(I){const i=n([]),r=n(""),c=n([{title:"apple",price:25,count:50,imgUrl:"https://i.imgur.com/w4sYWlS.jpeg"},{title:"orange",price:15,count:20,imgUrl:"https://i.imgur.com/PSmzmXi.jpeg"},{title:"strawberry",price:45,count:10,imgUrl:"https://i.imgur.com/FIMmh6h.png"},{title:"kiwi",price:55,count:20,imgUrl:"https://i.imgur.com/TIA6v4m.jpeg"}]);return(Q,e)=>(l(),a(d,null,[e[8]||(e[8]=b('<h1 class="h1" data-v-237e3ac5>🏅 Day3 - Vue.js 的基礎魔法：v-model 表單運用</h1><p data-v-237e3ac5><a href="https://hackmd.io/FKzZqZ3IT4SR_KAds4ivpw" target="_blank" data-v-237e3ac5>題目</a>｜ <a href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob3.vue" target="_blank" data-v-237e3ac5>Code</a>｜ <a href="https://codepen.io/codepenplayer/pen/GRbrbYd" target="_blank" data-v-237e3ac5>CodePen</a></p><hr class="hr mt-0" data-v-237e3ac5>',3)),t("div",k,[t("div",f,[t("div",y,[e[3]||(e[3]=t("h2",{class:"h2"},"Q1",-1)),t("form",x,[(l(!0),a(d,null,p(c.value,s=>(l(),a("div",{key:s.title,class:"form-check"},[m(t("input",{type:"checkbox",id:s.title,value:s.title,class:"form-check-input","onUpdate:modelValue":e[0]||(e[0]=v=>i.value=v)},null,8,w),[[_,i.value]]),t("label",{for:s.title,class:"form-check-label"},o(s.title),9,D)]))),128))]),t("div",null,[e[2]||(e[2]=u(" 透過 checkbox 選擇的水果： ")),t("span",j,o(i.value.join(", ")),1)])]),e[7]||(e[7]=t("hr",{class:"hr"},null,-1)),t("div",S,[e[6]||(e[6]=t("h2",{class:"h2"},"Q2",-1)),m(t("select",{class:"form-select mb-20","onUpdate:modelValue":e[1]||(e[1]=s=>r.value=s)},[e[4]||(e[4]=t("option",{value:"",disabled:""},"--- 請選擇 ---",-1)),(l(!0),a(d,null,p(c.value,s=>(l(),a("option",{key:s.title,value:s.title},o(s.title),9,U))),128))],512),[[g,r.value]]),t("div",null,[e[5]||(e[5]=u(" 透過 select 選擇的水果：")),t("span",V,o(r.value),1)])])])])],64))}},C=h(F,[["__scopeId","data-v-237e3ac5"]]);export{C as default};
