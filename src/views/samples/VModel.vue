<script setup>
import { ref } from 'vue';

// text
const text = ref('這是一段文字');

// select
const city = ref('Taichung');
const cityList = ref(['Taoyuan', ['Tainan']]);

// checkbox
const isChecked = ref(true);
const chk1 = ref('hi');
const chk2 = ref('吃飽了');
const chk3 = ref(true);
const chk4 = ref(true);
const chkList1 = ref([]);
const chkList2 = ref([]);

// radio
const radio1 = ref('Taichung');
const radio2 = ref('台中市');
</script>

<template>
    <h2>v-model 雙向綁定</h2>
	<p class="mb-28"><a href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/VModel.vue" target="_blank">Code</a></p>
    
    <p>常用在表單元素上。</p>

    <!-- 輸入框 -->
    <h3>輸入框</h3>
    <div class="box mb-36">
        <input type="text" v-model="text" />
        <p class="box-result">結果：{{ text }}</p>
    </div>

    <!-- 下拉選單 -->
    <h3>下拉選單</h3>
    <div class="box mb-36">
        <p class="desc">
            綁定的是 value（option value），若沒有 value 則會綁定到 text（option 顯示內容）。
        </p>

        <fieldset class="mb-24">
            <legend class="mb-4">單選</legend>

            <label class="d-block mb-8">
                有對應的 value：
                <select v-model="city">
                    <option value="Taipei">台北市</option>
                    <option value="Taichung">台中市</option>
                    <option value="Kaohsiung">高雄市</option>
                </select>
            </label>

            <label class="d-block">
                沒對應的 value：
                <select v-model="city">
                    <option value="Taipei">台北市</option>
                    <option value="Tainan">台南市</option>
                    <option value="Kaohsiung">高雄市</option>
                </select>
            </label>

            <label class="d-block">
                沒有設定 value ：
                <select v-model="city">
                    <option>Taipei</option>
                    <option>Taichung</option>
                    <option>Tainan</option>
                    <option>Kaohsiung</option>
                </select>
            </label>

            <p class="box-result mb-8">結果：{{ city }}</p>
        </fieldset>

        <fieldset>
            <legend>複選 (使用陣列綁定)</legend>

            <p class="desc">
                注意：不管選取的順序為何，<span class="text-bold"
                    >陣列內容都會按下拉選單的 option 順序排列</span
                >
            </p>

            <label class="d-block mb-12">
                <span class="d-block mb-4">有對應的 value：</span>
                <select multiple style="width: 200px; height: 130px" v-model="cityList">
                    <option value="Taipei">台北市</option>
                    <option value="Taoyuan">桃園市</option>
                    <option value="Taichung">台中市</option>
                    <option value="Tainan">台南市</option>
                    <option value="Kaohsiung">高雄市</option>
                </select>
            </label>

            <label class="d-block mb-12">
                <span class="d-block mb-4">沒對應的 value：</span>
                <select multiple style="width: 200px; height: 130px" v-model="cityList">
                    <option value="Taipei">台北市</option>
                    <option value="Taoyuan">桃園市</option>
                    <option value="Hsinchu">新竹市</option>
                    <option value="Taichung">台中市</option>
                    <option value="Kaohsiung">高雄市</option>
                </select>
            </label>

            <label class="d-block mb-12">
                <span class="d-block mb-4">沒有 value：</span>
                <select multiple style="width: 200px; height: 130px" v-model="cityList">
                    <option>Taipei</option>
                    <option>Taoyuan</option>
                    <option>Hsinchu</option>
                    <option>Taichung</option>
                    <option>Tainan</option>
                    <option>Kaohsiung</option>
                </select>
            </label>

            <p class="box-result mb-8">結果：{{ cityList }}</p>
        </fieldset>
    </div>

    <!-- checkbox -->
    <h3>Checkbox</h3>
    <div class="box mb-36">
        <fieldset class="mb-24">
            <legend>單選</legend>

            <p class="desc">預設綁定的是 true / false，而不是 checkbox 的 value。</p>

            <label class="d-block">
                isChecked：
                <input type="checkbox" v-model="isChecked" value="hi" />
            </label>

            <p class="box-result mb-24">結果：{{ isChecked }}</p>

            <label class="d-block">
                chk1：
                <input type="checkbox" v-model="chk1" value="hi" />
            </label>

            <p class="box-result mb-32">結果：{{ chk1 }}</p>
        </fieldset>

        <fieldset class="mb-24">
            <legend>true-value、false-value</legend>

            <p class="desc">若想要綁定「特定值」，需要使用 true-value、false-value。</p>

            <div class="mb-28">
                <label>
                    chk2：吃飽了嗎？
                    <input type="checkbox" v-model="chk2" true-value="吃飽了" false-value="還沒" />
                </label>
                &nbsp;
                {{ chk2 }}
            </div>

            <p class="desc">但是一旦設定了 true-value、false-value，true / false 就不會起作用。</p>

            <label class="d-block">
                chk3：吃飽了嗎？
                <input type="checkbox" v-model="chk3" true-value="吃飽了" false-value="還沒" />
                &nbsp;
                {{ chk3 }}
            </label>
        </fieldset>

        <fieldset>
            <legend>複選</legend>

            <p class="desc">
                必須使用陣列來存放資料，若使用單一值則只能存放 true / false，且無法分別勾選。
            </p>

            <div class="mb-12">
                <label><input type="checkbox" v-model="chk4" value="Taipei" />台北市</label>&nbsp;
                <label><input type="checkbox" v-model="chk4" value="Taoyuan" />桃園市</label>&nbsp;
                <label><input type="checkbox" v-model="chk4" value="Taichung" />台中市</label>&nbsp;
                <label><input type="checkbox" v-model="chk4" value="Tainan" />台南市</label>&nbsp;
                <label><input type="checkbox" v-model="chk4" value="Kaohsiung" />高雄市</label
                >&nbsp;
            </div>

            <p class="box-result mb-28">結果：{{ chk4 }}</p>

            <p class="desc">
                checkbox 必須設定 value，若沒有的話則只會存入 "on"，且操作會變得很怪。
            </p>

            <div class="mb-12">
                <label><input type="checkbox" v-model="chkList1" />台北市</label>&nbsp;
                <label><input type="checkbox" v-model="chkList1" />桃園市</label>&nbsp;
                <label><input type="checkbox" v-model="chkList1" />台中市</label>&nbsp;
                <label><input type="checkbox" v-model="chkList1" />台南市</label>&nbsp;
                <label><input type="checkbox" v-model="chkList1" />高雄市</label>&nbsp;
            </div>

            <p class="box-result mb-28">結果：{{ chkList1 }}</p>

            <p class="desc">
                正確範例。注意！<span class="text-bold">陣列的內容會按選取的順序排列</span>。
            </p>

            <div class="mb-12">
                <label><input type="checkbox" v-model="chkList2" value="Taipei" />台北市</label
                >&nbsp;
                <label><input type="checkbox" v-model="chkList2" value="Taoyuan" />桃園市</label
                >&nbsp;
                <label><input type="checkbox" v-model="chkList2" value="Taichung" />台中市</label
                >&nbsp;
                <label><input type="checkbox" v-model="chkList2" value="Tainan" />台南市</label
                >&nbsp;
                <label><input type="checkbox" v-model="chkList2" value="Kaohsiung" />高雄市</label
                >&nbsp;
            </div>

            <p class="box-result">結果：{{ chkList2 }}</p>
        </fieldset>
    </div>
    
    <!-- radio -->
    <h3>Radio</h3>

    <div class="box">
        <p class="desc">綁定的是 value。</p>
        <div class="mb-12">
            <label><input type="radio" v-model="radio1" value="Taipei" />台北市</label>&nbsp;
            <label><input type="radio" v-model="radio1" value="Taoyuan" />桃園市</label>&nbsp;
            <label><input type="radio" v-model="radio1" value="Taichung" />台中市</label>&nbsp;
            <label><input type="radio" v-model="radio1" value="Tainan" />台南市</label>&nbsp;
            <label><input type="radio" v-model="radio1" value="Kaohsiung" />高雄市</label>&nbsp;
        </div>
        <p class="box-result mb-24">結果：{{ radio1 }}</p>

        <p class="desc">若沒有設定 value，會存入 "on"，並且操作會變得怪異。</p>

        <div class="mb-12">
            <label><input type="radio" v-model="radio2" />台北市</label>&nbsp;
            <label><input type="radio" v-model="radio2" />桃園市</label>&nbsp;
            <label><input type="radio" v-model="radio2" />台中市</label>&nbsp;
            <label><input type="radio" v-model="radio2" />台南市</label>&nbsp;
            <label><input type="radio" v-model="radio2" />高雄市</label>&nbsp;
        </div>
        <p class="box-result">結果：{{ radio2 }}</p>
    </div>
</template>
