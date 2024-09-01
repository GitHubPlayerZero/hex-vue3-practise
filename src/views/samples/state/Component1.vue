<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, toRef } from 'vue';
import { comState } from './comState';

console.log(`[initial] comState ==>`, comState);
console.log(``);

const obj1 = {
	name: '小明',
	age: 20,
	family: {
		father: {
			name: '明爸',
			age: 54,
		},
		brother: {
			name: '大明',
			age: 25,
		},
	},
	test: {
		test1: '這是測試1',
		test2: '這是測試2',
	},
};

const obj2 = ref(obj1);

function showObj() {
	console.log(`obj1 ==>`, obj1);
	console.log(`obj2 ==>`, obj2);
	console.log(``);
	console.log(`comState ==>`, comState);
	console.log(`comState.datas ==>`, comState.datas);
	console.log(`count ==>`, comState.count);
}

function addDatas() {
	// comState.datas.push(JSON.parse(JSON.stringify(obj2.value)));
	comState.datas.push(obj2.value);
}

/**
 * 對於取出純值使用，若只用 ref 綁定，其值不會綁定原物件。
 * 使用 toRef 綁定，不僅本身為响應式，其值還能與原物件連動。
 * toRef 甚至可以綁定原物件不存在的屬性，當對變數編輯時，就會自動放入原物件。
 */
const refCount = ref(comState.count);
console.log(`refCount ==>`, refCount);

const refCount2 = toRef(comState, 'count2');
console.log(`refCount2 ==>`, refCount2);
if (!refCount2.value) {
	refCount2.value = 30;
}

function addCount() {
	refCount.value ++;
}

const refMsg = toRef(comState, 'msg');
console.log(`refMsg ==>`, refMsg);
console.log(`comState ==>`, comState);
</script>

<template>
	<h1 class="h1">手刻元件狀態管理</h1>
	<p>
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/state/Component1.vue"
			target="_blank"
		>
			Code
		</a>
	</p>

	<hr class="hr mt-0" />
	
	<p class="mb-28">物件不管有沒有綁定响應式，都可以更改其內容，差別在於會不會主動更新渲染。</p>
	
	<h2>obj1</h2>
	<p>沒有响應式</p>
	<div class="mb-40">
		<p><input type="text" v-model="obj1.name" /> {{ obj1.name }}</p>
		<p><input type="text" v-model="obj1.family.father.age" /> {{ obj1.family.father.age }}</p>
	</div>
	
	<h2>obj2</h2>
	<p>以 obj1 綁定响應式</p>
	<div class="mb-16">
		<p><input type="text" v-model="obj2.name" /> {{ obj2.name }}</p>
		<p><input type="text" v-model="obj2.family.father.age" /> {{ obj2.family.father.age }}</p>
	</div>
	
	<input type="button" @click="addDatas" value="add datas">&nbsp;
	
	<p class="mt-3">{{ comState.datas }}</p>
	
	<hr class="hr">
	
	<h2>count</h2>
	<div>
		<p>comState.count：<input type="text" v-model="comState.count"> {{ comState.count }}&nbsp;&nbsp;</p>
		<p>refCount：<input type="text" v-model="refCount"> {{ refCount }}&nbsp;&nbsp;</p>
		<p>toRefCount2：<input type="text" v-model="refCount2"> {{ refCount2 }}&nbsp;&nbsp;</p>
	</div>
	
	<input type="button" @click="comState.count ++" value="add comState.count">&nbsp;
	<input type="button" @click="addCount" value="add refCount">&nbsp;
	<input type="button" @click="refCount2 ++" value="add refCount2">&nbsp;
	
	<hr class="hr">
	
	<h2>不存在的屬性</h2>
	<div>
		<p>refMsg：<input type="text" v-model="refMsg"> {{ refMsg }}&nbsp;&nbsp;{{ comState.msg }}</p>
	</div>
	
	<input type="button" @click="showObj" value="show comState">&nbsp;
	
	
</template>
