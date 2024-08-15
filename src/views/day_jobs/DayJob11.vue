<template>
	<h1 class="h1">🏅 Day11 - Vue.js 的黑魔法：Watch</h1>
	<p>
		<a href="https://hackmd.io/5qENDoiZS261xzOlaSRL5w" target="_blank">題目</a>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob11.vue"
			target="_blank"
			>Code</a
		>｜
		<a href="https://codepen.io/codepenplayer/pen/VwJMGgP" target="_blank">CodePen</a>
	</p>

	<hr class="hr mt-0" />

	<h2 class="h2">方法一：監聽整個物件</h2>
	<p>需搭配深層監聽。</p>

	<form class="box mb-5" @submit.prevent>
		<div class="m-2">
			<label for="username">購買人姓名：</label>
			<input id="username" v-model="user.username" />&nbsp;&nbsp;
			<span class="error" v-if="errors.username">{{ errors.username }}</span>
		</div>
	</form>
	
	<h2 class="h2">方法二：監聽物件裡的純值屬性</h2>
	<p>需搭配使用 getter 函式作為監聽來源的寫法。</p>
	
	<form class="box" @submit.prevent>
		<div class="m-2">
			<label for="username2">購買人姓名：</label>
			<input id="username2" v-model="user2.username" />&nbsp;&nbsp;
			<span class="error" v-if="errors2.username">{{ errors2.username }}</span>
		</div>
	</form>
	
	<hr class="hr">
	
	<h2 class="h2">即時監聽練習</h2>
	<p>一開始就會先自動執行監聽。</p>
	<form class="box" @submit.prevent>
		<div class="m-2">
			<label for="username3">購買人姓名：</label>
			<input id="username3" v-model="user3.username" />&nbsp;&nbsp;
			<span class="error" v-if="errors3.username">{{ errors3.username }}</span>
		</div>
	</form>
	
</template>

<script setup>
import { ref, watch } from 'vue';

const user = ref({
	username: '',
});
const errors = ref({
	username: '',
});

const user2 = ref({
	username: '',
});
const errors2 = ref({
	username: '',
});

const user3 = ref({
	username: '',
});
const errors3 = ref({
	username: '',
});


const checkName = (name) => {
	if (name.length != 3) {
		return "需要正確的輸入名稱";
	} else {
		return "";
	}
};

/**
 * 監聽 user.username
 * 監聽來源：整個物件。
 * 做法：需要搭配設定為深層監聽。
 */
watch(
	user,	// 監聽整個物件
	(newVal) => {
		console.log(`#1 newVal ==>`, newVal);
		errors.value.username = checkName(newVal.username);
	},
	{
		deep: true, // 深層監聽
	}
);


/**
 * 監聽 user2.username
 * 監聽來源：物件內的某個純值屬性。
 * 做法：需要使用 getter 函式作為監聽來源的寫法。
 */
watch(
	() => user2.value.username,	// 使用 getter 函式
	(newVal) => {
		console.log(`#2 newVal ==>`, newVal);
		errors2.value.username = checkName(newVal);
	},
);


/* 立即監聽 */
watch(
	user3,
	(newVal) => {
		console.log(`#3 newVal ==>`, newVal);
		errors3.value.username = checkName(newVal.username);
	},
	{
		deep: true, // 深層監聽
		immediate: true,	// 立即監聽
	}
);
</script>

<style lang="scss" scoped>
.error {
	color: red;
	font-size: 0.8em;
}
</style>
