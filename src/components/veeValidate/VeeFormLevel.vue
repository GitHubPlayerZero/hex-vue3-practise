<template>
  <h3 class="mb-24">表單級驗證（Form-level Validation）</h3>

  <div class="mb-5">
    <ul>
      <li>
        在 VeeValidate 的 <code>&lt;Form></code> 元件中綁定 <code>validation-schema</code> 屬性。
      </li>
      <li>
        當使用了表單級驗證後，所有的檢核都必須定義於 schema 中；
        <code>&lt;Field></code>
        元件中設定的 <code>rules</code> 屬性將失去作用。
      </li>
      <li>由於 schema 中的驗證是自己定義寫死的，因此無法自動配合語系更換。</li>
    </ul>
  </div>

  <VeeForm :validation-schema="form2Schema" v-slot="{ errors, values }" @submit="submitForm">
    <VeeValidateInfo :errors="errors" :values="values" />

    <!-- 姓名 -->
    <div class="sub-box mb-24">
      <p>
        驗證必填。<br />
        「姓名 1」的驗證定義於 <code>&lt;Field></code> 元件的 <code>rules</code> 而不是表單的
        schema，將不會有驗證效果。<br />
        「姓名 2」的驗證定義於 schema。
      </p>

      <div class="mb-3">
        <label for="form2Name1">姓名 1：</label>
        <VeeField
          name="form2Name1"
          id="form2Name1"
          type="text"
          placeholder="請輸入姓名"
          rules="required"
          v-model="form2.name1"
        ></VeeField>
        &nbsp;&nbsp;&nbsp;
        <VeeErrorMessage name="form2Name1" class="text-danger"></VeeErrorMessage>
      </div>

      <div>
        <label for="form2Name2">姓名 2：</label>
        <VeeField
          name="form2Name2"
          id="form2Name2"
          type="text"
          placeholder="請輸入姓名"
          v-model="form2.name2"
        ></VeeField>
        &nbsp;&nbsp;&nbsp;
        <VeeErrorMessage name="form2Name2" class="text-danger"></VeeErrorMessage>
      </div>
    </div>

    <div class="sub-box mb-24">
      <p>Checkbox & Radio button。</p>

      <!-- 技能 -->
      <div class="mb-3">
        <span>技能：</span>&nbsp;

        <!-- CSS -->
        <VeeField
          type="checkbox"
          name="form2Skill"
          id="form2SkillCss"
          value="CSS"
          v-model="form2.skill"
        />
        &nbsp;
        <label for="form2SkillCss">CSS</label>
        &nbsp;&nbsp;

        <!-- HTML -->
        <VeeField
          type="checkbox"
          name="form2Skill"
          id="form2SkillHtml"
          value="HTML"
          v-model="form2.skill"
        />
        &nbsp;
        <label for="form2SkillHtml">HTML</label>
        &nbsp;&nbsp;

        <!-- JavaScript -->
        <VeeField
          type="checkbox"
          name="form2Skill"
          id="form2SkillJs"
          value="JavaScript"
          v-model="form2.skill"
        />
        &nbsp;
        <label for="form2SkillJs">JavaScript</label>
        &nbsp;&nbsp;

        <!-- 錯誤訊息 -->
        <VeeErrorMessage name="form2Skill" class="text-danger"></VeeErrorMessage>
      </div>

      <!-- 性別 1 -->
      <div>
        <span>性別：</span>&nbsp;

        <!-- Male -->
        <VeeField
          type="radio"
          name="form2Gender"
          id="form2GenderMale"
          value="male"
          rules="required"
          v-model="form2.gender"
        />
        &nbsp;
        <label for="form2GenderMale">Male</label>
        &nbsp;&nbsp;

        <!-- Female -->
        <VeeField
          type="radio"
          name="form2Gender"
          id="form2GenderFemale"
          value="female"
          rules="required"
          v-model="form2.gender"
        />
        &nbsp;
        <label for="form2GenderFemale">Female</label>
        &nbsp;&nbsp;

        <!-- 錯誤訊息 -->
        <VeeErrorMessage name="form2Gender" class="text-danger"></VeeErrorMessage>
      </div>
    </div>

    <!-- 功能按鈕 -->
    <div>
      <button class="btn btn-primary">Submit</button>
    </div>
  </VeeForm>
</template>

<script>
import VeeValidateInfo from './VeeValidateInfo.vue';

export default {
  data() {
    return {
      form2: {},

      // Form 2 表單級驗證 schema
      form2Schema: {
        // 姓名 2
        form2Name2(value) {
          console.log(`form2Name2 ==>`, value);
          if (value) {
            return true;
          }
          return '姓名為必填';
        },

        // 技能
        form2Skill(value) {
          console.log(`form2Skill ==>`, value);
          if (value && value.length) {
            return true;
          }
          return '必須選擇至少一個技能';
        },

        // 性別
        form2Gender(value) {
          console.log(`form2Gender ==>`, value);
          if (value) {
            return true;
          }
          return '請選擇性別';
        },
      }, // form2Schema end
    };
  }, // data end

  methods: {
    submitForm(form) {
      console.log(`[表單級驗證 submit] VeeValidate form ==>`, form);
      console.log(`[表單級驗證 submit] form data ==>`, this.form2);
    },
  },

  components: {
    VeeValidateInfo,
  },
};
</script>
