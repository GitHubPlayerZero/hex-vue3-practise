import{f as m,o as n,a as l,F as v,h as x,b as t,t as s,i as w,z as C,j as g,k as V,y as p,e as h,v as M,c as N,d as k}from"./index-BQDHOZvY.js";const S=m([]),y={datas:S},T=m([]),j=m(""),B=m(0),b={datas:T,remark:j,total:B},D={class:"list-group"},F=["onClick"],I={class:"d-flex w-100 justify-content-between"},U={class:"mb-1"},L={class:"mb-1"},O={__name:"Menu",setup($){const e=[{id:1,name:"珍珠奶茶",description:"香濃奶茶搭配QQ珍珠",price:50},{id:2,name:"冬瓜檸檬",description:"清新冬瓜配上新鮮檸檬",price:45},{id:3,name:"翡翠檸檬",description:"綠茶與檸檬的完美結合",price:55},{id:4,name:"四季春茶",description:"香醇四季春茶，回甘無比",price:45},{id:5,name:"阿薩姆奶茶",description:"阿薩姆紅茶搭配香醇鮮奶",price:50},{id:6,name:"檸檬冰茶",description:"檸檬與冰茶的清新組合",price:45},{id:7,name:"芒果綠茶",description:"芒果與綠茶的獨特風味",price:55},{id:8,name:"抹茶拿鐵",description:"抹茶與鮮奶的絕配",price:60}];function i(a){const u=y.datas.value.find(c=>c.productId===a.id);if(u){alert(`[${u.name}] 已加入，請直接調整品項數量哦～`);return}y.datas.value.push({...a,count:1,subtotal:a.price,productId:a.id,id:new Date().getTime()})}return(a,u)=>(n(),l("div",D,[(n(),l(v,null,x(e,c=>t("a",{href:"#",class:"list-group-item list-group-item-action",key:c.id,onClick:w(r=>i(c),["prevent"])},[t("div",I,[t("h5",U,s(c.name),1),t("small",null,s(c.price),1)]),t("p",L,s(c.description),1)],8,F)),64))]))}},Q={class:"table"},W=t("thead",null,[t("tr",null,[t("th",{scope:"col",width:"50"},"操作"),t("th",{scope:"col"},"品項"),t("th",{scope:"col"},"描述"),t("th",{scope:"col",width:"90"},"數量"),t("th",{scope:"col"},"單價"),t("th",{scope:"col"},"小計")])],-1),z=["onClick"],E=["onUpdate:modelValue","onChange"],q=N('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>',10),A=[q],G={key:0,class:"alert alert-warning text-center"},H={key:1},J={class:"text-end mb-3"},K={__name:"Cart",setup($){const{datas:e}=y,i=m(""),a=C(()=>e.value.reduce((d,_)=>d+=_.subtotal,0));function u(d){d.subtotal=d.price*d.count}function c(d){const _=e.value.findIndex(o=>o.id===d);e.value.splice(_,1)}function r(){b.datas.value=e.value,b.remark.value=i.value,b.total.value=a.value,i.value="",e.value=[]}return(d,_)=>(n(),l(v,null,[t("table",Q,[W,t("tbody",null,[(n(!0),l(v,null,x(p(e),o=>(n(),l("tr",{key:o.id},[t("td",null,[t("button",{type:"button",class:"btn btn-sm",onClick:f=>c(o.id)}," x ",8,z)]),t("td",null,s(o.name),1),t("td",null,[t("small",null,s(o.description),1)]),t("td",null,[g(t("select",{class:"form-select","onUpdate:modelValue":f=>o.count=f,onChange:f=>u(o)},A,40,E),[[V,o.count]])]),t("td",null,s(o.price),1),t("td",null,s(o.subtotal),1)]))),128))])]),p(e).length<=0?(n(),l("div",G,"請選擇商品")):(n(),l("div",H,[t("div",J,[t("h5",null,[h(" 總計: "),t("span",null,"$"+s(a.value),1)])]),g(t("textarea",{class:"form-control mb-3",rows:"3",placeholder:"備註","onUpdate:modelValue":_[0]||(_[0]=o=>i.value=o)},null,512),[[M,i.value]]),t("div",{class:"text-end"},[t("button",{type:"button",class:"btn btn-primary",onClick:r},"送出")])]))],64))}},P={key:0,class:"alert alert-secondary"},R={key:1,class:"card"},X={class:"card-body"},Y={class:"card-title"},Z=t("h5",null,"訂單",-1),tt={class:"table"},et=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"品項"),t("th",{scope:"col"},"數量"),t("th",{scope:"col"},"小計")])],-1),ot={class:"text-end"},st={class:"text-end"},nt={__name:"Order",setup($){const{datas:e,remark:i,total:a}=b;return(u,c)=>p(e).length<=0?(n(),l("div",P,"尚未建立訂單")):(n(),l("div",R,[t("div",X,[t("div",Y,[Z,t("table",tt,[et,t("tbody",null,[(n(!0),l(v,null,x(p(e),r=>(n(),l("tr",{key:r.id},[t("td",null,s(r.name),1),t("td",null,s(r.count),1),t("td",null,s(r.subtotal),1)]))),128))])]),t("div",ot,[h(" 備註: "),t("span",null,s(p(i)),1)]),t("div",st,[t("h5",null,[h(" 總計: "),t("span",null,"$"+s(p(a)),1)])])])])]))}},lt=t("h2",null,"自己的人生自己寫，各司其職",-1),at=t("p",null,[h(" 風格："),t("br"),h(" 將有需要共用的資料抽成模組，按需求 import 進來用。"),t("br"),h(" 邏輯可以完全寫在各元件中。 ")],-1),ct={class:"container mt-5"},it={class:"row"},dt={class:"col-md-4"},rt={class:"col-md-8"},ut=t("hr",null,null,-1),_t={class:"row justify-content-center"},pt={class:"col-8"},vt={__name:"WorkWeek3_2",setup($){return(e,i)=>(n(),l(v,null,[lt,at,t("div",ct,[t("div",it,[t("div",dt,[k(O)]),t("div",rt,[k(K)])]),ut,t("div",_t,[t("div",pt,[k(nt)])])])],64))}};export{vt as default};
