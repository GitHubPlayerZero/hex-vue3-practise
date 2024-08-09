<template>
	<h1 class="h1">🏅 Day9 - Vue.js 的黑魔法：Methods</h1>
	<p>
		<a href="https://hackmd.io/v4lLLnw2SV-WIPesu6w82g" target="_blank">題目</a>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob9.vue"
			target="_blank"
			>Code</a
		>｜
		<a href="https://codepen.io/codepenplayer/pen/XWLagwG" target="_blank">CodePen</a>
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
							<a
								href="javascript:void(0)"
								class="btn btn-primary"
								@click="addProduct(item)"
							>
								加入購物車
							</a>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>

	<!-- 吐司訊息 -->
	<div class="toast-container position-fixed top-0 end-0 p-3">
		<div
			v-for="(toast, index) in toasts"
			:key="index"
			class="toast show"
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
		>
			<div class="toast-body">
				{{ toast.message }}
			</div>
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

const toasts = ref([]);

function addProduct(fruit) {
	toasts.value.push({ message: `您已將 ${fruit.title} 加入購物車` });
	
	setTimeout(() => {
		toasts.value.shift();
	}, 3000);
}
</script>

<style lang="scss" scoped>
.card {
	height: 100%;

	@media (min-width: 992px) {
		height: 270px;
	}
}
</style>
