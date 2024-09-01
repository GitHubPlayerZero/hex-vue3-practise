import { reactive } from "vue";

/**
 * 沒做响應式的物件仍可以共用，因為物件傳參的特性。
 * 但若想要能夠自動重新渲染畫面的話，就要綁定响應式
 */
// export const comState = {
// 	datas: [],
// 	count: 0,
// };

// export const comState = reactive({
// 	datas: [],
// 	count: 0,
// });


const datas = [];
const count = 1;

export const comState = reactive({
	datas, count,
});
