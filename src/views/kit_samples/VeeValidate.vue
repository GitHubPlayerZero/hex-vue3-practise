<template>
  <div class="container">
    <h1 class="mb-3">VeeValidate (Options API)</h1>

    <p class="mb-5">VeeValidate 環境於 main.js 初始化。</p>

    <!-- 切換語系 -->
    <div>
      <h2 class="mb-3">切換語系（{{ currentLangName }}）</h2>
      <p class="mb-24">可以藉由 <code>setLocale</code> 重新設定語系。</p>

      <button
        type="button"
        class="btn btn-outline-primary me-3"
        @click="switchLanguage(languageConf.zh_TW.code)"
      >
        繁體中文
      </button>
      <button
        type="button"
        class="btn btn-outline-success"
        @click="switchLanguage(languageConf.en.code)"
      >
        英文
      </button>
    </div>

    <hr />

    <!-- 基本範例 -->
    <VeeBase prefix="base" />

    <hr />

    <!-- 基本測試 -->
    <VeeTest prefix="test" />

    <hr />

    <!-- 表單級驗證（Form-level Validation） -->
    <VeeFormLevel />

    <hr />

    <!-- Form 3 -->
    <h3 class="mb-24">Form 3</h3>

    <div class="mb-5">
      <p>自訂義驗證。</p>
      <p>這邊以驗證手機號碼為例，格式應為「1234-123-123」或「1234123123」。</p>
    </div>

    <VeeForm v-slot="{ errors, values }" @submit="submitForm3">
      <VeeValidateInfo :errors="errors" :values="values" />

      <!-- 方式一 -->
      <div class="sub-box mb-24">
        <h5 class="mb-3">方式一</h5>
        <p>
          <code>rules</code> 使用 <code>v-bind</code> 綁定自訂的檢驗的
          <code>methods</code>，預設會傳入欄位值。<br />
          由於訊息為方法裡面寫死的，所以無法自動隨著語系更換而改變。
        </p>

        <label for="form3Mobile1">手機：</label>
        <VeeField
          id="form3Mobile"
          name="form3Mobile"
          type="tel"
          placeholder="請輸入手機"
          class="mb-2"
          :rules="checkMobile"
          v-model="form3.mobile"
        />
        &nbsp;&nbsp;&nbsp;
        <VeeErrorMessage name="form3Mobile" class="text-danger"></VeeErrorMessage>
      </div>

      <!-- 方式二 -->
      <div class="sub-box mb-24">
        <h5 class="mb-3">方式二</h5>
        <p>使用 VeeValidate 的 <code>defineRule</code> 新增自訂規則。<br /></p>

        <!-- 手機 1 -->
        <div class="mb-24">
          <p>
            [手機 1] 使用 <code>mobileRule1</code>，驗證僅會回傳 true / false。<br />
            VeeValidate 會有自己預設的訊息，可以切換語系。
          </p>

          <label for="form3Mobile1">手機 1：</label>
          <VeeField
            id="form3Mobile1"
            name="form3Mobile1"
            type="tel"
            placeholder="請輸入手機"
            class="mb-2"
            label="手機 1"
            rules="mobileRule1"
            v-model="form3.mobile1"
          />
          &nbsp;&nbsp;&nbsp;
          <VeeErrorMessage name="form3Mobile1" class="text-danger"></VeeErrorMessage>
        </div>

        <!-- 手機 2 -->
        <div class="mb-24">
          <p>
            [手機 2] 使用 <code>mobileRule2</code>，驗證不通過會直接吐回錯誤訊息。<br />
            由於錯誤訊息是自己寫死的，因此無法自動隨著語系更換而改變。
          </p>

          <label for="form3Mobile2">手機 2：</label>
          <VeeField
            id="form3Mobile2"
            name="form3Mobile2"
            type="tel"
            placeholder="請輸入手機"
            class="mb-2"
            label="手機 2"
            rules="mobileRule2"
            v-model="form3.mobile2"
          />
          &nbsp;&nbsp;&nbsp;
          <VeeErrorMessage name="form3Mobile2" class="text-danger"></VeeErrorMessage>
        </div>
      </div>

      <!-- 方式三 -->
      <div class="sub-box mb-24">
        <div class="mb-24">
          <h5 class="mb-3">方式三</h5>
          <p>
            承方式二，除了使用 <code>defineRule</code> 新增規則之外，並且
            <span class="fw-bold">於語系中自訂義驗證錯誤的訊息</span>，
            可以隨著語系切換（沒有定義的語系就會使用 VeeValidate 自己的預設訊息）。<br />
            是目前<span class="fw-bold">個人覺得彈性最佳的方式。</span>
          </p>
        </div>

        <!-- 手機 3 -->
        <div class="mb-24">
          <p>[手機 3] 使用 <code>mobileRule3</code>。</p>

          <label for="form3Mobile3">手機 3：</label>
          <VeeField
            id="form3Mobile3"
            name="form3Mobile3"
            type="tel"
            placeholder="請輸入手機"
            class="mb-2"
            label="手機 3"
            rules="mobileRule3"
            v-model="form3.mobile3"
          />
          &nbsp;&nbsp;&nbsp;
          <VeeErrorMessage name="form3Mobile3" class="text-danger"></VeeErrorMessage>
        </div>
      </div>

      <!-- 方式四 -->
      <div class="sub-box mb-24">
        <div class="mb-24">
          <h5 class="mb-3">方式四</h5>
          <p>
            承方式三，可以於新增的規則方法中傳入其它參數。<br />
            而語系中自訂義的驗證訊息也可以使用方法，預設會傳入 VeeValidate
            的資訊物件參數，可以由其中取得需要的資訊。
          </p>
          <p>使用 <code>mobileRule4</code>。</p>
        </div>

        <div class="mb-24">
          <!-- 手機 4 - A -->
          <div class="mb-2">
            <label for="form3Mobile4a">手機 4 - A（沒有傳入參數）：</label>
            <VeeField
              id="form3Mobile4a"
              name="form3Mobile4a"
              type="tel"
              placeholder="請輸入手機"
              class="mb-2"
              label="手機 4 - A"
              rules="mobileRule4"
              v-model="form3.mobile4a"
            />
            &nbsp;&nbsp;&nbsp;
            <VeeErrorMessage name="form3Mobile4a" class="text-danger"></VeeErrorMessage>
          </div>

          <!-- 手機 4 - B -->
          <div class="mb-2">
            <label for="form3Mobile4b">手機 4 - B（參數傳入物件）：</label>
            <VeeField
              id="form3Mobile4b"
              name="form3Mobile4b"
              type="tel"
              placeholder="請輸入手機"
              class="mb-2"
              label="手機 4 - B"
              :rules="{ mobileRule4: { test1: 'test1', test2: 'test2' } }"
              v-model="form3.mobile4b"
            />
            &nbsp;&nbsp;&nbsp;
            <VeeErrorMessage name="form3Mobile4b" class="text-danger"></VeeErrorMessage>
          </div>

          <!-- 手機 4 - C -->
          <div class="mb-2">
            <label for="form3Mobile4c">手機 4 - C（參數傳入陣列）：</label>
            <VeeField
              id="form3Mobile4c"
              name="form3Mobile4c"
              type="tel"
              placeholder="請輸入手機"
              class="mb-2"
              label="手機 4 - C"
              :rules="{ mobileRule4: ['test1', 'test2'] }"
              v-model="form3.mobile4c"
            />
            &nbsp;&nbsp;&nbsp;
            <VeeErrorMessage name="form3Mobile4c" class="text-danger"></VeeErrorMessage>
          </div>

          <p class="mt-4">
            使用 <code>defineRule</code> 自訂義的規則，也可以與其它規則共同搭配使用。
          </p>

          <!-- 手機 4 - D -->
          <div class="mb-2">
            <label for="form3Mobile4d">手機 4 - D（搭配必填，字串寫法）：</label>
            <VeeField
              id="form3Mobile4d"
              name="form3Mobile4d"
              type="tel"
              placeholder="請輸入手機"
              class="mb-2"
              label="手機 4 - D"
              rules="required|mobileRule4"
              v-model="form3.mobile4d"
            />
            &nbsp;&nbsp;&nbsp;
            <VeeErrorMessage name="form3Mobile4d" class="text-danger"></VeeErrorMessage>
          </div>

          <!-- 手機 4 - E -->
          <div class="mb-2">
            <label for="form3Mobile4e">手機 4 - E（搭配必填，物件寫法）：</label>
            <VeeField
              id="form3Mobile4e"
              name="form3Mobile4e"
              type="tel"
              placeholder="請輸入手機"
              class="mb-2"
              label="手機 4 - E"
              :rules="{ required: true, mobileRule4: true }"
              v-model="form3.mobile4e"
            />
            &nbsp;&nbsp;&nbsp;
            <VeeErrorMessage name="form3Mobile4e" class="text-danger"></VeeErrorMessage>
          </div>
        </div>
      </div>

      <!-- 功能按鈕 -->
      <div>
        <button class="btn btn-primary">Submit</button>
      </div>
    </VeeForm>

    <hr />

    <!-- 與 Bootstrap 結合使用 -->
    <div class="mb-24">
      <h3 class="mb-24">與 Bootstrap 結合使用</h3>
      <p>
        主要是使用 BS 的樣式，依據 VeeValidate 驗證結果，有錯誤（<code>errors</code>）者就加上
        <code>is-invalid</code> class 樣式。
      </p>
    </div>

    <VeeForm class="row g-3" v-slot="{ errors, values }" @submit="submitBsForm">
      <VeeValidateInfo :errors="errors" :values="values" style="margin-bottom: 24px !important" />

      <!-- 姓名 -->
      <div class="col-md-4">
        <label for="formBsName" class="form-label">姓名</label>
        <VeeField
          type="text"
          name="formBsName"
          id="formBsName"
          class="form-control"
          v-model="formBs.name"
          label="姓名"
          rules="required"
          :class="{ 'is-invalid': errors['formBsName'] }"
        />
        <VeeErrorMessage name="formBsName" class="invalid-feedback" />
      </div>

      <!-- 外號 -->
      <div class="col-md-4">
        <label for="formBsAka" class="form-label">外號</label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
          <VeeField
            type="text"
            name="formBsAka"
            id="formBsAka"
            class="form-control"
            aria-describedby="inputGroupPrepend"
            v-model="formBs.aka"
            label="外號"
            :rules="checkAka"
            :class="{ 'is-invalid': errors['formBsAka'] }"
          />
          <VeeErrorMessage name="formBsAka" class="invalid-feedback" />
        </div>
      </div>

      <!-- 年齡 -->
      <div class="col-md-2">
        <label for="formBsAge" class="form-label">年齡</label>
        <VeeField
          type="number"
          name="formBsAge"
          id="formBsAge"
          class="form-control"
          min="1"
          v-model="formBs.age"
          label="年齡"
          :rules="{ required: true, integer: true, min_value: 1, max_value: 150 }"
          :class="{ 'is-invalid': errors['formBsAge'] }"
        />
        <VeeErrorMessage name="formBsAge" class="invalid-feedback" />
      </div>

      <!-- 性別 -->
      <div class="col-md-10 d-flex">
        <span class="flex-shrink-0">性別&nbsp;&nbsp;&nbsp;</span>
        <button
          type="button"
          class="btn btn-secondary btn-sm flex-shrink-0"
          @click="formBs.gender = ''"
        >
          清空性別
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <!-- 男 -->
        <div class="form-check flex-shrink-0">
          <VeeField
            type="radio"
            name="formBsGender"
            id="formBsGenderMale"
            value="male"
            class="form-check-input"
            v-model="formBs.gender"
            label="性別"
            rules="required"
            :class="{ 'is-invalid': errors['formBsGender'] }"
          />
          <label class="form-check-label" for="formBsGenderMale">男&nbsp;&nbsp;&nbsp;</label>
          &nbsp;&nbsp;
        </div>

        <!-- 女 -->
        <div class="form-check flex-shrink-0 d-flex">
          <VeeField
            type="radio"
            name="formBsGender"
            id="formBsGenderFemale"
            value="female"
            class="form-check-input"
            v-model="formBs.gender"
            :class="{ 'is-invalid': errors['formBsGender'] }"
          />&nbsp;
          <label class="form-check-label" for="formBsGenderFemale">女&nbsp;&nbsp;&nbsp;</label>
        </div>
        &nbsp;&nbsp;
        <VeeErrorMessage name="formBsGender" class="invalid-feedback d-block" />
      </div>

      <!-- 技能 -->
      <div>
        <span>技能&nbsp;&nbsp;&nbsp;</span>

        <!-- CSS -->
        <div class="form-check form-check-inline">
          <VeeField
            type="checkbox"
            name="formBsSkill"
            id="formBsSkillCss"
            class="form-check-input"
            value="CSS"
            v-model="formBs.skill"
            label="技能"
            rules="required"
            :class="{ 'is-invalid': errors['formBsSkill'] }"
          />
          <label class="form-check-label" for="formBsSkillCss">CSS&nbsp;&nbsp;</label>
        </div>
        &nbsp;

        <!-- HTML -->
        <div class="form-check form-check-inline">
          <VeeField
            type="checkbox"
            name="formBsSkill"
            id="formBsSkillHtml"
            class="form-check-input"
            value="HTML"
            v-model="formBs.skill"
            label="技能"
            rules="required"
            :class="{ 'is-invalid': errors['formBsSkill'] }"
          />
          <label class="form-check-label" for="formBsSkillHtml">HTML&nbsp;&nbsp;</label>
        </div>
        &nbsp;

        <!-- JavaScript -->
        <div class="form-check form-check-inline">
          <VeeField
            type="checkbox"
            name="formBsSkill"
            id="formBsSkillJs"
            class="form-check-input"
            value="JavaScript"
            v-model="formBs.skill"
            label="技能"
            rules="required"
            :class="{ 'is-invalid': errors['formBsSkill'] }"
          />
          <label class="form-check-label" for="formBsSkillJs">JavaScript&nbsp;&nbsp;</label>
        </div>

        <!-- 錯誤訊息 -->
        <VeeErrorMessage name="formBsSkill" class="text-danger"></VeeErrorMessage>
      </div>

      <!-- Email -->
      <div class="col-8">
        <label for="formBsEmail" class="form-label">Email</label>
        <VeeField
          type="email"
          name="formBsEmail"
          id="formBsEmail"
          class="form-control"
          v-model="formBs.email"
          label="Email"
          rules="required|email"
          :class="{ 'is-invalid': errors['formBsEmail'] }"
        />

        <!-- 錯誤訊息 -->
        <VeeErrorMessage name="formBsEmail" class="invalid-feedback" />
      </div>

      <!-- 手機 -->
      <div class="col-4">
        <label for="formBsMobile" class="form-label">手機</label>
        <VeeField
          type="tel"
          name="formBsMobile"
          id="formBsMobile"
          class="form-control"
          v-model="formBs.mobile"
          label="手機"
          rules="required|mobileRule3"
          :class="{ 'is-invalid': errors['formBsMobile'] }"
        />
        <div>請輸入 1234-123-123 或 1234123123</div>

        <!-- 錯誤訊息 -->
        <VeeErrorMessage name="formBsMobile" class="invalid-feedback" />
      </div>

      <!-- 居住縣市 -->
      <div class="col-md-3">
        <label for="formBsCity" class="form-label">居住縣市</label>
        <VeeField
          name="formBsCity"
          id="formBsCity"
          class="form-select"
          v-model="formBs.city"
          as="select"
          label="居位縣市"
          rules="required"
          :class="{ 'is-invalid': errors['formBsCity'] }"
        >
          <option selected value="">---請選擇---</option>
          <option value="Taipei">台北市</option>
          <option value="Taichung">台中市</option>
          <option value="Kaohsiung">高雄市</option>
        </VeeField>

        <!-- 錯誤訊息 -->
        <VeeErrorMessage name="formBsCity" class="invalid-feedback" />
      </div>

      <!-- 同意 -->
      <div class="col-12">
        <div class="form-check">
          <VeeField
            type="checkbox"
            name="formBsAgreement"
            id="formBsAgreement"
            value="yes"
            class="form-check-input"
            v-model="formBs.agreement"
            label="同意"
            :rules="checkAgreement"
            :class="{ 'is-invalid': errors['formBsAgreement'] }"
          />
          <label class="form-check-label" for="formBsAgreement"> 同意 </label>

          <!-- 錯誤訊息 -->
          <VeeErrorMessage name="formBsAgreement" class="invalid-feedback" />
        </div>
      </div>

      <div class="mt-32">
        <button class="btn btn-primary">提交資料</button>
      </div>
    </VeeForm>
    <!-- 與 Bootstrap 結合使用 - end -->
  </div>
</template>

<script>
import VeeBase from '@/components/veeValidate/VeeBase.vue';
import VeeTest from '@/components/veeValidate/VeeTest.vue';
import VeeFormLevel from '@/components/veeValidate/VeeFormLevel.vue';

// 顯示 VeeValidate 驗證訊息元件
import VeeValidateInfo from '@/components/veeValidate/VeeValidateInfo.vue'; // TODO delete

// 使用 VeeValidate
import { useVeeValidate } from '@/assets/js';
const veeValidate = useVeeValidate();

export default {
  components: {
    VeeBase,
    VeeTest,
    VeeFormLevel,
    VeeValidateInfo,
  },

  data() {
    console.log(`data...`);

    return {
      languageConf: veeValidate.languageConf,
      currentLangName: veeValidate.getCurrentLanguage().name,
      form3: {},
      formBs: {},
    }; // return end
  }, // data end

  methods: {
    // Form 3 submit
    submitForm3(form) {
      console.log(`[submitForm3] form ==>`, form);
      console.log(`[submitForm3] form3 ==>`, this.form3);
    },
    // Form Bootstrap submit
    submitBsForm(form) {
      console.log(`[submitBsForm] form ==>`, form);
      console.log(`[submitBsForm] formBs ==>`, this.formBs);
    },

    // 切換語系
    switchLanguage(language) {
      this.currentLangName = veeValidate.switchLanguage(language).name;
    },

    // 驗證手機
    checkMobile(value) {
      console.log(`[checkMobile] value ==>`, value);
      if (value) {
        return validationRules.checkMobile(value) ? true : '手機格式不正確';
      } else {
        return '手機為必填';
      }
    },

    // 驗證外號
    checkAka(value) {
      console.log(`[checkAka] value ==>`, value);
      if (value) {
        if (value.length >= 3) {
          return true;
        } // if end
        else {
          return '外號必須至少 3 個字';
        }
      } // if end
      else {
        return '請為自己命名一個外號';
      }
    },

    // 驗證同意勾選
    checkAgreement(value) {
      console.log(`[checkAgreement] value ==>`, value);
      console.log(`[checkAgreement] formBs.agreement ==>`, this.formBs.agreement);
      return value ? true : '請勾選同意';
    },
  }, // methods end
};
</script>

<style lang="scss">
hr {
  margin: 48px 0;
}

.sub-box {
  border: 2px dotted green;
  padding: 15px;
  margin-bottom: 24px;
}

.h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}
.h4 {
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 12px;
}
</style>
