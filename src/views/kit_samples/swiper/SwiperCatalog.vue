<template>
  <nav class="mb-16">
    <RouterLink :to="{ name: 'swiperComposition' }">Swiper（Composition）</RouterLink>｜
    <RouterLink :to="{ name: 'swiperOptions' }">Swiper（Options）</RouterLink>｜
  </nav>

  <hr class="hr-catalog" />

  <RouterView />
</template>
