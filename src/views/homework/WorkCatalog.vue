<script setup></script>

<template>
	<nav class="mb-16">
		<RouterLink to="/homework/week1">第 1 週作業</RouterLink>｜
		<RouterLink to="/homework/week2">第 2 週作業</RouterLink>｜
		<RouterLink to="/homework/week3nocomp">第 3 週作業 (沒有拆元件)</RouterLink>｜
		<RouterLink to="/homework/week3">第 3 週作業 - 拆元件寫法 1</RouterLink>｜
		<RouterLink to="/homework/week3-2">第 3 週作業 - 拆元件寫法 2</RouterLink>｜
		<RouterLink to="/homework/week4">第 4 週作業</RouterLink>｜
	</nav>

	<hr class="hr-catalog" />

	<router-view></router-view>
</template>
