<script setup>

import Swal from 'sweetalert2';
import { useLoading } from 'vue-loading-overlay';
import { useMyLoading as useLoading1 } from '../kit_samples/loading_overlay/loading1';
import { useMyLoading as useLoading2 } from '../kit_samples/loading_overlay/loading2';
import { useMyLoading as useLoading3, useMyAreaLoading } from '../kit_samples/loading_overlay/loading3';
import { ref } from 'vue';

const $loading = useLoading({
	color: "#00f",
	backgroundColor: "rgba(0,0,123,0.4)",
});

const myLoading1 = useLoading1();
const myLoading2 = useLoading2();
const myLoading3 = useLoading3();
const myAreaLoading = useMyAreaLoading();


/* form */
function formKeydown(event) {
	// console.log(`[form] keydown`);
	// console.log(`[form] event ==>`, event);
}
function formKeypress(event) {
	// console.log(`[form] keypress`);
	// console.log(`[form] event ==>`, event);
}
function formKeyup(event) {
	// console.log(`[form] keyup`);
	// console.log(`[form] event ==>`, event);
}


/* input text */
function inputKeydown(event) {
	console.log(`[input] keydown`);
	console.log(`[input] event ==>`, event);
}
function inputKeypress(event) {
	console.log(`[input] keypress`);
	console.log(`[input] event ==>`, event);
}
function inputKeyup(event) {
	console.log(`[input] keyup`);
	console.log(`[input] event ==>`, event);
}
function inputCompositionstart(event) {
	console.log(`[input] compositionstart`);
	console.log(`[input] event ==>`, event);
}
function inputCompositionupdate(event) {
	console.log(`[input] compositionupdate`);
	console.log(`[input] event ==>`, event);
}
function inputCompositionend(event) {
	console.log(`[input] compositionend`);
	console.log(`[input] event ==>`, event);
}


/* Submit */
function formSubmit(event) {
	console.log(`[form] submit`);
	// console.log(`[form] event ==>`, event);
}

// vue-loading-overlay
function formSubmitWithLoading(event)
{
	const loader = $loading.show();
	console.log(`[form] submit`);
	// console.log(`[form] event ==>`, event);
	
	setTimeout(() => {
		loader.hide();
	}, 5000);
}


/* 改寫成自己的 loading */
// loading 第一版
function testLoading1(event)
{
	console.log(`[form] submit`);
	const myLoader = myLoading1.open();
	// console.log(`[form] event ==>`, event);
	
	setTimeout(() => {
		myLoader.close();
	}, 5000);
}

// loading 第二版
function testLoading2(event)
{
	console.log(`[form] submit`);
	const myLoader = myLoading2.open();
	// console.log(`[form] event ==>`, event);
	
	setTimeout(() => {
		
		Swal.fire({
			title: "訊息測試",
			
			didDestroy() {
				setTimeout(() => {
					myLoader.close();
				}, 2000);
			},
		});
		
	}, 4000);
}

// loading 第三版
function testLoading3(event)
{
	console.log(`[form] submit`);
	const myLoader = myLoading3.open();
	// console.log(`[form] event ==>`, event);
	
	setTimeout(() => {
		
		Swal.fire({
			title: "訊息測試",
			
			didDestroy() {
				setTimeout(() => {
					myLoader.close();
				}, 6000);
			},
		});
		
	}, 4000);
}

// 區域 loading
const formLocal = ref(null);
function testLocalLoading(event)
{
	console.log(`[form] submit`);
	
	const myLoader = myAreaLoading.open({
		container: formLocal.value,
		color: 'red',
		backgroundColor: "rgba(0,0,123,0.4)",
	});
	// console.log(`[form] event ==>`, event);
	
	setTimeout(() => {
		myLoader.close();
	}, 6000);
}

// 區域 loading 2
const formLocal2 = ref(null);
function testLocalLoading2(event)
{
	console.log(`[form] submit`);
	
	const myLoader = myAreaLoading.open({
		container: formLocal2.value,
		color: 'red',
		backgroundColor: "rgba(0,0,123,0.4)",
	});
	// console.log(`[form] event ==>`, event);
	
	setTimeout(() => {
		myLoader.close();
	}, 6000);
}


// alert
function formSubmitWithAlert(event) {
	console.log(`[form] submit`);
	alert("訊息");
}

// SweetAlert
function formSubmitWithSwal(event)
{
	console.log(`[form] submit`);
	// console.log(`[form] event ==>`, event);
	
	Swal.fire({
		title: "訊息",
		// showCloseButton: true,
		focusConfirm: false,
		
		didOpen(popup) {
			popup.addEventListener("keydown", (event) => {
				console.log(`[popup] keydown`);
			});
			popup.addEventListener("keypress", (event) => {
				console.log(`[popup] keypress`);
			});
			popup.addEventListener("keyup", (event) => {
				console.log(`[popup] keyup`);
			});
			popup.addEventListener("click", (event) => {
				console.log(`[popup] click`);
			});
		},
	});
}

// SweetAlert - 不會被輕易關閉的訊息窗
function formSubmitWithSwal2(event)
{
	console.log(`[form] submit`);
	// console.log(`[form] event ==>`, event);
	
	Swal.fire({
		title: "請好好將訊息看完再關閉！",
		allowEscapeKey: false,
		allowOutsideClick: false,
		confirmButtonText: "我知道了",
		didOpen(popup) {
			popup.focus();
			
			popup.addEventListener("keydown", (event) => {
				console.log(`[popup] keydown`);
			});
			popup.addEventListener("keypress", (event) => {
				console.log(`[popup] keypress`);
			});
			popup.addEventListener("keyup", (event) => {
				console.log(`[popup] keyup`);
			});
			popup.addEventListener("click", (event) => {
				console.log(`[popup] click`);
			});
		},
	});
}

</script>

<template>
	<h1 class="h1">測試事件觸發</h1>
	
	<p>
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/EventTest.vue"
			target="_blank"
			>Code</a
		>
	</p>
	
	<hr class="hr mt-0">
	
	<h2 class="h2">基本 form 事件觸發</h2>
	
	<p>連續按 Enter 得連續觸發 submit。</p>
	
	<form action="javascript:alert('form action')" class="box" 
		@keydown="formKeydown" @keypress="formKeypress" @keyup="formKeyup"
		@submit.prevent="formSubmit"
	>
		<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
		<button>提交</button>
	</form>
	
	<hr class="my-5">
	
	
	<h2 class="h2">form 事件觸發 loading</h2>
	<p>測試之後才發現，vue-loading-overlay 竟然沒有防鍵盤操作！</p>
	
	<p>原本的 vue-loading-overlay，使用 Enter 觸發 submit，即使 loading 開啟了也還是可以繼續觸發。</p>
	<form action="javascript:alert('form action')" class="box mb-24" 
		@keydown="formKeydown" @keypress="formKeypress" @keyup="formKeyup"
		@submit.prevent="formSubmitWithLoading"
	>
		<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
		<button>提交</button>
	</form>
	
	
	<h3 class="h3 mt-32">改寫成自己的 loading - 第一版</h3>
	<p>方式：開啟 loading 時，使用 blur 強制動作中的元素脫離焦點。</p>
	<p>問題：按 tab 時依然能聚焦下一個元素並對其操作。</p>
	
	<form action="javascript:alert('form action')" class="box mb-24" 
		@keydown="formKeydown" @keypress="formKeypress" @keyup="formKeyup"
		@submit.prevent="testLoading1"
	>
		<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
		<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
		<button>提交</button>
	</form>
	
	
	<h3 class="h3 mt-32">改寫成自己的 loading - 第二版</h3>
	<p>方式：開啟 loading 時，禁止鍵盤動作，loading 結束後回復允許鍵盤動作。</p>
	<p>問題：無法阻止中文輸入（但也僅僅只能輸入中文，無法做其它動作，因此也不會造成操作異常）。</p>
	
	<p>
		註：原本鍵盤動作是鎖整個 document，但後來發現 SweetAlert2 訊息窗也會變成無法使用鍵盤。<br>
		後來改成鎖 <code>#app</code> div，既能達到鎖整個畫面的需求，也能讓 SWAL 正常操作。
	</p>
	
	<form action="javascript:alert('form action')" class="box mb-24" 
		@keydown="formKeydown" @keypress="formKeypress" @keyup="formKeyup"
		@submit.prevent="testLoading2"
	>
		<input type="text" 
			@keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup" 
			@compositionstart.prevent="inputCompositionstart" 
			@compositionupdate.prevent="inputCompositionupdate" 
			@compositionend.prevent="inputCompositionend"
		>&nbsp;&nbsp;
		<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
		<button>提交</button>
	</form>
	
	
	<h3 class="h3 mt-32">改寫成自己的 loading - 第三版</h3>
	<p>方式：結合第一、二版的做法並改良。</p>
	
	<p>此版本將整頁 loading 與區域 loading 的功能分開，考量點有：</p>
	<ul>
		<li class="mb-1">整頁 loading 的功能相較於區域 loading 要單純許多。</li>
		<li class="mb-1">兩者性質不太一樣，需要考量的東西也不太一樣，混雜在一起寫會讓程式變得不必要的複雜。</li>
		<li class="mb-1">區域 loading 的使用機會較少。</li>
	</ul>
	<p>綜上考量，覺得不需要因為區域 loading 而讓整個程式變得複雜，因此將兩者功能分開。</p>
	
	<p>
		<strong>關閉 loading 時的自動回復元素聚焦效果：</strong><br>
		loading 開啟時，會將原本動作中的元素移除聚焦，以避免使用者繼續對元素動作。<br>
		這邊設計關閉 loading 時，會自動回復元素的聚焦。<br>
		然而回復元素聚焦只是一個嘗試的、實驗性的效果，在實務上未必會需要此效果。<br>
		在我真正用於作品開發時，發現 loading 自帶回復元素聚焦有時反而會干擾我的流程。<br>
		而要不要回復聚焦、或是聚焦在哪個元素，其實我也可以在自己的流程中控制，不需要 loading 自動執行。
	</p>
	
	<h4 class="h4 mb-3 mt-32">整頁 loading</h4>
	<p>構思重點：</p>
	<ul>
		<li class="mb-2">開啟 loading 後，使 loading 取得焦點（原本動作中的元素就會失去焦點），並且禁止鍵盤動作（避免使用 tab）。</li>
		<li class="mb-2">
			開啟 loading 時，禁止 <code>#app</code> div 區域的鍵盤動作，loading 結束後回復允許鍵盤動作。<br>
			此設定主要是為了防範有人使用其它偏方強行進入 loading 下方的畫面區域。
		</li>
	</ul>
	
	<form action="javascript:alert('form action')" class="box mb-24" 
		@keydown="formKeydown" @keypress="formKeypress" @keyup="formKeyup"
		@submit.prevent="testLoading3"
	>
		<input type="text" 
			@keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup" 
			@compositionstart.prevent="inputCompositionstart" 
			@compositionupdate.prevent="inputCompositionupdate" 
			@compositionend.prevent="inputCompositionend"
		>&nbsp;&nbsp;
		<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
		<button>提交</button>
	</form>
	
	
	<h4 class="h4 mb-3 mt-32">區域 loading</h4>
	<p>鍵盤的禁止動作只會限制於 loading 的區域。</p>
	
	<p>構思重點：</p>
	<ul>
		<li class="mb-2">
			區域 loading 只限於某塊區域，使用者依然可以操作其它部份，因此也可以由外部使用 tab 進入 loading 中的區域。<br>
			所以 loading 區域（container）必須禁止鍵盤動作。
		</li>
		<li class="mb-2">
			為了更嚴謹的阻擋，將 container 的 tabindex 設為 0（loading 結束時會回復原值）。<br>
			如此一來，當由外部使用 tab 時，也只能聚焦於 container，無法對其內容做進一步操作（因為 container 已禁止鍵盤動作）。
		</li>
		<li class="mb-2">開啟 loading 後，使 container 取得焦點（原本動作中的元素就會失去焦點）。</li>
		<li class="mb-2">
			對於 loading 關閉後的回復元素聚焦，做了更細緻的考量。<br>
			由於開啟 loading 後仍能對網頁其它部份進行操作，如果關閉 loading 時自動聚焦原本的元素，可能會中斷使用者的操作，造成體驗不佳。<br>
			因此會判斷目前聚焦的元素，是否為 container 或其 loading（代表使用者沒有進行其它操作），是的話才會重新聚焦原本的元素。
		</li>
	</ul>
	
	<div class="vl-parent box mb-24" ref="formLocal" >
		<p>區域 loading 測試 1。</p>
		
		<form action="javascript:alert('form action')" 
			@keydown="formKeydown" @keypress="formKeypress" @keyup="formKeyup"
			@submit.prevent="testLocalLoading"
		>
			<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
			<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
			<button>提交</button>
		</form>
	</div>
	
	<div class="vl-parent box mb-24" ref="formLocal2" tabindex="1">
		<p>區域 loading 測試 2。</p>
		
		<form action="javascript:alert('form action')" 
			@keydown="formKeydown" @keypress="formKeypress" @keyup="formKeyup"
			@submit.prevent="testLocalLoading2"
		>
			<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
			<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
			<button>提交</button>
		</form>
	</div>
	
	<hr class="my-5">
	
	
	<h2 class="h2">form 事件觸發 alert</h2>
	
	<form action="javascript:alert('form action')" class="box" 
		@keydown="formKeydown" @keypress="formKeypress" @keyup="formKeyup"
		@submit.prevent="formSubmitWithAlert"
	>
		<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
		<button>提交</button>
	</form>
	
	<hr class="my-5">
	
	
	<h2 class="h2">form 事件觸發 SweetAlert2</h2>
	
	<p>
		由於 SWAL 預設一定會 focus 在某個 button 上，即使只有 confirm button 並且設定為 <code>focusConfirm: false,</code>，但仍然會 focus confirm button。<br>
		除非把所有 button 都拿掉...<br>
		這會造成——如果使用者持續按著 Enter，就會直接將訊息窗關閉。<br>
		並且，如果使用者再持續按著 Enter，就會再度觸發隱式提交，然後再度開訊息窗、關訊息窗... 動作不斷循環。
	</p>
	
	<form action="javascript:alert('form action')" class="box mb-24" 
		@keydown="formKeydown" @keypress="formKeypress" @keyup="formKeyup"
		@submit.prevent="formSubmitWithSwal"
	>
		<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
		<button>提交</button>
	</form>
	
	<p>
		雖然，我們相信大部份的使用者都不會故意這麼做。<br>
		但一方面，為了避免真的有人惡意為之。<br>
		另一方面，也是為了不想讓使用者太容易就能將訊息關閉，這會提升使用者忽略訊息的機率（根據經驗許多使用者不愛看訊息）。<br>
		因此，可以將訊息窗設定為——只有真的手動點擊了按鈕才會關閉。
	</p>
	
	<form action="javascript:alert('form action')" class="box" 
		@keydown="formKeydown" @keypress="formKeypress" @keyup="formKeyup"
		@submit.prevent="formSubmitWithSwal2"
	>
		<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
		<button>提交</button>
	</form>
	
</template>
