import{_ as S,f as o,g as h,a as u,b as e,j as b,v as f,e as g,t as x,B as y,i as k,F as V,c as w,o as l,u as D,x as N}from"./index-BQDHOZvY.js";const t=n=>(D("data-v-2d50e73c"),n=n(),N(),n),B=w('<h1 class="h1" data-v-2d50e73c>🏅 Day11 - Vue.js 的黑魔法：Watch</h1><p data-v-2d50e73c><a href="https://hackmd.io/5qENDoiZS261xzOlaSRL5w" target="_blank" data-v-2d50e73c>題目</a>｜ <a href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob11.vue" target="_blank" data-v-2d50e73c>Code</a>｜ <a href="https://codepen.io/codepenplayer/pen/VwJMGgP" target="_blank" data-v-2d50e73c>CodePen</a></p><hr class="hr mt-0" data-v-2d50e73c><h2 class="h2" data-v-2d50e73c>方法一：監聽整個物件</h2><p data-v-2d50e73c>需搭配深層監聽。</p>',5),I={class:"m-2"},J=t(()=>e("label",{for:"username"},"購買人姓名：",-1)),j={key:0,class:"error"},C=t(()=>e("h2",{class:"h2"},"方法二：監聽物件裡的純值屬性",-1)),M=t(()=>e("p",null,"需搭配使用 getter 函式作為監聽來源的寫法。",-1)),P={class:"m-2"},U=t(()=>e("label",{for:"username2"},"購買人姓名：",-1)),E={key:0,class:"error"},F=t(()=>e("hr",{class:"hr"},null,-1)),G=t(()=>e("h2",{class:"h2"},"即時監聽練習",-1)),T=t(()=>e("p",null,"一開始就會先自動執行監聽。",-1)),Z={class:"m-2"},q=t(()=>e("label",{for:"username3"},"購買人姓名：",-1)),z={key:0,class:"error"},H={__name:"DayJob11",setup(n){const d=o({username:""}),c=o({username:""}),m=o({username:""}),i=o({username:""}),p=o({username:""}),v=o({username:""}),_=a=>a.length!=3?"需要正確的輸入名稱":"";return h(d,a=>{console.log("#1 newVal ==>",a),c.value.username=_(a.username)},{deep:!0}),h(()=>m.value.username,a=>{console.log("#2 newVal ==>",a),i.value.username=_(a)}),h(p,a=>{console.log("#3 newVal ==>",a),v.value.username=_(a.username)},{deep:!0,immediate:!0}),(a,s)=>(l(),u(V,null,[B,e("form",{class:"box mb-5",onSubmit:s[1]||(s[1]=k(()=>{},["prevent"]))},[e("div",I,[J,b(e("input",{id:"username","onUpdate:modelValue":s[0]||(s[0]=r=>d.value.username=r)},null,512),[[f,d.value.username]]),g("   "),c.value.username?(l(),u("span",j,x(c.value.username),1)):y("",!0)])],32),C,M,e("form",{class:"box",onSubmit:s[3]||(s[3]=k(()=>{},["prevent"]))},[e("div",P,[U,b(e("input",{id:"username2","onUpdate:modelValue":s[2]||(s[2]=r=>m.value.username=r)},null,512),[[f,m.value.username]]),g("   "),i.value.username?(l(),u("span",E,x(i.value.username),1)):y("",!0)])],32),F,G,T,e("form",{class:"box",onSubmit:s[5]||(s[5]=k(()=>{},["prevent"]))},[e("div",Z,[q,b(e("input",{id:"username3","onUpdate:modelValue":s[4]||(s[4]=r=>p.value.username=r)},null,512),[[f,p.value.username]]),g("   "),v.value.username?(l(),u("span",z,x(v.value.username),1)):y("",!0)])],32)],64))}},O=S(H,[["__scopeId","data-v-2d50e73c"]]);export{O as default};