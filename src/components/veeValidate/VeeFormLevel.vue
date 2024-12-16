<template>
  <h2 class="mb-24">表單級驗證（Form-level Validation）</h2>
  <p>
    <a
      href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/components/veeValidate/VeeFormLevel.vue"
      target="_blank"
    >
      code
    </a>
  </p>

  <!-- 說明 -->
  <div class="mb-40">
    <ul>
      <li>
        在 Vue 元件的資料中定義自己的驗證規則（schema），以物件型態撰寫，屬性鍵項為表單控件元素的
        <code>name</code>，屬性值為驗證方法。
      </li>
      <li>
        驗證方法預設會傳入 <code>&lt;Field></code> 輸入值、以及 VeeValidate
        一些驗證資訊（物件型態）。
      </li>
      <li>
        在 VeeValidate 的 <code>&lt;Form></code> 元件中以
        <code>validation-schema</code> 綁定所定義的驗證規則 schema。
      </li>
      <li>
        當使用了表單級驗證後，所有的驗證規則都必須定義於 schema 中，
        <code>&lt;Field></code>
        元件中設定的 <code>rules</code> 將失去作用。
      </li>
      <li>由於 schema 中的驗證是自己定義寫死的，因此無法自動配合語系更換。</li>
    </ul>
  </div>

  <!-- 表單 -->
  <VeeForm :validation-schema="formSchema" v-slot="{ errors, values }" @submit="submitForm">
    <VeeValidateInfo :errors="errors" :values="values" />

    <div class="sub-box">
      <div class="mb-24">
        <p>
          在以下表單範例中，「Email」的驗證定義於 <code>&lt;Field></code> 元件的
          <code>rules</code> 而不是表單的 schema，將不會有驗證效果。
        </p>
      </div>

      <!-- 姓名 -->
      <div class="mb-3">
        <label for="formLevelName">姓名：</label>
        <VeeField
          type="text"
          id="formLevelName"
          name="formLevelName"
          placeholder="請輸入姓名"
          v-model="formData.name"
          label="姓名"
        />
        &nbsp;&nbsp;&nbsp;
        <VeeErrorMessage name="formLevelName" class="text-danger" />
      </div>

      <!-- Email -->
      <!-- 自己定義 rules 不會有作用 -->
      <div class="mb-3">
        <label for="formLevelEmail">Email：</label>
        <VeeField
          type="email"
          id="formLevelEmail"
          name="formLevelEmail"
          placeholder="請輸入 Email"
          v-model="formData.email"
          label="Email"
          rules="required|email"
        />
        &nbsp;&nbsp;&nbsp;
        <VeeErrorMessage name="formLevelEmail" class="text-danger" />
      </div>

      <!-- 技能 -->
      <div class="mb-3">
        <span>技能：</span>&nbsp;
        <button type="button" class="btn btn-secondary btn-sm" @click="formData.skill = ''">
          清除技能
        </button>
        &nbsp;&nbsp;

        <!-- CSS -->
        <VeeField
          type="checkbox"
          id="formLevelSkillCss"
          name="formLevelSkill"
          value="CSS"
          v-model="formData.skill"
        />
        &nbsp;
        <label for="formLevelSkillCss">CSS&nbsp;&nbsp;</label>
        &nbsp;

        <!-- HTML -->
        <VeeField
          type="checkbox"
          id="formLevelSkillHtml"
          name="formLevelSkill"
          value="HTML"
          v-model="formData.skill"
        />
        &nbsp;
        <label for="formLevelSkillHtml">HTML&nbsp;&nbsp;</label>
        &nbsp;

        <!-- JavaScript -->
        <VeeField
          type="checkbox"
          id="formLevelSkillJs"
          name="formLevelSkill"
          value="JavaScript"
          v-model="formData.skill"
        />
        &nbsp;
        <label for="formLevelSkillJs">JavaScript&nbsp;&nbsp;</label>
        &nbsp;

        <!-- 錯誤訊息 -->
        <VeeErrorMessage name="formLevelSkill" class="text-danger" />
      </div>
      <!-- 技能 end -->

      <!-- 性別 -->
      <div>
        <span>性別：</span>&nbsp;
        <button type="button" class="btn btn-secondary btn-sm" @click="formData.gender = ''">
          清除性別
        </button>
        &nbsp;&nbsp;

        <!-- Male -->
        <VeeField
          type="radio"
          id="formLevelGenderMale"
          name="formLevelGender"
          value="male"
          v-model="formData.gender"
        />
        &nbsp;
        <label for="formLevelGenderMale">Male&nbsp;&nbsp;</label>
        &nbsp;

        <!-- Female -->
        <VeeField
          type="radio"
          id="formLevelGenderFemale"
          name="formLevelGender"
          value="female"
          v-model="formData.gender"
        />
        &nbsp;
        <label for="formLevelGenderFemale">Female&nbsp;&nbsp;</label>
        &nbsp;

        <!-- 錯誤訊息 -->
        <VeeErrorMessage name="formLevelGender" class="text-danger" />
      </div>
      <!-- 性別 end -->
    </div>

    <!-- 功能按鈕 -->
    <div>
      <button class="btn btn-primary">Submit</button>
    </div>
  </VeeForm>
</template>

<script>
import VeeValidateInfo from './VeeValidateInfo.vue';

/**
 * 取得欄位名稱。
 * @param {Object} validator - VeeValidate 的驗證資訊。
 * @return {String} 欄位名稱。若有 label 則回傳 label 內容，否則回傳 name。
 */
function getColumnName(validator) {
  return validator.label || validator.name;
}

export default {
  data() {
    return {
      formData: {},

      // 表單級驗證 schema
      formSchema: {
        // 姓名
        formLevelName(value, validator) {
          console.log(`姓名 ==>`, value);
          if (value) {
            return true;
          }
          return `[${getColumnName(validator)}] 為必填`;
        },

        // Email
        // formLevelEmail(value, validator) {
        //   console.log(`Email ==>`, value);
        //   if (value) {
        //     return true;
        //   }
        //   return `[${getColumnName(validator)}] 為必填`;
        // },

        // 技能
        formLevelSkill(value) {
          console.log(`技能 ==>`, value);
          if (value && value.length) {
            return true;
          }
          return `必須選擇至少一個技能`;
        },

        // 性別
        formLevelGender(value) {
          console.log(`性別 ==>`, value);
          if (value) {
            return true;
          }
          return `請選擇性別`;
        },
      }, // 表單級驗證 schema end
    };
  }, // data end

  methods: {
    submitForm(form) {
      console.log(`# [veeFormLevel] submit VeeValidate form ==>`, form);
      console.log(`# [veeFormLevel] submit formData ==>`, this.formData);
    },
  },

  components: {
    VeeValidateInfo,
  },
};
</script>
