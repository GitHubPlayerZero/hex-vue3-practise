<template>
  <h1 class="mb-32">Swiper（Composition）</h1>

  <!-- 官網範例 -->
  <section>
    <h2 class="mb-28">官網範例</h2>

    <Swiper
      :modules="swiperModules"
      :slides-per-view="3"
      :space-between="50"
      :navigation="true"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      @reachEnd="onReachEnd"
    >
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
      <SwiperSlide class="slide2">Slide 2</SwiperSlide>
      <SwiperSlide class="slide3">Slide 3</SwiperSlide>
      <SwiperSlide class="slide4">Slide 4</SwiperSlide>
      <SwiperSlide class="slide5">Slide 5</SwiperSlide>
      <SwiperSlide class="slide7">Slide 6</SwiperSlide>
      <SwiperSlide class="slide7">Slide 7</SwiperSlide>
    </Swiper>
  </section>

  <hr class="hr-main" />

  <!-- 只有一個 Slide -->
  <section>
    <h2 class="mb-28">只有一個 Slide</h2>

    <p>
      當只有一個 Slide 時，<code>Navigation</code>, <code>Pagination</code>,
      <code>Scrollbar</code> 均不會出現。
    </p>

    <Swiper
      :modules="swiperModules"
      :navigation="true"
      :pagination="true"
      :scrollbar="{ draggable: true }"
    >
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
    </Swiper>
  </section>

  <hr class="hr-main" />

  <!-- 有兩個 Slide -->
  <section>
    <h2 class="mb-28">有兩個 Slide</h2>

    <Swiper
      :modules="swiperModules"
      :navigation="true"
      :pagination="true"
      :scrollbar="{ draggable: true }"
    >
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
      <SwiperSlide class="slide2">Slide 2</SwiperSlide>
    </Swiper>
  </section>

  <hr class="hr-main" />

  <!-- 立方體效果 -->
  <section>
    <h2 class="mb-28">立方體效果</h2>

    <Swiper
      :modules="swiperModules"
      :grabCursor="true"
      :effect="'cube'"
      :cubeEffect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }"
      :navigation="true"
      :pagination="true"
    >
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
      <SwiperSlide class="slide2">Slide 2</SwiperSlide>
      <SwiperSlide class="slide3">Slide 3</SwiperSlide>
      <SwiperSlide class="slide4">Slide 4</SwiperSlide>
      <SwiperSlide class="slide5">Slide 5</SwiperSlide>
      <SwiperSlide class="slide6">Slide 6</SwiperSlide>
      <SwiperSlide class="slide7">Slide 7</SwiperSlide>
    </Swiper>
  </section>

  <hr class="hr-main" />

  <!-- Navigation -->
  <h2 class="mb-28">Navigation</h2>

  <!-- 可循環 -->
  <section>
    <h3 class="mb-16">可循環</h3>
    <Swiper :modules="swiperModules" :navigation="true" :loop="true">
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
      <SwiperSlide class="slide2">Slide 2</SwiperSlide>
      <SwiperSlide class="slide3">Slide 3</SwiperSlide>
      <SwiperSlide class="slide4">Slide 4</SwiperSlide>
      <SwiperSlide class="slide5">Slide 5</SwiperSlide>
      <SwiperSlide class="slide6">Slide 6</SwiperSlide>
      <SwiperSlide class="slide7">Slide 7</SwiperSlide>
    </Swiper>
  </section>

  <hr class="hr-main" />

  <!-- 分頁樣式 -->
  <h2 class="mb-28">分頁樣式</h2>

  <!-- 分頁 - 可點擊、動態樣式 -->
  <section>
    <h3 class="mb-16">可點擊、動態樣式</h3>

    <Swiper
      :modules="swiperModules"
      :navigation="true"
      :loop="true"
      :pagination="{ clickable: true, dynamicBullets: true }"
    >
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
      <SwiperSlide class="slide2">Slide 2</SwiperSlide>
      <SwiperSlide class="slide3">Slide 3</SwiperSlide>
      <SwiperSlide class="slide4">Slide 4</SwiperSlide>
      <SwiperSlide class="slide5">Slide 5</SwiperSlide>
      <SwiperSlide class="slide6">Slide 6</SwiperSlide>
      <SwiperSlide class="slide7">Slide 7</SwiperSlide>
    </Swiper>
  </section>

  <hr class="hr-sub" />

  <!-- 分頁 - progress bar -->
  <section>
    <h3 class="mb-16">progress bar</h3>

    <Swiper
      :modules="swiperModules"
      :navigation="true"
      :loop="true"
      :pagination="{ type: 'progressbar' }"
      :class="{
        'swiper-progressbar-down': progressBarStyle.isDown,
        'swiper-progressbar-bigger': progressBarStyle.isBigger,
        'swiper-progressbar-color': progressBarStyle.isChangeColor,
      }"
    >
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
      <SwiperSlide class="slide2">Slide 2</SwiperSlide>
      <SwiperSlide class="slide3">Slide 3</SwiperSlide>
      <SwiperSlide class="slide4">Slide 4</SwiperSlide>
      <SwiperSlide class="slide5">Slide 5</SwiperSlide>
      <SwiperSlide class="slide6">Slide 6</SwiperSlide>
      <SwiperSlide class="slide7">Slide 7</SwiperSlide>
    </Swiper>

    <div class="d-flex flex-wrap column-gap-4 row-gap-1">
      <label>
        <input type="checkbox" v-model="progressBarStyle.isDown" />
        &nbsp;Progress bar 顯示在下面
      </label>
      <label>
        <input type="checkbox" v-model="progressBarStyle.isBigger" />
        &nbsp;加大 Progress bar
      </label>
      <label>
        <input type="checkbox" v-model="progressBarStyle.isChangeColor" />
        &nbsp;改變 Progress bar 顏色
      </label>
    </div>
  </section>

  <hr class="hr-sub" />

  <!-- 分頁 - 分頁數 -->
  <section>
    <h3 class="mb-16">分頁數</h3>

    <Swiper
      :modules="swiperModules"
      :navigation="true"
      :loop="true"
      :pagination="{ type: 'fraction' }"
    >
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
      <SwiperSlide class="slide2">Slide 2</SwiperSlide>
      <SwiperSlide class="slide3">Slide 3</SwiperSlide>
      <SwiperSlide class="slide4">Slide 4</SwiperSlide>
      <SwiperSlide class="slide5">Slide 5</SwiperSlide>
      <SwiperSlide class="slide6">Slide 6</SwiperSlide>
      <SwiperSlide class="slide7">Slide 7</SwiperSlide>
    </Swiper>
  </section>

  <hr class="hr-sub" />

  <!-- 分頁 - 自訂 -->
  <section>
    <h3 class="mb-16">自訂</h3>

    <p>此部份的設定較複雜，可寫成物件變數，再綁定於 <code>pagination</code>。</p>
    <p>
      在物件變數中，可以使用 <code>renderBullet</code> 屬性回傳自訂的 HTML，並使用客製的樣式
      class。<br />
      但激活的樣式會固定套用
      <code>.swiper-pagination-bullet-active</code> class，因此若想改變激活樣式，就需要建立此名稱的
      class 並定義自己想要的樣式內容，以覆蓋原本的設定。
    </p>

    <Swiper :modules="swiperModules" :navigation="true" :loop="true" :pagination="paginationCustom">
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
      <SwiperSlide class="slide2">Slide 2</SwiperSlide>
      <SwiperSlide class="slide3">Slide 3</SwiperSlide>
      <SwiperSlide class="slide4">Slide 4</SwiperSlide>
      <SwiperSlide class="slide5">Slide 5</SwiperSlide>
      <SwiperSlide class="slide6">Slide 6</SwiperSlide>
      <SwiperSlide class="slide7">Slide 7</SwiperSlide>
    </Swiper>
  </section>

  <hr class="hr-sub" />

  <!-- 分頁 - 垂直 -->
  <section>
    <h3 class="mb-16">垂直</h3>

    <Swiper
      class="demo-pagination-vertical"
      :direction="'vertical'"
      :modules="swiperModules"
      :navigation="true"
      :loop="true"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
      <SwiperSlide class="slide2">Slide 2</SwiperSlide>
      <SwiperSlide class="slide3">Slide 3</SwiperSlide>
      <SwiperSlide class="slide4">Slide 4</SwiperSlide>
      <SwiperSlide class="slide5">Slide 5</SwiperSlide>
      <SwiperSlide class="slide6">Slide 6</SwiperSlide>
      <SwiperSlide class="slide7">Slide 7</SwiperSlide>
    </Swiper>
  </section>

  <hr class="hr-sub" />

  <!-- 分頁 - 一頁多個 view、加入間距 -->
  <section>
    <h3 class="mb-16">一頁多個 view、加入間距</h3>

    <Swiper
      :slidesPerView="3"
      :spaceBetween="20"
      :modules="swiperModules"
      :navigation="true"
      :loop="true"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
      <SwiperSlide class="slide2">Slide 2</SwiperSlide>
      <SwiperSlide class="slide3">Slide 3</SwiperSlide>
      <SwiperSlide class="slide4">Slide 4</SwiperSlide>
      <SwiperSlide class="slide5">Slide 5</SwiperSlide>
      <SwiperSlide class="slide6">Slide 6</SwiperSlide>
      <SwiperSlide class="slide7">Slide 7</SwiperSlide>
    </Swiper>
  </section>

  <hr class="hr-sub" />

  <!-- 分頁 - 可鍵盤控制 -->
  <section>
    <h3 class="mb-16">可鍵盤控制</h3>

    <p>
      目前測試的效果是：只要在畫面上按向左、向右、PgUp、PgDn 都會控制視圖跳轉。<br />
      看起來事件的監聽是綁定在 document。
    </p>

    <Swiper
      :modules="swiperModules"
      :navigation="true"
      :loop="true"
      :pagination="{ clickable: true }"
      :keyboard="{
        enabled: true,
      }"
    >
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
      <SwiperSlide class="slide2">Slide 2</SwiperSlide>
      <SwiperSlide class="slide3">Slide 3</SwiperSlide>
      <SwiperSlide class="slide4">Slide 4</SwiperSlide>
      <SwiperSlide class="slide5">Slide 5</SwiperSlide>
      <SwiperSlide class="slide6">Slide 6</SwiperSlide>
      <SwiperSlide class="slide7">Slide 7</SwiperSlide>
    </Swiper>
  </section>

  <hr class="hr-sub" />

  <!-- 分頁 - 自動播放 -->
  <section>
    <h3 class="mb-16">自動播放</h3>

    <p>即使 <code>navigation</code> 沒有設定循環，自動播放仍可以自動循環。</p>
    <p>這邊設計為當對輪播進行操作時，會中斷自動播放（<code>disableOnInteraction: true</code>）。</p>

    <Swiper
      :modules="swiperModules"
      :navigation="true"
      :pagination="{ clickable: true }"
      :autoplay="autoplay"
      @autoplayTimeLeft="onAutoplayTimeLeft"
    >
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
      <SwiperSlide class="slide2">Slide 2</SwiperSlide>
      <SwiperSlide class="slide3">Slide 3</SwiperSlide>
      <SwiperSlide class="slide4">Slide 4</SwiperSlide>
      <SwiperSlide class="slide5">Slide 5</SwiperSlide>
      <SwiperSlide class="slide6">Slide 6</SwiperSlide>
      <SwiperSlide class="slide7">Slide 7</SwiperSlide>

      <!-- 自動播放倒計時 -->
      <div class="autoplay-progress">
        <svg viewBox="0 0 48 48" ref="progressCircle">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref="progressContent"></span>
      </div>
    </Swiper>
  </section>

  <hr class="hr-sub" />

  <!-- 分頁 - 操控 Swiper 實例 -->
  <section>
    <h3 class="mb-16">操控 Swiper 實例</h3>

    <Swiper
      :modules="swiperModules"
      :navigation="true"
      :loop="true"
      :pagination="{ clickable: true }"
      ref="refSwiper1"
      @swiper="setRefSwiper2"
    >
      <SwiperSlide class="slide1">Slide 1</SwiperSlide>
      <SwiperSlide class="slide2">Slide 2</SwiperSlide>
      <SwiperSlide class="slide3">Slide 3</SwiperSlide>
      <SwiperSlide class="slide4">Slide 4</SwiperSlide>
      <SwiperSlide class="slide5">Slide 5</SwiperSlide>
      <SwiperSlide class="slide6">Slide 6</SwiperSlide>
      <SwiperSlide class="slide7">Slide 7</SwiperSlide>
    </Swiper>

    <!-- 測試 1 -->
    <div class="mb-32 p-3 border border-secondary">
      <h4>測試 1（<code>refSwiper1</code>）</h4>

      <p>
        直接使用 vue 的模板引用方式（<code>template-refs</code>）綁定 Swiper 元件。<br />
        此做法得到的 Swiper 實例不太一樣，會無法操作，console 會出現錯誤。
      </p>

      <button type="button" class="btn btn-secondary" @click="toPrev1">測試 1 - 往前</button>
      &nbsp;
      <button type="button" class="btn btn-secondary" @click="toNext1">測試 1 - 往後</button>
    </div>

    <!-- 測試 2 -->
    <div class="p-3 border border-primary">
      <h4>測試 2（<code>refSwiper2</code>）</h4>
      <p>
        使用 <a href="https://swiperjs.com/vue#controller" target="_blank">官網</a> 的做法，在
        <code>@swiper</code> 事件綁定 Swiper 實例，此做法可以操作。
      </p>

      <button type="button" class="btn btn-primary" @click="toPrev2">測試 2 - 往前</button>
      &nbsp;
      <button type="button" class="btn btn-primary" @click="toNext2">測試 2 - 往後</button>
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import required modules
import { Navigation, Pagination, Scrollbar, EffectCube, Keyboard, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';

// Swiper modules
const swiperModules = [Navigation, Pagination, Scrollbar, EffectCube, Keyboard, Autoplay];

/**
 * Swiper 事件
 */
// 一開始就會觸發
const onSwiper = (swiper) => {
  console.log(`onSwiper ==>`, swiper);
};
// 切換 slide 時觸發
const onSlideChange = () => {
  console.log('slide change');
};
// 切換到最後一個 slide 時觸發，會在 onSlideChange 之前觸發
const onReachEnd = () => {
  console.log('reach end');
};

/**
 * Progress bar 操作：
 * 若一開始即為 true，不知為何 class 會被加入兩次，以至於之後的操作會無法移除多餘的 class，因此初始值必須為 false。
 * 若希望預設為 true，可以改寫成在 mounted 階段時改變其值。
 */
const progressBarStyle = reactive({
  isDown: false,
  isBigger: false,
  isChangeColor: false,
});
onMounted(() => {
  console.log(`onMounted...`);
  progressBarStyle.isDown = true;
  progressBarStyle.isBigger = true;
  progressBarStyle.isChangeColor = true;
});

/**
 * 分頁 - 自訂
 */
const paginationCustom = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="swiper-pagination-custom ' + className + '">' + (index + 1) + '</span>';
  },
};

/**
 * 自動播放
 */
const autoplay = {
  delay: 2500,
  // 當對輪播進行操作時，會中斷自動播放
  disableOnInteraction: true,
};
const progressCircle = ref(null); // SVG 圓
const progressContent = ref(null); // 倒數文字
const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.value.style.setProperty('--progress', 1 - progress);
  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
};

/**
 * 測試 Swiper 實例 - 測試 1
 * 直接使用 vue 的模板引用方式（template-refs）綁定 Swiper 元件。
 * 此做法得到的 Swiper 實例不太一樣，無法操作，console 會出現錯誤。
 */
const refSwiper1 = ref(null);
onMounted(() => {
  console.log(`refSwiper1 ==>`, refSwiper1.value);
});
function toPrev1() {
  // Error: refSwiper1.value.slidePrev is not a function
  refSwiper1.value.slidePrev();
}
function toNext1() {
  // Error: refSwiper1.value.slideNext is not a function
  refSwiper1.value.slideNext();
}

/**
 * 測試 Swiper 實例 - 測試 2
 * 使用官網的做法，在 @swiper 事件綁定 Swiper 實例，此做法可以操作。
 */
const refSwiper2 = ref(null);
const setRefSwiper2 = (swiper) => {
  refSwiper2.value = swiper;
  console.log(`refSwiper2 ==>`, refSwiper2.value);
};
function toPrev2() {
  refSwiper2.value.slidePrev();
}
function toNext2() {
  refSwiper2.value.slideNext();
}
</script>

<!-- <style lang="scss" scoped src="@/assets/scss/mySwiper.scss"></style> -->
<style lang="scss" scoped>
@use '@/assets/scss/mySwiper';

h1,
h2,
h3,
h4 {
  font-weight: bold;
}

p,
code,
label,
button {
  font-size: 20px;
}

.hr-main {
  border: 2px dashed #0000ff;
  margin-top: 44px;
  margin-bottom: 44px;
}

.hr-sub {
  border: 2px dotted gray;
  margin-top: 32px;
  margin-bottom: 32px;
}
</style>
