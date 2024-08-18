<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, ref } from 'vue';
import { cart, order } from './js';

const { datas } = cart;
const remark = ref('');

// 總計
const total = computed(() => {
	return datas.value.reduce((sum, elem) => (sum += elem.subtotal), 0);
});

// 小計
function processSubtotal(item) {
	item.subtotal = item.price * item.count;
}

// 移出購物車
function removeFromCart(id) {
	const index = datas.value.findIndex((elem) => elem.id === id);
	datas.value.splice(index, 1);
}

// 送出訂單
function sendOrder() {
	order.datas.value = datas.value;
	order.remark.value = remark.value;
	order.total.value = total.value;

	remark.value = '';
	datas.value = [];
}
</script>

<template>
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
			<tr v-for="product in datas" :key="product.id">
				<td>
					<button type="button" class="btn btn-sm" @click="removeFromCart(product.id)">
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

	<div class="alert alert-warning text-center" v-if="datas.length <= 0">請選擇商品</div>
	<div v-else>
		<!-- 總計 -->
		<div class="text-end mb-3">
			<h5>
				總計: <span>${{ total }}</span>
			</h5>
		</div>

		<!-- 備註 -->
		<textarea class="form-control mb-3" rows="3" placeholder="備註" v-model="remark"></textarea>
		<div class="text-end">
			<button type="button" class="btn btn-primary" @click="sendOrder">送出</button>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
