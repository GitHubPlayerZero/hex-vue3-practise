import{N as y,P as v,S as C,E as k,K as B,A as x,b as P,a as M}from"./effect-cube-Bo30ry1t.js";import{_ as N,a as m,b as t,e as s,p as e,y as i,l as A,f,h as S,F as E,z as a,o as b}from"./index-hDkxGt-s.js";const R={data(){return{swiperModules:[y,v,C,k,B,x],progressBarStyle:{isDown:!1,isBigger:!1,isChangeColor:!1},paginationCustom:{clickable:!0,renderBullet:function(p,l){return'<span class="swiper-pagination-custom '+l+'">'+(p+1)+"</span>"}},autoplay:{delay:2500,disableOnInteraction:!0},refSwiper2:null}},mounted(){console.log("mounted..."),console.log("refSwiper1 ==>",this.$refs.refSwiper1),this.progressBarStyle.isDown=!0,this.progressBarStyle.isBigger=!0,this.progressBarStyle.isChangeColor=!0},methods:{onSwiper(p){console.log("onSwiper ==>",p)},onSlideChange(){console.log("slide change")},onReachEnd(){console.log("reach end")},onAutoplayTimeLeft(p,l,g){this.$refs.progressCircle.style.setProperty("--progress",1-g),this.$refs.progressContent.textContent=`${Math.ceil(l/1e3)}s`},toPrev1(){this.$refs.refSwiper1.slidePrev()},toNext1(){this.$refs.refSwiper1.slideNext()},setRefSwiper2(p){this.refSwiper2=p,console.log("refSwiper2 ==>",this.refSwiper2)},toPrev2(){this.refSwiper2.slidePrev()},toNext2(){this.refSwiper2.slideNext()}},components:{Swiper:P,SwiperSlide:M}},V={class:"d-flex flex-wrap column-gap-4 row-gap-1"},I={class:"autoplay-progress"},O={viewBox:"0 0 48 48",ref:"progressCircle"},D={ref:"progressContent"},L={class:"mb-32 p-3 border border-secondary"},T={class:"p-3 border border-primary"};function U(p,l,g,j,r,u){const w=a("RouterLink"),d=a("SwiperSlide"),o=a("Swiper");return b(),m(E,null,[l[123]||(l[123]=t("h1",{class:"mb-32"},"Swiper（Options）",-1)),l[124]||(l[124]=t("div",{class:"mb-24"},[t("a",{href:"https://swiperjs.com/",target:"_blank"},"官網"),s("｜ "),t("a",{href:"https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/kit_samples/swiper/SwiperOptions.vue",target:"_blank"}," code ")],-1)),l[125]||(l[125]=t("p",null," 在 Options API 中，用法與 Composition API 一樣，差別只在於 Vue 的語法（components、data、methods、template-refs 等等寫法）。 ",-1)),t("p",null,[l[8]||(l[8]=s(" 這邊的範例是直接將 Composition API 的範例移植過來，再調整為 Options API 的寫法，因此一些相同的說明這邊就不再重複撰寫。")),l[9]||(l[9]=t("br",null,null,-1)),l[10]||(l[10]=s(" 欲看完整說明可以參考 ")),e(w,{to:{name:"swiperComposition"}},{default:i(()=>l[7]||(l[7]=[s("Composition API 範例")])),_:1}),l[11]||(l[11]=s("。 "))]),l[126]||(l[126]=t("hr",{class:"hr-main"},null,-1)),t("section",null,[l[19]||(l[19]=t("h2",{class:"mb-28"},"官網範例",-1)),e(o,{modules:r.swiperModules,"slides-per-view":3,"space-between":50,navigation:!0,pagination:{clickable:!0},scrollbar:{draggable:!0},onSwiper:u.onSwiper,onSlideChange:u.onSlideChange,onReachEnd:u.onReachEnd},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[12]||(l[12]=[s("Slide 1")])),_:1}),e(d,{class:"slide2"},{default:i(()=>l[13]||(l[13]=[s("Slide 2")])),_:1}),e(d,{class:"slide3"},{default:i(()=>l[14]||(l[14]=[s("Slide 3")])),_:1}),e(d,{class:"slide4"},{default:i(()=>l[15]||(l[15]=[s("Slide 4")])),_:1}),e(d,{class:"slide5"},{default:i(()=>l[16]||(l[16]=[s("Slide 5")])),_:1}),e(d,{class:"slide7"},{default:i(()=>l[17]||(l[17]=[s("Slide 6")])),_:1}),e(d,{class:"slide7"},{default:i(()=>l[18]||(l[18]=[s("Slide 7")])),_:1})]),_:1},8,["modules","onSwiper","onSlideChange","onReachEnd"])]),l[127]||(l[127]=t("hr",{class:"hr-main"},null,-1)),t("section",null,[l[21]||(l[21]=t("h2",{class:"mb-28"},"只有一個 Slide",-1)),e(o,{modules:r.swiperModules,navigation:!0,pagination:!0,scrollbar:{draggable:!0}},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[20]||(l[20]=[s("Slide 1")])),_:1})]),_:1},8,["modules"])]),l[128]||(l[128]=t("hr",{class:"hr-main"},null,-1)),t("section",null,[l[24]||(l[24]=t("h2",{class:"mb-28"},"有兩個 Slide",-1)),e(o,{modules:r.swiperModules,navigation:!0,pagination:!0,scrollbar:{draggable:!0}},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[22]||(l[22]=[s("Slide 1")])),_:1}),e(d,{class:"slide2"},{default:i(()=>l[23]||(l[23]=[s("Slide 2")])),_:1})]),_:1},8,["modules"])]),l[129]||(l[129]=t("hr",{class:"hr-main"},null,-1)),t("section",null,[l[32]||(l[32]=t("h2",{class:"mb-28"},"立方體效果",-1)),e(o,{modules:r.swiperModules,grabCursor:!0,effect:"cube",cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},navigation:!0,pagination:!0},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[25]||(l[25]=[s("Slide 1")])),_:1}),e(d,{class:"slide2"},{default:i(()=>l[26]||(l[26]=[s("Slide 2")])),_:1}),e(d,{class:"slide3"},{default:i(()=>l[27]||(l[27]=[s("Slide 3")])),_:1}),e(d,{class:"slide4"},{default:i(()=>l[28]||(l[28]=[s("Slide 4")])),_:1}),e(d,{class:"slide5"},{default:i(()=>l[29]||(l[29]=[s("Slide 5")])),_:1}),e(d,{class:"slide6"},{default:i(()=>l[30]||(l[30]=[s("Slide 6")])),_:1}),e(d,{class:"slide7"},{default:i(()=>l[31]||(l[31]=[s("Slide 7")])),_:1})]),_:1},8,["modules"])]),l[130]||(l[130]=t("hr",{class:"hr-main"},null,-1)),l[131]||(l[131]=t("h2",{class:"mb-28"},"Navigation",-1)),t("section",null,[l[40]||(l[40]=t("h3",{class:"mb-16"},"可循環",-1)),e(o,{modules:r.swiperModules,navigation:!0,loop:!0},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[33]||(l[33]=[s("Slide 1")])),_:1}),e(d,{class:"slide2"},{default:i(()=>l[34]||(l[34]=[s("Slide 2")])),_:1}),e(d,{class:"slide3"},{default:i(()=>l[35]||(l[35]=[s("Slide 3")])),_:1}),e(d,{class:"slide4"},{default:i(()=>l[36]||(l[36]=[s("Slide 4")])),_:1}),e(d,{class:"slide5"},{default:i(()=>l[37]||(l[37]=[s("Slide 5")])),_:1}),e(d,{class:"slide6"},{default:i(()=>l[38]||(l[38]=[s("Slide 6")])),_:1}),e(d,{class:"slide7"},{default:i(()=>l[39]||(l[39]=[s("Slide 7")])),_:1})]),_:1},8,["modules"])]),l[132]||(l[132]=t("hr",{class:"hr-main"},null,-1)),l[133]||(l[133]=t("h2",{class:"mb-28"},"分頁樣式",-1)),t("section",null,[l[48]||(l[48]=t("h3",{class:"mb-16"},"可點擊、動態樣式",-1)),e(o,{modules:r.swiperModules,navigation:!0,loop:!0,pagination:{clickable:!0,dynamicBullets:!0}},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[41]||(l[41]=[s("Slide 1")])),_:1}),e(d,{class:"slide2"},{default:i(()=>l[42]||(l[42]=[s("Slide 2")])),_:1}),e(d,{class:"slide3"},{default:i(()=>l[43]||(l[43]=[s("Slide 3")])),_:1}),e(d,{class:"slide4"},{default:i(()=>l[44]||(l[44]=[s("Slide 4")])),_:1}),e(d,{class:"slide5"},{default:i(()=>l[45]||(l[45]=[s("Slide 5")])),_:1}),e(d,{class:"slide6"},{default:i(()=>l[46]||(l[46]=[s("Slide 6")])),_:1}),e(d,{class:"slide7"},{default:i(()=>l[47]||(l[47]=[s("Slide 7")])),_:1})]),_:1},8,["modules"])]),l[134]||(l[134]=t("hr",{class:"hr-sub"},null,-1)),t("section",null,[l[59]||(l[59]=t("h3",{class:"mb-16"},"progress bar",-1)),e(o,{modules:r.swiperModules,navigation:!0,loop:!0,pagination:{type:"progressbar"},class:A({"swiper-progressbar-down":r.progressBarStyle.isDown,"swiper-progressbar-bigger":r.progressBarStyle.isBigger,"swiper-progressbar-color":r.progressBarStyle.isChangeColor})},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[49]||(l[49]=[s("Slide 1")])),_:1}),e(d,{class:"slide2"},{default:i(()=>l[50]||(l[50]=[s("Slide 2")])),_:1}),e(d,{class:"slide3"},{default:i(()=>l[51]||(l[51]=[s("Slide 3")])),_:1}),e(d,{class:"slide4"},{default:i(()=>l[52]||(l[52]=[s("Slide 4")])),_:1}),e(d,{class:"slide5"},{default:i(()=>l[53]||(l[53]=[s("Slide 5")])),_:1}),e(d,{class:"slide6"},{default:i(()=>l[54]||(l[54]=[s("Slide 6")])),_:1}),e(d,{class:"slide7"},{default:i(()=>l[55]||(l[55]=[s("Slide 7")])),_:1})]),_:1},8,["modules","class"]),t("div",V,[t("label",null,[f(t("input",{type:"checkbox","onUpdate:modelValue":l[0]||(l[0]=n=>r.progressBarStyle.isDown=n)},null,512),[[S,r.progressBarStyle.isDown]]),l[56]||(l[56]=s("  Progress bar 顯示在下面 "))]),t("label",null,[f(t("input",{type:"checkbox","onUpdate:modelValue":l[1]||(l[1]=n=>r.progressBarStyle.isBigger=n)},null,512),[[S,r.progressBarStyle.isBigger]]),l[57]||(l[57]=s("  加大 Progress bar "))]),t("label",null,[f(t("input",{type:"checkbox","onUpdate:modelValue":l[2]||(l[2]=n=>r.progressBarStyle.isChangeColor=n)},null,512),[[S,r.progressBarStyle.isChangeColor]]),l[58]||(l[58]=s("  改變 Progress bar 顏色 "))])])]),l[135]||(l[135]=t("hr",{class:"hr-sub"},null,-1)),t("section",null,[l[67]||(l[67]=t("h3",{class:"mb-16"},"分頁數",-1)),e(o,{modules:r.swiperModules,navigation:!0,loop:!0,pagination:{type:"fraction"}},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[60]||(l[60]=[s("Slide 1")])),_:1}),e(d,{class:"slide2"},{default:i(()=>l[61]||(l[61]=[s("Slide 2")])),_:1}),e(d,{class:"slide3"},{default:i(()=>l[62]||(l[62]=[s("Slide 3")])),_:1}),e(d,{class:"slide4"},{default:i(()=>l[63]||(l[63]=[s("Slide 4")])),_:1}),e(d,{class:"slide5"},{default:i(()=>l[64]||(l[64]=[s("Slide 5")])),_:1}),e(d,{class:"slide6"},{default:i(()=>l[65]||(l[65]=[s("Slide 6")])),_:1}),e(d,{class:"slide7"},{default:i(()=>l[66]||(l[66]=[s("Slide 7")])),_:1})]),_:1},8,["modules"])]),l[136]||(l[136]=t("hr",{class:"hr-sub"},null,-1)),t("section",null,[l[75]||(l[75]=t("h3",{class:"mb-16"},"自訂",-1)),e(o,{modules:r.swiperModules,navigation:!0,loop:!0,pagination:r.paginationCustom},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[68]||(l[68]=[s("Slide 1")])),_:1}),e(d,{class:"slide2"},{default:i(()=>l[69]||(l[69]=[s("Slide 2")])),_:1}),e(d,{class:"slide3"},{default:i(()=>l[70]||(l[70]=[s("Slide 3")])),_:1}),e(d,{class:"slide4"},{default:i(()=>l[71]||(l[71]=[s("Slide 4")])),_:1}),e(d,{class:"slide5"},{default:i(()=>l[72]||(l[72]=[s("Slide 5")])),_:1}),e(d,{class:"slide6"},{default:i(()=>l[73]||(l[73]=[s("Slide 6")])),_:1}),e(d,{class:"slide7"},{default:i(()=>l[74]||(l[74]=[s("Slide 7")])),_:1})]),_:1},8,["modules","pagination"])]),l[137]||(l[137]=t("hr",{class:"hr-sub"},null,-1)),t("section",null,[l[83]||(l[83]=t("h3",{class:"mb-16"},"垂直",-1)),e(o,{class:"demo-pagination-vertical",direction:"vertical",modules:r.swiperModules,navigation:!0,loop:!0,pagination:{clickable:!0}},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[76]||(l[76]=[s("Slide 1")])),_:1}),e(d,{class:"slide2"},{default:i(()=>l[77]||(l[77]=[s("Slide 2")])),_:1}),e(d,{class:"slide3"},{default:i(()=>l[78]||(l[78]=[s("Slide 3")])),_:1}),e(d,{class:"slide4"},{default:i(()=>l[79]||(l[79]=[s("Slide 4")])),_:1}),e(d,{class:"slide5"},{default:i(()=>l[80]||(l[80]=[s("Slide 5")])),_:1}),e(d,{class:"slide6"},{default:i(()=>l[81]||(l[81]=[s("Slide 6")])),_:1}),e(d,{class:"slide7"},{default:i(()=>l[82]||(l[82]=[s("Slide 7")])),_:1})]),_:1},8,["modules"])]),l[138]||(l[138]=t("hr",{class:"hr-sub"},null,-1)),t("section",null,[l[91]||(l[91]=t("h3",{class:"mb-16"},"一頁多個 view、加入間距",-1)),e(o,{slidesPerView:3,spaceBetween:20,modules:r.swiperModules,navigation:!0,loop:!0,pagination:{clickable:!0}},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[84]||(l[84]=[s("Slide 1")])),_:1}),e(d,{class:"slide2"},{default:i(()=>l[85]||(l[85]=[s("Slide 2")])),_:1}),e(d,{class:"slide3"},{default:i(()=>l[86]||(l[86]=[s("Slide 3")])),_:1}),e(d,{class:"slide4"},{default:i(()=>l[87]||(l[87]=[s("Slide 4")])),_:1}),e(d,{class:"slide5"},{default:i(()=>l[88]||(l[88]=[s("Slide 5")])),_:1}),e(d,{class:"slide6"},{default:i(()=>l[89]||(l[89]=[s("Slide 6")])),_:1}),e(d,{class:"slide7"},{default:i(()=>l[90]||(l[90]=[s("Slide 7")])),_:1})]),_:1},8,["modules"])]),l[139]||(l[139]=t("hr",{class:"hr-sub"},null,-1)),t("section",null,[l[99]||(l[99]=t("h3",{class:"mb-16"},"可鍵盤控制",-1)),e(o,{modules:r.swiperModules,navigation:!0,loop:!0,pagination:{clickable:!0},keyboard:{enabled:!0}},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[92]||(l[92]=[s("Slide 1")])),_:1}),e(d,{class:"slide2"},{default:i(()=>l[93]||(l[93]=[s("Slide 2")])),_:1}),e(d,{class:"slide3"},{default:i(()=>l[94]||(l[94]=[s("Slide 3")])),_:1}),e(d,{class:"slide4"},{default:i(()=>l[95]||(l[95]=[s("Slide 4")])),_:1}),e(d,{class:"slide5"},{default:i(()=>l[96]||(l[96]=[s("Slide 5")])),_:1}),e(d,{class:"slide6"},{default:i(()=>l[97]||(l[97]=[s("Slide 6")])),_:1}),e(d,{class:"slide7"},{default:i(()=>l[98]||(l[98]=[s("Slide 7")])),_:1})]),_:1},8,["modules"])]),l[140]||(l[140]=t("hr",{class:"hr-sub"},null,-1)),t("section",null,[l[108]||(l[108]=t("h3",{class:"mb-16"},"自動播放",-1)),e(o,{modules:r.swiperModules,navigation:!0,pagination:{clickable:!0},autoplay:r.autoplay,onAutoplayTimeLeft:u.onAutoplayTimeLeft},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[100]||(l[100]=[s("Slide 1")])),_:1}),e(d,{class:"slide2"},{default:i(()=>l[101]||(l[101]=[s("Slide 2")])),_:1}),e(d,{class:"slide3"},{default:i(()=>l[102]||(l[102]=[s("Slide 3")])),_:1}),e(d,{class:"slide4"},{default:i(()=>l[103]||(l[103]=[s("Slide 4")])),_:1}),e(d,{class:"slide5"},{default:i(()=>l[104]||(l[104]=[s("Slide 5")])),_:1}),e(d,{class:"slide6"},{default:i(()=>l[105]||(l[105]=[s("Slide 6")])),_:1}),e(d,{class:"slide7"},{default:i(()=>l[106]||(l[106]=[s("Slide 7")])),_:1}),t("div",I,[(b(),m("svg",O,l[107]||(l[107]=[t("circle",{cx:"24",cy:"24",r:"20"},null,-1)]),512)),t("span",D,null,512)])]),_:1},8,["modules","autoplay","onAutoplayTimeLeft"])]),l[141]||(l[141]=t("hr",{class:"hr-sub"},null,-1)),t("section",null,[l[122]||(l[122]=t("h3",{class:"mb-16"},"操控 Swiper 實例",-1)),e(o,{modules:r.swiperModules,navigation:!0,loop:!0,pagination:{clickable:!0},ref:"refSwiper1",onSwiper:u.setRefSwiper2},{default:i(()=>[e(d,{class:"slide1"},{default:i(()=>l[109]||(l[109]=[s("Slide 1")])),_:1}),e(d,{class:"slide2"},{default:i(()=>l[110]||(l[110]=[s("Slide 2")])),_:1}),e(d,{class:"slide3"},{default:i(()=>l[111]||(l[111]=[s("Slide 3")])),_:1}),e(d,{class:"slide4"},{default:i(()=>l[112]||(l[112]=[s("Slide 4")])),_:1}),e(d,{class:"slide5"},{default:i(()=>l[113]||(l[113]=[s("Slide 5")])),_:1}),e(d,{class:"slide6"},{default:i(()=>l[114]||(l[114]=[s("Slide 6")])),_:1}),e(d,{class:"slide7"},{default:i(()=>l[115]||(l[115]=[s("Slide 7")])),_:1})]),_:1},8,["modules","onSwiper"]),t("div",L,[l[116]||(l[116]=t("h4",null,[s("測試 1（"),t("code",null,"refSwiper1"),s("）")],-1)),l[117]||(l[117]=t("p",null,[s(" 直接使用 vue 的模板引用方式（"),t("code",null,"template-refs"),s("）綁定 Swiper 元件。"),t("br"),s(" 此做法得到的 Swiper 實例不太一樣，會無法操作，console 會出現錯誤。 ")],-1)),t("button",{type:"button",class:"btn btn-secondary",onClick:l[3]||(l[3]=(...n)=>u.toPrev1&&u.toPrev1(...n))},"測試 1 - 往前"),l[118]||(l[118]=s("   ")),t("button",{type:"button",class:"btn btn-secondary",onClick:l[4]||(l[4]=(...n)=>u.toNext1&&u.toNext1(...n))},"測試 1 - 往後")]),t("div",T,[l[119]||(l[119]=t("h4",null,[s("測試 2（"),t("code",null,"refSwiper2"),s("）")],-1)),l[120]||(l[120]=t("p",null,[s(" 使用 "),t("a",{href:"https://swiperjs.com/vue#controller",target:"_blank"},"官網"),s(" 的做法，在 "),t("code",null,"@swiper"),s(" 事件綁定 Swiper 實例，此做法可以操作。 ")],-1)),t("button",{type:"button",class:"btn btn-primary",onClick:l[5]||(l[5]=(...n)=>u.toPrev2&&u.toPrev2(...n))},"測試 2 - 往前"),l[121]||(l[121]=s("   ")),t("button",{type:"button",class:"btn btn-primary",onClick:l[6]||(l[6]=(...n)=>u.toNext2&&u.toNext2(...n))},"測試 2 - 往後")])])],64)}const K=N(R,[["render",U],["__scopeId","data-v-8fc1c1da"]]);export{K as default};