import{a as b,b as e,F as m,o as p}from"./index-Cw4RCaRR.js";const k={class:"box d-flex flex-wrap gap-3"},y={__name:"CookieTest",setup(C){function i(){document.cookie="test1=Hello",document.cookie="test2=World"}function l(){document.cookie="userName=Tom; max-age=300"}function u(){const o=document.cookie;console.log("allCookies ==>",o)}function r(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)test1\s*\=\s*([^;]*).*$)|^.*$/,"$1"),t=document.cookie.replace(/(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log("test1 ==>",o),console.log("test2 ==>",t)}function a(){const o=new Date;o.setMinutes(o.getMinutes()+1),document.cookie=`test1=Hello; expires=${o.toUTCString()}`}function n(o){document.cookie=`${o}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`}function c(o){document.cookie=`${o}=; max-age=0`}return(o,t)=>(p(),b(m,null,[t[3]||(t[3]=e("h1",{class:"h1"},"cookie",-1)),t[4]||(t[4]=e("p",null,[e("a",{href:"https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/CookieTest.vue",target:"_blank"},"Code")],-1)),t[5]||(t[5]=e("hr",{class:"hr mt-0"},null,-1)),t[6]||(t[6]=e("h2",null,"基本測試",-1)),e("div",k,[e("button",{type:"button",class:"btn btn-outline-primary",onClick:i}," 建立 session cookie（test1、test2） "),e("button",{type:"button",class:"btn btn-outline-primary",onClick:l}," 建立維持 5 分鐘的 cookie（userName） "),e("button",{type:"button",class:"btn btn-outline-primary",onClick:u}," 查看所有 cookie "),e("button",{type:"button",class:"btn btn-outline-primary",onClick:r}," 查看 test1、test2 "),e("button",{type:"button",class:"btn btn-outline-primary",onClick:a}," 更新 test1 期限為一分鐘 "),e("button",{type:"button",class:"btn btn-outline-primary",onClick:t[0]||(t[0]=s=>n("test1"))}," 刪除 test1 "),e("button",{type:"button",class:"btn btn-outline-primary",onClick:t[1]||(t[1]=s=>n("test2"))}," 刪除 test2 "),e("button",{type:"button",class:"btn btn-outline-primary",onClick:t[2]||(t[2]=s=>c("userName"))}," 刪除 userName ")])],64))}};export{y as default};
