import { ref } from "vue";

/* 直接匯出變數，讓元件可以直接修改 */
export const text1 = ref('我是直接被匯出的響應式純值');


/* 不匯出變數，只匯出 getter、setter 間接存取 */
const text2 = ref('我是沒有被匯出的響應式純值');

export function getText2() {
	return text2.value;
}
export function setText2(text) {
	text2.value = text;
}


/* 打包成物件匯出，同時測時使用物件及解構方式處理 */
const text3 = ref('我是被打包成物件匯出的響應式純值');

function setText3(text) {
	text3.value = text;
}

export const actions1 = {
	text3, setText3
};


/* 立即函式傳出物件 */
export const actions2 = (function () {
	const text4 = ref('我是閉包中沒有被匯出的響應式純值');

	function getText4() {
		return text4.value;
	}
	function setText4(text) {
		text4.value = text;
	}
	
	return { getText4, setText4 };
})();


/* 不會共用，執行函式後才將物件傳出，因此各元件獨立 */
// eslint-disable-next-line no-unused-vars
export function useActions3() {
	const text5 = ref('我是執行函式後被包成物件傳出的響應式純值');

	function getText5() {
		return text5.value;
	}
	function setText5(text) {
		text5.value = text;
	}
	
	return { text5, getText5, setText5 };
}
