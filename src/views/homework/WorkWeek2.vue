<template>
	<h2 class="h2">使用者</h2>

	<!-- 註冊 -->
	<h3 class="h3">註冊</h3>

	<form class="box mb-32" @submit.prevent="user.register.do">
		<div class="d-flex flex-column row-gap-2 mb-28">
			<div>
				<label for="registerEmail">Email：</label>
				<input
					type="email"
					id="registerEmail"
					v-model="user.register.form.value.email"
					required
				/>
			</div>
			<div>
				<label for="registerPassword">密碼：</label>
				<input
					type="text"
					id="registerPassword"
					v-model="user.register.form.value.password"
					required
				/>
			</div>
			<div>
				<label for="registerNickname">暱稱：</label>
				<input
					type="text"
					id="registerNickname"
					v-model="user.register.form.value.nickname"
					required
				/>
			</div>
		</div>

		<button type="submit" class="btn btn-primary">註冊</button>

		<!-- 結果訊息 -->
		<div class="overflow-x-auto mt-3">
			<p class="text-success" v-if="user.register.result.value.success">
				註冊成功！<br />
				UID：{{ `${user.register.result.value.success}` }}
			</p>
			<p class="text-danger" v-else-if="user.register.result.value.fail">
				註冊失敗：{{ `${user.register.result.value.fail}` }}
			</p>
		</div>
	</form>

	<!-- 登入 -->
	<h3 class="h3">登入</h3>

	<form class="box mb-32" @submit.prevent="user.login.do">
		<div class="d-flex flex-column row-gap-2 mb-28">
			<div>
				<label for="loginEmail">Email：</label>
				<input
					type="email"
					id="loginEmail"
					v-model="user.login.form.value.email"
					required
				/>
			</div>
			<div>
				<label for="loginPassword">密碼：</label>
				<input
					type="text"
					id="loginPassword"
					v-model="user.login.form.value.password"
					required
				/>
			</div>
		</div>

		<button type="submit" class="btn btn-primary">登入</button>

		<!-- 結果訊息 -->
		<div class="overflow-x-auto mt-3">
			<p class="text-success" v-if="user.login.result.value.success">
				{{ user.login.result.value.success }}
			</p>
			<p class="text-danger" v-else-if="user.login.result.value.fail">
				登入失敗：{{ `${user.login.result.value.fail}` }}
			</p>
		</div>
	</form>

	<!-- 驗證 -->
	<h3 class="h3">驗證</h3>

	<section class="box mb-32">
		<button type="button" class="btn btn-primary" @click="user.verification.do">驗證</button>

		<!-- 結果訊息 -->
		<div class="overflow-x-auto mt-3">
			<p class="text-success" v-if="user.verification.result.value.success">
				驗證成功！<br />
				UID：{{ `${user.verification.result.value.success}` }}
			</p>
			<p class="text-danger" v-else-if="user.verification.result.value.fail">
				驗證失敗：{{ `${user.verification.result.value.fail}` }}
			</p>
		</div>
	</section>

	<!-- 登出 -->
	<h3 class="h3">登出</h3>

	<section class="box mb-32">
		<button type="button" class="btn btn-primary" @click="user.logout.do">登出</button>

		<!-- 結果訊息 -->
		<div class="overflow-x-auto mt-3">
			<p class="text-success" v-if="user.logout.result.value.success">
				{{ `${user.logout.result.value.success}` }}
			</p>
			<p class="text-danger" v-else-if="user.logout.result.value.fail">
				登出失敗：{{ `${user.logout.result.value.fail}` }}
			</p>
		</div>
	</section>

	<hr class="hr" />

	<h2 class="h2">代辧事項</h2>

	<!-- 取得所有代辦事項 -->
	<h3 class="h3">取得所有代辦事項</h3>

	<section class="box mb-32">
		<button type="button" class="btn btn-primary" @click="todoList.getter.do">
			取得代辦事項
		</button>

		<!-- 結果訊息 -->
		<div class="overflow-x-auto mt-3">
			<p class="text-danger" v-if="todoList.getter.result.value.fail">
				失敗：{{ `${todoList.getter.result.value.fail}` }}
			</p>
			<template v-else-if="todoList.getter.result.value.data">
				資料筆數：{{ todoList.getter.result.value.data?.length }}
				<div
					class="mb-2"
					v-for="(todo, index) in todoList.getter.result.value.data"
					:key="todo.createTime"
				>
					{{ index }}: {{ todo }}&nbsp;&nbsp;
					<button
						type="button"
						@click="clipboard.copy(todo.id)"
						class="btn btn-outline-success btn-sm"
					>
						複製 ID
					</button>
				</div>
			</template>
		</div>
	</section>

	<!-- 新增代辦事項 -->
	<h3 class="h3">新增代辦事項</h3>

	<form class="box mb-32" @submit.prevent="todoList.creation.do">
		<div>
			<input
				type="text"
				v-model="todoList.creation.form.value.content"
				placeholder="請輸入待辦事項"
				style="width: 80%"
				required
			/>&nbsp;&nbsp;&nbsp;
			<button type="submit" class="btn btn-primary">新增</button>
		</div>

		<!-- 結果訊息 -->
		<div class="overflow-x-auto mt-3">
			<p class="text-success" v-if="todoList.creation.result.value.success">
				{{ todoList.creation.result.value.success }}
			</p>
			<p class="text-danger" v-else-if="todoList.creation.result.value.fail">
				失敗：{{ `${todoList.creation.result.value.fail}` }}
			</p>
		</div>
	</form>

	<!-- 更新代辦事項 -->
	<h3 class="h3">更新代辦事項</h3>

	<form class="box mb-32" @submit.prevent="todoList.update.do">
		<div class="d-flex flex-column row-gap-2 mb-28">
			<div>
				<input
					type="text"
					v-model="todoList.update.form.value.id"
					placeholder="請輸入 ID"
					style="width: 250px"
					required
				/>
			</div>
			<div>
				<input
					type="text"
					v-model="todoList.update.form.value.content"
					placeholder="請輸入待辦事項"
					style="width: 80%"
					required
				/>
			</div>
		</div>

		<button type="submit" class="btn btn-primary">更新</button>

		<!-- 結果訊息 -->
		<div class="overflow-x-auto mt-3">
			<p class="text-success" v-if="todoList.update.result.value.success">
				{{ todoList.update.result.value.success }}
			</p>
			<p class="text-danger" v-else-if="todoList.update.result.value.fail">
				失敗：{{ `${todoList.update.result.value.fail}` }}
			</p>
		</div>
	</form>

	<!-- 刪除代辦事項 -->
	<h3 class="h3">刪除代辦事項</h3>

	<form class="box mb-32" @submit.prevent="todoList.deletion.do">
		<div class="d-flex flex-column row-gap-2 mb-28">
			<div>
				<input
					type="text"
					v-model="todoList.deletion.form.value.id"
					placeholder="請輸入 ID"
					style="width: 250px"
					required
				/>
			</div>
		</div>

		<button type="submit" class="btn btn-primary">刪除</button>

		<!-- 結果訊息 -->
		<div class="overflow-x-auto mt-3">
			<p class="text-success" v-if="todoList.deletion.result.value.success">
				{{ todoList.deletion.result.value.success }}
			</p>
			<p class="text-danger" v-else-if="todoList.deletion.result.value.fail">
				失敗：{{ `${todoList.deletion.result.value.fail}` }}
			</p>
		</div>
	</form>

	<!-- 切換代辦事項狀態 -->
	<h3 class="h3">切換代辦事項狀態</h3>

	<form class="box mb-32" @submit.prevent="todoList.toggle.do">
		<div class="d-flex flex-column row-gap-2 mb-28">
			<div>
				<input
					type="text"
					v-model="todoList.toggle.form.value.id"
					placeholder="請輸入 ID"
					style="width: 250px"
					required
				/>
			</div>
		</div>

		<button type="submit" class="btn btn-primary">切換</button>

		<!-- 結果訊息 -->
		<div class="overflow-x-auto mt-3">
			<p class="text-success" v-if="todoList.toggle.result.value.success">
				{{ todoList.toggle.result.value.success }}
			</p>
			<p class="text-danger" v-else-if="todoList.toggle.result.value.fail">
				失敗：{{ `${todoList.toggle.result.value.fail}` }}
			</p>
		</div>
	</form>
	
	
	<!-- 吐司訊息 -->
	<div class="position-fixed top-0 end-0 p-2">
		<div class="toast bg-warning bg-opacity-50 w-auto py-1 px-3" role="alert" aria-live="assertive" aria-atomic="true" id="toast">
			<div class="toast-body text-success text-bold">{{ msgObj?.message }}</div>
		</div>
	</div>

	<!-- 登入狀態 -->
	<div
		class="p-2 px-3 text-danger bg-info bg-opacity-50 position-fixed bottom-0 end-0"
		style="width: 300px"
	>
		{{ tokenCookie.token }}
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Toast } from 'bootstrap';
import axios from 'axios';

const baseUrl = 'https://todolist-api.hexschool.io';

// 吐司訊息
class Message {
	message = ref('');
	#toastObj = {};
	
	constructor(elmt, msg) {
		this.#toastObj = new Toast(elmt);
		this.message.value = msg;
	}
	
	show(msg) {
		if (msg) {
			this.message.value = msg;
		}
		this.#toastObj.show();
	}
}

let msgObj;
onMounted(() => {
	const elmt = document.querySelector('#toast');
	msgObj = new Message(elmt, "拷 貝 成 功 ！");
	// console.log(`msgObj ==>`, msgObj);
	// msgObj.show();
});


// 處理 cookie 存取 token 相關事務
const tokenCookie = {
	token: ref(''),

	add(val) {
		// 時效設定為第二天的凌晨 1 點
		const expirationDate = new Date();
		expirationDate.setDate(expirationDate.getDate() + 1);
		expirationDate.setHours(1);
		expirationDate.setMinutes(0);
		expirationDate.setSeconds(0);

		// 加入 cookie
		document.cookie = `hex_todo=${val}; expires=${expirationDate.toUTCString()}`;
	},

	get() {
		return document.cookie.replace(
			// eslint-disable-next-line no-useless-escape
			/(?:(?:^|.*;\s*)hex_todo\s*\=\s*([^;]*).*$)|^.*$/,
			'$1'
		);
	},

	remove() {
		document.cookie = `hex_todo=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
	},

	addAndUpdate(val) {
		this.add(val);
		this.getAndUpdate();
	},

	getAndUpdate() {
		const val = this.get();
		this.token.value = val || '請先登入！';
		return val;
	},
};

// 處理剪貼簿相關事務
const clipboard = (function () {
	const cb = navigator.clipboard;

	function copy(text) {
		cb.writeText(text)
			.then(() => {
				msgObj.show();
			})
			.catch((error) => {
				console.error(error);
			});
	}

	return { copy };
})();


/* 使用者 */
const user = {
	// 註冊
	register: {
		form: ref({
			email: 'exam@gmail.com',
			password: '123456',
			nickname: 'example',
		}),

		result: ref({}),

		do() {
			console.log(`[register] form ==>`, this.form.value);

			axios
				.post(`${baseUrl}/users/sign_up`, this.form.value)
				.then((res) => {
					console.log(`res ==>`, res);
					this.result.value = { success: res.data.uid };
				})
				.catch((error) => {
					console.error(error);
					this.result.value = { fail: error.response.data.message };
				});
		},
	},

	// 登入
	login: {
		form: ref({
			email: 'exam@gmail.com',
			password: '123456',
		}),

		result: ref({}),

		do() {
			console.log(`[login] form ==>`, this.form.value);

			// axios.post() 寫法：axios.post(url[, data[, config]])
			// axios.post(
			// 	`${baseUrl}/users/sign_in`,
			// 	// data
			// 	this.form.value
			// )

			// axios API 寫法
			axios({
				method: 'post',
				url: `${baseUrl}/users/sign_in`,
				data: this.form.value,
			})
				.then((res) => {
					console.log(`res ==>`, res);
					tokenCookie.addAndUpdate(res.data.token);
					this.result.value = { success: '登入成功！' };
				})
				.catch((error) => {
					console.error(error);
					this.result.value = { fail: error.response.data.message };
				});
		},
	},

	// 驗證
	verification: {
		result: ref({}),

		do() {
			const token = tokenCookie.getAndUpdate();
			if (!token) {
				this.result.value = { fail: '請先登入！' };
				return;
			}

			// axios.get() 寫法：axios.get(url[, config])
			// axios
			// 	.get(`${baseUrl}/users/checkout`, {
			// 		// config
			// 		headers: {
			// 			authorization: token,
			// 		},
			// 	})

			// axios API 寫法 (method 預設為 get，因此可以不寫)
			axios({
				// method: 'get',
				url: `${baseUrl}/users/checkout`,
				headers: {
					authorization: token,
				},
			})
				.then((res) => {
					console.log(`res ==>`, res);
					this.result.value = { success: res.data.uid };
				})
				.catch((error) => {
					console.error(error);
					this.result.value = { fail: error.response.data.message };
				});
		},
	},

	// 登出
	logout: {
		result: ref({}),

		do() {
			const token = tokenCookie.getAndUpdate();
			if (!token) {
				this.result.value = { fail: '您尚未登入！' };
				return;
			}

			// axios.post() 寫法：axios.post(url[, data[, config]])
			// axios
			// 	.post(
			// 		`${baseUrl}/users/sign_out`,
			// 		// data：沒有要送出的資料，需補上空物件
			// 		{},
			// 		// config
			// 		{
			// 			headers: {
			// 				authorization: token,
			// 			},
			// 		}
			// 	)

			// axios API 寫法
			axios({
				method: 'post',
				url: `${baseUrl}/users/sign_out`,
				headers: {
					authorization: token,
				},
			})
				.then((res) => {
					console.log(`res ==>`, res);
					this.result.value = { success: res.data.message };
					tokenCookie.remove();
					tokenCookie.getAndUpdate();
				})
				.catch((error) => {
					console.error(error);
					this.result.value = { fail: error.response.data.message };
				});
		},
	},
};

/* 代辦事項 */
const todoList = {
	// 取得代辦事項
	getter: {
		result: ref({}),

		do() {
			const token = tokenCookie.getAndUpdate();
			if (!token) {
				this.result.value = { fail: '請先登入！' };
				return;
			}

			axios({
				method: 'get',
				url: `${baseUrl}/todos/`,
				headers: {
					authorization: token,
				},
			})
				.then((res) => {
					console.log(`res ==>`, res);
					this.result.value = { data: res.data.data };
				})
				.catch((error) => {
					console.error(error);
					this.result.value = { fail: error.response.data.message };
				});
		},
	},

	// 新增代辦事項
	creation: {
		form: ref({
			content: '',
		}),

		result: ref({}),

		do() {
			const token = tokenCookie.getAndUpdate();
			if (!token) {
				this.result.value = { fail: '請先登入！' };
				return;
			}

			axios({
				method: 'post',
				url: `${baseUrl}/todos/`,
				data: this.form.value,
				headers: {
					authorization: token,
				},
			})
				.then((res) => {
					console.log(`res ==>`, res);
					this.result.value = { success: res.data.newTodo };
					todoList.getter.do();
				})
				.catch((error) => {
					console.error(error);
					this.result.value = { fail: error.response.data.message };
				});
		},
	},

	// 更新代辦事項
	update: {
		form: ref({
			id: '',
			content: '',
		}),

		result: ref({}),

		do() {
			const token = tokenCookie.getAndUpdate();
			if (!token) {
				this.result.value = { fail: '請先登入！' };
				return;
			}

			// axios.put() 寫法：axios.put(url[, data[, config]])
			axios
				.put(
					`${baseUrl}/todos/${this.form.value.id}`,
					// data
					{
						content: this.form.value.content,
					},
					// config
					{
						headers: {
							authorization: token,
						},
					}
				)

				// axios API 寫法
				// axios({
				// 	method: 'put',
				// 	url: `${baseUrl}/todos/${this.form.value.id}`,
				// 	data: {
				// 		content: this.form.value.content,
				// 	},
				// 	headers: {
				// 		authorization: token,
				// 	},
				// })
				.then((res) => {
					console.log(`res ==>`, res);
					this.result.value = { success: res.data.message };
					todoList.getter.do();
				})
				.catch((error) => {
					console.error(error);
					this.result.value = { fail: error.response.data.message };
				});
		},
	},

	// 刪除代辦事項
	deletion: {
		form: ref({
			id: '',
		}),

		result: ref({}),

		do() {
			const token = tokenCookie.getAndUpdate();
			if (!token) {
				this.result.value = { fail: '請先登入！' };
				return;
			}

			// axios.delete() 寫法：axios.delete(url[, config])
			axios
				.delete(
					`${baseUrl}/todos/${this.form.value.id}`,
					// config
					{
						headers: {
							authorization: token,
						},
					}
				)
				// axios API 寫法
				// axios({
				// 	method: 'delete',
				// 	url: `${baseUrl}/todos/${this.form.value.id}`,
				// 	headers: {
				// 		authorization: token,
				// 	},
				// })
				.then((res) => {
					console.log(`res ==>`, res);
					this.result.value = { success: res.data.message };
					todoList.getter.do();
				})
				.catch((error) => {
					console.error(error);
					this.result.value = { fail: error.response.data.message };
				});
		},
	},

	// 切換代辦事項
	toggle: {
		form: ref({
			id: '',
		}),

		result: ref({}),

		do() {
			const token = tokenCookie.getAndUpdate();
			if (!token) {
				this.result.value = { fail: '請先登入！' };
				return;
			}

			// axios.patch() 寫法：axios.delete(url[, config])
			// axios
			// 	.patch(
			// 		`${baseUrl}/todos/${this.form.value.id}/toggle`,
			// 		// data
			// 		this.form.value,
			// 		// config
			// 		{
			// 			headers: {
			// 				authorization: token,
			// 			},
			// 		}
			// 	)

			// axios API 寫法
			axios({
				method: 'patch',
				url: `${baseUrl}/todos/${this.form.value.id}/toggle`,
				data: this.form.value,
				headers: {
					authorization: token,
				},
			})
				.then((res) => {
					console.log(`res ==>`, res);
					this.result.value = { success: res.data.message };
					todoList.getter.do();
				})
				.catch((error) => {
					console.error(error);
					this.result.value = { fail: error.response.data.message };
				});
		},
	},
};

// 初始化
onMounted(() => {
	tokenCookie.getAndUpdate();
});
</script>

// TODO 第一版，尚待優化
