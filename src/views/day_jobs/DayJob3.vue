<template>
    <h2>🏅Day3 - Vue.js 的基礎魔法：v-model 表單運用</h2>
    <p>
        <a href="https://hackmd.io/FKzZqZ3IT4SR_KAds4ivpw" target="_blank">題目</a>｜
        <a
            href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob3.vue"
            target="_blank"
            >Code</a
        >｜
        <a href="https://codepen.io/codepenplayer/pen/GRbrbYd" target="_blank">CodePen</a>
    </p>

    <hr />

    <div id="app">
        <div class="container">
            <!-- Q1 -->
            <div class="Q1">
                <h2 class="mb-24">Q1</h2>

                <form class="box mb-20">
                    <div v-for="fruit in fruitData" :key="fruit.title" class="form-check">
                        <input
                            type="checkbox"
                            :id="fruit.title"
                            :value="fruit.title"
                            class="form-check-input"
                            v-model="checkedFruits"
                        />
                        <label :for="fruit.title" class="form-check-label">{{ fruit.title }}</label>
                    </div>
                </form>

                <div>
                    透過 checkbox 選擇的水果：
                    <span class="fw-bold">
                        {{ checkedFruits.join(', ') }}
                    </span>
                </div>
            </div>

            <hr class="hr mt-32 mb-32" />

            <!-- Q2 -->
            <div class="Q2">
                <h2 class="mb-24">Q2</h2>

                <select class="form-select mb-20" v-model="selected">
                    <option value="" disabled>--- 請選擇 ---</option>
                    <option v-for="fruit in fruitData" :key="fruit.title" :value="fruit.title">
                        {{ fruit.title }}
                    </option>
                </select>

                <div>
                    透過 select 選擇的水果：<span class="fw-bold">{{ selected }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checkedFruits = ref([]);
const selected = ref('');

const fruitData = ref([
    {
        title: 'apple',
        price: 25,
        count: 50,
        imgUrl: 'https://i.imgur.com/w4sYWlS.jpeg',
    },
    {
        title: 'orange',
        price: 15,
        count: 20,
        imgUrl: 'https://i.imgur.com/PSmzmXi.jpeg',
    },
    {
        title: 'strawberry',
        price: 45,
        count: 10,
        imgUrl: 'https://i.imgur.com/FIMmh6h.png',
    },
    {
        title: 'kiwi',
        price: 55,
        count: 20,
        imgUrl: 'https://i.imgur.com/TIA6v4m.jpeg',
    },
]);
</script>

<style lang="scss" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css');

body {
    padding: 20px 15px 40px;
}
.container {
    max-width: 600px;
    margin-top: 50px;
}
.form-check {
    display: flex;
    align-items: center;
}
.form-check-label {
    margin-left: 0.5rem;
}
</style>
