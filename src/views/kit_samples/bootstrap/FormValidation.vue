<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="container my-4">
		<h2 class="mb-3">按下「送出」按鈕才會開始檢核，使用 HTML 原生驗證</h2>

		<p class="fs-5">
			驗證之後，需搭配加入 <code>was-validated</code> class 才會顯示樣式。<br />
			若不想顯示檢核結果和樣式，就要再移除 <code>was-validated</code> class。<br />
			如果在 <code>form</code> 的 class 中直接加入
			<code>was-validated</code>，則就會直接顯示驗證結果及樣式。
		</p>

		<p class="fs-5">BS 似乎不適合做複選 checkbox 的驗證，原因如下：</p>
		<ul class="fs-5 mb-5">
			<li>複選 checkbox 似乎無法群組驗證。</li>
			<li>
				礙於 BS 選擇器的設定，錯誤訊息無法放置於群組之下，而必須放置於每個 checkbox 之下。
			</li>
		</ul>

		<form class="row g-3" novalidate @submit.prevent="checkData">
			<!-- 姓名 -->
			<div class="col-md-4">
				<label for="name" class="form-label">姓名</label>
				<input type="text" class="form-control" id="name" value="Mark" required />
				<div class="invalid-feedback">請輸入正確的姓名</div>
				<div class="valid-feedback">很好！</div>
			</div>

			<!-- 外號 -->
			<div class="col-md-4">
				<label for="aka" class="form-label">外號</label>
				<div class="input-group has-validation">
					<span class="input-group-text" id="inputGroupPrepend">@</span>
					<input
						type="text"
						class="form-control"
						id="aka"
						aria-describedby="inputGroupPrepend"
						required
					/>
					<div class="invalid-feedback">請為自己命名一個外號</div>
				</div>
			</div>

			<!-- 年齡 -->
			<div class="col-md-2">
				<label for="age" class="form-label">年齡</label>
				<input type="number" class="form-control" id="age" min="1" required />
				<div class="invalid-feedback">請輸入正確的年齡</div>
			</div>

			<!-- 性別 -->
			<div class="col-md-10 d-flex">
				<span>性別&nbsp;&nbsp;&nbsp;</span>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="gender"
						id="genderMale"
						value="male"
						required
					/>
					<label class="form-check-label" for="genderMale">男</label>
					&nbsp;&nbsp;&nbsp;&nbsp;
				</div>
				<div class="form-check d-flex">
					<input
						class="form-check-input"
						type="radio"
						name="gender"
						id="genderFemale"
						value="female"
						required
					/>
					&nbsp;
					<label class="form-check-label" for="genderFemale">女</label>
					&nbsp;&nbsp;&nbsp;

					<div class="invalid-feedback">請選擇性別</div>
				</div>
			</div>

			<!-- Email -->
			<div class="col-8">
				<label for="email" class="form-label">Email</label>
				<input
					type="email"
					class="form-control"
					id="email"
					pattern="\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+"
					required
				/>
				<div class="invalid-feedback">請輸入正確的 Email</div>
			</div>

			<!-- 手機 -->
			<div class="col-4">
				<label for="mobile" class="form-label">手機</label>
				<input
					type="tel"
					class="form-control"
					id="mobile"
					pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}|[0-9]{10}"
					required
				/>
				<div>請輸入 1234-123-123 或 1234123123</div>
				<div class="invalid-feedback">請輸入正確的手機</div>
			</div>

			<!-- 居住縣市 -->
			<div class="col-md-3">
				<label for="city" class="form-label">居住縣市</label>
				<select class="form-select" id="city" required>
					<option selected disabled hidden value="">---請選擇---</option>
					<option value="Taipei">台北市</option>
					<option value="Taichung">台中市</option>
					<option value="Kaohsiung">高雄市</option>
				</select>
				<div class="invalid-feedback">請選擇縣市</div>
			</div>

			<!-- 技能 -->
			<div class="col-md-12 sub-box">
				技能：&nbsp;
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						name="skill"
						value="CSS"
						id="skillCss"
						required
					/>
					<label class="form-check-label" for="skillCss">CSS</label>
					<div class="invalid-feedback">錯誤訊息示意</div>
				</div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						name="skill"
						value="HTML"
						id="skillHtml"
						required
					/>
					<label class="form-check-label" for="skillHtml">HTML</label>
					<div class="invalid-feedback">錯誤訊息示意</div>
				</div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						name="skill"
						value="JavaScript"
						id="skillJavascript"
						required
					/>
					<label class="form-check-label" for="skillJavascript">JavaScript</label>
					<div class="invalid-feedback">錯誤訊息示意</div>
				</div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						name="skill"
						value="Vue"
						id="skillVue"
						required
					/>
					<label class="form-check-label" for="skillVue">Vue</label>
					<div class="invalid-feedback">錯誤訊息示意</div>
				</div>

				<div class="invalid-feedback">至少必須選擇一項技能</div>

				<dir>（複選 checkbox 在驗證上會不正常，此為不正常的示例）</dir>
			</div>

			<!-- 同意 -->
			<div class="col-12">
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						value=""
						id="invalidCheck"
						required
					/>
					<label class="form-check-label" for="invalidCheck"> 同意 </label>
					<div class="invalid-feedback">你必須勾選同意才能繼續</div>
				</div>
			</div>
			<div class="col-12">
				<button class="btn btn-primary" type="submit">送出</button>
			</div>
		</form>

		<hr class="my-5" />

		<h2 class="mb-3">手動給定檢核結果</h2>
		<p class="fs-5 mb-5">
			使用 <code>is-valid</code>／<code>is-invalid</code>
			class，手動控制顯示檢核成功／失敗的結果。<br />
			通常會搭配其它的驗證套件，由驗證套件進行驗證，BS 的功能就變成只是樣式的控制。
		</p>

		<form class="row g-3" novalidate @submit.prevent>
			<!-- 姓名 -->
			<div class="col-md-4">
				<label for="name2" class="form-label">姓名</label>
				<input type="text" class="form-control is-valid" id="name2" value="Mark" required />
				<div class="invalid-feedback">請輸入正確的姓名</div>
				<div class="valid-feedback">很好！</div>
			</div>

			<!-- 外號 -->
			<div class="col-md-4">
				<label for="aka2" class="form-label">外號</label>
				<div class="input-group has-validation">
					<span class="input-group-text" id="inputGroupPrepend">@</span>
					<input
						type="text"
						class="form-control is-invalid"
						id="aka2"
						aria-describedby="inputGroupPrepend"
						required
					/>
					<div class="invalid-feedback">請為自己命名一個外號</div>
				</div>
			</div>

			<!-- 年齡 -->
			<div class="col-md-2">
				<label for="age2" class="form-label">年齡</label>
				<input type="number" class="form-control is-invalid" id="age2" min="1" required />
				<div class="invalid-feedback">請輸入正確的年齡</div>
			</div>

			<!-- 性別 -->
			<div class="col-md-10 d-flex">
				<span>性別&nbsp;&nbsp;&nbsp;</span>
				<div class="form-check">
					<input
						class="form-check-input is-invalid"
						type="radio"
						name="gender"
						id="genderMale2"
						value="male"
						required
					/>&nbsp;
					<label class="form-check-label" for="genderMale2">男</label>
					&nbsp;&nbsp;&nbsp;&nbsp;
				</div>
				<div class="form-check d-flex">
					<input
						class="form-check-input is-invalid"
						type="radio"
						name="gender"
						id="genderFemale2"
						value="female"
						required
					/>&nbsp;
					<label class="form-check-label" for="genderFemale2">女</label>
          &nbsp;&nbsp;&nbsp;

					<div class="invalid-feedback">請選擇性別</div>
				</div>
			</div>

			<!-- Email -->
			<div class="col-8">
				<label for="email2" class="form-label">Email</label>
				<input
					type="email"
					class="form-control is-invalid"
					id="email2"
					pattern="\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+"
					required
				/>
				<div class="invalid-feedback">請輸入正確的 Email</div>
			</div>

			<!-- 手機 -->
			<div class="col-4">
				<label for="mobile2" class="form-label">手機</label>
				<input
					type="tel"
					class="form-control is-invalid"
					id="mobile2"
					pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}|[0-9]{10}"
					required
				/>
				<div>請輸入 1234-123-123 或 1234123123</div>
				<div class="invalid-feedback">請輸入正確的手機</div>
			</div>

			<!-- 居住縣市 -->
			<div class="col-md-3">
				<label for="city2" class="form-label">居住縣市</label>
				<select class="form-select is-invalid" id="city2" required>
					<option selected disabled hidden value="">---請選擇---</option>
					<option value="Taipei">台北市</option>
					<option value="Taichung">台中市</option>
					<option value="Kaohsiung">高雄市</option>
				</select>
				<div class="invalid-feedback">請選擇縣市</div>
			</div>

			<div class="col-12">
				<div class="form-check">
					<input
						class="form-check-input is-invalid"
						type="checkbox"
						value=""
						id="invalidCheck2"
						required
					/>
					<label class="form-check-label" for="invalidCheck2"> 同意 </label>
					<div class="invalid-feedback">你必須勾選同意才能繼續</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},

	methods: {
		// 檢驗資料
		checkData(event) {
			const form = event.target;
			console.dir(form);

			form.classList.remove('was-validated');

			// 觸發 HTML 原生驗證
			// 驗證通過
			if (form.checkValidity()) {
				alert('Submit！');
			}
			// 驗證不通過
			// class 要加入 was-validated 畫面才會顯示警告訊息與樣式
			else {
				form.classList.add('was-validated');
			}
		}, // 檢驗資料 - end
	}, // methods - end
}; // export default - end
</script>

<style scoped lang="scss">
form {
	border: 3px dashed orange;
	padding: 20px;
}

.sub-box {
	border: 2px dashed green;
	padding: 15px;
}
</style>
