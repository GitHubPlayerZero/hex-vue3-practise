<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, defineProps, ref } from 'vue';

const cartRemark = ref('');

const props = defineProps({
	cart: {
		type: Array,
		required: true,
		// eslint-disable-next-line vue/require-valid-default-prop
		default: [],
	},
});

const emits = defineEmits(['process-subtotal', 'remove-from-cart', 'send-order']);

// 總計
const cartTotal = computed(() => {
	return props.cart.reduce((sum, elem) => (sum += elem.subtotal), 0);
});

// 送出
function sendOrder() {
	emits('send-order', cartRemark.value, cartTotal.value);
	cartRemark.value = '';
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
			<tr v-for="product in cart" :key="product.id">
				<td>
					<button
						type="button"
						class="btn btn-sm"
						@click="emits('remove-from-cart', product.id)"
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
						@change="emits('process-subtotal', product)"
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

	<div class="alert alert-warning text-center" v-if="cart.length <= 0">請選擇商品</div>
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
			<button type="button" class="btn btn-primary" @click="sendOrder">送出</button>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
