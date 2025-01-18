<template>
  <nav class="mb-16">
    <RouterLink :to="{ name: 'bootstrap' }">Bootstrap</RouterLink>｜
    <RouterLink :to="{ name: 'sweetalert2' }">SweetAlert2</RouterLink>｜
    <RouterLink :to="{ name: 'loadingOverlay' }">vue-loading-overlay</RouterLink>｜
    <RouterLink :to="{ name: 'veeValidate' }">VeeValidate</RouterLink>｜
    <RouterLink :to="{ name: 'swiper' }">Swiper</RouterLink>｜
  </nav>

  <hr class="hr-catalog" />

  <RouterView />
</template>

<style lang="scss">
body {
  padding: 0 15px 40px;
}
</style>
