<template>
	<h1 class="h1">🏅 Day1 - Vue.js 的基礎魔法：v-text、v-html、v-once</h1>
	<p>
		<a href="https://hackmd.io/67i9ck20QjW5iHL0CexPyQ?view" target="_blank">題目</a>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob1.vue"
			target="_blank"
			>Code</a
		>｜
		<a href="https://codepen.io/codepenplayer/pen/YzopbXP" target="_blank">CodePen</a>
	</p>

	<hr class="hr mt-0" />

	<div id="app">
		<fieldset class="fieldset mb-24">
			<legend>Q1</legend>
			<div class="Q1">
				Ray 身上有 {{ RayMoney }} 元，去超商吃午餐花了 {{ lunchPrice }} 元，買了一杯飲料花了
				{{ drinkPrice }} 元。
			</div>
		</fieldset>

		<fieldset class="fieldset mb-24">
			<legend>Q2</legend>
			<div class="Q2" v-text="rawHTML"></div>
		</fieldset>

		<fieldset class="fieldset mb-24">
			<legend>Q3</legend>
			<div class="Q3" v-html="rawHTML"></div>
		</fieldset>

		<fieldset class="fieldset mb-24">
			<legend>Q4</legend>
			<div class="Q4" v-once>此欄位為單次綁定：去超商吃午餐花了 {{ lunchPrice }} 元</div>
		</fieldset>

		<hr class="hr" />
		
		<button type="button" @click="changeLunchPrice">
			90 元太對不起 Ray 的身價，改吃 1000 元
			<br />
			（Q4 綁定 v-once 的元素不會被改變）
		</button>

		<p class="mt-16">
			v-html 有機會產生 XSS 弱點：
			<a href="https://blog.csdn.net/zhaoletf/article/details/115101293" target="_blank">
				參考
			</a>
		</p>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const RayMoney = ref(1500);
const lunchPrice = ref(90);
const drinkPrice = ref(65);

const rawHTML = ref(
	"<p style='color: blue;'>姆咪姆咪心動動 (*´∀`)~♥</p>" +
		"<img src='' style='display: none;' onerror='alert(`這是 XSS 攻擊`)'>"
);

function changeLunchPrice() {
	lunchPrice.value = 1000;
}
</script>
