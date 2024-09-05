<script setup>
import { h, inject, ref } from 'vue';
import { useLoading } from 'vue-loading-overlay';

// const $loading = useLoading();

// 使用 inject
// const $loading = inject('$loading');

// 可以先給予元件預設的樣式
const $loading = useLoading({
	color: "#00f",
	backgroundColor: "rgba(0,0,123,0.4)",
	opacity: 0.1,
});

const num = ref(0);


/* form loading */
const formContainer1 = ref(null);
const formContainer2 = ref(null);
const isFullPage = ref(false);

// form 1
function submit1() {
	const loader = $loading.show({
		// 依據 isFullPage 決定是 full page loading 或是區域 loading
		container: isFullPage.value ? null : formContainer1.value,
	});

	// 5 秒後關閉
	setTimeout(() => {
		loader.hide();
	}, 5000);
}

// form 2：可以覆寫預設的樣式
function submit2() {
	const loader = $loading.show({
		container: formContainer2.value,	// 區域 loading
		color: "#FF00FF",
		opacity: 0.5,
		loader: "dots",
	});

	// 5 秒後關閉
	setTimeout(() => {
		loader.hide();
	}, 5000);
}


/* 整頁 loading */
function openFullLoading() {
	const loader = $loading.show();

	// 5 秒後關閉
	setTimeout(() => {
		loader.hide();
	}, 5000);
}

function openSlotLoading() {
	const loader = $loading.show({}, {
		// default: () => 'aaaa',
		default: h('div', h('h3', 'hello...')),
	});

	// 5 秒後關閉
	setTimeout(() => {
		loader.hide();
	}, 5000);
}
</script>

<template>
	<h1 class="mb-3">vue-loading-overlay（全局）</h1>

	<p>
		<a href="https://ankurk91.github.io/vue-loading-overlay/" target="_blank"> 官網 </a>｜
		<a href="https://github.com/ankurk91/vue-loading-overlay" target="_blank"> 官網 GitHub </a
		>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/kit_samples/loading_overlay/LoadingOverlayGlobal.vue"
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

	
	<!-- form 1：可以選擇 full page loading 或是 區域 loading -->
	<form @submit.prevent="submit1" class="vl-parent box mb-5" ref="formContainer1">
		<h2 class="h2">form 1</h2>
		
		<label class="d-block mb-3">
			<input type="checkbox" v-model="isFullPage" />&nbsp;&nbsp; Full page?
		</label>

		<button type="submit" class="btn btn-primary">Login</button>
	</form>
	
	
	<!-- form 2：區域 loading -->
	<form @submit.prevent="submit2" class="vl-parent box mb-5" ref="formContainer2">
		<h2 class="h2">form 2</h2>
		<button type="submit" class="btn btn-primary">Login</button>
	</form>
	
	
	<div class="mb-3">
		<button @click="openFullLoading" class="btn btn-outline-primary" type="button">
			開啟整頁 loading
		</button>&nbsp;&nbsp;
		<button @click="openSlotLoading" class="btn btn-outline-secondary" type="button">
			開啟 slot loading
		</button>&nbsp;&nbsp;
	</div>
	
</template>

<style lang="scss" scoped>
hr {
	margin-top: 32px;
	margin-bottom: 32px;
}
</style>
