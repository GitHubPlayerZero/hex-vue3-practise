<template>
	<h1 class="h1">🏅 Day2 - Vue.js 的基礎魔法：v-model</h1>
	<p>
		<a href="https://hackmd.io/6GU7jdDzQpuVY-vieeZxZQ" target="_blank">題目</a>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob2.vue"
			target="_blank"
			>Code</a
		>｜
		<a href="https://codepen.io/codepenplayer/pen/BagpZRP" target="_blank">CodePen</a>
	</p>

	<hr class="hr mt-0" />

	<div id="app">
		<fieldset class="fieldset">
			<legend>&nbsp;Q1：v-model&nbsp;</legend>

			<div class="box">
				<input type="text" v-model="message" />&nbsp;&nbsp;&nbsp;{{ message }}
			</div>

			<div class="box">
				<p>延伸練習：.lazy</p>
				<input type="text" v-model.lazy="message" />&nbsp;&nbsp;&nbsp;{{ message }}

				<p class="desc mb-0">
					說明：當輸入框失去焦點（游標移開），或是按 Enter 時才會觸發。
				</p>
			</div>

			<div class="box">
				<p>延伸練習：.trim</p>
				<input type="text" v-model.trim="message" />&nbsp;&nbsp;&nbsp;{{ message }}

				<p class="desc mb-0">
					說明：自動刪除前後兩端的空格，不管是半形或全型空格都可以刪除。
				</p>
			</div>
		</fieldset>

		<fieldset class="fieldset">
			<legend>&nbsp;Q2：.number&nbsp;</legend>

			<div class="box">
				<p>type 為 text，沒有使用修飾符：</p>
				<input type="text" v-model="phoneNumber" @input="checkType" />&nbsp;&nbsp;&nbsp;
				{{ phoneNumber }}&nbsp;&nbsp;
				{{ result }}
			</div>

			<div class="box">
				<p>type 為 text，使用 .number 修飾符：</p>
				<input
					type="text"
					v-model.number="phoneNumber"
					@input="checkType"
				/>&nbsp;&nbsp;&nbsp; {{ phoneNumber }}&nbsp;&nbsp;
				{{ result }}
			</div>

			<div class="box mb-0">
				<p>type 為 number，沒有使用修飾符：</p>
				<input type="number" v-model="phoneNumber" @input="checkType" />&nbsp;&nbsp;&nbsp;
				{{ phoneNumber }}&nbsp;&nbsp;
				{{ result }}

				<p class="desc">
					說明：.number 修飾符，會在 type="number" 時自動啟用。詳見
					<a
						href="https://cn.vuejs.org/guide/essentials/forms.html#number"
						target="_blank"
						>官方說明</a
					>
					。
				</p>
			</div>
		</fieldset>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('這是一段話');
const phoneNumber = ref('0988888888');

const result = ref('');
const checkType = () => {
	result.value = typeof phoneNumber.value;
};
</script>

<style lang="scss" scoped>
.fieldset {
	margin-bottom: 32px;
}

.box {
	margin-bottom: 24px;
}

.desc {
	margin-top: 20px;
	margin-bottom: 5px;
}

</style>
