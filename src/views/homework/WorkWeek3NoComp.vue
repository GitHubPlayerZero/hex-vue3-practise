<script setup>
import { computed, ref } from 'vue';

const productList = [
	{
		id: 1,
		name: '珍珠奶茶',
		description: '香濃奶茶搭配QQ珍珠',
		price: 50,
	},
	{
		id: 2,
		name: '冬瓜檸檬',
		description: '清新冬瓜配上新鮮檸檬',
		price: 45,
	},
	{
		id: 3,
		name: '翡翠檸檬',
		description: '綠茶與檸檬的完美結合',
		price: 55,
	},
	{
		id: 4,
		name: '四季春茶',
		description: '香醇四季春茶，回甘無比',
		price: 45,
	},
	{
		id: 5,
		name: '阿薩姆奶茶',
		description: '阿薩姆紅茶搭配香醇鮮奶',
		price: 50,
	},
	{
		id: 6,
		name: '檸檬冰茶',
		description: '檸檬與冰茶的清新組合',
		price: 45,
	},
	{
		id: 7,
		name: '芒果綠茶',
		description: '芒果與綠茶的獨特風味',
		price: 55,
	},
	{
		id: 8,
		name: '抹茶拿鐵',
		description: '抹茶與鮮奶的絕配',
		price: 60,
	},
];


/* 訂單 */
const orderRemark = ref('');
const orderTotal = ref(0);
const order = ref([]);

/* 購物車 */
const cartRemark = ref('');
const cart = ref([
	// 結構範例
	// {
	// 	id: 1724052501829,
	//  productId: 1,
	// 	name: '珍珠奶茶',
	// 	description: '香濃奶茶搭配QQ珍珠',
	// 	price: 50,
	// 	count: 1,
	// 	subtotal: 50,
	// },
]);

// 總計
const cartTotal = computed(() => {
	return cart.value.reduce((sum, elem) => (sum += elem.subtotal), 0);
});

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
function sendOrder() {
	orderRemark.value = cartRemark.value;
	orderTotal.value = cartTotal.value;
	order.value = cart.value;

	cartRemark.value = '';
	cart.value = [];
}

/* 菜單 */
// 加入購物車
function addToCart(item)
{
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
	
	<div class="container mt-5">
		<div class="row">
			<!-- 菜單 -->
			<div class="col-md-4">
				<div class="list-group">
					<a
						href="#"
						class="list-group-item list-group-item-action"
						v-for="product in productList"
						:key="product.id"
						@click.prevent="addToCart(product)"
					>
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">{{ product.name }}</h5>
							<small>{{ product.price }}</small>
						</div>
						<p class="mb-1">{{ product.description }}</p>
					</a>
				</div>
			</div>

			<!-- 購物車 -->
			<div class="col-md-8">
				<!-- 品項 -->
				<table class="table">
					<thead>
						<tr>
							<th scope="col" width="50">操作</th>
							<th scope="col">品項</th>
							<th scope="col">描述</th>
							<th scope="col" width="90">數量</th>
							<th scope="col">單價</th>
							<th scope="col">小計</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="product in cart" :key="product.id">
							<td>
								<button
									type="button"
									class="btn btn-sm"
									@click="removeFromCart(product.id)"
								>
									x
								</button>
							</td>
							<td>{{ product.name }}</td>
							<td>
								<small>{{ product.description }}</small>
							</td>
							<td>
								<select
									class="form-select"
									v-model="product.count"
									@change="processSubtotal(product)"
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
							</td>
							<td>{{ product.price }}</td>
							<td>{{ product.subtotal }}</td>
						</tr>
					</tbody>
				</table>

				<div class="alert alert-warning text-center" v-if="cart.length <= 0">
					請選擇商品
				</div>
				<div v-else>
					<!-- 總計 -->
					<div class="text-end mb-3">
						<h5>
							總計: <span>${{ cartTotal }}</span>
						</h5>
					</div>

					<!-- 備註 -->
					<textarea
						class="form-control mb-3"
						rows="3"
						placeholder="備註"
						v-model="cartRemark"
					></textarea>
					<div class="text-end">
						<button type="button" class="btn btn-primary" @click="sendOrder">
							送出
						</button>
					</div>
				</div>
			</div>
		</div>

		<hr />

		<!-- 訂單 -->
		<div class="row justify-content-center">
			<div class="col-8">
				<div class="alert alert-secondary" v-if="order.length <= 0">尚未建立訂單</div>
				<div class="card" v-else>
					<div class="card-body">
						<div class="card-title">
							<h5>訂單</h5>
							<table class="table">
								<thead>
									<tr>
										<th scope="col">品項</th>
										<th scope="col">數量</th>
										<th scope="col">小計</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="product in order" :key="product.id">
										<td>{{ product.name }}</td>
										<td>{{ product.count }}</td>
										<td>{{ product.subtotal }}</td>
									</tr>
								</tbody>
							</table>
							<div class="text-end">
								備註: <span>{{ orderRemark }}</span>
							</div>
							<div class="text-end">
								<h5>
									總計: <span>${{ orderTotal }}</span>
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
