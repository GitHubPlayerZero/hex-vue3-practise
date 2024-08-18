<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineProps } from 'vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
	order: {
		type: Array,
		required: true,
		// eslint-disable-next-line vue/require-valid-default-prop
		default: [],
	},
	orderRemark: String,
	orderTotal: {
		type: Number,
		default: 0,
	},
});
</script>

<template>
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
</template>

<style lang="scss" scoped></style>
