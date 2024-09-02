<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<h1 class="h1">吐司訊息（Toast）</h1>
	<p>
		<a href="https://bootstrap5.hexschool.com/docs/5.1/components/toasts/" target="_blank">
			Bootstrap 文件
		</a>
	</p>

	<hr class="hr mt-0" />

	<h2 class="h2">手動觸發 Bootstrap JS</h2>

	<div>
		<button type="button" class="btn btn-primary" @click="showToast1">顯示吐司訊息</button>

		<!-- 利用外層做定位、調整位置 -->
		<div class="position-fixed bottom-0 end-0 p-4">
			<!-- 吐司訊息本體 -->
			<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="toast1">
				<div class="toast-header text-primary text-bold">吐司 1</div>
				<div class="toast-body">我是吐司的 body，我很好吃。</div>
			</div>
		</div>
	</div>

	<hr class="hr" />

	<h2 class="h2">手動設定 class</h2>
	<p>
		觀察吐司訊息 出現／消失 時，其 class 會呈現 show／hide 的狀態，因此我們也可以直接操作 class
		來達到效果。
	</p>

	<p class="mb-1">但是以這樣的方式操作時，會失去一些原本的效果：</p>
	<ol>
		<li>訊息淡入淡出的效果。</li>
		<li>滑鼠停留在訊息上時，可以讓訊息保持不關閉。</li>
	</ol>

	<fieldset class="fieldset mb-32">
		<legend>測試一</legend>
		<p>手動設定 class 以開／關訊息</p>

		<button type="button" class="btn btn-primary" @click="isShowToast2 = !isShowToast2">
			{{ isShowToast2 ? '隱藏' : '顯示' }}吐司訊息
		</button>

		<div class="position-fixed bottom-0 end-0 p-4">
			<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="toast2">
				<div class="toast-header text-primary text-bold">吐司 2</div>
				<div class="toast-body">我是吐司的 body，我很好吃。</div>
			</div>
		</div>
	</fieldset>

	<fieldset class="fieldset mb-32">
		<legend>測試二</legend>
		<p>
			手動設定 class 以開啟訊息，並且三秒後自動關閉。<br />
			計息存在期間，再度點擊顯示，時間會重算。
		</p>

		<button type="button" class="btn btn-primary" @click="showToast3">顯示吐司訊息</button>

		<div class="position-fixed bottom-0 end-0 p-4">
			<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="toast3">
				<div class="toast-header text-primary text-bold">吐司 3</div>
				<div class="toast-body">我是吐司的 body，我很好吃。</div>
			</div>
		</div>
	</fieldset>

	<hr class="hr" />

	<h2>堆疊訊息</h2>

	<div class="mb-32">
		<button type="button" class="btn btn-primary" @click="isShowToast4 = !isShowToast4">
			{{ isShowToast4 ? '隱藏' : '顯示' }}吐司訊息
		</button>

		<div class="toast-container position-fixed bottom-0 end-0 p-4" id="toast4">
			<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
				<div class="toast-header text-primary text-bold">吐司 4-1</div>
				<div class="toast-body">我是吐司的 body，我很好吃。</div>
			</div>
			<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
				<div class="toast-header text-primary text-bold">吐司 4-2</div>
				<div class="toast-body">我是吐司的 body，我很好吃。</div>
			</div>
			<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
				<div class="toast-header text-primary text-bold">吐司 4-3</div>
				<div class="toast-body">我是吐司的 body，我很好吃。</div>
			</div>
		</div>
	</div>

	<h3 class="h3">以陣列資料動態產生訊息</h3>
	<p>吐司 class 預設為 show，訊息塊由陣列迴圈產出。</p>
	<p>陣列：{{ toasts }}</p>

	<div class="box mb-24">
		<button type="button" class="btn btn-primary" @click="addToast">加入吐司訊息</button>
		&nbsp;&nbsp;
		<button type="button" class="btn btn-secondary" @click="removeToast">移除吐司訊息</button>
		
		<div class="toast-container position-fixed bottom-0 end-0 p-4" id="toast4">
			<div
				v-for="(toast, index) in toasts"
				:key="index"
				class="toast show"
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class="toast-header text-primary text-bold">吐司 5-{{ index }}</div>
				<div class="toast-body">{{ toast }}</div>
			</div>
		</div>
	</div>
	
	<fieldset class="fieldset">
		<legend>三秒後會自動移除</legend>
		<button type="button" class="btn btn-primary" @click="addTemporaryToast">加入吐司訊息</button>
	</fieldset>

</template>

<script setup>
import { ref, watch } from 'vue';
import { Toast } from 'bootstrap';

// 手動觸發 Bootstrap JS
function showToast1() {
	const elmt = document.querySelector('#toast1');
	const toastObj = new Toast(elmt);
	toastObj.show();
}

// 手動設定 class - 測試一
const isShowToast2 = ref(false);
// eslint-disable-next-line no-unused-vars
watch(isShowToast2, (newVal, oldVal) => {
	document.querySelector('#toast2').classList.toggle('show');
});

// 手動設定 class - 測試二
let timeoutId;
function showToast3() {
	const elmt = document.querySelector('#toast3');

	// 前一次尚未 timeout，先將之清除
	if (timeoutId) {
		console.log(`中斷前次執行 ...`);
		elmt.classList.remove('show');
		clearTimeout(timeoutId);
		timeoutId = undefined;
	}

	elmt.classList.add('show');

	timeoutId = setTimeout(() => {
		console.log(`remove toast ...`);
		elmt.classList.remove('show');
		timeoutId = undefined;
	}, 3000);
}

// 堆疊訊息
const isShowToast4 = ref(false);
// eslint-disable-next-line no-unused-vars
watch(isShowToast4, (newVal, oldVal) => {
	const elmts = document.querySelectorAll('#toast4 > .toast');
	elmts.forEach((item) => {
		item.classList.toggle('show');
	});
});

// 以陣列資料動態產生訊息
const toasts = ref([]);
function addToast() {
	toasts.value.push(new Date().getTime());
}
function removeToast() {
	toasts.value.shift();
}

// 三秒後會自動移除訊息
function addTemporaryToast() {
	toasts.value.push(new Date().getTime());
	
	setTimeout(() => {
		toasts.value.shift();
	}, 3000);
}
</script>
