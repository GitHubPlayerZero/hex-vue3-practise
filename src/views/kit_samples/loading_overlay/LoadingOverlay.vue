<script setup>
import { ref } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const num = ref(0);

/* 整頁 loading */
const isFullLoading = ref(false);

function openFullLoading() {
	isFullLoading.value = true;

	// 5 秒後關閉
	setTimeout(() => {
		isFullLoading.value = false;
	}, 5000);
}

// cancel loading 使用起來會有怪怪的現象，有時候會導致下一次開啟時，時間沒到就自動關閉...
function cancelLoading() {
	console.log(`Loading 被 cancel 了...`);
}


/* form loading */
const isFormLoading = ref(false);
const isFullPage = ref(false);	// 是否開啟整頁 loading ?

function submit() {
	isFormLoading.value = true;

	// 5 秒後關閉
	setTimeout(() => {
		isFormLoading.value = false;
	}, 5000);
}
</script>

<template>
	<h1 class="mb-3">vue-loading-overlay（單一元件）</h1>

	<p>
		<a href="https://ankurk91.github.io/vue-loading-overlay/" target="_blank"> 官網 </a>｜
		<a href="https://github.com/ankurk91/vue-loading-overlay" target="_blank"> 官網 GitHub </a
		>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/kit_samples/loading_overlay/LoadingOverlay.vue"
			target="_blank"
		>
			code
		</a>
	</p>

	<hr class="hr" />
	
	<!-- 累加 -->
	<div class="mb-5">
		<button @click="num++" class="btn btn-outline-primary" type="button">
			累加（測試是否有被屏蔽）</button
		>&nbsp;&nbsp;&nbsp;
		{{ num }}
	</div>

	
	<!-- form：可以選擇 full page loading 或是 區域 loading -->
	<form @submit.prevent="submit" class="vl-parent box mb-5">
		<h2 class="h2">form</h2>

		<label class="d-block mb-3">
			<input type="checkbox" v-model="isFullPage" />&nbsp;&nbsp; Full page?
		</label>

		<button type="submit" class="btn btn-primary">Login</button>
		
		<!-- 用於區域的 Loading 元件 -->
		<Loading
			v-model:active="isFormLoading"
			:is-full-page="isFullPage"
			color="#f00"
			:can-cancel="false"
			:on-cancel="cancelLoading"
			background-color="rgba(0,0,123,0.4)"
			:opacity="1"
			:lock-scroll="true"
		/>
	</form>
	
	
	<!-- 整頁 loading -->
	<div style="height: 800px">
		<button @click="openFullLoading" class="btn btn-outline-primary" type="button">
			開啟整頁 loading
		</button>
	</div>
	
	
	<!-- 頁面標示，不重要 -->
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam eveniet dolore
		aliquid amet sint quam magni optio aspernatur quia?
	</p>
	
	
	<!-- 用於整頁的 Loading 元件 -->
	<Loading
		v-model:active="isFullLoading"
		color="#f00"
		:can-cancel="false"
		:on-cancel="cancelLoading"
		loader="dots"
		background-color="rgba(0,0,123,0.4)"
		:opacity="0.3"
		:lock-scroll="true"
	/>
	
</template>

<style lang="scss" scoped>
hr {
	margin-top: 32px;
	margin-bottom: 32px;
}
</style>
