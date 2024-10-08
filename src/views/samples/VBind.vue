<template>
	<h1 class="h1">v-bind</h1>
	<p>
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/VBind.vue"
			target="_blank"
			>Code</a
		>
	</p>

	<hr class="hr mt-0" />

	<h2 class="h2">綁定屬性</h2>

	<fieldset class="fieldset mb-32">
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

	<fieldset class="fieldset mb-24">
		<legend>範例 2</legend>

		<label>
			Disabled？
			<input type="checkbox" v-model="isDisabled" />
		</label>
		&nbsp;
		<input type="text" :disabled="isDisabled" />
	</fieldset>
	
	<fieldset class="fieldset mb-24">
		<legend>範例 3</legend>
		
		<p>
			綁定固定值。<br>
			只能使用字串，需要使用單引號／雙引號／樣板字面值將其包起來。
		</p>
		
		<label class="box mb-24">
			<input type="checkbox">&nbsp;&nbsp;一般 HTML 寫法
		</label>
		
		<!-- [Vue warn]: Property "checkbox" was accessed during render but is not defined on instance. -->
		<label class="box mb-24">
			<input :type="checkbox">
			<br>
			<p class="mt-3">
				使用 v-bind 綁定 type，但是其值 (checkbox) 沒有使用字串形式，所以 checkbox 會被視為 vue 資料，而在 console 出現渲染錯誤的警告。<br>
				這邊也無法正常顯示為 checkbox。
			</p>
		</label>
		
		<label class="box">
			<input :type="'checkbox'">&nbsp;&nbsp;
			使用 v-bind 綁定 type，其值 (checkbox) 使用單引號包覆代表字串形式。
		</label>
		
	</fieldset>
	
	<fieldset class="fieldset mb-24">
		<legend>範例 4</legend>
		<p>以物件方式綁定，可以一次綁定多個屬性。</p>
		<label>
			<input v-bind="{ type: 'checkbox', id: 'chk1', name: 'chkgroup1', test: 'aaa', style: 'accent-color: red; width: 50px;'}">&nbsp;&nbsp;
			按我
		</label>
	</fieldset>

	<hr class="hr" />

	<h2 class="h2">綁定行內樣式 (style)</h2>

	<fieldset class="fieldset mb-40 pl-28 pb-28">
		<legend class="mb-16">一般 HTML 寫法</legend>
		<div class="box-sample" style="background-color: green; transform: rotate(45deg)"></div>
	</fieldset>

	<fieldset class="fieldset mb-40 pl-28 pb-28">
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

	<fieldset class="fieldset mb-40 pl-28 pb-28">
		<legend>搭配三元運算子判斷</legend>

		<div class="mb-32">
			<label>
				<input type="checkbox" v-model="isRotate" />&nbsp;
				旋轉&nbsp;
				<span>isRotate：{{ isRotate }}</span>
			</label>
			
			&nbsp;&nbsp;&nbsp;
			
			<label>
				<input type="checkbox" v-model="isChangeColor" />&nbsp;
				變色&nbsp;
				<span>isChangeColor：{{ isChangeColor }}</span>
			</label>
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

	<fieldset class="fieldset mb-40 pl-28 pb-28">
		<legend class="mb-16">陣列寫法</legend>
		<div
			class="box-sample"
			v-bind:style="[{ backgroundColor: 'green' }, { transform: 'rotate(45deg)' }]"
		></div>
	</fieldset>

	<hr class="hr" />

	<h2 class="h2">綁定 class</h2>

	<fieldset class="fieldset mb-40 pl-28 pb-28">
		<legend>物件寫法</legend>

		<div class="mb-32">
			<label>
				<input type="checkbox" v-model="isRotate2" />&nbsp;
				旋轉&nbsp;
				<span>isRotate2：{{ isRotate2 }}</span>
			</label>
			
			&nbsp;&nbsp;&nbsp;&nbsp;
			
			<label>
				<input type="checkbox" v-model="isChangeColor2" />&nbsp;
				變色&nbsp;
				<span>isChangeColor2：{{ isChangeColor2 }}</span>
			</label>
		</div>

		<div :class="{ 'box-sample': true, rotate: isRotate2, 'bg-green': isChangeColor2 }"></div>
	</fieldset>

	<fieldset class="fieldset mb-40 pl-28 pb-28">
		<legend class="mb-16">陣列寫法</legend>
		<div :class="['box-sample', 'rotate', 'bg-green']"></div>
		
		<div class="box mt-5 pl-32 pb-32">
			<p>動態陣列</p>
			
			<div class="mb-32">
				<label><input type="checkbox" v-model="classList" value="rotate" /> 旋轉</label>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<label><input type="checkbox" v-model="classList" value="bg-green" /> 變色</label>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<span>classList：{{ classList }}</span>
			</div>
			
			<div class="box-sample" :class="classList"></div>
		</div>
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
const classList = ref([]);
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
