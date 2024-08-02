<template>
	<h1 class="h1">🏅 Day5 - Vue.js 的基礎魔法：v-if、v-else</h1>
	<p>
		<a href="https://hackmd.io/hPm68LjkTNWBsQ9LujPJXw" target="_blank">題目</a>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob5.vue"
			target="_blank"
			>Code</a
		>｜
		<a href="https://codepen.io/codepenplayer/pen/abgJXYP" target="_blank">CodePen</a>
	</p>

	<hr class="hr mt-0" />

	<div id="app" class="container">
		
		<!-- 選擇價格條件 -->
		<ul class="mb-20 d-flex flex-column flex-md-row" style="row-gap: 7px; column-gap: 30px;">
			<li class="list-unstyled">
				<label>
					<input type="radio" value="0" v-model="priceFloor" />&nbsp;全部
				</label>
			</li>
			<li class="list-unstyled">
				<label>
					<input type="radio" value="15" v-model="priceFloor" />&nbsp;超過 15 元
				</label>
			</li>
			<li class="list-unstyled">
				<label>
					<input type="radio" value="25" v-model="priceFloor" />&nbsp;超過 25 元
				</label>
			</li>
		</ul>
		
		<!-- 卡片區 -->
		<div class="row">
			
			<template v-for="fruit in fruitData" :key="fruit.title">
				<div class="col-md-6 mb-3" v-if="fruit.price > priceFloor">
					
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

const priceFloor = ref(0);
</script>

<style lang="scss" scoped>
.card {
	height: 100%;

	@media (min-width: 992px) {
		height: 270px;
	}
}
</style>
