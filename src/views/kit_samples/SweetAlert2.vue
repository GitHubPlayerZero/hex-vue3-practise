<script setup>
import Swal from 'sweetalert2';

/* 基本範例 */
// 基本訊息
function alertBasic() {
	Swal.fire('這是最基本的訊息窗！');
}

// icon、title、text
function alertIconTitleText() {
	
	// 寫法一
	Swal.fire({
		icon: 'question',
		title: '<p style="color: red;">這是 title，可以寫 HTML</p>',
		text: '<p>這是 text，不能寫 HTML</p>',
	});
	
	// 寫法二
	// 註解起來，若同時寫兩個 alert，後面會蓋掉前面。
	// Swal.fire(
	// 	'<p style="color: red;">這是 title 2，可以寫 HTML</p>',	// title
	// 	'<p>這是 text 2，不能寫 HTML</p>',	// text
	// 	'info'	// icon
	// );
}

// footer
function alertFooter() {
	Swal.fire({
		icon: 'error',
		title: '這是 title',
		text: '這是 text',
		footer: '<p style="color: blue;">這是 footer，可以寫 HTML。</p>',
	});
}

// 設定 color
function alertColor() {
	Swal.fire({
		title: '這是 title',
		text: '這是 text',
		footer: '這是 footer，<span style="color: blue;">可以寫 style 把 color 蓋掉</span>。',
		color: "red",	// 會影响所有文字顏色
	});
}

// 圖片
function alertImg() {
	Swal.fire({
		imageUrl: 'https://images.unsplash.com/photo-1724141973274-f3a90b9aa7d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		imageWidth: 300,
		// imageHeight: 1200,
		imageAlt: 'A tall image',
		
		icon: 'info',
		title: '這是 title',
		text: '這是 text',
	});
}

// 自訂義 HTML
function alertCustomHtml() {
	Swal.fire({
		title: '<h2 class="text-danger">這是 H2 title</h2>',
		text: '這是 text',	// 因為有定義 html 屬性，因此 text 屬性不會有作用。
		html: `
			<p>這是 html 內容。</p>
			<p>
				你可以查看 
				<a href="https://sweetalert2.github.io/#examples" target="_blank">
					SweetAlert2 範例
				</a>
				。
			</p>
			<p>
				當同時定義了 text 和 html 屬性時，僅會使用 html 屬性內容。
			</p>
		`,
	});
}

// 只能點擊 button 關閉視窗
function alertOnlyButtonClose() {
	Swal.fire({
		title: '這是 title',
		text: '只能點擊 button 關閉視窗',
		showCloseButton: true,
		allowOutsideClick: false,	// 不允許點擊外面關閉視窗，也可以使用函式
		allowEscapeKey: false,	// 不允許 ESC 關閉視窗
	});
}

// 時間到自動關閉
function alertTimer() {
	Swal.fire({
		icon: 'success',
		title: '儲存成功！',
		showConfirmButton: false,	// 關閉 confirm button
		
		// 位置
		position: 'top-end',
		
		// 持續時間 (毫秒)
		timer: 1500,
	})
}


/* 各種 icon */
function alertSuccess() {
	Swal.fire({
		icon: 'success',
	});
}
function alertError() {
	Swal.fire({
		icon: 'error',
	});
}
function alertWarning() {
	Swal.fire({
		icon: 'warning',
	});
}
function alertInfo() {
	Swal.fire({
		icon: 'info',
	});
}
function alertQuestion() {
	Swal.fire({
		icon: 'question',
	});
}


/* 吐司訊息 */
function alertToast1()
{
	const toast = Swal.mixin({
		toast: true,
		showConfirmButton: false,
		position: 'top-end',
		timer: 3000,
		timerProgressBar: true,	// 顯示倒計時進度條
		
		// 滑鼠移入時停止計時
		didOpen: (toast) => {
			toast.onmouseenter = Swal.stopTimer;
			toast.onmouseleave = Swal.resumeTimer;
		},
	});
	
	toast.fire({
		icon: 'success',
		title: '這是吐司訊息 1',
		text: 'text1',
	});
}

function alertToast2()
{
	Swal.mixin({
		toast: true,
		showConfirmButton: false,
		position: 'bottom-end',
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.onmouseenter = Swal.stopTimer;
			toast.onmouseleave = Swal.resumeTimer;
		},
	})
	.fire({
		icon: 'warning',
		title: '這是吐司訊息 2',
		text: 'text2',
	});
}


/* 生命週期 */
function alertLifecycle()
{
	console.log(`[alertLifecycle] start ...`);
	
	const alertObj = Swal.fire({
		text: 'SweetAlert2 的 Lifecycle',
		allowEscapeKey: false,
		allowOutsideClick: false,
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		
		didRender: () => {
			console.log(`didRender ...`);
		},
		willOpen: () => {
			console.log(`willOpen ...`);
		},
		didOpen: () => {
			console.log(`didOpen ...`);
		},
		willClose: () => {
			console.log(`willClose ...`);
		},
		didClose: () => {
			console.log(`didClose ...`);
		},
		didDestroy: () => {
			console.log(`didDestroy ...`);
		}
	});
	console.log(`alertObj ==>`, alertObj);
	
	console.log(`[alertLifecycle] finish.`);
}


/* Loading */
function alertLoading()
{
	console.log(`[alertLoading] start ...`);
	
	const loadingObj = Swal.fire({
		// html: '努力加載中 ...',
		html: `<div class="text-bold" style="font-size: 24px;">努力加載中 ...<div>`,
		allowEscapeKey: false,
		allowOutsideClick: false,
		showConfirmButton: false,
		didOpen: () => {
			Swal.showLoading();
		},
	});
	console.log(`loadingObj ==>`, loadingObj);
	
	setTimeout(() => {
		Swal.close();
	}, 5000);
	
	console.log(`[alertLoading] finish.`);
}


/* 自訂義 button */
// 自定義 button
function alertCustomButton() {
	Swal.fire({
		title: '這是 title',
		text: '這是 text',
		
		// 右上角的叉叉按鈕
		showCloseButton: true,
		
		// confirm button
		confirmButtonText: '<i class="fa fa-thumbs-up"></i>&nbsp;&nbsp;&nbsp;這是自定義的 Confirm button',
		confirmButtonAriaLabel: 'confirm button',
		confirmButtonColor: "blue",
		
		// deny button
		showDenyButton: true,	// 要設定為 true 才會顯示 deny button
		denyButtonText: '<i class="fa fa-thumbs-down"></i>&nbsp;&nbsp;&nbsp;這是自定義的 Deny button',
		denyButtonColor: '#000',
		
		// cancel button
		showCancelButton: true,	// 要設定為 true 才會顯示 cancel button
		cancelButtonText: `<i class="fa-solid fa-ban"></i>&nbsp;&nbsp;&nbsp;這是自定義的 Cancel button`,
		cancelButtonAriaLabel: 'cancel button',
		cancelButtonColor: 'rgb(59, 255, 0)',
	});
}

// 接收 button 觸發結果
function alertButtonThen() {
	const alertObj = Swal.fire({
		title: '這是 title',
		text: '這是 text',
		
		// 右上角的叉叉按鈕
		showCloseButton: true,
		closeButtonHtml: '<i class="fa-regular fa-closed-captioning"></i>',	// 自訂義顯示樣式
		
		// confirm button
		confirmButtonText: 'Confirm',
		
		// deny button
		showDenyButton: true,
		denyButtonText: 'Deny',
		
		// cancel button
		showCancelButton: true,
		cancelButtonText: `Cancel`,
		
		// 預設 focus 在哪個 button，影响 Enter 動作
		focusCancel: true,
		// focusDeny: true,
	});
	console.log(`alertObj ==>`, alertObj);
	
	alertObj.then((result) => {
		console.log(`result ==>`, result);
		
		if (result.isConfirmed) {
			Swal.fire("Confirmed", "由 Confirm button 觸發", "success");
		}
		else if (result.isDenied) {
			Swal.fire("Denied", "由 Deny button 觸發", "error");
		}
		else if (result.isDismissed) {
			Swal.fire("Dismissed", "由 Cancel button 觸發", "info");
		}
	});
}

// 自定義套用的 class 樣式
function alertCustomClassStyle()
{
	const bsButton = Swal.mixin({
		customClass: {
			confirmButton: "btn btn-success",
			cancelButton: "btn btn-danger",
			title: 'text-primary',
		},
	});
	
	bsButton.fire({
		title: "這是 BS style title",
		text: '這是 text',
		confirmButtonText: "確定",
		showCancelButton: true,
		cancelButtonText: "取消",
	});
}


/* TODO 輸入資料 */




/* 其它 */
// 有背景的訊息
function alertBackground() {
	Swal.fire({
		title: '這是有背景的訊息',
		text: '這是 text',
		// width: '700px',
		width: 600,
		// padding: '20px',
		background: 'url(https://sweetalert2.github.io/images/trees.png)',
		backdrop: `
			rgba(0,0,123,0.4)
			url('https://sweetalert2.github.io/images/nyan-cat.gif')
			no-repeat
			left bottom
		`,
	})
}

</script>

<template>
	<h1 class="mb-3">SweetAlert2</h1>

	<p>
		<a href="https://sweetalert2.github.io/" target="_blank"> 官網 </a>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/kit_samples/SweetAlert2.vue"
			target="_blank"
		>
			code
		</a>
	</p>

	<hr class="hr" />

	<h2 class="h2">基本範例</h2>

	<div class="box d-flex flex-wrap gap-3">
		<button @click="alertBasic" class="btn btn-primary" type="button">基本訊息</button>
		<button @click="alertIconTitleText" class="btn btn-primary" type="button">
			icon、title、text
		</button>
		<button @click="alertFooter" class="btn btn-primary" type="button">footer</button>
		<button @click="alertColor" class="btn btn-primary" type="button">設定 color</button>
		<button @click="alertImg" class="btn btn-primary" type="button">圖片</button>
		<button @click="alertCustomHtml" class="btn btn-primary" type="button">自訂義 HTML</button>
		<button @click="alertOnlyButtonClose" class="btn btn-primary" type="button">只能點擊 button 關閉視窗</button>
		<button @click="alertTimer" class="btn btn-primary" type="button">時間到自動關閉</button>
	</div>

	<hr />

	<h2 class="h2">各種 icon</h2>

	<div class="box d-flex flex-wrap gap-3">
		<button @click="alertSuccess" class="btn btn-success" type="button">success</button>
		<button @click="alertError" class="btn btn-danger" type="button">error</button>
		<button @click="alertWarning" class="btn btn-warning" type="button">warning</button>
		<button @click="alertInfo" class="btn btn-info" type="button">info</button>
		<button @click="alertQuestion" class="btn btn-secondary" type="button">question</button>
	</div>
	
	<hr>
	
	<h2 class="h2">吐司訊息</h2>
	<p>似乎無法像 BS 那樣可以堆疊多個吐司訊息，即使顯示位置不同...</p>
	
	<div class="box d-flex flex-wrap gap-3">
		<button @click="alertToast1" class="btn btn-primary" type="button">吐司訊息 1</button>
		<button @click="alertToast2" class="btn btn-primary" type="button">吐司訊息 2</button>
	</div>
	
	<hr>
	
	<h2 class="h2">SweetAlert2 的 Lifecycle</h2>
	<ol>
		<li>didRender → willOpen → 成為非同步 Promise 物件</li>
		<li>觸發 didOpen</li>
		<li>關閉時：willClose → didClose → didDestroy</li>
	</ol>
	
	<div class="box d-flex flex-wrap gap-3">
		<button @click="alertLifecycle" class="btn btn-primary" type="button">顯示 lifecycle</button>
	</div>
	
	<hr>
	
	<h2 class="h2">Loading</h2>
	
	<div class="box d-flex flex-wrap gap-3">
		<button @click="alertLoading" class="btn btn-primary" type="button">開啟 loading</button>
	</div>
	
	<hr>
	
	<h2 class="h2">自訂義 button</h2>
	
	<div class="box d-flex flex-wrap gap-3">
		<button @click="alertCustomButton" class="btn btn-primary" type="button">自定義 button</button>
		<button @click="alertButtonThen" class="btn btn-primary" type="button">接收 button 觸發結果</button>
		<button @click="alertCustomClassStyle" class="btn btn-primary" type="button">自定義套用的 class 樣式</button>
	</div>
	
	<hr>
	
	<h2 class="h2">輸入資料</h2>
	
	<div class="box d-flex flex-wrap gap-3">
		
	</div>
	
	<hr>
	
	<h2 class="h2">其它</h2>
	
	<div class="box d-flex flex-wrap gap-3">
		<button @click="alertBackground" class="btn btn-primary" type="button">有背景的訊息窗</button>
	</div>
	
	<hr>
	
</template>

<style lang="scss" scoped>
hr {
	margin-top: 32px;
	margin-bottom: 32px;
}
</style>
