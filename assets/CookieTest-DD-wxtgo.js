import{a as b,b as t,F as m,o as p}from"./index-rHGCrLlo.js";const k=t("h1",{class:"h1"},"cookie",-1),d=t("p",null,[t("a",{href:"https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/CookieTest.vue",target:"_blank"},"Code")],-1),C=t("h2",null,"基本測試",-1),y={class:"box d-flex flex-wrap gap-3"},g={__name:"CookieTest",setup(f){function i(){document.cookie="test1=Hello",document.cookie="test2=World"}function c(){document.cookie="userName=Tom; max-age=300"}function l(){const e=document.cookie;console.log("allCookies ==>",e)}function u(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)test1\s*\=\s*([^;]*).*$)|^.*$/,"$1"),o=document.cookie.replace(/(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log("test1 ==>",e),console.log("test2 ==>",o)}function a(){const e=new Date;e.setMinutes(e.getMinutes()+1),document.cookie=`test1=Hello; expires=${e.toUTCString()}`}function n(e){document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`}function r(e){document.cookie=`${e}=; max-age=0`}return(e,o)=>(p(),b(m,null,[k,d,C,t("div",y,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:i}," 建立 session cookie（test1、test2） "),t("button",{type:"button",class:"btn btn-outline-primary",onClick:c}," 建立維持 5 分鐘的 cookie（userName） "),t("button",{type:"button",class:"btn btn-outline-primary",onClick:l}," 查看所有 cookie "),t("button",{type:"button",class:"btn btn-outline-primary",onClick:u}," 查看 test1、test2 "),t("button",{type:"button",class:"btn btn-outline-primary",onClick:a}," 更新 test1 期限為一分鐘 "),t("button",{type:"button",class:"btn btn-outline-primary",onClick:o[0]||(o[0]=s=>n("test1"))}," 刪除 test1 "),t("button",{type:"button",class:"btn btn-outline-primary",onClick:o[1]||(o[1]=s=>n("test2"))}," 刪除 test2 "),t("button",{type:"button",class:"btn btn-outline-primary",onClick:o[2]||(o[2]=s=>r("userName"))}," 刪除 userName ")])],64))}};export{g as default};
