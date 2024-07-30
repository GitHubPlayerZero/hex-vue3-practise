<script setup></script>

<template>
    <h1>練習範例</h1>
    <!-- https://github.com/GitHubPlayerZero/hex-vue3-practise/tree/main/src/views/samples -->
    <!-- https://githubplayerzero.github.io/hex-vue3-practise/#/samples -->

    <nav class="mb-24">
        <RouterLink to="/samples/addnum">開場示範 - 累加</RouterLink> |
        <RouterLink to="/samples/vmodel">v-model</RouterLink> |
        <RouterLink to="/samples/vbind">v-bind</RouterLink> |
    </nav>

    <hr style="border: 3px solid pink; box-shadow: 2px 2px 3px orchid" />

    <RouterView />
</template>


<style lang="scss">

body {
	padding: 0 15px 40px;
}

</style>
