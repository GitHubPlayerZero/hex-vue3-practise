<template>
  <section class="mb-32">
    <h1 class="h1">meta 資料與 URL 測試（Composition）</h1>
    <p>請開啟 console 觀看測試結果。</p>
    <p>Base URL：{{ baseUrl }}</p>
    <p class="fw-bold">經由測試發現，<code>BASE_URL</code> 並不會作為根路徑的一份子。</p>
  </section>

  <hr />

  <!-- 表單 -->
  <p>送出表單，會開啟新視窗。</p>

  <form target="_blank">
    <div class="mb-3">
      <label>
        text1：
        <input type="text" name="text1" value="我的字串" />
      </label>
    </div>

    <div class="mb-24">
      <label>
        text2：
        <input type="text" name="text2" value="my text" />
      </label>
    </div>

    <div>
      <button class="btn btn-primary">提交</button>
    </div>
  </form>

  <hr />

  <!-- window.location.href -->
  <h2 class="h2">window.location.href</h2>
  <p class="mb-24">
    由於路由使用 hash 模式，使用 <code>window.location.href</code> 取得 URL 時，<code>#</code>
    開始後方的路徑，都會被當作 URL hash（錨點）的部份。
  </p>

  <div>
    <button type="button" class="btn btn-primary me-3" @click="testLocationBase">
      URL 基本測試
    </button>
    <button type="button" class="btn btn-primary me-3" @click="getLocationParam">取得參數</button>
  </div>

  <hr class="my-4" />

  <!-- 內部模組 import.meta -->
  <h2 class="h2">內部模組 import.meta</h2>
  <p>使用 <code>import.meta</code> 取得的 URL 會依據檔案的實體路徑。</p>
  <div>
    <button type="button" class="btn btn-primary me-3" @click="testInsideModuleBase">
      URL 基本測試
    </button>
    <button type="button" class="btn btn-primary me-3" @click="getInsideModuleParam">
      取得參數
    </button>
  </div>

  <hr class="my-4" />

  <!-- 外部模組 import.meta -->
  <h2 class="h2">外部模組 import.meta</h2>
  <p>使用外部模組：<code>urlModuleTest.js</code></p>

  <div>
    <button type="button" class="btn btn-primary me-3" @click="testOutsideModuleBase">
      URL 基本測試
    </button>
    <button type="button" class="btn btn-primary me-3" @click="getOutsideModuleParam">
      取得參數
    </button>
  </div>

  <hr class="my-4" />

  <!-- 外部模組 (帶參數) import.meta -->
  <h2 class="h2">外部模組 (帶參數) import.meta</h2>
  <p>使用外部模組：<code>urlModuleTest.js?moduleName=moduleParam</code></p>

  <div>
    <button type="button" class="btn btn-primary me-3" @click="testOutsideParamModuleBase">
      URL 基本測試
    </button>
    <button type="button" class="btn btn-primary me-3" @click="getOutsideParamModuleParam">
      取得參數
    </button>
  </div>

  <hr class="my-4" />
</template>

<script>
console.log(`[composition - script] meta ==>`, import.meta);
console.log(``);
</script>

<script setup>
import { logger } from '@/assets/js/metaUrl/logger';
import { UrlTester } from '@/assets/js/metaUrl/urlTester';

// 外部模組
import { getMoudleUrlTester } from '@/assets/js/metaUrl/urlModuleTest';
import { getMoudleUrlTester as getParamModuleUrlTester } from '@/assets/js/metaUrl/urlModuleTest?moduleName=paramModule';

console.log(`[composition - setup] meta ==>`, import.meta);
console.log(`[composition - setup] env ==>`, import.meta.env);
const baseUrl = import.meta.env.BASE_URL;

logger.logDivider();
console.log(``);

// 解析參數
function parseParam(urlObj) {
  console.log(urlObj);
  console.log(`text1 ==>`, urlObj.searchParams.get('text1'));
  console.log(`text2 ==>`, urlObj.searchParams.get('text2'));
  console.log(`moduleName ==>`, urlObj.searchParams.get('moduleName'));
}

/* 測試 window.location.href */
console.log(`## 建立測試 - window.location.href`);
const locationUrlTester = new UrlTester(window.location.href);

// URL 基本測試
function testLocationBase() {
  console.log(``);
  logger.logTestItem('window.location.href');
  locationUrlTester.test();
  console.log(``);
  logger.logDivider();
}

// 取得參數
function getLocationParam() {
  logger.logTestTitle('window.location.href 取得參數');
  parseParam(locationUrlTester.getBaseUrlObj());
  console.log(``);
  logger.logDivider();
}

console.log(``);

/* 測試內部模組 */
console.log(`## 建立測試 - 內部模組 import.meta.url`);
const iModuleUrlTester = new UrlTester(import.meta.url);

// URL 基本測試
function testInsideModuleBase() {
  logger.logTestItem('內部模組 import.meta.url');
  iModuleUrlTester.test();
  console.log(``);
  logger.logDivider();
}

// 取得參數
function getInsideModuleParam() {
  logger.logTestTitle('內部模組取得參數');
  parseParam(iModuleUrlTester.getBaseUrlObj());
  console.log(``);
  logger.logDivider();
}

console.log(``);

/* 測試外部模組 */
console.log(`## 建立測試 - 外部模組 import.meta.url`);
const oModuleUrlTester = getMoudleUrlTester();

function testOutsideModuleBase() {
  logger.logTestItem('外部模組 import.meta.url');
  oModuleUrlTester.test();
  console.log(``);
  logger.logDivider();
}

// 取得參數
function getOutsideModuleParam() {
  logger.logTestTitle('外部模組取得參數');
  parseParam(oModuleUrlTester.getBaseUrlObj());
  console.log(``);
  logger.logDivider();
}

console.log(``);

/* 測試外部模組 (帶參數) */
console.log(`## 建立測試 - 外部模組 (帶參數) import.meta.url`);
const oParamModuleUrlTester = getParamModuleUrlTester();

function testOutsideParamModuleBase() {
  logger.logTestItem('外部模組 (帶參數) import.meta.url');
  oParamModuleUrlTester.test();
  console.log(``);
  logger.logDivider();
}

// 取得參數
function getOutsideParamModuleParam() {
  logger.logTestTitle('外部模組 (帶參數) 取得參數');
  parseParam(oParamModuleUrlTester.getBaseUrlObj());
  console.log(``);
  logger.logDivider();
}

console.log(``);

logger.logDivider();
</script>
