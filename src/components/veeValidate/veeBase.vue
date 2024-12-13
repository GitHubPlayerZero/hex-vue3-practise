<template>
  <h2 class="mb-24">基本範例</h2>

  <!-- 說明 -->
  <div class="mb-32">
    <ul>
      <li class="mb-2">
        表單（Form）使用 <code>VeeValidate</code> 的 <code>&lt;Form></code> 元件；各表單控件（如
        input、select 等）使用 <code>&lt;Field></code> 元件；錯誤訊息可使用
        <code>&lt;ErrorMessage></code> 元件，會自動帶入錯誤訊息。
      </li>
      <li class="mb-2">
        使用 <code>VeeValidate</code> 的 <code>&lt;Form></code> 元件：
        <ul>
          <li class="mb-1">Submit 時會自動進行驗證。</li>
          <li class="mb-1">預設會對 submit 做 <code>prevent</code>，所以不需要再自己寫。</li>
          <li class="mb-1">
            提交時，VeeValidate 會將 <code>&lt;Field></code> 元件輸入的資料封裝成表單物件（以
            <code>name</code> 作為屬性鍵項），作為參數傳遞給 submit 方法。
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- 表單 -->
  <VeeForm @submit="submitForm">
    <!-- text -->
    <div class="sub-box">
      <div class="mb-24">
        <h3 class="h3">Text</h3>
      </div>

      <label :for="`${prefix}Name`">姓名：</label>
      <VeeField
        type="text"
        :id="`${prefix}Name`"
        :name="`${prefix}Name`"
        placeholder="請輸入姓名"
        v-model="formData.name"
        label="姓名"
        rules="required"
      />
      &nbsp;&nbsp;&nbsp;
      <VeeErrorMessage :name="`${prefix}Name`" class="text-danger" />
    </div>

    <!-- Select 下拉選單 -->
    <div class="sub-box">
      <div class="mb-24">
        <h3 class="h3">Select 下拉選單</h3>
        <p>需要在 <code>&lt;Field></code> 元件裡面設定屬性 <code>as="select"</code></p>
      </div>

      <label :for="`${prefix}City`">居住縣市：</label>
      <VeeField
        :id="`${prefix}City`"
        :name="`${prefix}City`"
        v-model="formData.city"
        as="select"
        label="居住縣市"
        rules="required"
      >
        <option selected value="">---請選擇---</option>
        <option value="Taipei">台北市</option>
        <option value="Taichung">台中市</option>
        <option value="Kaohsiung">高雄市</option>
      </VeeField>
      &nbsp;&nbsp;&nbsp;
      <VeeErrorMessage :name="`${prefix}City`" class="text-danger" />
    </div>

    <!-- 單選框 Radio button -->
    <div class="sub-box">
      <div class="mb-24">
        <h3 class="h3">單選框 Radio button</h3>
        <p>
          Radio button 只需要在第一個項目綁定 VeeValidate 的屬性（如
          <code>rules</code>、<code>label</code>）即可有效果，不需要每個項目都設定。
        </p>
      </div>

      <!-- 寫法 1 -->
      <div class="mb-24">
        <div class="mb-16">
          <h4 class="h4">寫法 1</h4>
          <p>
            寫法同一般的 radio button，<code>&lt;input></code> 改為
            <code>&lt;Field></code> 即可。<br />
          </p>
        </div>

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
        <VeeErrorMessage :name="`${prefix}Gender1`" class="text-danger" />
      </div>

      <!-- 寫法 2 -->
      <div>
        <div class="mb-16">
          <h4 class="h4">寫法 2</h4>
          <p class="mb-1">寫法比較複雜，請直接參考程式。</p>
          <ul>
            <li><code>&lt;Field></code> 裡面會包入一般的 radio button 寫法。</li>
            <li>
              <code>&lt;Field></code> 需由 slot props 解構出 <code>field</code> 參數，內層的 radio
              button 需使用 <code>v-bind</code> 綁定 <code>field</code>。
            </li>
          </ul>
        </div>

        <span>性別 2：</span>&nbsp;
        <button type="button" class="btn btn-secondary btn-sm" @click="formData.gender2 = ''">
          清空性別
        </button>
        &nbsp;&nbsp;

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
          <label :for="`${prefix}Gender2Male`">Male&nbsp;&nbsp;</label>
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
          <label :for="`${prefix}Gender2Female`">Female&nbsp;&nbsp;</label>
        </VeeField>
        &nbsp;&nbsp;

        <!-- 錯誤訊息 -->
        <VeeErrorMessage :name="`${prefix}Gender2`" class="text-danger" />
      </div>
    </div>

    <!-- 複選框 Checkbox -->
    <div class="sub-box">
      <div class="mb-24">
        <h3 class="h3">複選框 Checkbox</h3>
        <p>
          寫法與 radio button 差不多，不同的是 checkbox 必須每個項目都綁定 VeeValidate
          的屬性才會有效果。
        </p>
      </div>

      <!-- 寫法 1 -->
      <div class="mb-24">
        <div class="mb-16">
          <h4 class="h4">寫法 1</h4>
          <p>同一般的 checkbox 寫法，<code>&lt;input></code> 改為 <code>&lt;Field></code> 即可。</p>
        </div>

        <!-- 技能 1 -->
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
        <VeeErrorMessage :name="`${prefix}Skill1`" class="text-danger" />
      </div>

      <!-- 寫法 2 -->
      <div>
        <div class="mb-16">
          <h4 class="h4">寫法 2</h4>
          <p class="mb-1">與 radio button 寫法二類似，寫法比較複雜，請直接參考程式。</p>
          <ul>
            <li><code>&lt;Field></code> 裡面會包入一般的 checkbox 寫法。</li>
            <li>
              <code>&lt;Field></code> 需由 slot props 解構出 <code>field</code> 參數，內層的
              checkbox 需使用 <code>v-bind</code> 綁定 <code>field</code>。
            </li>
          </ul>
        </div>

        <span>技能 2：</span>&nbsp;
        <button type="button" class="btn btn-secondary btn-sm" @click="formData.skill2 = []">
          清空技能
        </button>
        &nbsp;&nbsp;

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
        <VeeErrorMessage :name="`${prefix}Skill2`" class="text-danger" />
      </div>
    </div>
    
    <!-- Textarea -->
    <div class="sub-box">
      <div class="mb-24">
        <h3 class="h3">Textarea</h3>
        <p>需要在 <code>&lt;Field></code> 元件裡面設定屬性 <code>as="textarea"</code></p>
      </div>
      
      <div class="d-flex flex-wrap mb-2">
        <label :for="`${prefix}Remark`" class="me-2">備註：</label>
        <VeeField
          :id="`${prefix}Remark`"
          :name="`${prefix}Remark`"
          class="me-3"
          v-model="formData.remark"
          cols="70"
          rows="4"
          as="textarea"
          label="備註"
          rules="required"
        />
        <VeeErrorMessage :name="`${prefix}Remark`" class="align-self-end text-danger" />
      </div>
    </div>

    <button class="d-inline-block btn btn-primary">Submit</button>
  </VeeForm>
</template>

<script>
export default {
  props: {
    prefix: {
      default: 'veeBase',
    },
  },

  beforeCreate() {
    console.log(`# [veeBase] prefix = ${this.prefix}`);
  },

  data() {
    return {
      formData: {},
    };
  },

  methods: {
    submitForm(form) {
      console.log(`# [veeBase] submit VeeValidate form ==>`, form);
      console.log(`# [veeBase] submit formData ==>`, this.formData);
    },
  },
};
</script>
