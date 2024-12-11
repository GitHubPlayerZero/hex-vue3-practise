import{a as u,c as i,b as e,e as s,w as l,F as p,o as d}from"./index-BSaWcvpw.js";const b={class:"fieldset mb-44"},r={class:"box mb-20",method:"get",action:""},a={class:"box mb-20",method:"get",action:""},f={class:"fieldset mb-32"},v={class:"box mb-20"},g={class:"box mb-20"},C={__name:"VOn",setup(k){function n(){console.log("觸發了 click")}function o(){console.log("新的 submit 動作")}function m(){console.log("觸發了連結")}return(x,t)=>(d(),u(p,null,[t[25]||(t[25]=i('<h1 class="h1">v-on</h1><p><a href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/VOn.vue" target="_blank">Code</a></p><hr class="hr mt-0"><h2 class="h2">修飾符 .prevent</h2><h3 class="h3">阻止 submit</h3>',5)),e("fieldset",{class:"fieldset mb-32"},[t[5]||(t[5]=e("legend",null,"正常可以 submit 的 form",-1)),e("form",{method:"get",action:""},[t[3]||(t[3]=e("label",null,[s(" 姓名：  "),e("input",{type:"text",name:"name"})],-1)),t[4]||(t[4]=s("     ")),e("input",{type:"submit",onClick:n,value:"送出"})])]),e("fieldset",{class:"fieldset mb-32"},[t[8]||(t[8]=e("legend",null,"早期使用 JS 阻止 submit 的做法",-1)),e("form",{method:"get",action:"javascript:void(0)"},[t[6]||(t[6]=e("label",null,[s(" 姓名： "),e("input",{type:"text",name:"name"})],-1)),t[7]||(t[7]=s("     ")),e("input",{type:"submit",onClick:n,value:"送出"})])]),e("fieldset",b,[t[21]||(t[21]=e("legend",null,"使用 v-on 修飾符：.prevent",-1)),e("form",r,[t[9]||(t[9]=e("p",{class:"desc"},"加在 button click 事件",-1)),t[10]||(t[10]=e("label",null,[s(" 姓名： "),e("input",{type:"text",name:"name"})],-1)),t[11]||(t[11]=s("     ")),e("input",{type:"submit",onClick:t[0]||(t[0]=l(()=>{},["prevent"])),value:"送出"})]),e("form",a,[t[12]||(t[12]=e("p",{class:"desc"},"阻止 click 預設事件之外，還可以指定執行新的動作。",-1)),t[13]||(t[13]=e("label",null,[s(" 姓名： "),e("input",{type:"text",name:"name"})],-1)),t[14]||(t[14]=s("     ")),e("input",{type:"submit",onClick:l(n,["prevent"]),value:"送出"})]),e("form",{class:"box mb-20",method:"get",action:"",onSubmit:t[1]||(t[1]=l(()=>{},["prevent"]))},[t[15]||(t[15]=e("p",{class:"desc"},"加在 form submit 事件",-1)),t[16]||(t[16]=e("label",null,[s(" 姓名： "),e("input",{type:"text",name:"name"})],-1)),t[17]||(t[17]=s("     ")),e("input",{type:"submit",onClick:n,value:"送出"})],32),e("form",{class:"box mb-20",method:"get",action:"",onSubmit:l(o,["prevent"])},[t[18]||(t[18]=e("p",{class:"desc"},"阻止 submit 預設事件之外，還可以指定執行新的動作。",-1)),t[19]||(t[19]=e("label",null,[s(" 姓名： "),e("input",{type:"text",name:"name"})],-1)),t[20]||(t[20]=s("     ")),e("input",{type:"submit",onClick:n,value:"送出"})],32)]),t[26]||(t[26]=i('<h3 class="h3">阻止連結</h3><fieldset class="fieldset mb-32"><legend>正常可以執行的連結</legend><a href="">我是連結</a></fieldset><fieldset class="fieldset mb-32"><legend>早期使用 JS 阻止連結的做法</legend><a href="javascript:void(0)">我是連結</a></fieldset>',3)),e("fieldset",f,[t[24]||(t[24]=e("legend",null,"使用 v-on 修飾符：.prevent",-1)),e("div",v,[t[22]||(t[22]=e("p",{class:"desc"},"加在 button click 事件",-1)),e("a",{href:"",onClick:t[2]||(t[2]=l(()=>{},["prevent"]))},"我是連結")]),e("div",g,[t[23]||(t[23]=e("p",{class:"desc"},"阻止 click 預設事件之外，還可以指定執行新的動作。",-1)),e("a",{href:"",onClick:l(m,["prevent"])},"我是連結")])])],64))}};export{C as default};