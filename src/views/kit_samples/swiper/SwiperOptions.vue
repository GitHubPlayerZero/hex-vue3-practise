<template>
  <h1 class="mb-32">Swiper（Options）</h1>
  
  <div class="mb-24">
    <a href="https://swiperjs.com/" target="_blank">官網</a>｜
    <a
      href=""
      target="_blank"
    >
      code
    </a>
  </div>

  <p>
    在 Options API 中，用法與 Composition API 一樣，差別只在於 Vue
    的語法（components、data、methods、template-refs 等等寫法）。
  </p>
  <p>
    這邊的範例是直接將 Composition API 的範例移植過來，再調整為 Options API
    的寫法，因此一些相同的說明這邊就不再重複撰寫。<br />
    欲看完整說明可以參考
    <RouterLink :to="{ name: 'swiperComposition' }">Composition API 範例</RouterLink>。
  </p>

  <hr class="hr-main" />

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

<script>
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

export default {
  data() {
    return {
      swiperModules: [Navigation, Pagination, Scrollbar, EffectCube, Keyboard, Autoplay],

      /* 操作 Progress bar */
      progressBarStyle: {
        isDown: false,
        isBigger: false,
        isChangeColor: false,
      },

      /* 分頁 - 自訂 */
      paginationCustom: {
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="swiper-pagination-custom ' + className + '">' + (index + 1) + '</span>'
          );
        },
      },

      /* 自動播放 */
      autoplay: {
        delay: 2500,
        // 當對輪播進行操作時，會中斷自動播放
        disableOnInteraction: true,
      },

      /* 測試 Swiper 實例 - 測試 2 */
      refSwiper2: null,
    };
  },
  // data end

  mounted() {
    console.log(`mounted...`);
    console.log(`refSwiper1 ==>`, this.$refs.refSwiper1);

    // 操作 Progress bar
    this.progressBarStyle.isDown = true;
    this.progressBarStyle.isBigger = true;
    this.progressBarStyle.isChangeColor = true;
  },

  methods: {
    /* 官網範例 */
    // 一開始就會觸發
    onSwiper(swiper) {
      console.log(`onSwiper ==>`, swiper);
    },
    // 切換 slide 時觸發
    onSlideChange() {
      console.log('slide change');
    },
    // 切換到最後一個 slide 時觸發，會在 onSlideChange 之前觸發
    onReachEnd() {
      console.log('reach end');
    },

    /* 自動播放 */
    onAutoplayTimeLeft(s, time, progress) {
      this.$refs.progressCircle.style.setProperty('--progress', 1 - progress);
      this.$refs.progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },

    /**
     * 測試 Swiper 實例 - 測試 1
     * 直接使用 vue 的模板引用方式（template-refs）綁定 Swiper 元件。
     * 此做法得到的 Swiper 實例不太一樣，無法操作，console 會出現錯誤。
     */
    toPrev1() {
      // Error: refSwiper1.value.slidePrev is not a function
      this.$refs.refSwiper1.slidePrev();
    },
    toNext1() {
      // Error: refSwiper1.value.slideNext is not a function
      this.$refs.refSwiper1.slideNext();
    },

    /**
     * 測試 Swiper 實例 - 測試 2
     * 使用官網的做法，在 @swiper 事件綁定 Swiper 實例，此做法可以操作。
     */
    setRefSwiper2(swiper) {
      this.refSwiper2 = swiper;
      console.log(`refSwiper2 ==>`, this.refSwiper2);
    },
    toPrev2() {
      this.refSwiper2.slidePrev();
    },
    toNext2() {
      this.refSwiper2.slideNext();
    },
  },
  // methods end

  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/swiper/swiper-sample';
@use '@/assets/scss/swiper/mySwiper';
</style>
