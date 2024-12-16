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
    <VeeBootstrap prefix="bs" />
  </div>
</template>

<script>
import VeeBase from '@/components/veeValidate/VeeBase.vue';
import VeeTest from '@/components/veeValidate/VeeTest.vue';
import VeeFormLevel from '@/components/veeValidate/VeeFormLevel.vue';
import VeeDefinition from '@/components/veeValidate/VeeDefinition.vue';
import VeeBootstrap from '@/components/veeValidate/VeeBootstrap.vue';

// 使用 VeeValidate
import { useVeeValidate } from '@/assets/js';
const veeValidate = useVeeValidate();

export default {
  components: {
    VeeBase,
    VeeTest,
    VeeFormLevel,
    VeeDefinition,
    VeeBootstrap,
  },

  data() {
    return {
      languageConf: veeValidate.languageConf, // 語系資訊
      currentLangName: veeValidate.getCurrentLanguage().name, // 當前語系名稱
    };
  },

  methods: {
    // 切換語系
    switchLanguage(language) {
      this.currentLangName = veeValidate.switchLanguage(language).name;
    },
  },
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
