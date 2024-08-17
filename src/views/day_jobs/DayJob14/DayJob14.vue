<template>
	<h1 class="h1">🏅 Day14 - Vue.js 的元件篇：emits</h1>
	<p>
		<a href="https://hackmd.io/iYXUUS2jTmKyhKmBRIDq0w" target="_blank">題目</a>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob14/DayJob14.vue"
			target="_blank"
			>Code</a
		>｜
		<a
			href="https://play.vuejs.org/#eNqlVm+LG0UY/yqPOTU5uE3SeDlle3f0rCec0Hp4JyqN0M3uJJnL7s46M5s/DQFRpFiU+qZvREQE5UTQagUr9uOYu/aVX8FnZnY3m70Qq6Vw3Xn+z/M88/tlUtqLouogJiW7tC1JEPmOJLutEGDbowOg3k6r5ERRqwSu7wiBJ5eF0qEh4a2StkssUzVnw0yBqjQkDKwO46ivdHhM5QbQ0COjdfwPtOA1RzqYxO6TMRppZS5MIYfL/AUlqq863MsLAGwadN/mPprrBFVzbJUKVpJKn2RG+nTBJuLUndvo0wUbl8WhzGz0qWhzxfE8y3W4MsPPa2MsumBUy1+5hneed7K2MJ28Ov1aMMGjcDmNJAgi4wglNIgYlzABTjowxbazAMo4+fLlTKe6mCiqNXVQm6H0rRDHLiRkZcMOmEkeq46tw84uTFQtxiwgQjhdgkY3zz46nf3+6+z+bXh+MneYwuzON7NPvnv84NH5pz88/vPOTUwC4PiEy0rivY6i6Tx1tiYYFW9QuaEcdE4APTYbyripPilvGKGekw2NZnLWM7GhWU/OZiHQqydlJOxajaodiTkOL6gNN8V77/hH1ZOIdMvKfqq9CvkYd8JuMeGlQsLGUyU8PApuBe/Sf0koJHeGbcL5uJB0s5D00lMlff3gWtDb6lWjsGviLU3ap0NaSNf8X3c8PtjbGmwGuTu2wvfVmLdrZleTvZVjX60w+iRQYyoaUk/21NXqL+htCZyRlcoa9Xo0SqS8S0Mb6uDEkmlRhGtLwy6abWkjvVVVRCoT16MCX83Yho5PTAz1YQ25E9mg/i7EtV7JxUAkMjGUh8pZx/0y1WVJjT1Am40sQW9pWZtxj3ALRSYUNiC5dGmjJAVevEO71RPBQsRlnUChXhBRfCBvRpLii2iV7HRQCCe+z4ZvaJnkMUmGgT494vaXyE8EwquNH4ecCMIHiGeZTuJFCeKSUu8fXScj/M6UAfNihZArlG8RwfxY1WjMXo1DD8vO2elqDzTkYDeOxf5IklCkl1KFznexVUIIurri6vNyX6puJks1xS6m8LWc2DIqUbyRERmuKtiCu4qCErpYsLRQakmm6NB2fIXjCWEsY0Lt0GbeOM+HveaiPvU/u//b2ddfzb74/Pz0l78ffTmZmNcH0+l2rdec+0cFdz2A3dnHfzz57Fvjp1+o9lOgv9Lt7N7DJ7fvGjf9kItuDvQQatFrLdeItsTBwhXXp24fyZAMiCY+Tj6IiZB7nupnAd23a87ui2FbRJfN3yzBc5YFs7vf//Xww/PTn4AEVMLs5x/PHtwDy1JgINW//1SGiiEq5ZRqyxumkesXi4KGKutZydQjHUSoQ84isZEc9lUJRYZNaSxSlkhhOb+K3uUUOY8kx0ehdz8B4Jwkgd/rcYAkoCUJAGeSqcLTNJluRpZM11W5Me+Nxt5W2IlDV70rpNV0hJV19cBa2IJiN3X95ndSQtBLwBsQwSLiaQxXPyn0BQ3mIQhHI0CEoB6seZ6XQKOGQ+54NBZIZglisgHhHYQKG3rU80g4h93cW1zghkbTgG8G6W2fuf0F/FYckFJDLpp6qCbUcraYv9YE8JGbFJwrwq82mpwEuSwYTUoWpNifj4AvzwRYYYmrXWAmGvo4QGt+mzy7pIViHx233+W4ETgu5jNs9lq9/nK709HaVNRJzqoWy/FpF7vi4ushfNUwtLVHXPzNo5bFhpCF5AJ7Tf8BsqMrlg=="
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
						:imgUrl="fruit.imgUrl"
						:title="fruit.title"
						:price="fruit.price"
						:count="fruit.count"
						@add-cart="addMyCart"
					/>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Card from './DayJob14Card.vue';

const addMyCart = (fruitTitle) => {
	const message = `您已將 ${fruitTitle} 加入購物車`;
	alert(message);
};

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
