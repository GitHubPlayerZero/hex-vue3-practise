<script setup>
import { ref } from 'vue';
const num = ref(0);

function add() {
    num.value += 3;
}
</script>

<template>
    <h2>開場示範 - 累加</h2>
    <div>
        {{ num }}
        <input type="button" @click="add" value="+3" />
    </div>
</template>
