<template>
	<h1 class="h1">🏅 Day13 - Vue.js 的元件篇：props</h1>
	<p>
		<a href="https://hackmd.io/eof7mS55RE6XAdbnY3y-Xg" target="_blank">題目</a>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob13/DayJob13.vue"
			target="_blank"
			>Code</a
		>｜
		<a
			href="https://play.vuejs.org/#eNqlVUuLI0Uc/ypFDzKzMJ3OxskobWZgXVcYwXVwVlSMh05XdVKT7qqiqjqPDTmJiIuiFy8iIoKgN0UPivt1Znb35FfwX1X9Shuzy+4l6f/7/auVd0uIziwnXugNNMlEGmlyOmQIDTCdIYpPhl4kxNBDcRopBVTMmY4oI3LoWb1CsxRLPq8EICpdopmfcAnyg0TmVB8iyjBZ3IA/ZBlvRDqCIOGULEHJChtuWjFinm4IQXw7khiFmuqUgIJ12bGUcSokjWu2pQw75jnTFdtShk2z8XsyrfiOBEHQTCeAfOoqg43ONcXl14YKkCqWVGikiM4FcGgmuNRohSRJ0BpawjO0D1PZf62S2QqdoBMYwkzNyIcMRqJ03Ud0YtwcfGTir1xCthUh2odRpmT/0DFtI0LU6xe07UCI+t2CdpWD1URrocIgoKYZuYRWZcH8SH34fnrRuRRkvG/019aqFY/LiI3bAW+2AvaeKeD5RXY/+4A+JaDSMpqPiJTLVtCjVtCbzxT0zbO3s8nxpCPY2PnbGnRK57QVrv9cNd47u3U8O8oaNQ7ZxzdgxoPALUyxPHqZmj0Cm+IWXUZzivXElNZ9CWwQyqKFX/J63a5YFFw5pixEXRTlmluWiDCmbAxqx1YJwoJ3OGXnF1MFq7sMUZIS58N8+HMZiRCZ3w2//qsNH3CqzoexMDG7sF8uuyqo00doxBe+ovctb8QlJtIHlnMFDSiK9g49raDwhI47l4ozAC4bwMBCJmhK5DtCU7iIoReWgwIMS1M+f8vytMxJMQywmZB4uoV/qQB/Qvg4l0QROQPAqGQaCiUAFUZ85+IuWcB3Jcw4zg3q7BC+SxRPc5OjU3s9ZxjSbujZbM/s3UM37qk7C02YKosyida7OPQAB27vKL1O9+XOUbFUa+hiiSHbkb/CWtCqkR5WFYVKxgajS1xsavrA9TU370UYpQZcCxDe9lRYgxHHy+aDMelvykv761//uP7+u6uvv3z082//PPx2tXLXh9brQTDp1/aiZW4HcHr1yV9PvvjR2dkLtXYGeXeaXX/z55PPvnJm9pDbZhGaANSC1V6jESMNgz29evDD1ac/Pf794aPPf3n894NBEL3w44BJAsd+LrlQ7UeifASEFZ40VQ/sJhRYdaElbJRdnAKp7uYZ4KXlFFjV4JRoVZmt/weNEJykINiCknmobEx3xIAqYoFg5SlGexjj4tbtfcsI01wBOhcQwGdEJrD7IZpQjAmrcaSxXBtg1+s7NKkwapTyeLoBSAbUSqxreDOb51xth796/QoEA7A1+GResE6vL0nWiALetOZZCWZND7BKzsEOTViZFtRSlsIA/bqaJlyWiUIfo3g6ljA37APUcmj2Xrf7yihJrLRkJQVtcvGjlI6hKzFhmshdw7DamMTwiBtUCRHjjPwHjtf/AnhXcQY="
			target="_blank"
			>Vue SFC Playground</a
		>
	</p>

	<hr class="hr mt-0" />

	<div id="app" class="container">
		<div class="row">
			<template v-for="(fruit, index) in fruitData" :key="index">
				<div class="col">
					<Card
						:title="fruit.title"
						:price="fruit.price"
						:count="fruit.count"
						:imgUrl="fruit.imgUrl"
					/>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Card from './DayJob13Card.vue';
console.log(`Card ==>`, Card);

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
.container {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 16px;
}

.row {
	display: flex;
	flex-wrap: wrap;
	margin: -8px;
}

.col {
	flex: 0 0 50%;
	padding: 8px;
	box-sizing: border-box;
}
</style>
