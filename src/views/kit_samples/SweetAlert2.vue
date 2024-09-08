<script setup>
import Swal from 'sweetalert2';
import axios from 'axios';
import { ref } from 'vue';

/* 基本範例 */
// 基本訊息
function alertBasic() {
	Swal.fire('這是最基本的訊息窗！');
	// Swal.fire({ text: '這是最基本的訊息窗！' });
	
	// const mySwal = Swal.mixin({ title: '這是最基本的訊息窗！' });
	// mySwal.fire()
	// 	.then(() => {
	// 		Swal.fire();
	// 	});
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


/* Timer */
// 時間到自動關閉
function alertAutoClose() {
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

// 有進度條的計時器
function alertProgressTimer()
{
	Swal.fire({
		allowEscapeKey: false,
		allowOutsideClick: false,
		showConfirmButton: false,
		title: '計時器',
		text: '3 秒後將自動關閉',
		
		// 位置
		position: 'top',
		
		// 持續時間 (毫秒)
		timer: 3000,
		timerProgressBar: true,
	});
}

// 可暫停的計時器
function alertStopTimer()
{
	Swal.fire({
		allowEscapeKey: false,
		allowOutsideClick: false,
		showConfirmButton: false,
		title: '4 秒計時器',
		text: '當滑鼠移入時會暫停計時',
		
		// 位置
		position: 'top',
		
		// 持續時間 (毫秒)
		timer: 4000,
		timerProgressBar: true,
		
		didOpen (popup) {
			console.log(`popup ==>`, popup);
			popup.onmouseenter = Swal.stopTimer;
			popup.onmouseleave = Swal.resumeTimer;
		},
	});
}

// 倒數計時
function alertCountTimer()
{
	let timerInterval;
	
	Swal.fire({
		allowEscapeKey: false,
		allowOutsideClick: false,
		title: '4 秒計時器',
		html: `還有 <b>4</b> 秒關閉`,
		
		// 位置
		position: 'top',
		
		// 持續時間 (毫秒)
		timer: 4000,
		timerProgressBar: true,
		
		didOpen (popup) {
			console.log(`didOpen...`);
			console.log(`popup ==>`, popup);
			
			const timer = popup.querySelector("b");
			console.log(`timer ==>`, timer);
			
			timerInterval = setInterval(() => {
				timer.textContent = `${Math.ceil(Swal.getTimerLeft() / 1000)}`;
			}, 1000);
		},
		
		willClose (popup) {
			console.log(`willClose...`);
			clearInterval(timerInterval);
		},
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


/* dismiss */
function alertDismiss()
{
	Swal.fire({
		icon: 'info',
		title: '4 秒後將自動關閉',
		text: '會偵測各種關閉的方式',
		showCancelButton: true,
		showCloseButton: true,
		showDenyButton: true,
		
		// 位置
		position: 'top',
		
		// 持續時間 (毫秒)
		timer: 4000,
		timerProgressBar: true,
	})
	.then((result) => {
		console.log(`result ==>`, result);
		
		let closeReason = '視窗關閉原因：';
		const dismiss = result.dismiss;
		console.log(`dismiss ==>`, result.dismiss);
		
		if (result.isConfirmed) {
			closeReason += "點擊 Confirm button";
		}
		else if  (result.isDenied) {
			closeReason += '點擊 Deny button';
		}
		else if (dismiss === Swal.DismissReason.backdrop) {
			closeReason += '點擊外部區域';
		}
		else if (dismiss === Swal.DismissReason.esc) {
			closeReason += '按 ESC 關閉';
		}
		else if (dismiss === Swal.DismissReason.timer) {
			closeReason += '被 timer 關閉';
		}
		else if (dismiss === Swal.DismissReason.close) {
			closeReason += '點擊 Close button';
		}
		else if (dismiss === Swal.DismissReason.cancel) {
			closeReason += '點擊 Cancel button';
		}
		
		Swal.fire(closeReason);
	});
}

// 依據關閉方式執行不同動作
function exeByDismissType()
{
	let timerInterval;
	
	Swal.fire({
		allowEscapeKey: false,
		allowOutsideClick: false,
		confirmButtonText: '登入',
		showDenyButton: true,
		denyButtonText: "離開",
		position: 'top',
		icon: 'success',
		title: '註冊成功！',
		html: '再 <b>5</b> 秒後將為您自動登入，若不想登入請點擊「離開」。',
		timer: 5000,
		timerProgressBar:true,
		
		didOpen (popup) {
			const timer = popup.querySelector("b");
			timerInterval = setInterval(() => {
				timer.textContent = `${Math.ceil(Swal.getTimerLeft() / 1000)}`;
			}, 1000);
		},
		
		willClose (popup) {
			clearInterval(timerInterval);
		},
	})
	.then((result) => {
		if (!result.isDenied) {
			alert("進行登入動作");
		}
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


/* 異步的 SweetAlert2 */
const lifecycles = (msg) => {
	return {
		didRender: () => {
			console.log(`[${msg}] didRender ...`);
		},
		willOpen: () => {
			console.log(`[${msg}] willOpen ...`);
		},
		didOpen: () => {
			console.log(`[${msg}] didOpen ...`);
		},
		willClose: () => {
			console.log(`[${msg}] willClose ...`);
		},
		didClose: () => {
			console.log(`[${msg}] didClose ...`);
		},
		didDestroy: () => {
			console.log(`[${msg}] didDestroy ...`);
		}
	}
}

/* SweetAlert2 的生命週期 */
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
		... lifecycles("alertLifecycle"),
	});
	console.log(`alertObj ==>`, alertObj);
	
	console.log(`[alertLifecycle] finish.`);
}


/* Loading */
// 原始 loading
// 預設只有 loading 圖示，可以按 ESC 或點擊外部區域來關閉 loading。
function alertOriginalLoading()
{
	console.log(`[loadingObj] start ...`);
	Swal.showLoading();
	
	// 3 秒後隱藏
	setTimeout(() => {
		// 只會隱藏 loading 圖示，變成 confirm button，視窗不會關閉。
		Swal.hideLoading();
	}, 3000);
	
	// 6 秒後關閉
	setTimeout(() => {
		// 關閉視窗。
		Swal.close();
	}, 6000);
	
	console.log(`[loadingObj] finish.`);
}

// 顯示訊息 → 開啟 loading
// loading 其實只是替代了 confirm button 位置的動態圖示，可以與訊息窗合用。
function alertMsgAndLoading()
{
	Swal.fire({
		title: '訊息窗',
		text: '3 秒後開啟 loading，再 3 秒後關閉 loading',
		showCancelButton: true,
		allowEscapeKey: false,
		allowOutsideClick: false,
	});
	
	setTimeout(() => {
		Swal.showLoading();
		
		setTimeout(() => {
			Swal.hideLoading();
		}, 3000);
	}, 3000);
}

// 開啟 loading → 顯示訊息
function alertLoadingMsg()
{
	Swal.showLoading();
	
	// 3 秒後顯示訊息
	setTimeout(() => {
		const loadingObj = Swal.fire({
			html: `<div class="text-bold" style="font-size: 24px;">努力加載中 ...<div>`,
			allowEscapeKey: false,
			allowOutsideClick: false,
			position: 'top',
			didOpen: () => {
				Swal.showLoading();
			},
		});
		console.log(`[alertCustomLoading] loadingObj ==>`, loadingObj);
		
		// 3 秒後隱藏 loading
		setTimeout(() => {
			Swal.hideLoading();
		}, 3000);
		
	}, 3000);
}

// 客製 loading
// 不直接調用 SWAL 的 loading，而是調用訊息窗，然後在 didOpen (或更早之前的) 生命週期開啟 loading。
function alertCustomLoading()
{
	console.log(`[alertCustomLoading] start ...`);
	
	const loadingObj = Swal.fire({
		// html: '努力加載中 ...',
		html: `<div class="text-bold" style="font-size: 24px;">5 秒後關閉 ...<div>`,
		showConfirmButton: false,
		allowEscapeKey: false,
		allowOutsideClick: false,
		// position: 'top',
		didOpen: () => {
			Swal.showLoading();
		},
	});
	console.log(`[alertCustomLoading] loadingObj ==>`, loadingObj);
	
	// 5 秒後關閉
	setTimeout(() => {
		// 使用 SWAL 或回傳的物件執行關閉均可。
		// Swal.close();
		loadingObj.close();
	}, 5000);
	
	console.log(`[alertCustomLoading] finish.`);
}


/* 一次只能開啟一個訊息窗 */
// 開啟兩個訊息
function testMultipleMsg()
{
	const myAlertA = Swal.mixin({
		title: '我是訊息 A',
		position: 'top',
		... lifecycles("myAlertA"),
	});
	
	const myAlertB = Swal.mixin({
		title: '我是訊息 B',
		position: 'bottom',
		... lifecycles("myAlertB"),
	});
	
	function alertTwo()
	{
		myAlertA.fire({
			text: '3 秒後開啟訊息 B',
		});
		
		// 3 秒後開啟訊息 B
		// 訊息 A 會被銷毀，其生命週期會直接被調用 didDestroy。
		setTimeout(() => {
			myAlertB.fire();
		}, 3000);
	}
	
	// 訊息 → loading → 訊息
	function alertLoadingAndMsg()
	{
		myAlertA.fire({
			text: '3 秒後開啟 loading，再 3 秒後開啟訊息 B',
		});
		
		// 3 秒後開啟 loading
		setTimeout(() => {
			Swal.showLoading();
			
			// 3 秒後開啟訊息 B
			setTimeout(() => {
				myAlertB.fire();
			}, 3000);
		}, 3000);
	}
	
	return {
		alertTwo, 
		alertLoadingAndMsg,
	}
}
const {alertTwo, alertLoadingAndMsg} = testMultipleMsg();


/* 搭配 AJAX 使用 */
const names = ref([]);

function testAjax()
{
	const correctUrl = 'https://randomuser.me/api/';
	const wrongUrl = 'https://randomuser.me/api1/'
	
	const getName = (response) => response.data?.results[0]?.name?.last ?? '';
	
	
	/* 原始寫法 */
	function testOriginal(url1, url2, url3)
	{
		axios.get(url1)
			.then ((res1) => {
				console.log(`res1 ==>`, res1);
				
				const name = getName(res1);
				alert(`加入 ${name}`);
				names.value.push(name);
				
				return axios.get(url2);
			})
			.then ((res2) => {
				console.log(`res2 ==>`, res2);
				
				const name = getName(res2);
				alert(`加入 ${name}`);
				names.value.push(name);
				
				return axios.get(url3);
			})
			.then ((res3) => {
				console.log(`res3 ==>`, res3);
				
				const name = getName(res3);
				alert(`加入 ${name}`);
				names.value.push(name);
			})
			.catch ((error) => {
				console.error(error);
				alert(error.message);
			})
			.finally(() => {
				console.log(`finally.....`);
			});
	}
	
	// 原始寫法 - 正確執行
	const testOriginalCorrect = () => {
		testOriginal(correctUrl, correctUrl, correctUrl);
	}
	// 原始寫法 - 有錯誤
	const testOriginalWrong = () => {
		testOriginal(correctUrl, wrongUrl, correctUrl);
	}
	
	
	/* SweetAlert2 寫法 */
	
	// SweetAlert2 loading
	// 由於原始的 loading 可以被 ESC 或點擊外部關閉，故並不實用，所以勢必需要使用客製化的方式製作 loading。
	const loadingSwal = Swal.mixin({
		html: `<div class="text-bold" style="font-size: 24px;">取得資料中 ...<div>`,
		showConfirmButton: false,
		allowEscapeKey: false,
		allowOutsideClick: false,
		... lifecycles("loadingSwal"),
		didOpen: () => {
			console.log(`[loadingSwal] [didOpen] open loading ...`);
			Swal.showLoading();
		},
	});
	
	// 顯示正常訊息
	const msgSwal = Swal.mixin({
		position: 'top',
		confirmButtonText: '確定',
		... lifecycles("msgSwal"),
	});
	
	// 顯示錯誤訊息
	const errorSwal = Swal.mixin({
		position: 'top',
		icon: 'error',
		confirmButtonText: '確定',
		... lifecycles("errorSwal"),
	});
	
	
	// Promise Chain (沒有 async / await)
	function testPromiseChain(url1, url2, url3)
	{
		loadingSwal.fire();
		
		axios.get(url1)
			.then ((res1) => {
				console.log(`res1 ==>`, res1);
				
				const name = getName(res1);
				msgSwal.fire(`加入 ${name}`);
				names.value.push(name);
				
				return axios.get(url2);
			})
			.then ((res2) => {
				console.log(`res2 ==>`, res2);
				
				const name = getName(res2);
				msgSwal.fire(`加入 ${name}`);
				names.value.push(name);
				
				return axios.get(url3);
			})
			.then ((res3) => {
				console.log(`res3 ==>`, res3);
				
				const name = getName(res3);
				msgSwal.fire(`加入 ${name}`);
				names.value.push(name);
			})
			.catch ((error) => {
				console.error(error);
				errorSwal.fire(`${error.message}`);
			})
			.finally(() => {
				console.log(`finally.....`);
				loadingSwal.close();
			});
	}
	
	// Promise Chain (沒有 async / await) - 正確執行
	const testPromiseChainCorrect = () => {
		testPromiseChain(correctUrl, correctUrl, correctUrl);
	}
	// Promise Chain (沒有 async / await) - 有錯誤
	const testPromiseChainWrong = () => {
		testPromiseChain(correctUrl, wrongUrl, correctUrl);
	}
	
	// Promise Chain (使用 async / await)
	function testAsyncPromiseChain(url1, url2, url3)
	{
		loadingSwal.fire();
		
		axios.get(url1)
		.then (async (res1) => {
			console.log(`res1 ==>`, res1);
			
			const name = getName(res1);
			await msgSwal.fire(`加入 ${name}`);
			names.value.push(name);
			
			return axios.get(url2);
		})
		.then (async (res2) => {
			console.log(`res2 ==>`, res2);
			
			const name = getName(res2);
			await msgSwal.fire(`加入 ${name}`);
			names.value.push(name);
			
			return axios.get(url3);
		})
		.then (async (res3) => {
			console.log(`res3 ==>`, res3);
			
			const name = getName(res3);
			await msgSwal.fire(`加入 ${name}`);
			names.value.push(name);
		})
		.catch (async (error) => {
			console.error(error);
			await errorSwal.fire(`${error.message}`);
		})
		.finally(() => {
			console.log(`finally.....`);
			loadingSwal.close();
		});
	}
	
	// Promise Chain (使用 async / await) - 正確執行
	const testAsyncPromiseChainCorrect = () => {
		testAsyncPromiseChain(correctUrl, correctUrl, correctUrl);
	}
	// Promise Chain (使用 async / await) - 有錯誤
	const testAsyncPromiseChainWrong = () => {
		testAsyncPromiseChain(correctUrl, wrongUrl, correctUrl);
	}
	
	
	// async / await
	async function testAsyncAwait(url1, url2, url3)
	{
		console.log(`[testAsyncAwait] start ...`);
		loadingSwal.fire();
		
		try {
			// 1
			const res1 = await axios.get(url1);
			console.log(`res1 ==>`, res1);
			
			let name = getName(res1);
			await msgSwal.fire(`加入 ${name}`);
			names.value.push(name);
			
			// 2
			const res2 = await axios.get(url2);
			console.log(`res2 ==>`, res2);
			
			name = getName(res2);
			await msgSwal.fire(`加入 ${name}`);
			names.value.push(name);
			
			// 3
			const res3 = await axios.get(url3);
			console.log(`res3 ==>`, res3);
			
			name = getName(res3);
			await msgSwal.fire(`加入 ${name}`);
			names.value.push(name);
		}
		catch (error) {
			console.error(error);
			await errorSwal.fire(`${error.message}`);
		}
		
		console.log(`[testAsyncAwait] end.`);
		loadingSwal.close();
	}
	
	// async / await - 正確執行
	const testAsyncAwaitCorrect = () => {
		testAsyncAwait(correctUrl, correctUrl, correctUrl);
	}
	// async / await - 有錯誤
	const testAsyncAwaitWrong = () => {
		testAsyncAwait(correctUrl, wrongUrl, correctUrl);
	}
	
	
	// 手動開啟 loading
	async function testAjaxLoading(url1, url2, url3)
	{
		console.log(`[testAjaxLoading] start ...`);
		loadingSwal.fire();
		
		try {
			// 1
			const res1 = await axios.get(url1);
			console.log(`res1 ==>`, res1);
			
			let name = getName(res1);
			await msgSwal.fire(`加入 ${name}`);
			loadingSwal.fire();	// 開啟 loading
			names.value.push(name);
			
			// 2
			const res2 = await axios.get(url2);
			console.log(`res2 ==>`, res2);
			
			name = getName(res2);
			await msgSwal.fire(`加入 ${name}`);
			loadingSwal.fire();	// 開啟 loading
			names.value.push(name);
			
			// 3
			const res3 = await axios.get(url3);
			console.log(`res3 ==>`, res3);
			
			name = getName(res3);
			await msgSwal.fire(`加入 ${name}`);
			names.value.push(name);
		}
		catch (error) {
			console.error(error);
			await errorSwal.fire(`${error.message}`);
		}
		
		console.log(`[testAjaxLoading] end.`);
		loadingSwal.close();
	}
	
	// 手動開啟 loading - 正確執行
	const testAjaxLoadingCorrect = () => {
		testAjaxLoading(correctUrl, correctUrl, correctUrl);
	}
	// 手動開啟 loading - 有錯誤
	const testAjaxLoadingWrong = () => {
		testAjaxLoading(correctUrl, wrongUrl, correctUrl);
	}
	
	
	return {
		testOriginalCorrect, testOriginalWrong, 
		testPromiseChainCorrect, testPromiseChainWrong, 
		testAsyncPromiseChainCorrect, testAsyncPromiseChainWrong, 
		testAsyncAwaitCorrect, testAsyncAwaitWrong, 
		testAjaxLoadingCorrect, testAjaxLoadingWrong, 
	};
}

const { testOriginalCorrect, testOriginalWrong, 
	testPromiseChainCorrect, testPromiseChainWrong, 
	testAsyncPromiseChainCorrect, testAsyncPromiseChainWrong, 
	testAsyncAwaitCorrect, testAsyncAwaitWrong, 
	testAjaxLoadingCorrect, testAjaxLoadingWrong, 
} = testAjax();


// 客製 loading → 顯示訊息
function alertCustomLoadingMsg()
{
	const loadingObj = Swal.fire({
		title: `3 秒後換訊息`,
		showConfirmButton: false,
		allowEscapeKey: false,
		allowOutsideClick: false,
		didOpen: () => {
			Swal.showLoading();
		},
	});
	console.log(`[alertCustomLoadingMsg] loadingObj ==>`, loadingObj);
	
	// 馬上被替代所以看不到
	Swal.fire({
		title: '訊息馬上被換掉了',
		position: 'top',
	});
	
	// 第二次替代，但 loading 圖示還是存在
	Swal.fire({
		title: '訊息再次被換掉了',
		position: 'bottom',
	});
	
	setTimeout(() => {
		// 一個全新的訊息窗，沒有 loading 圖示
		Swal.fire({
			title: '在異步線程中，訊息換掉了',
		});
		
	}, 3000);
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

	<!-- 基本範例 -->
	<h2 class="h2">基本範例</h2>

	<div class="box d-flex flex-wrap gap-3 mb-52">
		<button @click="alertBasic" class="btn btn-primary" type="button">基本訊息</button>
		<button @click="alertIconTitleText" class="btn btn-primary" type="button">
			icon、title、text
		</button>
		<button @click="alertFooter" class="btn btn-primary" type="button">footer</button>
		<button @click="alertColor" class="btn btn-primary" type="button">設定 color</button>
		<button @click="alertImg" class="btn btn-primary" type="button">圖片</button>
		<button @click="alertCustomHtml" class="btn btn-primary" type="button">自訂義 HTML</button>
		<button @click="alertOnlyButtonClose" class="btn btn-primary" type="button">只能點擊 button 關閉視窗</button>
	</div>
	
	
	<!-- 各種 icon -->
	<h2 class="h2">各種 icon</h2>

	<div class="box d-flex flex-wrap gap-3 mb-52">
		<button @click="alertSuccess" class="btn btn-success" type="button">success</button>
		<button @click="alertError" class="btn btn-danger" type="button">error</button>
		<button @click="alertWarning" class="btn btn-warning" type="button">warning</button>
		<button @click="alertInfo" class="btn btn-info" type="button">info</button>
		<button @click="alertQuestion" class="btn btn-secondary" type="button">question</button>
	</div>
	
	
	<!-- 自訂義 button -->
	<h2 class="h2">自訂義 button</h2>
	
	<div class="box d-flex flex-wrap gap-3 mb-52">
		<button @click="alertCustomButton" class="btn btn-primary" type="button">自定義 button</button>
		<button @click="alertButtonThen" class="btn btn-primary" type="button">接收 button 觸發結果</button>
		<button @click="alertCustomClassStyle" class="btn btn-primary" type="button">自定義套用的 class 樣式</button>
	</div>
	
	
	<!-- Timer -->
	<h2 class="h2">Timer</h2>
	
	<div class="box d-flex flex-wrap gap-3 mb-52">
		<button @click="alertAutoClose" class="btn btn-primary" type="button">時間到自動關閉訊息</button>
		<button @click="alertProgressTimer" class="btn btn-primary" type="button">有進度條的計時器</button>
		<button @click="alertStopTimer" class="btn btn-primary" type="button">可暫停的計時器</button>
		<button @click="alertCountTimer" class="btn btn-primary" type="button">倒數計時</button>
	</div>
	
	
	<!-- 吐司訊息 -->
	<h2 class="h2">吐司訊息</h2>
	
	<ul>
		<li>利用 timer 的原理。</li>
		<li>無法像 BS 那樣可以堆疊多個吐司訊息，可能是因為 SWAL2 一次只能存在一個訊息窗。</li>
	</ul>
	
	<div class="box d-flex flex-wrap gap-3 mb-52">
		<button @click="alertToast1" class="btn btn-primary" type="button">吐司訊息 1</button>
		<button @click="alertToast2" class="btn btn-primary" type="button">吐司訊息 2</button>
	</div>
	
	
	<!-- dismiss -->
	<h2 class="h2">dismiss</h2>
	<p>可以取得關閉的方式（除了 confirm 和 deny button）。</p>
	<div>
		可搭配 DismissReason 判斷：
		<ul>
			<li>backdrop：點擊外部區域關閉（allowOutsideClick: true）</li>
			<li>esc：按 ESC 關閉（allowEscapeKey: true）</li>
			<li>timer：被計時器關閉</li>
			<li>close：close button（showCloseButton: true）</li>
			<li>cancel：cancel button（showCancelButton: true）</li>
		</ul>
	</div>
	
	<div class="box d-flex flex-wrap gap-3 mb-52">
		<button @click="alertDismiss" class="btn btn-primary" type="button">判斷各種關閉方式</button>
		<button @click="exeByDismissType" class="btn btn-primary" type="button">依據關閉方式執行不同動作</button>
	</div>
	
	
	<!-- 輸入資料 -->
	<h2 class="h2">輸入資料</h2>
	
	<div class="box d-flex flex-wrap gap-3 mb-52">
		
	</div>
	
	
	<!-- 其它 -->
	<h2 class="h2">其它</h2>
	
	<div class="box d-flex flex-wrap gap-3 mb-52">
		<button @click="alertBackground" class="btn btn-primary" type="button">有背景的訊息窗</button>
	</div>
	
	<hr class="hr my-5">
	
	<h2 class="h2 mb-32">異步的 SweetAlert2</h2>
	
	<!-- SweetAlert2 的生命週期 -->
	<h3 class="h3">SweetAlert2 的生命週期</h3>
	
	<ol>
		<li>didRender → willOpen → 成為非同步 Promise 物件</li>
		<li>觸發 didOpen</li>
		<li>關閉時：willClose → didClose → didDestroy</li>
	</ol>
	
	<div class="box d-flex flex-wrap gap-3 mb-52">
		<button @click="alertLifecycle" class="btn btn-primary" type="button">顯示生命週期</button>
	</div>
	
	
	<!-- Loading -->
	<h3 class="h3">Loading</h3>
	
	<div class="box mb-52">
		<div class="mb-24">
			<p>
				先來看一下原始的 loading。<br />
				開啟 loading 後預設只有 loading 圖示。<br />
				這邊設定 3 秒後 hide loading，發現 loading 圖示消失，跑出了 confirm button。
			</p>
			<button @click="alertOriginalLoading" class="btn btn-primary" type="button">原始 loading</button>
		</div>
		
		<div class="mb-24">
			<p>
				進一步探索 loading 的原理。<br />
				接下來，先顯示一般的訊息窗，再開啟 loading，之後再隱藏 loading。<br />
				會發現，loading 其實只是替代了 confirm button 位置的動態圖示，因此可以與訊息窗合用。
			</p>
			<button @click="alertMsgAndLoading" class="btn btn-primary" type="button">顯示訊息 → 開啟 loading</button>
		</div>
		
		<div class="mb-24">
			<p>
				反過來，先開啟 loading 再顯示訊息，也是可以的。<br />
				即使顯示訊息時刻意變換了位置 (跑到上方)，但 loading 依然會跟著。<br />
				隱藏 loading 後依然會出現 confirm button。
			</p>
			<button @click="alertLoadingMsg" class="btn btn-primary" type="button">開啟 loading → 顯示訊息</button>
		</div>
		
		<div class="mb-24">
			<p>
				依據上述原理，我們可以把訊息窗與 loading 結合，調整一些參數後，做出客製化的 loading。<br />
				做法就是不直接調用 loading，而是調用訊息窗，然後在 didOpen (或更早之前的) 生命週期開啟 loading。<br />
				當要關閉 loading 時，也不是使用 hide loading 的方式，而是直接將訊息窗 close。
			</p>
			<button @click="alertCustomLoading" class="btn btn-primary" type="button">客製 loading</button>
		</div>
		
	</div>
	
	
	<!-- 一次只能開啟一個 -->
	<h3 class="h3">一次只能開啟一個訊息窗</h3>
	<p>
		即使是使用 mixin 建立出多個訊息窗物件，但同時間只能有一個存在。<br />
		當開啟另一個訊息窗時，原先的訊息窗會被銷毀（其生命週期會直接被調用 didDestroy）。
	</p>
	
	<div class="box d-flex flex-wrap gap-3 mb-52">
		<button @click="alertTwo" class="btn btn-primary" type="button">開啟兩個訊息</button>
		<button @click="alertLoadingAndMsg" class="btn btn-primary" type="button">訊息 → loading → 訊息</button>
	</div>
	
	
	<!-- 搭配 AJAX 使用 -->
	<h3 class="h3">搭配 AJAX 使用</h3>
	
	<!-- 原始寫法 -->
	<h4 class="mb-3">原始寫法</h4>
	
	<div class="box d-flex flex-wrap gap-3 mb-3 mb-52">
		<button @click="testOriginalCorrect" class="btn btn-primary" type="button">正確執行</button>
		<button @click="testOriginalWrong" class="btn btn-primary" type="button">有錯誤</button>
		<p>結果：{{ names }}</p>
	</div>
	
	
	<!-- Promise Chain 寫法 (沒有 async / await) -->
	<h4>Promise Chain 寫法 (沒有 async / await)</h4>
	
	<p>由於原始的 loading 可以被 ESC 或點擊外部關閉，故並不實用，所以勢必需要使用客製化的方式製作 loading，也就是用訊息窗夾帶 loading 的方式。</p>
	
	<p>訊息窗為 Promise 物件，因此程式不會等待使用者按確定，而是會直接繼續往下執行。</p>
	
	<ol>
		<li>執行到第一個訊息窗時，loading 就被銷毀。</li>
		<li>到第二個訊息窗時，第一個訊息窗就被銷毀。</li>
		<li>到第三個訊息窗就會銷毀第二個。</li>
		<li>到 finally 執行關閉訊息窗時，第三個訊息就被銷毀。</li>
	</ol>
	
	<p>因此整個過程就會看到訊息窗被打開又自動關閉的情形，第三個訊息窗甚至有可能還來不及打開就被關閉...</p>
	
	<div class="box d-flex flex-wrap gap-3 mb-3 mb-52">
		<button @click="testPromiseChainCorrect" class="btn btn-primary" type="button">正確執行</button>
		<button @click="testPromiseChainWrong" class="btn btn-primary" type="button">有錯誤</button>
		<p>結果：{{ names }}</p>
	</div>
	
	
	<!-- Promise Chain 寫法 (使用 async / await) -->
	<h4>Promise Chain 寫法 (使用 async / await)</h4>
	<p>會等待使用者按確定。</p>
	
	<div class="box d-flex flex-wrap gap-3 mb-3 mb-52">
		<button @click="testAsyncPromiseChainCorrect" class="btn btn-primary" type="button">正確執行</button>
		<button @click="testAsyncPromiseChainWrong" class="btn btn-primary" type="button">有錯誤</button>
		<p>結果：{{ names }}</p>
	</div>
	
	
	<!-- 全程 async / await 寫法 -->
	<h4>全程 async / await 寫法</h4>
	<p>會等待使用者按確定。</p>
	
	<div class="box d-flex flex-wrap gap-3 mb-3 mb-52">
		<button @click="testAsyncAwaitCorrect" class="btn btn-primary" type="button">正確執行</button>
		<button @click="testAsyncAwaitWrong" class="btn btn-primary" type="button">有錯誤</button>
		<p>結果：{{ names }}</p>
	</div>
	
	
	<!-- Loading 被關閉的問題 -->
	<h4>Loading 被關閉的問題</h4>
	<p>
		同步化解決了訊息窗異步的問題，但還有一個問題需要解決——loading 消失了。<br />
		這是因為同時只能存在一個訊息窗，所以 loading 在第一個訊息窗出現時就被銷毀了。<br />
		因此，需要在訊息窗關閉之後再開啟 loading。
	</p>
	
	<div class="box d-flex flex-wrap gap-3 mb-3 mb-52">
		<button @click="testAjaxLoadingCorrect" class="btn btn-primary" type="button">正確執行</button>
		<button @click="testAjaxLoadingWrong" class="btn btn-primary" type="button">有錯誤</button>
		<p>結果：{{ names }}</p>
	</div>
	
	
	<h4>或許... SWAL2 不適合用來做 loading...</h4>
	
	<p>
		從上面的各種 loading 測試，可以知道 loading 其實只是一個替代了 Confirm button 的動態圖示，且其具有依附訊息窗的特性。<br />
		不管是先開 loading 再開訊息窗，還是先開訊息窗再開 loading，loading 都會跟著訊息窗，僅僅替代掉了 Confirm button 的位置。<br />
		然而，在 AJAX 中所顯示的訊息窗，卻會是一個全新的訊息窗，它的 Confirm button 並沒有被 loading 替代掉。<br />
		由此可知，在異步線程中，loading 和一般訊息窗可以分開運作。<br />
		但在原線程中，訊息窗的 Confirm button 卻會被 loading 取代。<br />
	</p>
	<p>
		下面做了個測試，在開啟客製 loading 後，再直接連開兩個不同位置的訊息窗，結果第二個訊息窗仍然顯示 loading 圖示；只有使用了 setTimeout 在 3 秒後顯示的訊息窗，才能呈現自己的 Confirm button。
	</p>
	<p>
		或許... SWAL2 本來就不適合拿來做 loading，它的本業是各種功用的訊息窗。<br />
		難怪... 老師還會再另推一套做 loading 的套件...
	</p>
	
	<div class="box d-flex flex-wrap gap-3 mb-3 mb-52">
		<button @click="alertCustomLoadingMsg" class="btn btn-primary" type="button">客製 loading → 顯示訊息</button>
	</div>
	
</template>

<style lang="scss" scoped>
hr {
	margin-top: 32px;
	margin-bottom: 32px;
}
</style>
