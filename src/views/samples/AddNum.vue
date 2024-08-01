<script setup>
import { ref } from 'vue';
const num = ref(0);

function add() {
	num.value += 3;
}
</script>

<template>
	<h1 class="h1">開場示範 - 累加</h1>
	<p>
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/AddNum.vue"
			target="_blank"
			>Code</a
		>
	</p>

	<hr class="hr mt-0" />

	<div>
		{{ num }}
		<input type="button" @click="add" value="+3" />
	</div>
</template>
