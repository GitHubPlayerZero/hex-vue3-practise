<template>
  <h3 class="mb-24">基本測試</h3>

  <!-- 說明 -->
  <div class="mb-5">
    <ul>
      <li class="mb-2">
        Submit 時會自動進行驗證，或者也可以利用 <code>VeeValidate Form</code> 解構出來的
        <code>validate</code> 進行手動驗證。
      </li>
    </ul>
  </div>

  <!-- 表單 -->
  <VeeForm v-slot="{ errors, values, validate }" @submit="submitForm">
    <VeeValidateInfo :errors="errors" :values="values" :validate="validate" />

    <!-- Email 1 -->
    <div class="sub-box mb-24">
      <p>
        基本寫法。<br />
        errors 的屬性名稱會自動使用
        <code>name</code>；錯誤訊息中的欄位名稱若無特別設定，預設也是使用 <code>name</code>。
      </p>

      <div>
        <label :for="`${prefix}Email1`">Email 1：</label>
        <VeeField
          type="email"
          :id="`${prefix}Email1`"
          :name="`${prefix}Email1`"
          placeholder="請輸入 Email"
          v-model="formData.email1"
          rules="required|email"
        />
        &nbsp;&nbsp;&nbsp;
        <span class="text-danger">{{ errors[`${prefix}Email1`] }}</span>
      </div>
    </div>

    <!-- Email 2 -->
    <div class="sub-box mb-24">
      <p>將 <code>name</code> 改為 <code>"電子郵件"</code>，可以看到 errors 的改變。</p>

      <div>
        <label :for="`${prefix}Email2`">Email 2：</label>
        <VeeField
          type="email"
          :id="`${prefix}Email2`"
          name="電子郵件"
          placeholder="請輸入 Email"
          v-model="formData.email2"
          rules="required|email"
        />
        &nbsp;&nbsp;&nbsp;
        <span class="text-danger">{{ errors.電子郵件 }}</span>
      </div>
    </div>

    <!-- Email 3 -->
    <div class="sub-box mb-24">
      <p>也可以使用 <code>Field</code> 的 <code>label</code> 屬性，來改變訊息中的欄位名稱。</p>

      <div>
        <label :for="`${prefix}Email3`">Email 3：</label>
        <VeeField
          type="email"
          :id="`${prefix}Email3`"
          :name="`${prefix}Email3`"
          placeholder="請輸入 Email"
          v-model="formData.email3"
          label="Email 3"
          rules="required|email"
        ></VeeField>
        &nbsp;&nbsp;&nbsp;
        <span class="text-danger">{{ errors[`${prefix}Email3`] }}</span>
      </div>
    </div>

    <!-- Email 4 -->
    <div class="sub-box mb-24">
      <p>
        預設是 blur 即會觸發驗證，可以在單一欄位上關閉
        <code>validateOnBlur</code> 屬性。<br />
        但若想要完全停止自動驗證（使用手動驗證），最好也要連帶關閉
        <code>validateOnChange</code> 屬性。<br />
        注意，由於屬性需帶入布林值，因此需要使用 <code>v-bind</code> 的寫法。
      </p>
      <p>※ Email 4 需使用「手動驗證」或「Form1 Submit」才會進行驗證。</p>

      <div>
        <label :for="`${prefix}Email4`">Email 4：</label>
        <VeeField
          type="email"
          :id="`${prefix}Email4`"
          :name="`${prefix}Email4`"
          placeholder="請輸入 Email"
          v-model="formData.email4"
          label="Email 4"
          :validateOnBlur="false"
          :validateOnChange="false"
          rules="required|email"
        ></VeeField>
        &nbsp;&nbsp;&nbsp;
        <span class="text-danger">{{ errors[`${prefix}Email4`] }}</span>
      </div>
    </div>

    <!-- Email 5 -->
    <div class="sub-box mb-24">
      <p>也可以使用 <code>validateOnInput</code> 屬性，設定為每次輸入即驗證。</p>

      <div>
        <label :for="`${prefix}Email5`">Email 5：</label>
        <VeeField
          type="email"
          :id="`${prefix}Email5`"
          :name="`${prefix}Email5`"
          placeholder="請輸入 Email"
          v-model="formData.email5"
          label="Email 5"
          :validateOnInput="true"
          rules="required|email"
        ></VeeField>
        &nbsp;&nbsp;&nbsp;
        <span class="text-danger">{{ errors[`${prefix}Email5`] }}</span>
      </div>
    </div>

    <!-- Email 6 -->
    <div class="sub-box mb-24">
      <p>
        錯誤訊息可以使用 <code>&lt;ErrorMessage></code> 元件自動帶入，元件給入
        <code>name</code> 屬性，對應 <code>&lt;Field></code> 元件的 <code>name</code>。
      </p>

      <div>
        <label :for="`${prefix}Email6`">Email 6：</label>
        <VeeField
          type="email"
          :id="`${prefix}Email6`"
          :name="`${prefix}Email6`"
          placeholder="請輸入 Email"
          v-model="formData.email6"
          label="Email 6"
          rules="required|email"
        ></VeeField>
        &nbsp;&nbsp;&nbsp;
        <VeeErrorMessage :name="`${prefix}Email6`" class="text-danger"></VeeErrorMessage>
      </div>
    </div>

    <!-- Checkbox & Radio button - 寫法 1 -->
    <div class="sub-box mb-24">
      <div class="mb-28">
        <h4 class="mb-3">Checkbox & Radio button - 寫法 1</h4>
        <p>
          寫法同一般的 checkbox、radio，<code>&lt;input></code> 改為 <code>&lt;Field></code> 即可。
        </p>
        <p>
          radio button 可以只在第一個項目綁定 VeeValidate 的
          <code>label</code>、<code>rules</code>；但 checkbox 必須每個項目都綁定。
        </p>
      </div>

      <!-- 技能 1 -->
      <div class="mb-3">
        <span>技能 1：</span>&nbsp;
        <button type="button" class="btn btn-secondary btn-sm" @click="formData.skill1 = []">
          清空技能
        </button>
        &nbsp;&nbsp;

        <!-- CSS -->
        <VeeField
          type="checkbox"
          :id="`${prefix}Skill1Css`"
          :name="`${prefix}Skill1`"
          value="CSS"
          v-model="formData.skill1"
          label="技能 1"
          rules="required"
        />
        &nbsp;
        <label :for="`${prefix}Skill1Css`">CSS&nbsp;&nbsp;</label>
        &nbsp;

        <!-- HTML -->
        <VeeField
          type="checkbox"
          :id="`${prefix}Skill1Html`"
          :name="`${prefix}Skill1`"
          value="HTML"
          v-model="formData.skill1"
          label="技能 1"
          rules="required"
        />
        &nbsp;
        <label :for="`${prefix}Skill1Html`">HTML&nbsp;&nbsp;</label>
        &nbsp;

        <!-- JavaScript -->
        <VeeField
          type="checkbox"
          :id="`${prefix}Skill1Js`"
          :name="`${prefix}Skill1`"
          value="JavaScript"
          v-model="formData.skill1"
          label="技能 1"
          rules="required"
        />
        &nbsp;
        <label :for="`${prefix}Skill1Js`">JavaScript&nbsp;&nbsp;</label>
        &nbsp;&nbsp;

        <!-- 錯誤訊息 -->
        <VeeErrorMessage :name="`${prefix}Skill1`" class="text-danger"></VeeErrorMessage>
      </div>

      <!-- 性別 1 -->
      <div>
        <span>性別 1：</span>&nbsp;
        <button type="button" class="btn btn-secondary btn-sm" @click="formData.gender1 = ''">
          清空性別
        </button>
        &nbsp;&nbsp;

        <!-- Male -->
        <VeeField
          type="radio"
          :id="`${prefix}Gender1Male`"
          :name="`${prefix}Gender1`"
          value="male"
          v-model="formData.gender1"
          label="性別 1"
          rules="required"
        />
        &nbsp;
        <label :for="`${prefix}Gender1Male`">Male&nbsp;&nbsp;</label>
        &nbsp;&nbsp;

        <!-- Female -->
        <VeeField
          type="radio"
          :id="`${prefix}Gender1Female`"
          :name="`${prefix}Gender1`"
          v-model="formData.gender1"
          value="female"
        />
        &nbsp;
        <label :for="`${prefix}Gender1Female`">Female&nbsp;&nbsp;</label>
        &nbsp;&nbsp;

        <!-- 錯誤訊息 -->
        <VeeErrorMessage :name="`${prefix}Gender1`" class="text-danger"></VeeErrorMessage>
      </div>
    </div>

    <!-- Checkbox & Radio button - 寫法 2 -->
    <div class="sub-box mb-24">
      <h4 class="mb-3">Checkbox & Radio button - 寫法 2</h4>
      <p class="mb-2">寫法比較複雜，請直接參考程式。</p>
      <ul>
        <li><code>&lt;Field></code> 裡面會包入一般的 checkbox、radio 寫法。</li>
        <li>
          <code>&lt;Field></code> 需使用 <code>v-slot</code> 解構出 <code>field</code> 參數，內層的
          checkbox、radio <code>&lt;input></code> 需使用 <code>v-bind</code> 綁定
          <code>field</code>。
        </li>
      </ul>

      <!-- 技能 2 -->
      <div class="mb-3">
        <span>技能 2：</span>&nbsp;

        <!-- CSS -->
        <VeeField
          type="checkbox"
          :name="`${prefix}Skill2`"
          value="CSS"
          v-model="formData.skill2"
          v-slot="{ field }"
          label="技能 2"
          rules="required"
        >
          <!-- {{ field }} -->
          <input type="checkbox" v-bind="field" :id="`${prefix}Skill2Css`" />
          &nbsp;
          <label :for="`${prefix}Skill2Css`">CSS</label>
        </VeeField>
        &nbsp;&nbsp;

        <!-- HTML -->
        <VeeField
          type="checkbox"
          :name="`${prefix}Skill2`"
          value="HTML"
          v-model="formData.skill2"
          v-slot="{ field }"
          label="技能 2"
          rules="required"
        >
          <!-- {{ field }} -->
          <input type="checkbox" v-bind="field" :id="`${prefix}Skill2Html`" />
          &nbsp;
          <label :for="`${prefix}Skill2Html`">HTML</label>
        </VeeField>
        &nbsp;&nbsp;

        <!-- JavaScript -->
        <VeeField
          type="checkbox"
          :name="`${prefix}Skill2`"
          value="JavaScript"
          v-model="formData.skill2"
          v-slot="{ field }"
          label="技能 2"
          rules="required"
        >
          <!-- {{ field }} -->
          <input type="checkbox" v-bind="field" :id="`${prefix}Skill2Js`" />
          &nbsp;
          <label :for="`${prefix}Skill2Js`">JavaScript</label>
        </VeeField>
        &nbsp;&nbsp;

        <!-- 錯誤訊息 -->
        <VeeErrorMessage :name="`${prefix}Skill2`" class="text-danger"></VeeErrorMessage>
      </div>

      <!-- 性別 2 -->
      <div>
        <span>性別 2：</span>&nbsp;

        <!-- Male -->
        <VeeField
          type="radio"
          :name="`${prefix}Gender2`"
          value="male"
          v-model="formData.gender2"
          v-slot="{ field }"
          label="性別 2"
          rules="required"
        >
          <!-- {{ field }} -->
          <input type="radio" v-bind="field" :id="`${prefix}Gender2Male`" />
          &nbsp;
          <label :for="`${prefix}Gender2Male`">Male</label>
        </VeeField>
        &nbsp;&nbsp;

        <!-- Female -->
        <VeeField
          type="radio"
          :name="`${prefix}Gender2`"
          value="female"
          v-model="formData.gender2"
          v-slot="{ field }"
          label="性別 2"
          rules="required"
        >
          <!-- {{ field }} -->
          <input type="radio" v-bind="field" :id="`${prefix}Gender2Female`" />
          &nbsp;
          <label :for="`${prefix}Gender2Female`">Female</label>
        </VeeField>
        &nbsp;&nbsp;

        <!-- 錯誤訊息 -->
        <VeeErrorMessage :name="`${prefix}Gender2`" class="text-danger"></VeeErrorMessage>
      </div>
    </div>

    <!-- 正則驗證 -->
    <div class="sub-box mb-24">
      <div class="mb-24">
        <h4 class="mb-3">使用正則表達式驗證</h4>
        <p>
          由於需要給入正則表達式，因此 <code>rules</code> 的值需使用物件寫法，並使用
          <code>v-bind</code> 綁定的方式，如：<code>:rules="{ regex: ... }"</code>。
        </p>
        <p class="fw-bold">
          ※ 由於正則表達式在驗證較複雜的規則時會變得冗長，於
          <code>rules</code>
          中直接撰寫正則表達式可能會造成程式難以閱讀，建議可以改用自訂義驗證的方式。
        </p>
      </div>

      <!-- 數字 1 -->
      <div class="mb-24">
        <h5 class="text-decoration-underline">寫法一</h5>
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
        <VeeErrorMessage :name="`${prefix}Number1`" class="text-danger"></VeeErrorMessage>
      </div>

      <!-- 數字 2 -->
      <div class="mb-24">
        <h5 class="text-decoration-underline">寫法二</h5>
        <p>
          使用字串寫法：<code>regex: '^[0-9]{5}$'</code><br />
          由於要限制必須為 5 碼數字，正則語法為 <code>{5}</code>。<br />
          使用 RegExp 物件寫法會和外層的花括號衝突到而造成語法不正確，因此改用字串寫法。<br />
          經過測試，字串寫法需去除頭尾斜線（<code>/</code>），只留規則內容即可。（類似於 HTML 的
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
        <VeeErrorMessage :name="`${prefix}Number2`" class="text-danger"></VeeErrorMessage>
      </div>

      <!-- 數字 3 -->
      <div class="mb-24">
        <h5 class="text-decoration-underline">結合其它 rule</h5>
        <p>例如結合必填規則。</p>

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
        <VeeErrorMessage :name="`${prefix}Number3`" class="text-danger"></VeeErrorMessage>
      </div>
    </div>

    <!-- 功能按鈕 -->
    <div>
      <button type="button" class="btn me-3 btn-outline-primary" @click="validate">手動驗證</button>
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
