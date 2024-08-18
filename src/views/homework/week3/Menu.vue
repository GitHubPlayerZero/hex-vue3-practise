<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineEmits } from 'vue';

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

const emits = defineEmits(['add-to-cart']);
</script>

<template>
	<div class="list-group">
		<a
			href="#"
			class="list-group-item list-group-item-action"
			v-for="product in productList"
			:key="product.id"
			@click.prevent="emits('add-to-cart', product)"
		>
			<div class="d-flex w-100 justify-content-between">
				<h5 class="mb-1">{{ product.name }}</h5>
				<small>{{ product.price }}</small>
			</div>
			<p class="mb-1">{{ product.description }}</p>
		</a>
	</div>
</template>

<style lang="scss" scoped></style>
