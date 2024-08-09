<template>
	<h1 class="h1">🏅 Day10 - Vue.js 的黑魔法：Computed</h1>
	<p>
		<a href="https://hackmd.io/8DiAOsTxRTW9lvna-yiGqw" target="_blank">題目</a>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJo10.vue"
			target="_blank"
			>Code</a
		>｜
		<a href="https://codepen.io/codepenplayer/pen/JjQrPyy" target="_blank">CodePen</a>
	</p>

	<hr class="hr mt-0" />

	<div id="app" class="container">
		<div class="mb-32">
			<p class="h4">總價：{{ totalPrice }} 元</p>
		</div>

		<div class="row">
			<template v-for="item in fruitData" :key="item.title">
				<div class="col-md-6 mb-3">
					<!-- 畫面寬度到達 lg (992px) 以上，就變為橫向反轉排列 -->
					<div class="card p-3 flex-lg-row-reverse align-items-center">
						<img
							:src="item.imgUrl"
							:alt="item.title"
							:title="`${item.title} 只要 $${item.price} 元`"
							class="img-fluid mb-3 mb-lg-0"
							style="width: 40%"
						/>

						<div class="card-body p-0">
							<h5 class="card-title">水果名稱：{{ item.title }}</h5>
							<!-- <p class="card-text my-2">價錢：{{ item.price }}</p> -->
							<p class="card-text my-2">
								價錢：
								<input type="number" min="0" v-model="item.price" class="input">
							</p>
							<p class="card-text mb-3">
								數量：
								<input type="number" min="0" v-model="item.count" class="input">
							</p>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';

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

const totalPrice = computed(() => {
	return fruitData.value.reduce((acc, item) => acc + item.price * item.count, 0);
});
</script>

<style lang="scss" scoped>
.input {
	width: 80px;
}

.card {
	height: 100%;

	@media (min-width: 992px) {
		height: 270px;
	}
}
</style>
