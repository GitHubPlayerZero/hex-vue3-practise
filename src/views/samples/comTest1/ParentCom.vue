<script setup>
import ChildCom1 from './ChildCom1.vue';
import ChildCom2 from './ChildCom2.vue';

import { text1, getText2, setText2, actions1, actions2, useActions3 } from './common.js';
console.log("text1 ==>", text1);
console.log("getText2 ==>", getText2);
console.log("setText2 ==>", setText2);
console.log("actions1 ==>", actions1);
console.log("actions2 ==>", actions2);

const { text3, setText3 } = actions1;

const actions3 = useActions3();
console.log(`actions3 ==>`, actions3);

</script>

<template>
	<h1 class="h1">元件共用模組</h1>
	<p>
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/samples/comTest1/ParentCom.vue"
			target="_blank"
			>Code</a
		>
	</p>
	
	<hr class="hr mt-0">
	
	<div class="box mb-32">
		<h2 class="h2">我是父元件</h2>
		<p>
			<button type="button" class="btn btn-primary" @click="text1 = '被父元件改變'">
				改變 text1
			</button>&nbsp;&nbsp;
			text1：{{ text1 }}
		</p>
		
		<p>
			<button type="button" class="btn btn-primary" @click="setText2('被父元件改變')">
				改變 text2
			</button>&nbsp;&nbsp;
			text2：{{ getText2() }}
		</p>
		
		<p>
			<button type="button" class="btn btn-primary" @click="actions1.setText3('被父元件透過 setText3() 改變')">
				透過 setText3() 改變 text3
			</button>&nbsp;&nbsp;
			<button type="button" class="btn btn-primary" @click="actions1.text3.value = '被父元件直接改變'">
				直接改變 text3
			</button>&nbsp;&nbsp;
			text3：{{ actions1.text3 }}
		</p>
		
		<p>
			<button type="button" class="btn btn-primary" @click="setText3('被父元件透過解構的 setText3() 改變')">
				透過解構的 setText3() 改變 text3
			</button>&nbsp;&nbsp;
			<button type="button" class="btn btn-primary" @click="text3 = '被父元件直接改變解構的 text3'">
				直接改變解構的 text3
			</button>&nbsp;&nbsp;
			解構的 text3：{{ text3 }}
		</p>
		
		<p>
			<button type="button" class="btn btn-primary" @click="actions2.setText4('被父元件改變')">
				改變 text4
			</button>&nbsp;&nbsp;
			text4：{{ actions2.getText4() }}
		</p>
		
		<h3 class="h3 mt-5">不會共用的情形</h3>
		<p>
			<button type="button" class="btn btn-secondary" @click="actions3.setText5('被父元件透過 setText5() 改變')">
				透過 setText5() 改變 text5
			</button>&nbsp;&nbsp;
			<button type="button" class="btn btn-secondary" @click="actions3.text5.value = '被父元件改變'">
				直接改變 text5
			</button>&nbsp;&nbsp;
			text5：{{ actions3.text5 }}
		</p>
	</div>

	<child-com-1 />
	<child-com-2 />
</template>

<style lang="scss" scoped></style>
