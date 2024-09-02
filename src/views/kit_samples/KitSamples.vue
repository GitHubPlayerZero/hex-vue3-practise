<script setup></script>

<template>
	<nav class="mb-16">
		<RouterLink :to="{name: 'bootstrap'}">Bootstrap</RouterLink>｜
	</nav>

	<hr style="margin: 0 0 24px; border: 3px solid pink; box-shadow: 2px 2px 3px orchid" />

	<RouterView />
</template>

<style lang="scss">
body {
	padding: 0 15px 40px;
}
</style>
