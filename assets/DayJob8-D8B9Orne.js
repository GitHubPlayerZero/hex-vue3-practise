import{_ as m,r as n,a,c as h,b as e,e as d,f as b,g,F as c,m as _,t as l,o,E as f}from"./index-Cw4RCaRR.js";const y={id:"app",class:"container"},k={class:"mb-3"},w=["value"],x={class:"mb-3"},D={class:"fw-bold"},V={class:"mb-36"},j={class:"fw-bold"},C={class:"row"},S={key:0,class:"col-md-6 mb-3"},U={class:"card p-3 flex-lg-row-reverse align-items-center"},$=["src","alt","title"],H={class:"card-body p-0"},N={class:"card-title"},P={class:"card-text my-2"},B={class:"card-text mb-3"},F=["onClick"],I={__name:"DayJob8",setup(J){const p=n([{title:"apple",price:25,count:50,imgUrl:"https://i.imgur.com/w4sYWlS.jpeg"},{title:"orange",price:15,count:20,imgUrl:"https://i.imgur.com/PSmzmXi.jpeg"},{title:"strawberry",price:45,count:10,imgUrl:"https://i.imgur.com/FIMmh6h.png"},{title:"kiwi",price:55,count:20,imgUrl:"https://i.imgur.com/TIA6v4m.jpeg"}]),u=n([]),v=r=>{u.value.push(r.title),alert(`您已將 ${r.title} 加入購物車`)},i=n("");return(r,s)=>(o(),a(c,null,[s[5]||(s[5]=h('<h1 class="h1" data-v-c787819f>🏅 Day8 - Vue.js 的基礎魔法：總結練習</h1><p data-v-c787819f><a href="https://hackmd.io/TWH7aGfHQi2aSp4QH-10CA" target="_blank" data-v-c787819f>題目</a>｜ <a href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob8.vue" target="_blank" data-v-c787819f>Code</a>｜ <a href="https://codepen.io/codepenplayer/pen/eYwRQOV" target="_blank" data-v-c787819f>CodePen</a></p><hr class="hr mt-0" data-v-c787819f>',3)),e("div",y,[e("label",k,[s[2]||(s[2]=d(" 請選擇水果：  ")),b(e("select",{class:"form-select d-inline-block",style:{"max-width":"fit-content"},"onUpdate:modelValue":s[0]||(s[0]=t=>i.value=t)},[s[1]||(s[1]=e("option",{value:""},"全部",-1)),(o(!0),a(c,null,_(p.value,t=>(o(),a("option",{key:t.title,value:t.title},l(t.title),9,w))),128))],512),[[g,i.value]])]),e("div",x,[s[3]||(s[3]=d(" 您選擇了：")),e("span",D,l(i.value),1)]),e("div",V,[s[4]||(s[4]=d(" 購物車：")),e("span",j,l(u.value),1)]),e("div",C,[(o(!0),a(c,null,_(p.value,t=>(o(),a(c,{key:t.title},[i.value===""||i.value===t.title?(o(),a("div",S,[e("div",U,[e("img",{src:t.imgUrl,alt:t.title,title:`${t.title} 只要 $${t.price} 元`,class:"img-fluid mb-3 mb-lg-0",style:{width:"40%"}},null,8,$),e("div",H,[e("h5",N,"水果名稱："+l(t.title),1),e("p",P,"價錢："+l(t.price),1),e("p",B,"數量："+l(t.count),1),e("a",{href:"javascript:void(0)",class:"btn btn-primary",onClick:Q=>v(t)},"加入購物車",8,F)])])])):f("",!0)],64))),128))])])],64))}},A=m(I,[["__scopeId","data-v-c787819f"]]);export{A as default};
