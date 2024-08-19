var I=Object.defineProperty;var U=i=>{throw TypeError(i)};var M=(i,n,c)=>n in i?I(i,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):i[n]=c;var A=(i,n,c)=>M(i,typeof n!="symbol"?n+"":n,c),V=(i,n,c)=>n.has(i)||U("Cannot "+c);var D=(i,n,c)=>(V(i,n,"read from private field"),c?c.call(i):n.get(i)),q=(i,n,c)=>n.has(i)?U("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(i):n.set(i,c),S=(i,n,c,p)=>(V(i,n,"write to private field"),p?p.call(i,c):n.set(i,c),c);import{C,f as m,a as u,b as t,j as h,v,e as b,t as r,B as g,i as y,F as $,h as N,y as T,T as B,o as d}from"./index-BQDHOZvY.js";import{a as f}from"./axios-DTyqpfTh.js";const P=t("h2",{class:"h2"},"使用者",-1),j=t("h3",{class:"h3"},"註冊",-1),F={class:"d-flex flex-column row-gap-2 mb-28"},L=t("label",{for:"registerEmail"},"Email：",-1),O=t("label",{for:"registerPassword"},"密碼：",-1),W=t("label",{for:"registerNickname"},"暱稱：",-1),H=t("button",{type:"submit",class:"btn btn-primary"},"註冊",-1),G={class:"overflow-x-auto mt-3"},J={key:0,class:"text-success"},K=t("br",null,null,-1),Q={key:1,class:"text-danger"},R=t("h3",{class:"h3"},"登入",-1),X={class:"d-flex flex-column row-gap-2 mb-28"},Y=t("label",{for:"loginEmail"},"Email：",-1),Z=t("label",{for:"loginPassword"},"密碼：",-1),ee=t("button",{type:"submit",class:"btn btn-primary"},"登入",-1),te={class:"overflow-x-auto mt-3"},se={key:0,class:"text-success"},oe={key:1,class:"text-danger"},le=t("h3",{class:"h3"},"驗證",-1),ae={class:"box mb-32"},ie={class:"overflow-x-auto mt-3"},ne={key:0,class:"text-success"},re=t("br",null,null,-1),ue={key:1,class:"text-danger"},de=t("h3",{class:"h3"},"登出",-1),ce={class:"box mb-32"},me={class:"overflow-x-auto mt-3"},pe={key:0,class:"text-success"},he={key:1,class:"text-danger"},ve=t("hr",{class:"hr"},null,-1),ge=t("h2",{class:"h2"},"代辧事項",-1),fe=t("h3",{class:"h3"},"取得所有代辦事項",-1),_e={class:"box mb-32"},be={class:"overflow-x-auto mt-3"},xe={key:0,class:"text-danger"},ye=["onClick"],ke=t("h3",{class:"h3"},"新增代辦事項",-1),we=t("button",{type:"submit",class:"btn btn-primary"},"新增",-1),$e={class:"overflow-x-auto mt-3"},Ue={key:0,class:"text-success"},Ae={key:1,class:"text-danger"},Ve=t("h3",{class:"h3"},"更新代辦事項",-1),De={class:"d-flex flex-column row-gap-2 mb-28"},qe=t("button",{type:"submit",class:"btn btn-primary"},"更新",-1),Se={class:"overflow-x-auto mt-3"},Ce={key:0,class:"text-success"},Te={key:1,class:"text-danger"},ze=t("h3",{class:"h3"},"刪除代辦事項",-1),Ee={class:"d-flex flex-column row-gap-2 mb-28"},Ie=t("button",{type:"submit",class:"btn btn-primary"},"刪除",-1),Me={class:"overflow-x-auto mt-3"},Ne={key:0,class:"text-success"},Be={key:1,class:"text-danger"},Pe=t("h3",{class:"h3"},"切換代辦事項狀態",-1),je={class:"d-flex flex-column row-gap-2 mb-28"},Fe=t("button",{type:"submit",class:"btn btn-primary"},"切換",-1),Le={class:"overflow-x-auto mt-3"},Oe={key:0,class:"text-success"},We={key:1,class:"text-danger"},He={class:"position-fixed top-0 end-0 p-2"},Ge={class:"toast bg-warning bg-opacity-50 w-auto py-1 px-3",role:"alert","aria-live":"assertive","aria-atomic":"true",id:"toast"},Je={class:"toast-body text-success text-bold"},Ke={class:"p-2 px-3 text-danger bg-info bg-opacity-50 position-fixed bottom-0 end-0",style:{width:"300px"}},_="https://todolist-api.hexschool.io",Ze={__name:"WorkWeek2",setup(i){var k;class n{constructor(e,x){A(this,"message",m(""));q(this,k,{});S(this,k,new B(e)),this.message.value=x}show(e){e&&(this.message.value=e),D(this,k).show()}}k=new WeakMap;let c;C(()=>{const o=document.querySelector("#toast");c=new n(o,"拷 貝 成 功 ！")});const p={token:m(""),add(o){const e=new Date;e.setDate(e.getDate()+1),e.setHours(1),e.setMinutes(0),e.setSeconds(0),document.cookie=`hex_todo=${o}; expires=${e.toUTCString()}`},get(){return document.cookie.replace(/(?:(?:^|.*;\s*)hex_todo\s*\=\s*([^;]*).*$)|^.*$/,"$1")},remove(){document.cookie="hex_todo=; max-age=0"},addAndUpdate(o){this.add(o),this.getAndUpdate()},getAndUpdate(){const o=this.get();return this.token.value=o||"請先登入！",o}},z=function(){const o=navigator.clipboard;function e(x){o.writeText(x).then(()=>{c.show()}).catch(w=>{console.error(w)})}return{copy:e}}(),a={register:{form:m({email:"exam@gmail.com",password:"123456",nickname:"example"}),result:m({}),do(){console.log("[register] form ==>",this.form.value),f.post(`${_}/users/sign_up`,this.form.value).then(o=>{console.log("res ==>",o),this.result.value={success:o.data.uid}}).catch(o=>{console.error(o),this.result.value={fail:o.response.data.message}})}},login:{form:m({email:"exam@gmail.com",password:"123456"}),result:m({}),do(){console.log("[login] form ==>",this.form.value),f({method:"post",url:`${_}/users/sign_in`,data:this.form.value}).then(o=>{console.log("res ==>",o),p.addAndUpdate(o.data.token),this.result.value={success:"登入成功！"}}).catch(o=>{console.error(o),this.result.value={fail:o.response.data.message}})}},verification:{result:m({}),do(){const o=p.getAndUpdate();if(!o){this.result.value={fail:"請先登入！"};return}f({url:`${_}/users/checkout`,headers:{authorization:o}}).then(e=>{console.log("res ==>",e),this.result.value={success:e.data.uid}}).catch(e=>{console.error(e),this.result.value={fail:e.response.data.message}})}},logout:{result:m({}),do(){const o=p.getAndUpdate();if(!o){this.result.value={fail:"您尚未登入！"};return}f({method:"post",url:`${_}/users/sign_out`,headers:{authorization:o}}).then(e=>{console.log("res ==>",e),this.result.value={success:e.data.message},p.remove(),p.getAndUpdate()}).catch(e=>{console.error(e),this.result.value={fail:e.response.data.message}})}}},s={getter:{result:m({}),do(){const o=p.getAndUpdate();if(!o){this.result.value={fail:"請先登入！"};return}f({method:"get",url:`${_}/todos/`,headers:{authorization:o}}).then(e=>{console.log("res ==>",e),this.result.value={data:e.data.data}}).catch(e=>{console.error(e),this.result.value={fail:e.response.data.message}})}},creation:{form:m({content:""}),result:m({}),do(){const o=p.getAndUpdate();if(!o){this.result.value={fail:"請先登入！"};return}f({method:"post",url:`${_}/todos/`,data:this.form.value,headers:{authorization:o}}).then(e=>{console.log("res ==>",e),this.result.value={success:e.data.newTodo},s.getter.do()}).catch(e=>{console.error(e),this.result.value={fail:e.response.data.message}})}},update:{form:m({id:"",content:""}),result:m({}),do(){const o=p.getAndUpdate();if(!o){this.result.value={fail:"請先登入！"};return}f.put(`${_}/todos/${this.form.value.id}`,{content:this.form.value.content},{headers:{authorization:o}}).then(e=>{console.log("res ==>",e),this.result.value={success:e.data.message},s.getter.do()}).catch(e=>{console.error(e),this.result.value={fail:e.response.data.message}})}},deletion:{form:m({id:""}),result:m({}),do(){const o=p.getAndUpdate();if(!o){this.result.value={fail:"請先登入！"};return}f.delete(`${_}/todos/${this.form.value.id}`,{headers:{authorization:o}}).then(e=>{console.log("res ==>",e),this.result.value={success:e.data.message},s.getter.do()}).catch(e=>{console.error(e),this.result.value={fail:e.response.data.message}})}},toggle:{form:m({id:""}),result:m({}),do(){const o=p.getAndUpdate();if(!o){this.result.value={fail:"請先登入！"};return}f({method:"patch",url:`${_}/todos/${this.form.value.id}/toggle`,data:this.form.value,headers:{authorization:o}}).then(e=>{console.log("res ==>",e),this.result.value={success:e.data.message},s.getter.do()}).catch(e=>{console.error(e),this.result.value={fail:e.response.data.message}})}}};return C(()=>{p.getAndUpdate()}),(o,e)=>{var x,w;return d(),u($,null,[P,j,t("form",{class:"box mb-32",onSubmit:e[3]||(e[3]=y((...l)=>a.register.do&&a.register.do(...l),["prevent"]))},[t("div",F,[t("div",null,[L,h(t("input",{type:"email",id:"registerEmail","onUpdate:modelValue":e[0]||(e[0]=l=>a.register.form.value.email=l),required:""},null,512),[[v,a.register.form.value.email]])]),t("div",null,[O,h(t("input",{type:"text",id:"registerPassword","onUpdate:modelValue":e[1]||(e[1]=l=>a.register.form.value.password=l),required:""},null,512),[[v,a.register.form.value.password]])]),t("div",null,[W,h(t("input",{type:"text",id:"registerNickname","onUpdate:modelValue":e[2]||(e[2]=l=>a.register.form.value.nickname=l),required:""},null,512),[[v,a.register.form.value.nickname]])])]),H,t("div",G,[a.register.result.value.success?(d(),u("p",J,[b(" 註冊成功！"),K,b(" UID："+r(`${a.register.result.value.success}`),1)])):a.register.result.value.fail?(d(),u("p",Q," 註冊失敗："+r(`${a.register.result.value.fail}`),1)):g("",!0)])],32),R,t("form",{class:"box mb-32",onSubmit:e[6]||(e[6]=y((...l)=>a.login.do&&a.login.do(...l),["prevent"]))},[t("div",X,[t("div",null,[Y,h(t("input",{type:"email",id:"loginEmail","onUpdate:modelValue":e[4]||(e[4]=l=>a.login.form.value.email=l),required:""},null,512),[[v,a.login.form.value.email]])]),t("div",null,[Z,h(t("input",{type:"text",id:"loginPassword","onUpdate:modelValue":e[5]||(e[5]=l=>a.login.form.value.password=l),required:""},null,512),[[v,a.login.form.value.password]])])]),ee,t("div",te,[a.login.result.value.success?(d(),u("p",se,r(a.login.result.value.success),1)):a.login.result.value.fail?(d(),u("p",oe," 登入失敗："+r(`${a.login.result.value.fail}`),1)):g("",!0)])],32),le,t("section",ae,[t("button",{type:"button",class:"btn btn-primary",onClick:e[7]||(e[7]=(...l)=>a.verification.do&&a.verification.do(...l))},"驗證"),t("div",ie,[a.verification.result.value.success?(d(),u("p",ne,[b(" 驗證成功！"),re,b(" UID："+r(`${a.verification.result.value.success}`),1)])):a.verification.result.value.fail?(d(),u("p",ue," 驗證失敗："+r(`${a.verification.result.value.fail}`),1)):g("",!0)])]),de,t("section",ce,[t("button",{type:"button",class:"btn btn-primary",onClick:e[8]||(e[8]=(...l)=>a.logout.do&&a.logout.do(...l))},"登出"),t("div",me,[a.logout.result.value.success?(d(),u("p",pe,r(`${a.logout.result.value.success}`),1)):a.logout.result.value.fail?(d(),u("p",he," 登出失敗："+r(`${a.logout.result.value.fail}`),1)):g("",!0)])]),ve,ge,fe,t("section",_e,[t("button",{type:"button",class:"btn btn-primary",onClick:e[9]||(e[9]=(...l)=>s.getter.do&&s.getter.do(...l))}," 取得代辦事項 "),t("div",be,[s.getter.result.value.fail?(d(),u("p",xe," 失敗："+r(`${s.getter.result.value.fail}`),1)):s.getter.result.value.data?(d(),u($,{key:1},[b(" 資料筆數："+r((x=s.getter.result.value.data)==null?void 0:x.length)+" ",1),(d(!0),u($,null,N(s.getter.result.value.data,(l,E)=>(d(),u("div",{class:"mb-2",key:l.createTime},[b(r(E)+": "+r(l)+"   ",1),t("button",{type:"button",onClick:Qe=>T(z).copy(l.id),class:"btn btn-outline-success btn-sm"}," 複製 ID ",8,ye)]))),128))],64)):g("",!0)])]),ke,t("form",{class:"box mb-32",onSubmit:e[11]||(e[11]=y((...l)=>s.creation.do&&s.creation.do(...l),["prevent"]))},[t("div",null,[h(t("input",{type:"text","onUpdate:modelValue":e[10]||(e[10]=l=>s.creation.form.value.content=l),placeholder:"請輸入待辦事項",style:{width:"80%"},required:""},null,512),[[v,s.creation.form.value.content]]),b("    "),we]),t("div",$e,[s.creation.result.value.success?(d(),u("p",Ue,r(s.creation.result.value.success),1)):s.creation.result.value.fail?(d(),u("p",Ae," 失敗："+r(`${s.creation.result.value.fail}`),1)):g("",!0)])],32),Ve,t("form",{class:"box mb-32",onSubmit:e[14]||(e[14]=y((...l)=>s.update.do&&s.update.do(...l),["prevent"]))},[t("div",De,[t("div",null,[h(t("input",{type:"text","onUpdate:modelValue":e[12]||(e[12]=l=>s.update.form.value.id=l),placeholder:"請輸入 ID",style:{width:"250px"},required:""},null,512),[[v,s.update.form.value.id]])]),t("div",null,[h(t("input",{type:"text","onUpdate:modelValue":e[13]||(e[13]=l=>s.update.form.value.content=l),placeholder:"請輸入待辦事項",style:{width:"80%"},required:""},null,512),[[v,s.update.form.value.content]])])]),qe,t("div",Se,[s.update.result.value.success?(d(),u("p",Ce,r(s.update.result.value.success),1)):s.update.result.value.fail?(d(),u("p",Te," 失敗："+r(`${s.update.result.value.fail}`),1)):g("",!0)])],32),ze,t("form",{class:"box mb-32",onSubmit:e[16]||(e[16]=y((...l)=>s.deletion.do&&s.deletion.do(...l),["prevent"]))},[t("div",Ee,[t("div",null,[h(t("input",{type:"text","onUpdate:modelValue":e[15]||(e[15]=l=>s.deletion.form.value.id=l),placeholder:"請輸入 ID",style:{width:"250px"},required:""},null,512),[[v,s.deletion.form.value.id]])])]),Ie,t("div",Me,[s.deletion.result.value.success?(d(),u("p",Ne,r(s.deletion.result.value.success),1)):s.deletion.result.value.fail?(d(),u("p",Be," 失敗："+r(`${s.deletion.result.value.fail}`),1)):g("",!0)])],32),Pe,t("form",{class:"box mb-32",onSubmit:e[18]||(e[18]=y((...l)=>s.toggle.do&&s.toggle.do(...l),["prevent"]))},[t("div",je,[t("div",null,[h(t("input",{type:"text","onUpdate:modelValue":e[17]||(e[17]=l=>s.toggle.form.value.id=l),placeholder:"請輸入 ID",style:{width:"250px"},required:""},null,512),[[v,s.toggle.form.value.id]])])]),Fe,t("div",Le,[s.toggle.result.value.success?(d(),u("p",Oe,r(s.toggle.result.value.success),1)):s.toggle.result.value.fail?(d(),u("p",We," 失敗："+r(`${s.toggle.result.value.fail}`),1)):g("",!0)])],32),t("div",He,[t("div",Ge,[t("div",Je,r((w=T(c))==null?void 0:w.message),1)])]),t("div",Ke,r(p.token),1)],64)}}};export{Ze as default};