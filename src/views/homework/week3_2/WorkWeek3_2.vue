<script setup>
import Menu from './Menu.vue';
import Cart from './Cart.vue';
import Order from './Order.vue';
</script>

<template>
	<h2>自己的人生自己寫，各司其職</h2>
	<p>
		風格：<br>
		將有需要共用的資料抽成模組，按需求 import 進來用。<br>
		邏輯可以完全寫在各元件中。
	</p>

	<div class="container mt-5">
		<div class="row">
			<!-- 菜單 -->
			<div class="col-md-4">
				<Menu />
			</div>

			<!-- 購物車 -->
			<div class="col-md-8">
				<Cart />
			</div>
		</div>

		<hr />

		<!-- 訂單 -->
		<div class="row justify-content-center">
			<div class="col-8">
				<Order />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
