<template>
	<h1 class="h1">🏅 Day6 - Vue.js 的基礎魔法：v-on</h1>
	<p>
		<a href="https://hackmd.io/l35TJvwGT4yWeN-1sIuZkA?view" target="_blank">題目</a>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob6.vue"
			target="_blank"
			>Code</a
		>｜
		<a href="https://codepen.io/codepenplayer/pen/OJemrOa" target="_blank">CodePen</a>
	</p>

	<hr class="hr mt-0" />

	<div id="app" class="container">
		<div class="row">
			<template v-for="fruit in fruitData" :key="fruit.title">
				<div class="col-md-6 mb-3">
					<div class="card p-3 flex-lg-row-reverse align-items-center">
						<img
							:src="fruit.imgUrl"
							:alt="fruit.title"
							:title="`${fruit.title} 只要 $${fruit.price} 元`"
							class="img-fluid mb-3 mb-lg-0"
							style="width: 40%"
						/>

						<div class="card-body p-0">
							<h5 class="card-title">水果名稱：{{ fruit.title }}</h5>
							<p class="card-text my-2">價錢：{{ fruit.price }}</p>
							<p class="card-text mb-3">數量：{{ fruit.count }}</p>
							<a href="#" class="btn btn-primary" @click="addProduct(fruit)">加入購物車</a>
						</div>
					</div>
				</div>
			</template>
			
			<hr class="my-4">
			<p>購物車資料：{{ cartData }}</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const fruitData = ref([
	{
		title: 'apple',
		price: 25,
		count: 50,
		imgUrl: 'https://i.imgur.com/w4sYWlS.jpeg',
	},
	{
		title: 'orange',
		price: 15,
		count: 20,
		imgUrl: 'https://i.imgur.com/PSmzmXi.jpeg',
	},
	{
		title: 'strawberry',
		price: 45,
		count: 10,
		imgUrl: 'https://i.imgur.com/FIMmh6h.png',
	},
	{
		title: 'kiwi',
		price: 55,
		count: 20,
		imgUrl: 'https://i.imgur.com/TIA6v4m.jpeg',
	},
]);

const cartData = ref([]);

const addProduct = (fruit) => {
	cartData.value.push({ ...fruit })
	alert(`您已將 ${fruit.title} 加入購物車`);
};

</script>

<style lang="scss" scoped>
.card {
	height: 100%;

	@media (min-width: 992px) {
		height: 270px;
	}
}
</style>
