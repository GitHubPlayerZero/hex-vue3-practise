<template>
	<div class="container">
		<table class="table table-striped table-hover table-bordered">
			<thead class="table-secondary">
				<tr>
					<th scope="col" class="thFunction">&nbsp;</th>
					<th scope="col">品項</th>
					<th scope="col">描述</th>
					<th scope="col">價格</th>
					<th scope="col">庫存</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in products" :key="item.id">
					<!-- 編輯模式 -->
					<template v-if="product.tmp.value.id === item.id">
						<!-- 功能區 -->
						<td class="text-center">
							<button
								type="button"
								class="btn btn-outline-success"
								@click="product.save"
							>
								完成
							</button>
							&nbsp;&nbsp;&nbsp;
							<button
								type="button"
								class="btn btn-outline-secondary"
								@click="product.reset"
							>
								取消
							</button>
						</td>

						<td><input type="text" v-model="product.tmp.value.name" /></td>
						<td><input type="text" v-model="product.tmp.value.desc" /></td>
						<td>
							<input
								type="number"
								min="0"
								style="width: 60px"
								v-model="product.tmp.value.price"
							/>
						</td>
						<td>
							<input
								type="number"
								min="0"
								style="width: 60px"
								v-model="product.tmp.value.stock"
							/>
						</td>
					</template>

					<!-- 檢視模式 -->
					<template v-else>
						<!-- 功能區 -->
						<td class="text-center">
							<button
								type="button"
								class="btn btn-outline-danger"
								@click="product.delete(item.id)"
							>
								刪除
							</button>
							&nbsp;&nbsp;&nbsp;
							<button
								type="button"
								class="btn btn-outline-primary"
								:disabled="product.isDisableModify.value"
								@click="product.modify(item)"
							>
								編輯
							</button>
						</td>

						<td>{{ item.name }}</td>
						<td>
							<small>{{ item.desc }}</small>
						</td>
						<td>{{ item.price }}</td>

						<!-- 庫存 -->
						<td>
							<button
								type="button"
								class="btn btn-outline-danger"
								@click="stock.reduce(item)"
							>
								-
							</button>

							<span class="d-inline-block" style="width: 70px; text-align: center">
								{{ item.stock }}
							</span>

							<button
								type="button"
								class="btn btn-outline-success"
								@click="stock.add(item)"
							>
								+
							</button>
						</td>
					</template>
				</tr>

				<!-- 新增模式 -->
				<!-- TODO 這部份與編輯模式重複，應做成元件共用 -->
				<tr v-if="product.isAdd.value">
					<!-- 功能區 -->
					<td class="text-center">
						<button type="button" class="btn btn-outline-success" @click="product.save">
							完成</button
						>&nbsp;&nbsp;&nbsp;

						<button
							type="button"
							class="btn btn-outline-secondary"
							@click="product.reset"
						>
							取消
						</button>
					</td>

					<td><input type="text" v-model="product.tmp.value.name" /></td>
					<td><input type="text" v-model="product.tmp.value.desc" /></td>
					<td>
						<input
							type="number"
							min="0"
							style="width: 60px"
							v-model="product.tmp.value.price"
						/>
					</td>
					<td>
						<input
							type="number"
							min="0"
							style="width: 60px"
							v-model="product.tmp.value.stock"
						/>
					</td>
				</tr>

				<tr v-else>
					<td colspan="5" class="text-center p-3">
						<button
							type="button"
							class="btn btn-primary"
							:disabled="product.isDisableAdd.value"
							@click="product.add"
						>
							<span class="d-inline-block px-3 py-1">新&nbsp;&nbsp;增</span>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
	{
		id: 1,
		name: '珍珠奶茶',
		desc: '香濃奶茶搭配QQ珍珠',
		price: 50,
		stock: 20,
	},
	{
		id: 2,
		name: '冬瓜檸檬',
		desc: '清新冬瓜配上新鮮檸檬',
		price: 45,
		stock: 18,
	},
	{
		id: 3,
		name: '翡翠檸檬',
		desc: '綠茶與檸檬的完美結合',
		price: 55,
		stock: 34,
	},
	{
		id: 4,
		name: '四季春茶',
		desc: '香醇四季春茶，回甘無比',
		price: 45,
		stock: 10,
	},
	{
		id: 5,
		name: '阿薩姆奶茶',
		desc: '阿薩姆紅茶搭配香醇鮮奶',
		price: 50,
		stock: 25,
	},
	{
		id: 6,
		name: '檸檬冰茶',
		desc: '檸檬與冰茶的清新組合',
		price: 45,
		stock: 20,
	},
	{
		id: 7,
		name: '芒果綠茶',
		desc: '芒果與綠茶的獨特風味',
		price: 55,
		stock: 18,
	},
	{
		id: 8,
		name: '抹茶拿鐵',
		desc: '抹茶與鮮奶的絕配',
		price: 60,
		stock: 20,
	},
]);

// 庫存
const stock = {
	reduce(item) {
		if (item.stock > 0) {
			item.stock--;
		}
	},

	add(item) {
		item.stock++;
	},
};

// 產品
const product = {
	tmp: ref({}),
	isDisableModify: ref(false),
	isDisableAdd: ref(false),
	isAdd: ref(false),

	add() {
		this.isDisableModify.value = true;
		this.isAdd.value = true;
	},

	delete(id) {
		if (confirm('確定要刪除此筆資料？')) {
			const index = products.value.findIndex((item) => item.id === id);
			products.value.splice(index, 1);
		}
	},

	modify(item) {
		this.isDisableModify.value = true;
		this.isDisableAdd.value = true;
		this.tmp.value = { ...item };
	},

	save() {
		/* 檢核 */
		// 品項名稱
		if (!this.tmp.value.name) {
			alert('品項不可為空！');
			return;
		}

		/* 預設值 */
		// 價格
		if (!this.tmp.value.price) {
			this.tmp.value.price = 0;
		}
		// 庫存
		if (!this.tmp.value.stock) {
			this.tmp.value.stock = 0;
		}

		// 新增
		if (this.isAdd.value) {
			this.tmp.value.id = new Date().getTime();
			products.value.push({ ...this.tmp.value });
		}
		// 編輯
		else {
			const product = products.value.find((item) => item.id === this.tmp.value.id);
			product.name = this.tmp.value.name;
			product.desc = this.tmp.value.desc;
			product.price = this.tmp.value.price;
			product.stock = this.tmp.value.stock;
		}

		this.reset();
	},

	reset() {
		this.tmp.value = {};
		this.isDisableModify.value = false;
		this.isDisableAdd.value = false;
		this.isAdd.value = false;
	},
};
</script>

<style lang="scss" scoped>
th {
	font-size: 18px;
}
td {
	vertical-align: middle;
}

.table-hover > tbody > tr:hover > * {
	background-color: #eef;
}

.thFunction {
	width: 170px;
}
</style>

<!-- TODO 完善數字輸入檢核 -->
