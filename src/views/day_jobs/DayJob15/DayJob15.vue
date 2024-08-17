<template>
	<h1 class="h1">🏅 Day15 - Vue.js 的黑魔法：總結練習</h1>
	<p>
		<a href="https://hackmd.io/JdDqZOhGThapMEwn2-mWTg" target="_blank">題目</a>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob15/DayJob15.vue"
			target="_blank"
			>Code</a
		>｜
		<a href="https://play.vuejs.org/#eNqlVttuG0UYfpWRC7KDvLYb4lAtSdRSghSklogEAaqRut4Z2xPv7oxmZn2o5RsQqhoVwQ0SQgghEFK5KwcJEBVv47S94hX4Z2bPsUJEb5Kd/3z8fi9qNzhvTWJSc2s7ioQ88BTZ60UI7WA6QRTv9moe570a8gNPSnj5LFIejYjo1YxcIpmyBZtmDGClJtHEGTAB/MZAxFQ1EY0wmW3AP2QIb3rKAyfumMxByDALZio+fBaUmMC+6QmMihSEXEVVQEDcOGiZF7ioCHFB/VzIvM4L+SyOVCZkXueFaDh0YhFkYvB+T0CgZbHrHsaO7wltDj5vzSHyqrF2MfE2ZJ7Xs13qUZGdfpVE4Cl9QblCkqiYA4WGnAmFFkiQAVpC8VmI6tD/+usZz9TSMlpt/dDzofm9CJovVd4xtKvNNO5o/wsbkCmzi+owNAGpNy3RlNVFm93kbSroom4nedtSgdZIKS7ddpvq6sUCSh22p1vyw/eDo9YJJ8O6ll8arYo/JrxoWHV4teJw81IOD4/Ce+EH9D8cSiW8aZ8IMa843ao4vXopp28d3ApH26MWj4bW3lqnYzqlFXfd/5Xj8cGN7clWWMixF320UehxNpvQY7uzxzqGDbS7Z4OyYiGR0hsSELp79vGj1e+/rB7fRy8tcoUlWp1+t/r0x2e/Pnn64Kdnf53eBScIeQERqpFoa7/gf6dtZzWZWzUP9AhDuAngWL9TitVIV7XzsrEUejMnpW12OnyWUMWQRi7qIC9WzJA4pESjIYhtGyHwCNYBr6xdTCVszdxFg4BYG/rDmQqPu0j/Ldl1rhVsAB5ZG1pD++zAaNvoMqdWHqE+mzmS3jO0PhOYCAdIWQGSpGvNmpKQ+IAOWyeSRYDOxoHGvpBTKN47XFHoQK/mpjMCeBIEbPq2oSkRk2QOQGdE/PEa+okEkHXh41AQScQEkC/jKUiUADBp9v7RbTKD74wZMhxrML2A+S6RLIh1jFbsjTjCEHZBzkR7YCAHqnEs92eKRDJNSgear0GvBhB084LU83BfbW0l87yEKqbwtf68ZQcFpPJzBltS4jga2RXTR9CVwtf3KYH2DKnPWYOm4nnxEI66ZX5yjvbOHv929u03qy8+e/ro53+efL1Y2F1Hy+VOe9TN9XlF3dR8b/XJn88ffm/1DB4YPY3zF6qdnX519uCH1d8Pi/qwAAZCLmniyz+e3//caq5V89AIbgNoXSn8eOgrGAd03Q+oP4ZjSybE3FUSUiUb9fQ01pu2CBs6wzJ67LS9F758mAwATg4F47KZPPZ1AE1IJOSxIrh6GFNQ5FoHsK5goWFGMMHnIyVglM3EJuh8Ow7hRhhKgs8FSorQmdqyiMCmKJkzE2HjTl6jElpnvdvNcmg0DFabkO3vGvQK6rSuabU1SIvAACfYAK6+/yYtC1CAmHyGYJ0pRlcwxgmOGewSHqaxhKOXwBubEDGAvXbRiGJMohwjC4tUAvLNrkXKDH/7AfPHJbDVgJ3ieMGaXjFraj2053uWoDMcEo29+odBa7MrSFjwAtaUYmEK1EULMPDWwAWSMNiVM0KjANrm5NkUT0EaKNTR88dDAb2DtrKAQbGvdDqv9QcDw01Jg+StY3G8gA6hKj7sDhEXNcNIY+LDbyONmC6KWETOnZrlv8xpC+c=" target="_blank">Vue SFC Playground</a>
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
						:img-url="fruit.imgUrl"
						@add-cart="addMyCart"
					/>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Card from './DayJob15Card.vue';

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

const addMyCart = (fruitTitle) => {
	const message = `您已將 ${fruitTitle} 加入購物車`;
	alert(message);
};
</script>

<style>
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
