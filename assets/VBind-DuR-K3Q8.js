import{_ as k,r as a,a as V,b as e,e as s,f as o,h as n,n as C,j as w,c as g,t as i,k as D,l as m,F as B,o as H}from"./index-BSaWcvpw.js";const M={class:"fieldset mb-32"},U={style:{display:"flex","flex-wrap":"wrap",gap:"30px"}},S=["src"],G=["src","alt","title"],R=["src"],A={class:"fieldset mb-24"},L=["disabled"],j={class:"fieldset mb-24"},z={class:"box mb-24"},N=["type"],P={class:"fieldset mb-24"},T={class:"fieldset mb-40 pl-28 pb-28"},q={class:"mb-32"},F={class:"fieldset mb-40 pl-28 pb-28"},W={class:"mb-32"},Y={class:"fieldset mb-40 pl-28 pb-28"},E={class:"box mt-5 pl-32 pb-32"},I={class:"mb-32"},Z={__name:"VBind",setup($){const x=a("https://plus.unsplash.com/premium_photo-1722077703164-b2c0cbefd9e5?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),v=a({src:"https://plus.unsplash.com/premium_photo-1676654936177-d9fee86ca807?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"使用物件",title:"這是一張圖片"}),f=a(!1),u=a(!1),p=a(!1),b=a(!1),r=a(!1),d=a([]);return(y,l)=>(H(),V(B,null,[l[38]||(l[38]=e("h1",{class:"h1"},"v-bind",-1)),l[39]||(l[39]=e("p",null,[e("a",{href:"https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/VBind.vue",target:"_blank"},"Code")],-1)),l[40]||(l[40]=e("hr",{class:"hr mt-0"},null,-1)),l[41]||(l[41]=e("h2",{class:"h2"},"綁定屬性",-1)),e("fieldset",M,[l[10]||(l[10]=e("legend",null,"範例 1",-1)),e("div",U,[e("div",null,[l[7]||(l[7]=e("p",null,"使用純值",-1)),e("img",{src:x.value,alt:"使用純值"},null,8,S)]),e("div",null,[l[8]||(l[8]=e("p",null,"使用物件",-1)),e("img",{src:v.value.src,alt:v.value.alt,title:v.value.title},null,8,G)]),e("div",null,[l[9]||(l[9]=e("p",null,"使用樣板字面值 + 表達式",-1)),e("img",{src:`${x.value}`,alt:"使用樣板字面值 + 表達式"},null,8,R)])])]),e("fieldset",A,[l[12]||(l[12]=e("legend",null,"範例 2",-1)),e("label",null,[l[11]||(l[11]=s(" Disabled？ ")),o(e("input",{type:"checkbox","onUpdate:modelValue":l[0]||(l[0]=t=>f.value=t)},null,512),[[n,f.value]])]),l[13]||(l[13]=s("   ")),e("input",{type:"text",disabled:f.value},null,8,L)]),e("fieldset",j,[l[16]||(l[16]=e("legend",null,"範例 3",-1)),l[17]||(l[17]=e("p",null,[s(" 綁定固定值。"),e("br"),s(" 只能使用字串，需要使用單引號／雙引號／樣板字面值將其包起來。 ")],-1)),l[18]||(l[18]=e("label",{class:"box mb-24"},[e("input",{type:"checkbox"}),s("  一般 HTML 寫法 ")],-1)),e("label",z,[e("input",{type:y.checkbox},null,8,N),l[14]||(l[14]=e("br",null,null,-1)),l[15]||(l[15]=e("p",{class:"mt-3"},[s(" 使用 v-bind 綁定 type，但是其值 (checkbox) 沒有使用字串形式，所以 checkbox 會被視為 vue 資料，而在 console 出現渲染錯誤的警告。"),e("br"),s(" 這邊也無法正常顯示為 checkbox。 ")],-1))]),l[19]||(l[19]=e("label",{class:"box"},[e("input",{type:"checkbox"}),s("   使用 v-bind 綁定 type，其值 (checkbox) 使用單引號包覆代表字串形式。 ")],-1))]),e("fieldset",P,[l[21]||(l[21]=e("legend",null,"範例 4",-1)),l[22]||(l[22]=e("p",null,"以物件方式綁定，可以一次綁定多個屬性。",-1)),e("label",null,[e("input",C(w({type:"checkbox",id:"chk1",name:"chkgroup1",test:"aaa",style:"accent-color: red; width: 50px;"})),null,16),l[20]||(l[20]=s("   按我 "))])]),l[42]||(l[42]=g('<hr class="hr" data-v-3ce70aef><h2 class="h2" data-v-3ce70aef>綁定行內樣式 (style)</h2><fieldset class="fieldset mb-40 pl-28 pb-28" data-v-3ce70aef><legend class="mb-16" data-v-3ce70aef>一般 HTML 寫法</legend><div class="box-sample" style="background-color:green;transform:rotate(45deg);" data-v-3ce70aef></div></fieldset><fieldset class="fieldset mb-40 pl-28 pb-28" data-v-3ce70aef><legend data-v-3ce70aef>使用 v-bind (物件寫法)</legend><ul class="mb-32" data-v-3ce70aef><li data-v-3ce70aef>CSS 屬性名稱要改用小駝峰寫法。</li><li data-v-3ce70aef>CSS 屬性值需加上引號（因為是物件屬性值）。</li></ul><div class="box-sample" style="background-color:green;transform:rotate(45deg);" data-v-3ce70aef></div></fieldset>',4)),e("fieldset",T,[l[26]||(l[26]=e("legend",null,"搭配三元運算子判斷",-1)),e("div",q,[e("label",null,[o(e("input",{type:"checkbox","onUpdate:modelValue":l[1]||(l[1]=t=>u.value=t)},null,512),[[n,u.value]]),l[23]||(l[23]=s("  旋轉  ")),e("span",null,"isRotate："+i(u.value),1)]),l[25]||(l[25]=s("     ")),e("label",null,[o(e("input",{type:"checkbox","onUpdate:modelValue":l[2]||(l[2]=t=>p.value=t)},null,512),[[n,p.value]]),l[24]||(l[24]=s("  變色  ")),e("span",null,"isChangeColor："+i(p.value),1)])]),e("div",null,[e("div",{class:"box-sample",style:D({backgroundColor:p.value?"blue":"green",transform:u.value?"rotate(45deg)":null})},null,4)])]),l[43]||(l[43]=g('<fieldset class="fieldset mb-40 pl-28 pb-28" data-v-3ce70aef><legend class="mb-16" data-v-3ce70aef>陣列寫法</legend><div class="box-sample" style="background-color:green;transform:rotate(45deg);" data-v-3ce70aef></div></fieldset><hr class="hr" data-v-3ce70aef><h2 class="h2" data-v-3ce70aef>綁定 class</h2>',3)),e("fieldset",F,[l[30]||(l[30]=e("legend",null,"物件寫法",-1)),e("div",W,[e("label",null,[o(e("input",{type:"checkbox","onUpdate:modelValue":l[3]||(l[3]=t=>b.value=t)},null,512),[[n,b.value]]),l[27]||(l[27]=s("  旋轉  ")),e("span",null,"isRotate2："+i(b.value),1)]),l[29]||(l[29]=s("      ")),e("label",null,[o(e("input",{type:"checkbox","onUpdate:modelValue":l[4]||(l[4]=t=>r.value=t)},null,512),[[n,r.value]]),l[28]||(l[28]=s("  變色  ")),e("span",null,"isChangeColor2："+i(r.value),1)])]),e("div",{class:m({"box-sample":!0,rotate:b.value,"bg-green":r.value})},null,2)]),e("fieldset",Y,[l[36]||(l[36]=e("legend",{class:"mb-16"},"陣列寫法",-1)),l[37]||(l[37]=e("div",{class:m(["box-sample","rotate","bg-green"])},null,-1)),e("div",E,[l[35]||(l[35]=e("p",null,"動態陣列",-1)),e("div",I,[e("label",null,[o(e("input",{type:"checkbox","onUpdate:modelValue":l[5]||(l[5]=t=>d.value=t),value:"rotate"},null,512),[[n,d.value]]),l[31]||(l[31]=s(" 旋轉"))]),l[33]||(l[33]=s("      ")),e("label",null,[o(e("input",{type:"checkbox","onUpdate:modelValue":l[6]||(l[6]=t=>d.value=t),value:"bg-green"},null,512),[[n,d.value]]),l[32]||(l[32]=s(" 變色"))]),l[34]||(l[34]=s("      ")),e("span",null,"classList："+i(d.value),1)]),e("div",{class:m(["box-sample",d.value])},null,2)])])],64))}},K=k(Z,[["__scopeId","data-v-3ce70aef"]]);export{K as default};