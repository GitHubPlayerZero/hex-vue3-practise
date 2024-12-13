<template>
  <h2 class="mb-24">基本測試</h2>

  <!-- 說明 -->
  <div class="mb-40">
    <ul>
      <li class="mb-2">
        由 <code>&lt;Form></code> 的 slot props 解構出
        <code>errors</code>、<code>values</code>、<code>validate</code>。
      </li>
      <li class="mb-2">可以利用解構出來的 <code>validate</code> 進行手動驗證。</li>
    </ul>
  </div>

  <!-- 表單 -->
  <VeeForm v-slot="{ errors, values, validate }" @submit="submitForm">
    <VeeValidateInfo :errors="errors" :values="values" :validate="validate" />

    <!-- 錯誤訊息 -->
    <div class="sub-box">
      <div class="mb-24">
        <h3 class="h3">錯誤訊息</h3>
        <p>
          訊息的欄位名稱預設使用 <code>&lt;Field></code> 的 <code>name</code> 屬性，但若有設定
          <code>label</code> 屬性則會取代之。
        </p>
      </div>

      <!-- ErrorMessage -->
      <section class="mb-32">
        <div class="mb-16">
          <h4 class="h4">使用 <code>&lt;ErrorMessage></code> 元件</h4>
          <ul>
            <li>會自動帶入錯誤訊息。</li>
            <li>
              須設定 <code>name</code> 屬性（對應 <code>&lt;Field></code> 的
              <code>name</code> 屬性）。
            </li>
          </ul>
        </div>

        <!-- 訊息會使用 name 屬性 -->
        <div class="mb-2">
          <VeeField
            type="text"
            name="訊息使用 name 屬性"
            size="25"
            placeholder="訊息使用 name 屬性"
            v-model="formData.error1"
            rules="required"
          />
          &nbsp;&nbsp;&nbsp;
          <VeeErrorMessage name="訊息使用 name 屬性" class="text-danger" />
        </div>

        <!-- 訊息會使用 label 屬性 -->
        <div class="mb-2">
          <VeeField
            type="text"
            :name="`${prefix}Error2`"
            size="25"
            placeholder="訊息使用 label 屬性"
            v-model="formData.error2"
            label="訊息使用 label 屬性"
            rules="required"
          />
          &nbsp;&nbsp;&nbsp;
          <VeeErrorMessage :name="`${prefix}Error2`" class="text-danger" />
        </div>
      </section>
      <!-- ErrorMessage end -->

      <!-- errors -->
      <section>
        <div class="mb-16">
          <h4 class="h4">使用解構出來的 <code>errors</code> 物件</h4>
          <p>
            由驗證資訊可以看到，<code>errors</code> 存放了所有錯誤訊息，並以
            <code>&lt;Field></code> 的 <code>name</code> 屬性為鍵項。<br />
            因此我們也可以直接由 <code>errors</code> 取出錯誤訊息。
          </p>
        </div>

        <VeeField
          type="text"
          :name="`${prefix}Error3`"
          size="25"
          placeholder="由 errors 取出錯誤訊息"
          v-model="formData.error3"
          label="由 errors 取出錯誤訊息"
          rules="required"
        />
        &nbsp;&nbsp;&nbsp;
        <span class="text-danger">{{ errors[`${prefix}Error3`] }}</span>
      </section>
      <!-- errors end -->
    </div>
    <!-- 錯誤訊息 end -->

    <!-- rules 寫法 -->
    <div class="sub-box">
      <div class="mb-24">
        <h3 class="h3">rules 寫法</h3>
      </div>

      <!-- 驗證必填 -->
      <div class="mb-28">
        <p>
          除了前面範例所使用的字串寫法之外，也可以使用物件寫法，此時 <code>rules</code> 須用
          <code>v-bind</code> 綁定。
        </p>

        <label :for="`${prefix}ObjectStyle`">物件寫法：</label>
        <VeeField
          type="text"
          :id="`${prefix}ObjectStyle`"
          :name="`${prefix}ObjectStyle`"
          placeholder="必填"
          v-model="formData.objectStyle"
          label="物件寫法"
          :rules="{ required: true }"
        />
        &nbsp;&nbsp;&nbsp;
        <VeeErrorMessage :name="`${prefix}ObjectStyle`" class="text-danger" />
      </div>

      <!-- Email 1 -->
      <div class="mb-28">
        <p>可以有多個規則，例如同時驗證必填及 Email，字串寫法以 <code>|</code> 串接。</p>

        <label :for="`${prefix}Email1`">Email 1：</label>
        <VeeField
          type="text"
          :id="`${prefix}Email1`"
          :name="`${prefix}Email1`"
          placeholder="請輸入 Email"
          v-model="formData.email1"
          label="Email 1"
          rules="required|email"
        />
        &nbsp;&nbsp;&nbsp;
        <VeeErrorMessage :name="`${prefix}Email1`" class="text-danger" />
      </div>

      <!-- Email 2 -->
      <div>
        <p>承上例使用物件寫法。</p>

        <label :for="`${prefix}Email2`">Email 2：</label>
        <VeeField
          type="text"
          :id="`${prefix}Email2`"
          :name="`${prefix}Email2`"
          placeholder="請輸入 Email"
          v-model="formData.email2"
          label="Email 2"
          :rules="{ required: true, email: true }"
        />
        &nbsp;&nbsp;&nbsp;
        <VeeErrorMessage :name="`${prefix}Email2`" class="text-danger" />
      </div>
    </div>
    <!-- rules 寫法 end -->

    <!-- 驗證時機 -->
    <div class="sub-box">
      <div class="mb-20">
        <h3 class="h3"><code>&lt;Field></code> 驗證時機</h3>
        <p>
          預設是 blur 即會觸發驗證。<br />
          可以在全域設定統一的驗證時機，但若只有某幾個欄位想要不同的驗證時機，可以設定於
          <code>&lt;Field></code>。
        </p>
      </div>

      <!-- Email 3 -->
      <div class="mb-24">
        <p>
          若只想在提交時、或按下「手動驗證」時才進行驗證，可以關閉
          <code>validateOnBlur</code> 及 <code>validateOnChange</code>。<br />
          由於屬性需帶入布林值，因此要使用 <code>v-bind</code> 寫法。<br />
          ※ 注意 Email 3 只有在 submit 或按下「手動驗證」時才會進行驗證。
        </p>

        <label :for="`${prefix}Email3`">Email 3：</label>
        <VeeField
          type="email"
          :id="`${prefix}Email3`"
          :name="`${prefix}Email3`"
          placeholder="請輸入 Email"
          v-model="formData.email3"
          label="Email 3"
          :validateOnBlur="false"
          :validateOnChange="false"
          rules="required|email"
        />
        &nbsp;&nbsp;&nbsp;
        <button type="button" class="btn me-3 btn-outline-primary" @click="validate">
          手動驗證
        </button>
        <VeeErrorMessage :name="`${prefix}Email3`" class="text-danger" />
      </div>

      <!-- Email 4 -->
      <div>
        <p>也可以使用 <code>validateOnInput</code> 屬性，設定為每次輸入即驗證。</p>

        <label :for="`${prefix}Email4`">Email 4：</label>
        <VeeField
          type="email"
          :id="`${prefix}Email4`"
          :name="`${prefix}Email4`"
          placeholder="請輸入 Email"
          v-model="formData.email4"
          label="Email 4"
          :validateOnInput="true"
          rules="required|email"
        />
        &nbsp;&nbsp;&nbsp;
        <VeeErrorMessage :name="`${prefix}Email4`" class="text-danger" />
      </div>
    </div>
    <!-- 驗證時機 end -->

    <!-- 使用正則表達式驗證 -->
    <div class="sub-box">
      <div class="mb-24">
        <h3 class="h3">使用正則表達式驗證</h3>
        <p>由於需要給入正則表達式，因此 <code>rules</code> 需使用物件寫法。</p>
        <p class="fw-bold">
          ※ 由於正則表達式在驗證較複雜的規則時會變得冗長，於
          <code>rules</code>
          中直接撰寫可能會造成程式難以閱讀，建議可以改用自訂義驗證的方式。
        </p>
      </div>

      <!-- 寫法一 -->
      <div class="mb-32">
        <h4 class="h4">寫法一</h4>
        <p>使用 RegExp 物件寫法：<code>regex: /^[0-9]+$/</code></p>

        <label :for="`${prefix}Number1`">數字 1：</label>
        <VeeField
          type="text"
          :id="`${prefix}Number1`"
          :name="`${prefix}Number1`"
          placeholder="請輸入正整數"
          v-model="formData.number1"
          label="數字 1"
          :rules="{ regex: /^[0-9]+$/ }"
        />
        &nbsp;&nbsp;

        <!-- 錯誤訊息 -->
        <VeeErrorMessage :name="`${prefix}Number1`" class="text-danger" />
      </div>

      <!-- 寫法二 -->
      <div class="mb-32">
        <h4 class="h4">寫法二</h4>
        <p>
          使用字串寫法：<code>regex: '^[0-9]{5}$'</code><br />
          由於要限制必須為 5 碼數字，正則語法為 <code>{5}</code>。<br />
          使用 RegExp 物件寫法會和外層的花括號衝突而造成語法不正確，因此改用字串寫法。<br />
          經過測試，字串寫法需去除頭尾斜線（<code>/</code>），只留規則內容即可（類似於 HTML 的
          pattern）。
        </p>

        <label :for="`${prefix}Number2`">數字 2：</label>
        <VeeField
          type="text"
          :id="`${prefix}Number2`"
          :name="`${prefix}Number2`"
          placeholder="請輸入 5 個正整數"
          v-model="formData.number2"
          label="數字 2"
          :rules="{ regex: '^[0-9]{5}$' }"
        />
        &nbsp;&nbsp;

        <!-- 錯誤訊息 -->
        <VeeErrorMessage :name="`${prefix}Number2`" class="text-danger" />
      </div>

      <!-- 結合其它驗證 -->
      <div>
        <h4 class="h4">結合其它驗證</h4>
        <p>例如結合驗證必填。</p>

        <label :for="`${prefix}Number3`">數字 3：</label>
        <VeeField
          type="text"
          :id="`${prefix}Number3`"
          :name="`${prefix}Number3`"
          placeholder="請輸入正整數"
          v-model="formData.number3"
          label="數字 3"
          :rules="{ required: true, regex: /^[0-9]+$/ }"
        />
        &nbsp;&nbsp;

        <!-- 錯誤訊息 -->
        <VeeErrorMessage :name="`${prefix}Number3`" class="text-danger" />
      </div>
    </div>
    <!-- 使用正則表達式驗證 end -->

    <!-- 功能按鈕 -->
    <div>
      <button class="btn btn-primary">Submit</button>
    </div>
  </VeeForm>
</template>

<script>
// 顯示 VeeValidate 驗證訊息元件
import VeeValidateInfo from '@/components/veeValidate/VeeValidateInfo.vue';

export default {
  props: {
    prefix: {
      default: 'veeTest',
    },
  },

  beforeCreate() {
    console.log(`# [VeeTest] prefix = ${this.prefix}`);
  },

  data() {
    return {
      formData: {},
    };
  },

  methods: {
    submitForm(form) {
      console.log(`# [VeeTest] submit VeeValidate form ==>`, form);
      console.log(`# [VeeTest] submit formData ==>`, this.formData);
    },
  },

  components: {
    VeeValidateInfo,
  },
};
</script>
