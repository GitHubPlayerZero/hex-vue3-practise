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

    <!-- 自定義驗證 -->
    <VeeDefinition prefix="def" />
    
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
import VeeDefinition from '@/components/veeValidate/VeeDefinition.vue';

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
    VeeDefinition,
    VeeValidateInfo,
  },

  data() {
    console.log(`data...`);

    return {
      languageConf: veeValidate.languageConf,
      currentLangName: veeValidate.getCurrentLanguage().name,
      formBs: {},
    }; // return end
  }, // data end

  methods: {
    // Form Bootstrap submit
    submitBsForm(form) {
      console.log(`[submitBsForm] form ==>`, form);
      console.log(`[submitBsForm] formBs ==>`, this.formBs);
    },

    // 切換語系
    switchLanguage(language) {
      this.currentLangName = veeValidate.switchLanguage(language).name;
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
