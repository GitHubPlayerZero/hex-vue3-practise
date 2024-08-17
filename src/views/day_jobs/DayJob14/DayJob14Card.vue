<template>
	<div class="card">
		<img :src="imgUrl" class="card-img-top" :alt="title" />
		<div class="card-body">
			<h5 class="card-title">水果名稱：{{ title }}</h5>
			<p class="card-text">價錢：{{ price }}</p>
			<p class="card-text">數量：{{ count }}</p>
			<a href="#" class="btn" @click.prevent="requestAdd">加入購物車</a>&nbsp;&nbsp;
			<!-- 另一種 emit 寫法 -->
			<a href="#" class="btn" @click.prevent="emits('add-cart', title)">加入購物車 2</a>
		</div>
	</div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
	imgUrl: String,
	title: String,
	price: Number,
	count: Number,
});

const emits = defineEmits(['add-cart']);

function requestAdd() {
	emits('add-cart', props.title);
}
</script>

<style lang="scss" scoped>
.card {
	border: 1px solid #ddd;
	border-radius: 4px;
	overflow: hidden;
}

.card-img-top {
	width: 25%;
	display: block;
	margin: 16px auto;
}

.card-body {
	padding: 16px;
}

.card-title {
	font-size: 1.25rem;
	margin-bottom: 8px;
}

.card-text {
	margin-bottom: 8px;
}

.btn {
	display: inline-block;
	padding: 8px 16px;
	background-color: #007bff;
	color: #fff;
	text-align: center;
	border-radius: 4px;
	text-decoration: none;
}
</style>
