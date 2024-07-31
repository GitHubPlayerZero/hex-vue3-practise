<template>
    <h2>v-on</h2>
    <p class="mb-28"><a href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/VOn.vue" target="_blank">Code</a></p>

    <hr class="hr" />
    
    <h3>修飾符 .prevent</h3>
    <h4>阻止 submit</h4>
    
    <fieldset class="fieldset mb-32">
        <legend>正常可以 submit 的 form</legend>
        <form method="get" action="">
            <label class="d-block mb-8">
                姓名：&nbsp;<input type="text" name="name">
            </label>
            <input type="submit" @click="click" value="送出">
        </form>
    </fieldset>
    
    <!-- JS 寫法 -->
    <fieldset class="fieldset mb-32">
        <legend>早期使用 JS 阻止 submit 的做法</legend>
        <form method="get" action="javascript:void(0)">
            <label class="d-block mb-8">
                姓名：&nbsp;<input type="text" name="name">
            </label>
            <input type="submit" @click="click" value="送出">
        </form>
    </fieldset>
    
    <!-- v-on 修飾符 .prevent -->
    <fieldset class="fieldset mb-32">
        <legend>使用 v-on 修飾符：.prevent</legend>
        
        <form class="box mb-20" method="get" action="">
            <p class="desc">加在 button click 事件</p>
            <label class="d-block mb-8">
                姓名：&nbsp;<input type="text" name="name">
            </label>
            <input type="submit" @click.prevent value="送出">
        </form>
        
        <form class="box mb-20" method="get" action="">
            <p class="desc">阻止 click 預設事件之外，還可以指定執行新的動作。</p>
            <label class="d-block mb-8">
                姓名：&nbsp;<input type="text" name="name">
            </label>
            <input type="submit" @click.prevent="click" value="送出">
        </form>
        
        <form class="box mb-20" method="get" action="" @submit.prevent>
            <p class="desc">加在 form submit 事件</p>
            <label class="d-block mb-8">
                姓名：&nbsp;<input type="text" name="name">
            </label>
            <input type="submit" @click="click" value="送出">
        </form>
        
        <form class="box mb-20" method="get" action="" @submit.prevent="doNewSubmit">
            <p class="desc">阻止 submit 預設事件之外，還可以指定執行新的動作。</p>
            <label class="d-block mb-8">
                姓名：&nbsp;<input type="text" name="name">
            </label>
            <input type="submit" @click="click" value="送出">
        </form>
        
    </fieldset>
    
    
    <!-- 阻止連結 -->
    <h4 class="mt-40">阻止連結</h4>
    
    <fieldset class="fieldset mb-32">
        <legend>正常可以執行的連結</legend>
        <a href="">我是連結</a>
    </fieldset>
    
    <fieldset class="fieldset mb-32">
        <legend>早期使用 JS 阻止連結的做法</legend>
        <a href="javascript:void(0)">我是連結</a>
    </fieldset>
    
    <fieldset class="fieldset mb-32">
        <legend>使用 v-on 修飾符：.prevent</legend>
        
        <div class="box mb-20">
            <p class="desc">加在 button click 事件</p>
            <a href="" @click.prevent>我是連結</a>
        </div>
        
        <div class="box mb-20">
            <p class="desc">阻止 click 預設事件之外，還可以指定執行新的動作。</p>
            <a href="" @click.prevent="clickLink">我是連結</a>
        </div>
    </fieldset>
    
</template>

<script setup>
// import { ref } from 'vue';

function click() {
    console.log(`觸發了 click`);
}

function doNewSubmit() {
    console.log(`新的 submit 動作`);
}

function clickLink() {
    console.log(`觸發了連結`);
}

</script>

<style lang="scss" scoped>
</style>
