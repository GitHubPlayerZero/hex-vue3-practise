<template>
  <h2 class="mb-24">與 Bootstrap 結合使用</h2>
  <p>
    <a
      href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/components/veeValidate/VeeBootstrap.vue"
      target="_blank"
    >
      code
    </a>
  </p>

  <!-- 說明 -->
  <div class="mb-40">
    <p>
      主要是使用 BS 的樣式，依據 VeeValidate 驗證結果，有錯誤者就加上
      <code>is-invalid</code> class 樣式。
    </p>
  </div>

  <!-- 表單 -->
  <VeeForm class="row g-3" v-slot="{ errors, values }" @submit="submitForm">
    <VeeValidateInfo :errors="errors" :values="values" style="margin-bottom: 24px !important" />

    <!-- 姓名 -->
    <div class="col-md-4">
      <label :for="`${prefix}Name`" class="form-label">姓名</label>
      <VeeField
        type="text"
        :id="`${prefix}Name`"
        :name="`${prefix}Name`"
        class="form-control"
        v-model="formData.name"
        label="姓名"
        rules="required"
        :class="{ 'is-invalid': errors[`${prefix}Name`] }"
      />
      <VeeErrorMessage :name="`${prefix}Name`" class="invalid-feedback" />
    </div>

    <!-- 外號 -->
    <div class="col-md-4">
      <label :for="`${prefix}Aka`" class="form-label">外號</label>
      <div class="input-group has-validation">
        <span class="input-group-text" id="inputGroupPrepend">@</span>
        <VeeField
          type="text"
          :id="`${prefix}Aka`"
          :name="`${prefix}Aka`"
          class="form-control"
          aria-describedby="inputGroupPrepend"
          v-model="formData.aka"
          label="外號"
          :rules="checkAka"
          :class="{ 'is-invalid': errors[`${prefix}Aka`] }"
        />
        <VeeErrorMessage :name="`${prefix}Aka`" class="invalid-feedback" />
      </div>
    </div>

    <!-- 年齡 -->
    <div class="col-md-2">
      <label :for="`${prefix}Age`" class="form-label">年齡</label>
      <VeeField
        type="number"
        :id="`${prefix}Age`"
        :name="`${prefix}Age`"
        class="form-control"
        min="1"
        v-model="formData.age"
        label="年齡"
        :rules="{ required: true, integer: true, min_value: 1, max_value: 150 }"
        :class="{ 'is-invalid': errors[`${prefix}Age`] }"
      />
      <VeeErrorMessage :name="`${prefix}Age`" class="invalid-feedback" />
    </div>

    <!-- 性別 -->
    <div class="col-md-10 d-flex">
      <span class="flex-shrink-0">性別&nbsp;&nbsp;&nbsp;</span>
      <button
        type="button"
        class="btn btn-secondary btn-sm flex-shrink-0"
        @click="formData.gender = ''"
      >
        清空性別
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <!-- 男 -->
      <div class="form-check flex-shrink-0">
        <VeeField
          type="radio"
          :id="`${prefix}GenderMale`"
          :name="`${prefix}Gender`"
          value="male"
          class="form-check-input"
          v-model="formData.gender"
          label="性別"
          rules="required"
          :class="{ 'is-invalid': errors[`${prefix}Gender`] }"
        />
        <label class="form-check-label" :for="`${prefix}GenderMale`">男&nbsp;&nbsp;&nbsp;</label>
        &nbsp;&nbsp;
      </div>

      <!-- 女 -->
      <div class="form-check flex-shrink-0 d-flex">
        <VeeField
          type="radio"
          :id="`${prefix}GenderFemale`"
          :name="`${prefix}Gender`"
          value="female"
          class="form-check-input"
          v-model="formData.gender"
          :class="{ 'is-invalid': errors[`${prefix}Gender`] }"
        />&nbsp;
        <label class="form-check-label" :for="`${prefix}GenderFemale`">女&nbsp;&nbsp;&nbsp;</label>
      </div>
      &nbsp;&nbsp;
      <VeeErrorMessage :name="`${prefix}Gender`" class="invalid-feedback d-block" />
    </div>

    <!-- 技能 -->
    <div>
      <span>技能&nbsp;&nbsp;&nbsp;</span>

      <!-- CSS -->
      <div class="form-check form-check-inline">
        <VeeField
          type="checkbox"
          :id="`${prefix}SkillCss`"
          :name="`${prefix}Skill`"
          class="form-check-input"
          value="CSS"
          v-model="formData.skill"
          label="技能"
          rules="required"
          :class="{ 'is-invalid': errors[`${prefix}Skill`] }"
        />
        <label class="form-check-label" :for="`${prefix}SkillCss`">CSS&nbsp;&nbsp;</label>
      </div>
      &nbsp;

      <!-- HTML -->
      <div class="form-check form-check-inline">
        <VeeField
          type="checkbox"
          :id="`${prefix}SkillHtml`"
          :name="`${prefix}Skill`"
          class="form-check-input"
          value="HTML"
          v-model="formData.skill"
          label="技能"
          rules="required"
          :class="{ 'is-invalid': errors[`${prefix}Skill`] }"
        />
        <label class="form-check-label" :for="`${prefix}SkillHtml`">HTML&nbsp;&nbsp;</label>
      </div>
      &nbsp;

      <!-- JavaScript -->
      <div class="form-check form-check-inline">
        <VeeField
          type="checkbox"
          :id="`${prefix}SkillJs`"
          :name="`${prefix}Skill`"
          class="form-check-input"
          value="JavaScript"
          v-model="formData.skill"
          label="技能"
          rules="required"
          :class="{ 'is-invalid': errors[`${prefix}Skill`] }"
        />
        <label class="form-check-label" :for="`${prefix}SkillJs`">JavaScript&nbsp;&nbsp;</label>
      </div>

      <!-- 錯誤訊息 -->
      <VeeErrorMessage :name="`${prefix}Skill`" class="text-danger"></VeeErrorMessage>
    </div>

    <!-- Email -->
    <div class="col-8">
      <label :for="`${prefix}Email`" class="form-label">Email</label>
      <VeeField
        type="email"
        :id="`${prefix}Email`"
        :name="`${prefix}Email`"
        class="form-control"
        v-model="formData.email"
        label="Email"
        rules="required|email"
        :class="{ 'is-invalid': errors[`${prefix}Email`] }"
      />

      <!-- 錯誤訊息 -->
      <VeeErrorMessage :name="`${prefix}Email`" class="invalid-feedback" />
    </div>

    <!-- 手機 -->
    <div class="col-4">
      <label :for="`${prefix}Mobile`" class="form-label">手機</label>
      <VeeField
        type="tel"
        :id="`${prefix}Mobile`"
        :name="`${prefix}Mobile`"
        class="form-control"
        v-model="formData.mobile"
        label="手機"
        rules="required|mobileRule3"
        :class="{ 'is-invalid': errors[`${prefix}Mobile`] }"
      />
      <div>請輸入 1234-123-123 或 1234123123</div>

      <!-- 錯誤訊息 -->
      <VeeErrorMessage :name="`${prefix}Mobile`" class="invalid-feedback" />
    </div>

    <!-- 居住縣市 -->
    <div class="col-md-3">
      <label :for="`${prefix}City`" class="form-label">居住縣市</label>
      <VeeField
        :id="`${prefix}City`"
        :name="`${prefix}City`"
        class="form-select"
        v-model="formData.city"
        as="select"
        label="居位縣市"
        rules="required"
        :class="{ 'is-invalid': errors[`${prefix}City`] }"
      >
        <option selected value="">---請選擇---</option>
        <option value="Taipei">台北市</option>
        <option value="Taichung">台中市</option>
        <option value="Kaohsiung">高雄市</option>
      </VeeField>

      <!-- 錯誤訊息 -->
      <VeeErrorMessage :name="`${prefix}City`" class="invalid-feedback" />
    </div>

    <!-- 同意 -->
    <div class="col-12">
      <div class="form-check">
        <VeeField
          type="checkbox"
          :id="`${prefix}Agreement`"
          :name="`${prefix}Agreement`"
          value="yes"
          class="form-check-input"
          v-model="formData.agreement"
          label="同意"
          :rules="checkAgreement"
          :class="{ 'is-invalid': errors[`${prefix}Agreement`] }"
        />
        <label class="form-check-label" :for="`${prefix}Agreement`"> 同意 </label>

        <!-- 錯誤訊息 -->
        <VeeErrorMessage :name="`${prefix}Agreement`" class="invalid-feedback" />
      </div>
    </div>

    <div class="mt-32">
      <button class="btn btn-primary">提交資料</button>
    </div>
  </VeeForm>
</template>

<script>
import VeeValidateInfo from './VeeValidateInfo.vue';

export default {
  props: {
    prefix: {
      default: 'veeBs',
    },
  },

  beforeCreate() {
    console.log(`# [veeBs] prefix = ${this.prefix}`);
  },

  data() {
    return {
      formData: {},
    };
  },

  methods: {
    submitForm(form) {
      console.log(`# [veeBs] submit VeeValidate form ==>`, form);
      console.log(`# [veeBs] submit formData ==>`, this.formData);
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
      console.log(`[checkAgreement] formBs.agreement ==>`, this.formData.agreement);
      return value ? true : '請勾選同意';
    },
  },
  // methods end

  components: {
    VeeValidateInfo,
  },
};
</script>
