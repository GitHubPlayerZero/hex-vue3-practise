<template>
	<h1 class="h1">axios</h1>
	<p>
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/AxiosTest.vue"
			target="_blank"
			>Code</a
		>
	</p>

	<div class="container">
		<!-- Card -->
		<div class="row mb-32 row-gap-4">
			<div v-for="user in userList" :key="user.email" class="col-4">
				<div class="card">
					<img :src="user.picture.large" class="card-img-top" alt="user.name.first" />
					<div class="card-body">
						<h5 class="card-title">
							{{ `${user.name.title}. ${user.name.first} ${user.name.last}` }}
						</h5>
						<hr />
						<p class="card-text">
							Gender：{{ user.gender }}<br />
							City：{{ user.location.city }}<br />
							Email：{{ user.email }}<br />
							Phone：{{ user.phone }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- 功能按鈕 -->
	<div class="box d-flex justify-content-between p-3 mb-32">
		<div class="d-flex gap-3">
			<button type="button" class="btn btn-primary" @click="testBase">基本測試</button>
			<button type="button" class="btn btn-primary" @click="testLinkedRequest">
				連續請求同一個人
			</button>
			<button type="button" class="btn btn-secondary" @click="testMultiRequest">多次請求</button>
			<button type="button" class="btn btn-secondary" @click="testMultiRequestAll">多次請求同步</button>
		</div>
		<button type="button" class="btn btn-warning" @click="clear">清空</button>
	</div>
	
</template>

<script setup>
import { ref } from 'vue';

import axios from 'axios';

const userList = ref([]);

// 基本測試
function testBase() {
	axios
		.get('https://randomuser.me/api/')
		.then((res) => {
			console.log(`res ==>`, res);
			userList.value.push(res.data.results[0]);
		})
		.catch((error) => {
			console.error(error);
		});
}

// 連續請求同一個人
function testLinkedRequest() {
	console.clear();

	axios
		.get('https://randomuser.me/api/')
		.then((res) => {
			console.log(`#1 res ==>`, res);
			userList.value.push(res.data.results[0]);
			return axios.get(`https://randomuser.me/api/?seed=${res.data.info.seed}`);
		})
		.then((res) => {
			console.log(`#2 res ==>`, res);
			userList.value.push(res.data.results[0]);
		})
		.catch((err) => {
			console.log(`err ==>`, err);
		});
}

// 多次請求：先回來的會先渲染，可以看到卡片渲染有較明顯的先後時間差。
function testMultiRequest() {
	testBase();
	testBase();
	testBase();
}

// 多次請求同步：全部都回來再一次性渲染，卡片幾乎同時出現。
function testMultiRequestAll() {
	Promise.all([
		axios.get('https://randomuser.me/api/'),
		axios.get('https://randomuser.me/api/'),
		axios.get('https://randomuser.me/api/')
	])
	.then (resAry => {
		console.log(`resAry =>`, resAry);
		resAry.forEach(item => {
			userList.value.push(item.data.results[0]);
		});
	})
	.catch (error => {
		console.error(error);
	})
}

// 清空
function clear() {
	userList.value = [];
}
</script>

<style lang="scss" scoped></style>
