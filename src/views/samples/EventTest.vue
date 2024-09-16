<script setup>

import Swal from 'sweetalert2';
import { useLoading } from 'vue-loading-overlay';
import { useMyLoading } from '../kit_samples/loading_overlay/loading';
import { ref } from 'vue';

const $loading = useLoading({
	color: "#00f",
	backgroundColor: "rgba(0,0,123,0.4)",
});

const myLoading = useMyLoading();


/* form */
function formKeydown(event) {
	console.log(`[form] keydown`);
	// console.log(`[form] event ==>`, event);
}
function formKeypress(event) {
	console.log(`[form] keypress`);
	// console.log(`[form] event ==>`, event);
}
function formKeyup(event) {
	console.log(`[form] keyup`);
	// console.log(`[form] event ==>`, event);
}


/* input text */
function inputKeydown(event) {
	console.log(`[input text] keydown`);
	// console.log(`[input text] event ==>`, event);
}
function inputKeypress(event) {
	console.log(`[input text] keypress`);
	// console.log(`[input text] event ==>`, event);
}
function inputKeyup(event) {
	console.log(`[input text] keyup`);
	// console.log(`[input text] event ==>`, event);
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

// my loading
function formSubmitWithMyLoading(event)
{
	const myLoader = myLoading.open();
	console.log(`[form] submit`);
	// console.log(`[form] event ==>`, event);
	
	setTimeout(() => {
		myLoader.close();
	}, 5000);
}

// 區域 loading
const formLocal = ref(null);
function formSubmitWithMyLoadingLocal(event)
{
	const myLoader = myLoading.open({
		container: formLocal.value,
		color: 'red',
		backgroundColor: "rgba(0,0,123,0.4)",
	});
	console.log(`[form] submit`);
	// console.log(`[form] event ==>`, event);
	
	setTimeout(() => {
		myLoader.close();
	}, 5000);
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
	
	<p>改寫成自己的 loading。</p>
	<form action="javascript:alert('form action')" class="box mb-24" 
		@keydown="formKeydown" @keypress="formKeypress" @keyup="formKeyup"
		@submit.prevent="formSubmitWithMyLoading"
	>
		<input type="text" @keydown="inputKeydown" @keypress="inputKeypress" @keyup="inputKeyup">&nbsp;&nbsp;
		<button>提交</button>
	</form>
	
	<div class="vl-parent box mb-24">
		<p>區域 loading 測試。</p>
		
		<form action="javascript:alert('form action')" 
			ref="formLocal"
			@keydown="formKeydown" @keypress="formKeypress" @keyup="formKeyup"
			@submit.prevent="formSubmitWithMyLoadingLocal"
		>
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
