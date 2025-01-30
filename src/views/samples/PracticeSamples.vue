<script setup></script>

<template>
	<!-- https://github.com/GitHubPlayerZero/hex-vue3-practise/tree/main/src/views/samples -->
	<!-- https://githubplayerzero.github.io/hex-vue3-practise/#/samples -->

	<nav class="mb-16">
		<RouterLink to="/samples/addnum">開場示範 - 累加</RouterLink>｜
		<RouterLink to="/samples/vmodel">v-model</RouterLink>｜
		<RouterLink to="/samples/vbind">v-bind</RouterLink>｜
		<RouterLink to="/samples/von">v-on</RouterLink>｜
		<RouterLink to="/samples/axios">axios</RouterLink>｜
		<RouterLink to="/samples/cookie">cookie</RouterLink>｜
		<RouterLink to="/samples/comtest1">元件共用模組</RouterLink>｜
		<RouterLink to="/samples/state">手刻元件狀態管理</RouterLink>｜
		<RouterLink to="/samples/event">測試事件觸發</RouterLink>｜
		<RouterLink to="/samples/meta-url">meta 資料與 URL 測試</RouterLink>｜
		<RouterLink to="/samples/pinia-sample">Pinia 練習範例</RouterLink>｜
	</nav>

	<hr class="hr-catalog" />

	<RouterView />
</template>

<style lang="scss">
body {
	padding: 0 15px 40px;
}
</style>
