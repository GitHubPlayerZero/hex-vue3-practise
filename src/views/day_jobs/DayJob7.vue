<template>
	<h1 class="h1">🏅 Day7 - Vue.js 的基礎魔法：v-bind</h1>
	<p>
		<a href="https://hackmd.io/OGmCgSIATfGOVwOcTwMm2g" target="_blank">題目</a>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob7.vue"
			target="_blank"
			>Code</a
		>｜
		<a href="https://codepen.io/codepenplayer/pen/yLdXaGN" target="_blank">CodePen</a>
	</p>

	<hr class="hr mt-0" />

	<div id="app" class="container">
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
							<p class="card-text my-2">價錢：{{ item.price }}</p>
							<p class="card-text mb-3">數量：{{ item.count }}</p>
							<a href="javascript:void(0)" class="btn btn-primary">加入購物車</a>
						</div>
					</div>
				</div>
				
			</template>
			
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
</script>

<style lang="scss" scoped>
.card {
	height: 100%;

	@media (min-width: 992px) {
		height: 270px;
	}
}
</style>
