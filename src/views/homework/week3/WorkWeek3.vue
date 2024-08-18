<script setup>
import { ref } from 'vue';
import Menu from './Menu.vue';
import Order from './Order.vue';
import Cart from './Cart.vue';

/* 訂單 */
const orderRemark = ref('');
const orderTotal = ref(0);
const order = ref([]);

/* 購物車 */
const cart = ref([
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

// 小計
function processSubtotal(item) {
	item.subtotal = item.price * item.count;
}

// 移出購物車
function removeFromCart(id) {
	const index = cart.value.findIndex((elem) => elem.id === id);
	cart.value.splice(index, 1);
}

// 送出訂單
function sendOrder(cartRemark, cartTotal) {
	orderRemark.value = cartRemark;
	orderTotal.value = cartTotal;
	order.value = cart.value;

	cart.value = [];
}

/* 菜單 */
// 加入購物車
function addToCart(item) {
	// 判斷是否已加入過產品
	const product = cart.value.find(elem => elem.productId === item.id);
	
	if (product) {
		alert(`[${product.name}] 已加入，請直接調整品項數量哦～`);
		return;
	}
	
	// 將產品加入購物車
	cart.value.push({
		...item,
		count: 1,
		subtotal: item.price,
		productId: item.id,
		id: new Date().getTime(),
	});
}
</script>

<template>
	<h2>世上只有爸爸好，都叫爸爸做啊～</h2>
	<p>
		風格：<br>
		大部份的邏輯都集中在父元件，只有可以獨立處理的邏輯才會一併拆到子元件。<br>
		有需要共用到的資料也都會放在父元件，並透過父元件來操作。
	</p>

	<div class="container mt-5">
		<div class="row">
			<!-- 菜單 -->
			<div class="col-md-4">
				<Menu @add-to-cart="addToCart" />
			</div>

			<!-- 購物車 -->
			<div class="col-md-8">
				<Cart
					:cart="cart"
					@process-subtotal="processSubtotal"
					@remove-from-cart="removeFromCart"
					@send-order="sendOrder"
				/>
			</div>
		</div>

		<hr />

		<!-- 訂單 -->
		<div class="row justify-content-center">
			<div class="col-8">
				<Order :order="order" :order-remark="orderRemark" :order-total="orderTotal" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
