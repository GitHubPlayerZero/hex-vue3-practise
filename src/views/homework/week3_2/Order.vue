<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { order } from './js';
const { datas, remark, total } = order;
</script>

<template>
	<div class="alert alert-secondary" v-if="datas.length <= 0">尚未建立訂單</div>
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
						<tr v-for="product in datas" :key="product.id">
							<td>{{ product.name }}</td>
							<td>{{ product.count }}</td>
							<td>{{ product.subtotal }}</td>
						</tr>
					</tbody>
				</table>
				<div class="text-end">
					備註: <span>{{ remark }}</span>
				</div>
				<div class="text-end">
					<h5>
						總計: <span>${{ total }}</span>
					</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
