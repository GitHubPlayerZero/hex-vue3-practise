<template>
  <div class="container">
    <h2 class="mb-3">VeeValidate (Options API)</h2>

    <p class="mb-5">VeeValidate 環境於 main.js 初始化。</p>

    <!-- 切換語系 -->
    <div>
      <h3 class="mb-3">切換語系（{{ currentLangName }}）</h3>
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

    <!-- Form 1 -->
    <h3 class="mb-24">Form 1</h3>

    <div class="mb-5">
      <p>基本使用範例。</p>

      <ul>
        <li class="mb-2">
          表單（Form）使用 <code>VeeValidate</code> 的 <code>&lt;Form></code> 元件；各表單控件使用
          <code>&lt;Field></code> 元件。
        </li>
        <li class="mb-2">
          使用 <code>VeeValidate</code> 的 <code>&lt;Form></code> 元件：
          <ul>
            <li class="mb-1">預設會對 submit 做 <code>prevent</code>，所以不需要再自己寫。</li>
            <li class="mb-1">
              submit 動作預設會將表單資料作為參數傳入。<br />
              表單資料會封裝為物件，有使用
              <code>&lt;Field></code> 元件者才會被封裝進去，並且以 <code>name</code> 作為屬性鍵項。
            </li>
          </ul>
        </li>
        <li class="mb-2">
          Submit 時會自動進行驗證，或者也可以利用 <code>VeeValidate Form</code> 解構出來的
          <code>validate</code> 進行手動驗證。
        </li>
      </ul>
    </div>

    <VeeForm v-slot="{ errors, values, validate }" @submit="submitForm1">
      <VeeValidateInfo :errors="errors" :values="values" :validate="validate" />

      <!-- Email 1 -->
      <div class="sub-box mb-24">
        <p>
          基本寫法。<br />
          errors 的屬性名稱會自動使用
          <code>name</code>；錯誤訊息中的欄位名稱若無特別設定，預設也是使用 <code>name</code>。
        </p>

        <div>
          <label for="form1Email1">Email 1：</label>
          <VeeField
            id="form1Email1"
            name="form1Email1"
            type="email"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form1.email1"
          ></VeeField>
          &nbsp;&nbsp;&nbsp;
          <span class="text-danger">{{ errors.form1Email1 }}</span>
        </div>
      </div>

      <!-- Email 2 -->
      <div class="sub-box mb-24">
        <p>將 <code>name</code> 改為 <code>"電子郵件"</code>，可以看到 errors 的改變。</p>

        <div>
          <label for="form1Email2">Email 2：</label>
          <VeeField
            id="form1Email2"
            name="電子郵件"
            type="email"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form1.email2"
          ></VeeField>
          &nbsp;&nbsp;&nbsp;
          <span class="text-danger">{{ errors.電子郵件 }}</span>
        </div>
      </div>

      <!-- Email 3 -->
      <div class="sub-box mb-24">
        <p>也可以使用 <code>Field</code> 的 <code>label</code> 屬性，來改變訊息中的欄位名稱。</p>

        <div>
          <label for="form1Email3">Email 3：</label>
          <VeeField
            id="form1Email3"
            name="form1Email3"
            type="email"
            placeholder="請輸入 Email"
            rules="email|required"
            label="Email 3"
            v-model="form1.email3"
          ></VeeField>
          &nbsp;&nbsp;&nbsp;
          <span class="text-danger">{{ errors.form1Email3 }}</span>
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
          <label for="form1Email4">Email 4：</label>
          <VeeField
            id="form1Email4"
            name="form1Email4"
            type="email"
            placeholder="請輸入 Email"
            rules="email|required"
            label="Email 4"
            :validateOnBlur="false"
            :validateOnChange="false"
            v-model="form1.email4"
          ></VeeField>
          &nbsp;&nbsp;&nbsp;
          <span class="text-danger">{{ errors.form1Email4 }}</span>
        </div>
      </div>

      <!-- Email 5 -->
      <div class="sub-box mb-24">
        <p>也可以使用 <code>validateOnInput</code> 屬性，設定為每次輸入即驗證。</p>

        <div>
          <label for="form1Email5">Email 5：</label>
          <VeeField
            id="form1Email5"
            name="form1Email5"
            type="email"
            placeholder="請輸入 Email"
            rules="email|required"
            label="Email 5"
            :validateOnInput="true"
            v-model="form1.email5"
          ></VeeField>
          &nbsp;&nbsp;&nbsp;
          <span class="text-danger">{{ errors.form1Email5 }}</span>
        </div>
      </div>

      <!-- Email 6 -->
      <div class="sub-box mb-24">
        <p>
          錯誤訊息可以使用 <code>&lt;ErrorMessage></code> 元件自動帶入，元件給入
          <code>name</code> 屬性，對應 <code>&lt;Field></code> 元件的 <code>name</code>。
        </p>

        <div>
          <label for="form1Email6">Email 6：</label>
          <VeeField
            id="form1Email6"
            name="form1Email6"
            type="email"
            placeholder="請輸入 Email"
            rules="email|required"
            label="Email 6"
            :validateOnInput="true"
            v-model="form1.email6"
          ></VeeField>
          &nbsp;&nbsp;&nbsp;
          <VeeErrorMessage name="form1Email6" class="text-danger"></VeeErrorMessage>
        </div>
      </div>

      <!-- 居住縣市 -->
      <div class="sub-box mb-24">
        <h4 class="mb-3">下拉選單</h4>
        <p>需要在 <code>&lt;Field></code> 元件裡面設定屬性 <code>as="select"</code></p>

        <div>
          <label for="form1City">居住縣市：</label>
          <VeeField
            as="select"
            id="form1City"
            name="form1City"
            label="居住縣市"
            rules="required"
            v-model="form1.city"
          >
            <option selected disabled hidden value="">---請選擇---</option>
            <option value="Taipei">台北市</option>
            <option value="Taichung">台中市</option>
            <option value="Kaohsiung">高雄市</option>
          </VeeField>
          &nbsp;&nbsp;&nbsp;
          <VeeErrorMessage name="form1City" class="text-danger"></VeeErrorMessage>
        </div>
      </div>

      <!-- Checkbox & Radio button - 寫法 1 -->
      <div class="sub-box mb-24">
        <div class="mb-28">
          <h4 class="mb-3">Checkbox & Radio button - 寫法 1</h4>
          <p>
            寫法同一般的 checkbox、radio，<code>&lt;input></code> 改為
            <code>&lt;Field></code> 即可。
          </p>
          <p>
            radio button 可以只在第一個項目綁定 VeeValidate 的
            <code>label</code>、<code>rules</code>；但 checkbox 必須每個項目都綁定。
          </p>
        </div>

        <!-- 技能 1 -->
        <div class="mb-3">
          <span>技能 1：</span>&nbsp;
          <button type="button" class="btn btn-secondary btn-sm" @click="form1.skill1 = []">
            清空技能
          </button>
          &nbsp;&nbsp;

          <!-- CSS -->
          <VeeField
            type="checkbox"
            name="form1Skill11"
            id="form1Skill1Css"
            value="CSS"
            label="技能 1"
            rules="required"
            v-model="form1.skill1"
          />
          &nbsp;
          <label for="form1Skill1Css">CSS&nbsp;&nbsp;</label>
          &nbsp;

          <!-- HTML -->
          <VeeField
            type="checkbox"
            name="form1Skill11"
            id="form1Skill1Html"
            value="HTML"
            label="技能 1"
            rules="required"
            v-model="form1.skill1"
          />
          &nbsp;
          <label for="form1Skill1Html">HTML&nbsp;&nbsp;</label>
          &nbsp;

          <!-- JavaScript -->
          <VeeField
            type="checkbox"
            name="form1Skill11"
            id="form1Skill1Js"
            value="JavaScript"
            label="技能 1"
            rules="required"
            v-model="form1.skill1"
          />
          &nbsp;
          <label for="form1Skill1Js">JavaScript&nbsp;&nbsp;</label>
          &nbsp;&nbsp;

          <!-- 錯誤訊息 -->
          <VeeErrorMessage name="form1Skill11" class="text-danger"></VeeErrorMessage>
        </div>

        <!-- 性別 1 -->
        <div>
          <span>性別 1：</span>&nbsp;
          <button type="button" class="btn btn-secondary btn-sm" @click="form1.gender1 = ''">
            清空性別
          </button>
          &nbsp;&nbsp;

          <!-- Male -->
          <VeeField
            type="radio"
            name="form1Gender1"
            id="form1Gender1Male"
            value="male"
            label="性別 1"
            rules="required"
            v-model="form1.gender1"
          />
          &nbsp;
          <label for="form1Gender1Male">Male&nbsp;&nbsp;</label>
          &nbsp;&nbsp;

          <!-- Female -->
          <VeeField
            type="radio"
            name="form1Gender1"
            id="form1Gender1Female"
            value="female"
            v-model="form1.gender1"
          />
          &nbsp;
          <label for="form1Gender1Female">Female&nbsp;&nbsp;</label>
          &nbsp;&nbsp;

          <!-- 錯誤訊息 -->
          <VeeErrorMessage name="form1Gender1" class="text-danger"></VeeErrorMessage>
        </div>
      </div>

      <!-- Checkbox & Radio button - 寫法 2 -->
      <div class="sub-box mb-24">
        <h4 class="mb-3">Checkbox & Radio button - 寫法 2</h4>
        <p class="mb-2">寫法比較複雜，請直接參考程式。</p>
        <ul>
          <li><code>&lt;Field></code> 裡面會包入一般的 checkbox、radio 寫法。</li>
          <li>
            <code>&lt;Field></code> 需使用 <code>v-slot</code> 解構出
            <code>field</code> 參數，內層的 checkbox、radio <code>&lt;input></code> 需使用
            <code>v-bind</code> 綁定 <code>field</code>。
          </li>
        </ul>

        <!-- 技能 2 -->
        <div class="mb-3">
          <span>技能 2：</span>&nbsp;

          <!-- CSS -->
          <VeeField
            v-slot="{ field }"
            type="checkbox"
            name="form1Skill12"
            value="CSS"
            label="技能 2"
            rules="required"
            v-model="form1.skill2"
          >
            <!-- {{ field }} -->
            <input type="checkbox" v-bind="field" id="form1Skill2Css" />
            &nbsp;
            <label for="form1Skill2Css">CSS</label>
          </VeeField>
          &nbsp;&nbsp;

          <!-- HTML -->
          <VeeField
            v-slot="{ field }"
            type="checkbox"
            name="form1Skill12"
            value="HTML"
            label="技能 2"
            rules="required"
            v-model="form1.skill2"
          >
            <!-- {{ field }} -->
            <input type="checkbox" v-bind="field" id="form1Skill2Html" />
            &nbsp;
            <label for="form1Skill2Html">HTML</label>
          </VeeField>
          &nbsp;&nbsp;

          <!-- JavaScript -->
          <VeeField
            v-slot="{ field }"
            type="checkbox"
            name="form1Skill12"
            value="JavaScript"
            label="技能 2"
            rules="required"
            v-model="form1.skill2"
          >
            <!-- {{ field }} -->
            <input type="checkbox" v-bind="field" id="form1Skill2Js" />
            &nbsp;
            <label for="form1Skill2Js">JavaScript</label>
          </VeeField>
          &nbsp;&nbsp;

          <!-- 錯誤訊息 -->
          <VeeErrorMessage name="form1Skill12" class="text-danger"></VeeErrorMessage>
        </div>

        <!-- 性別 2 -->
        <div>
          <span>性別 2：</span>&nbsp;

          <!-- Male -->
          <VeeField
            v-slot="{ field }"
            type="radio"
            name="form1Gender2"
            value="male"
            label="性別 2"
            rules="required"
            v-model="form1.gender2"
          >
            <!-- {{ field }} -->
            <input type="radio" v-bind="field" id="form1Gender2Male" />
            &nbsp;
            <label for="form1Gender2Male">Male</label>
          </VeeField>
          &nbsp;&nbsp;

          <!-- Female -->
          <VeeField
            v-slot="{ field }"
            type="radio"
            name="form1Gender2"
            value="female"
            label="性別 2"
            rules="required"
            v-model="form1.gender2"
          >
            <!-- {{ field }} -->
            <input type="radio" v-bind="field" id="form1Gender2Female" />
            &nbsp;
            <label for="form1Gender2Female">Female</label>
          </VeeField>
          &nbsp;&nbsp;

          <!-- 錯誤訊息 -->
          <VeeErrorMessage name="form1Gender2" class="text-danger"></VeeErrorMessage>
        </div>
      </div>

      <!-- 正則驗證 -->
      <div class="sub-box mb-3">
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

          <label for="form1Number1">數字 1：</label>
          <VeeField
            type="text"
            name="form1Number1"
            id="form1Number1"
            placeholder="請輸入數字"
            label="數字 1"
            :rules="{ regex: /^[0-9]+$/ }"
            v-model="form1.number1"
          />
          &nbsp;&nbsp;

          <!-- 錯誤訊息 -->
          <VeeErrorMessage name="form1Number1" class="text-danger"></VeeErrorMessage>
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

          <label for="form1Number2">數字 2：</label>
          <VeeField
            type="text"
            name="form1Number2"
            id="form1Number2"
            placeholder="請輸入 5 個數字"
            label="數字 2"
            :rules="{ regex: '^[0-9]{5}$' }"
            v-model="form1.number2"
          />
          &nbsp;&nbsp;

          <!-- 錯誤訊息 -->
          <VeeErrorMessage name="form1Number2" class="text-danger"></VeeErrorMessage>
        </div>

        <!-- 數字 3 -->
        <div class="mb-24">
          <h5 class="text-decoration-underline">結合其它 rule</h5>
          <p>例如結合必填規則。</p>

          <label for="form1Number3">數字 3：</label>
          <VeeField
            type="text"
            name="form1Number3"
            id="form1Number3"
            placeholder="請輸入數字"
            label="數字 3"
            :rules="{ required: true, regex: /^[0-9]+$/ }"
            v-model="form1.number3"
          />
          &nbsp;&nbsp;

          <!-- 錯誤訊息 -->
          <VeeErrorMessage name="form1Number3" class="text-danger"></VeeErrorMessage>
        </div>
      </div>

      <!-- 功能按鈕 -->
      <div>
        <button type="button" class="btn me-3 btn-outline-primary" @click="validate">
          手動驗證
        </button>
        <button class="btn btn-primary">Submit</button>
      </div>
    </VeeForm>

    <hr />

    <!-- Form 2 -->
    <h3 class="mb-24">Form 2</h3>

    <div class="mb-5">
      <p>表單級驗證（Form-level Validation）範例。</p>

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

    <VeeForm :validation-schema="form2Schema" v-slot="{ errors, values }" @submit="submitForm2">
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
// 顯示 VeeValidate 驗證訊息元件
import VeeValidateInfo from '@/components/veeValidate/VeeValidateInfo.vue';

// 使用 VeeValidate
import { useVeeValidate } from '@/assets/js';
const veeValidate = useVeeValidate();

export default {
  data() {
    console.log(`data...`);

    return {
      languageConf: veeValidate.languageConf,
      currentLangName: veeValidate.getCurrentLanguage().name,
      form1: {},
      form2: {},
      form3: {},
      formBs: {},

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
    }; // return end
  }, // data end

  methods: {
    // Form 1 submit
    submitForm1(form) {
      console.log(`[submitForm1] form ==>`, form);
      console.log(`[submitForm1] form1 ==>`, this.form1);
    },
    // Form 2 submit
    submitForm2(form) {
      console.log(`[submitForm2] form ==>`, form);
      console.log(`[submitForm2] form2 ==>`, this.form2);
    },
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

  components: {
    VeeValidateInfo,
  },
};
</script>

<style lang="scss" scoped>
.sub-box {
  border: 2px dotted green;
  padding: 15px;
}

hr {
  margin: 48px 0;
}
</style>
