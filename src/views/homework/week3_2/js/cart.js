import { ref } from 'vue';

// 購物車資料
const datas = ref([
	// 結構範例
	// {
	// 	id: 1,
	// 	name: '珍珠奶茶',
	// 	description: '香濃奶茶搭配QQ珍珠',
	// 	price: 50,
	// 	count: 1,
	// 	subtotal: 50,
	// },
]);

export const cart = {
	datas,
};
