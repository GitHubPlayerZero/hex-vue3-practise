<template>
  <h2 class="mb-24">自定義驗證</h2>

  <!-- 說明 -->
  <div class="mb-40">
    <p>這邊以驗證手機號碼為例，格式應為「1234-123-123」或「1234123123」。</p>
  </div>

  <VeeForm v-slot="{ errors, values }" @submit="submitForm">
    <VeeValidateInfo :errors="errors" :values="values" />

    <!-- 使用元件自己的 methods 做檢核 -->
    <div class="sub-box">
      <h3 class="h3">使用元件自己的 <code>methods</code> 做檢核</h3>
      <ul>
        <li>
          在元件中撰寫檢核的方法（<code>methods</code>），<code>rules</code> 使用
          <code>v-bind</code> 綁定自訂的檢核方法。
        </li>
        <li>檢核方法可以接收 <code>&lt;Field></code> 輸入值及 VeeValidate 驗證資訊。</li>
        <li>由於訊息是方法裡面寫死的，所以無法自動隨著語系更換而改變。</li>
      </ul>

      <label :for="`${prefix}MobileMethod`">自訂檢核 methods 的手機：</label>
      <VeeField
        type="tel"
        :id="`${prefix}MobileMethod`"
        :name="`${prefix}MobileMethod`"
        placeholder="請輸入手機"
        v-model="formData.mobileMethod"
        label="自訂檢核 methods 的手機"
        :rules="checkMobile"
      />
      &nbsp;&nbsp;&nbsp;
      <VeeErrorMessage :name="`${prefix}MobileMethod`" class="text-danger" />
    </div>

    <!-- 使用 defineRule 自定義規則 -->
    <div class="sub-box">
      <h3 class="h3">使用 <code>defineRule</code> 自定義規則</h3>
      <ul>
        <li class="mb-1">使用 VeeValidate 的 <code>defineRule</code> 自定義規則。</li>
        <li class="mb-1">定義好之後，使用方式就如同使用 VeeValidate 提供的 rule 一樣。</li>
      </ul>

      <!-- 手機 1 -->
      <div class="mb-24">
        <p>
          [手機 1] 使用 <code>mobileRule1</code>，驗證僅會回傳 true / false。<br />
          VeeValidate 會有自己預設的訊息，可以切換語系。
        </p>

        <label :for="`${prefix}Mobile1`">手機 1：</label>
        <VeeField
          type="tel"
          :id="`${prefix}Mobile1`"
          :name="`${prefix}Mobile1`"
          placeholder="請輸入手機"
          label="手機 1"
          v-model="formData.mobile1"
          rules="mobileRule1"
        />
        &nbsp;&nbsp;&nbsp;
        <VeeErrorMessage :name="`${prefix}Mobile1`" class="text-danger" />
      </div>

      <!-- 手機 2 -->
      <div class="mb-24">
        <p>
          [手機 2] 使用 <code>mobileRule2</code>，驗證不通過會直接吐回錯誤訊息。<br />
          由於錯誤訊息是自己寫死的，因此無法自動隨著語系更換而改變。
        </p>

        <label :for="`${prefix}Mobile2`">手機 2：</label>
        <VeeField
          type="tel"
          :id="`${prefix}Mobile2`"
          :name="`${prefix}Mobile2`"
          placeholder="請輸入手機"
          label="手機 2"
          v-model="formData.mobile2"
          rules="mobileRule2"
        />
        &nbsp;&nbsp;&nbsp;
        <VeeErrorMessage :name="`${prefix}Mobile2`" class="text-danger" />
      </div>

      <!-- 手機 3 -->
      <div class="mb-24">
        <p>
          可以<span class="fw-bold">於語系中自定義對應的錯誤訊息</span
          >，可以隨著語系切換（沒有定義的語系就會使用 VeeValidate 自己的預設訊息）。<br />
          是目前<span class="fw-bold">個人覺得彈性最佳的方式。</span><br />
          [手機 3] 使用 <code>mobileRule3</code>，語系中使用字串寫法定義訊息。
        </p>

        <label :for="`${prefix}Mobile3`">手機 3：</label>
        <VeeField
          type="tel"
          :id="`${prefix}Mobile3`"
          :name="`${prefix}Mobile3`"
          placeholder="請輸入手機"
          label="手機 3"
          v-model="formData.mobile3"
          rules="mobileRule3"
        />
        &nbsp;&nbsp;&nbsp;
        <VeeErrorMessage :name="`${prefix}Mobile3`" class="text-danger" />
      </div>

      <!-- 與其它規則搭配使用 -->
      <div class="mb-44">
        <p class="mb-2">與其它規則搭配使用。</p>

        <!-- 手機 3 - A -->
        <div class="mb-2">
          <label :for="`${prefix}Mobile3a`">手機 3 - A（搭配必填，字串寫法）：</label>
          <VeeField
            type="tel"
            :id="`${prefix}Mobile3a`"
            :name="`${prefix}Mobile3a`"
            placeholder="請輸入手機"
            v-model="formData.mobile3a"
            label="手機 3 - A"
            rules="required|mobileRule3"
          />
          &nbsp;&nbsp;&nbsp;
          <VeeErrorMessage :name="`${prefix}Mobile3a`" class="text-danger" />
        </div>

        <!-- 手機 3 - B -->
        <div class="mb-2">
          <label :for="`${prefix}Mobile3b`">手機 3 - B（搭配必填，物件寫法）：</label>
          <VeeField
            type="tel"
            :id="`${prefix}Mobile3b`"
            :name="`${prefix}Mobile3b`"
            placeholder="請輸入手機"
            v-model="formData.mobile3b"
            label="手機 3 - B"
            :rules="{ required: true, mobileRule3: true }"
          />
          &nbsp;&nbsp;&nbsp;
          <VeeErrorMessage :name="`${prefix}Mobile3b`" class="text-danger" />
        </div>
      </div>

      <div>
        <h4 class="h4">接收 <code>rules</code> 另外傳入的參數</h4>

        <ul>
          <li class="mb-2">
            <code>defineRule</code> 所定義的驗證方法，按順序預設可以接收參數：
            <ol>
              <li class="mb-1"><code>&lt;Field></code> 輸入值。</li>
              <li class="mb-1"><code>rules</code> 另外傳入的參數。</li>
              <li class="mb-1">VeeValidate 其它驗證資訊。</li>
            </ol>
          </li>
          <li class="mb-2">
            語系中自定義的錯誤訊息也可以使用函式的寫法，參數預設會傳入 VeeValidate
            的資訊，可以由其中取得需要的資訊。
          </li>
        </ul>
        <p>以下範例使用 <code>mobileRule4</code>。</p>

        <!-- 手機 4 - A -->
        <div class="mb-2">
          <label :for="`${prefix}Mobile4a`">手機 4 - A（沒有傳入參數）：</label>
          <VeeField
            type="tel"
            :id="`${prefix}Mobile4a`"
            :name="`${prefix}Mobile4a`"
            placeholder="請輸入手機"
            v-model="formData.mobile4a"
            label="手機 4 - A"
            rules="mobileRule4"
          />
          &nbsp;&nbsp;&nbsp;
          <VeeErrorMessage :name="`${prefix}Mobile4a`" class="text-danger" />
        </div>

        <!-- 手機 4 - B -->
        <div class="mb-2">
          <label :for="`${prefix}Mobile4b`">手機 4 - B（參數傳入物件）：</label>
          <VeeField
            type="tel"
            :id="`${prefix}Mobile4b`"
            :name="`${prefix}Mobile4b`"
            placeholder="請輸入手機"
            v-model="formData.mobile4b"
            label="手機 4 - B"
            :rules="{ mobileRule4: { test1: 'test1', test2: 'test2' } }"
          />
          &nbsp;&nbsp;&nbsp;
          <VeeErrorMessage :name="`${prefix}Mobile4b`" class="text-danger" />
        </div>

        <!-- 手機 4 - C -->
        <div>
          <label :for="`${prefix}Mobile4c`">手機 4 - C（參數傳入陣列）：</label>
          <VeeField
            type="tel"
            :id="`${prefix}Mobile4c`"
            :name="`${prefix}Mobile4c`"
            placeholder="請輸入手機"
            v-model="formData.mobile4c"
            label="手機 4 - C"
            :rules="{ mobileRule4: ['test1', 'test2'] }"
          />
          &nbsp;&nbsp;&nbsp;
          <VeeErrorMessage :name="`${prefix}Mobile4c`" class="text-danger" />
        </div>
      </div>
    </div>

    <!-- 功能按鈕 -->
    <div>
      <button class="btn btn-primary">Submit</button>
    </div>
  </VeeForm>
</template>

<script>
import { validationRules } from '@/assets/js';
import VeeValidateInfo from './VeeValidateInfo.vue';

export default {
  props: {
    prefix: {
      default: 'veeDefinition',
    },
  },

  beforeCreate() {
    console.log(`# [VeeDefinition] prefix = ${this.prefix}`);
  },

  data() {
    return {
      formData: {},
    };
  },

  methods: {
    submitForm(form) {
      console.log(`# [VeeDefinition] submit VeeValidate form ==>`, form);
      console.log(`# [VeeDefinition] submit formData ==>`, this.formData);
    },

    // 驗證手機
    checkMobile(value, validator) {
      console.log(`[checkMobile] 手機 ==>`, value);
      console.log(`[checkMobile] validator ==>`, validator);
      if (value) {
        return validationRules.checkMobile(value) ? true : `[${validator.field}] 格式不正確`;
      } else {
        return `[${validator.field}] 為必填`;
      }
    },
  },

  components: {
    VeeValidateInfo,
  },
};
</script>
