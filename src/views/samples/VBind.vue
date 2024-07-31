<template>
	<h2>v-bind</h2>
	<p class="mb-28">
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/VBind.vue"
			target="_blank"
			>Code</a
		>
	</p>

	<hr class="hr" />

	<h3>綁定屬性</h3>

	<fieldset class="box mb-24">
		<legend>範例 1</legend>

		<div style="display: flex; flex-wrap: wrap; gap: 30px">
			<div>
				<p>使用純值</p>
				<img v-bind:src="imgUrl" alt="使用純值" />
			</div>

			<div>
				<p>使用物件</p>
				<img :src="img.src" :alt="img.alt" :title="img.title" />
			</div>

			<div>
				<p>使用樣板字面值 + 表達式</p>
				<img v-bind:src="`${imgUrl}`" alt="使用樣板字面值 + 表達式" />
			</div>
		</div>
	</fieldset>

	<fieldset class="box mb-24">
		<legend>範例 2</legend>

		<label>
			Disabled？
			<input type="checkbox" v-model="isDisabled" />
		</label>
		&nbsp;
		<input type="text" :disabled="isDisabled" />
	</fieldset>

	<hr class="hr mt-36 mb-36" />

	<h3>綁定行內樣式 (style)</h3>

	<fieldset class="box mb-40 pl-28 pb-28">
		<legend class="mb-24">一般 HTML 寫法</legend>
		<div class="box-sample" style="background-color: green; transform: rotate(45deg)"></div>
	</fieldset>

	<fieldset class="box mb-40 pl-28 pb-28">
		<legend>使用 v-bind (物件寫法)</legend>

		<ul class="mb-32">
			<li>CSS 屬性名稱要改用小駝峰寫法。</li>
			<li>CSS 屬性值需加上引號（因為是物件屬性值）。</li>
		</ul>

		<div
			class="box-sample"
			v-bind:style="{ backgroundColor: 'green', transform: 'rotate(45deg)' }"
		></div>
	</fieldset>

	<fieldset class="box mb-40 pl-28 pb-28">
		<legend class="mb-8">搭配三元運算子判斷</legend>

		<div class="mb-32">
			<label> <input type="checkbox" v-model="isRotate" />&nbsp; 旋轉 </label>
			&nbsp;&nbsp;&nbsp;
			<label> <input type="checkbox" v-model="isChangeColor" />&nbsp; 變色 </label>
		</div>

		<div>
			<div
				class="box-sample"
				:style="{
					backgroundColor: isChangeColor ? 'blue' : 'green',
					transform: isRotate ? 'rotate(45deg)' : null,
				}"
			></div>
		</div>
	</fieldset>

	<fieldset class="box mb-40 pl-28 pb-28">
		<legend class="mb-24">陣列寫法</legend>
		<div
			class="box-sample"
			v-bind:style="[{ backgroundColor: 'green' }, { transform: 'rotate(45deg)' }]"
		></div>
	</fieldset>

	<hr class="hr mt-36 mb-36" />

	<h2>綁定 class</h2>

	<fieldset class="box mb-40 pl-28 pb-28">
		<legend class="mb-8">物件寫法</legend>

		<div class="mb-32">
			<label><input type="checkbox" v-model="isRotate2" /> 旋轉</label
			>&nbsp;&nbsp;&nbsp;&nbsp;
			<label><input type="checkbox" v-model="isChangeColor2" /> 變色</label>
		</div>

		<div :class="{ 'box-sample': true, rotate: isRotate2, 'bg-green': isChangeColor2 }"></div>
	</fieldset>

	<fieldset class="box mb-40 pl-28 pb-28">
		<legend class="mb-24">陣列寫法</legend>
		<div :class="['box-sample', 'rotate', 'bg-green']"></div>
	</fieldset>
</template>

<script setup>
import { ref } from 'vue';

const imgUrl = ref(
	'https://plus.unsplash.com/premium_photo-1722077703164-b2c0cbefd9e5?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
);

const img = ref({
	src: 'https://plus.unsplash.com/premium_photo-1676654936177-d9fee86ca807?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	alt: '使用物件',
	title: '這是一張圖片',
});

const isDisabled = ref(false);
const isRotate = ref(false);
const isChangeColor = ref(false);
const isRotate2 = ref(false);
const isChangeColor2 = ref(false);
</script>

<style lang="scss" scoped>
.box-sample {
	height: 70px;
	width: 70px;
	background: red;
	transition: 0.5s all;
}

.bg-green {
	background-color: green;
}

.rotate {
	transform: rotate(45deg);
}
</style>
