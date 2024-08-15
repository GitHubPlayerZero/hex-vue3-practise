<template>
	<h1 class="h1">🏅 Day12 - Vue.js 的元件篇：Component</h1>
	<p>
		<a href="https://hackmd.io/vAJeYRdmSGufhAGntphrTQ" target="_blank">題目</a>｜
		<a
			href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/day_jobs/DayJob12.vue"
			target="_blank"
			>Code</a
		>｜
		<a
			href="https://play.vuejs.org/#eNqVV3tTG9cV/yo7ysRpZ6IHCDBRhTt2k8btjNtO22mnU/rHSrsrrb3a3e7DEsl4BoRshAEjjE0MJrbBxmA7vMwz4vVhoru7+itfIefeuy8kmSTAMLv3nPu7v3PO75699+vIVVWN3Tb5SCqS1rOaqBqMzhumykisnBsYjBj6YOTKoCwWVEUzmOs8y/EaI2hKgfkkFqevePonv/N9/qgoRsiHvno+6ThdBCDhxeALqsQaPLwxTJoTbzMiB2uyqjoYYbISq+vwllVkgxVlXiNEGPhJuzTiBIWM4LnehAwrh73Bmu++gu6uO6sPra1d69miszTJXCNO6TiYXIg4YHjPYTi8Pi8bbXjfoenDxtGEvfv9j8cLISCwq/4jw1jVGTQ8Yy9U6AxnbBfdf2rNHVvTtcbpU2tx2Jrbam5s/DA8As+o8tbZeQvOlKi999qf3lxaRRvLPwyX/ZHGyRmaObGebKKtMTSyguoHAGKfPkAzOz4COtxH1S1rc7pxOIyGJ9DGPqqvh0GoW+P0njP2Flihu2t2bRTVKmhxC3MmfDDO4sMfjyft/dnmyAO0sGu9OMbW2RFsfbCKqvvYulxvnH1L12ou3aPIzVHMEMDtyr5Vrdn3nmOSY8+br+472zW0OQlkOiTLfrQM6PbaRnPpGfWDBdDkXWviO+fJBOACSvP1vPN4HCfuzTxar8GDMzXuPJjFDzNLTq1ir4/DH2ZWWXLezQEP65sVdHjYfPncfrTWLFdgxB7/HlVX0ItdVKuCJyUApB3gfXTm7O9Y5TWcfajTdtlPnFMdc9a20asF+/E+ZMo5fU8RGieLGOTRpjU5gqbxf7s+CVZrZR3GITvO+oH9cAstj+JwapPWfJkMjrv1hnoQNaD6a/RwEk2/tCqQr7YEYepEPujsnTV10Dg9Q9U3mCVE/n7NWpxCE/OwgLMxC+whhsbhFBqrW9V9tLUNgTXq79D0N1gXZDFfBWFdgNYwzuKT5sJ9tDph75Wt+hwqz6OVE7tcB1hfv4Fm/XVXX9rrj2ji7LkZ9HgaJyWUTWet7Owc+zkNwmuOHFqzYy3ixKna2oZaUSuVOk4PkR/Mx3GSKSA8Z+/ADe/VKlUdJkE2BRYCoU709dzaPULLz6yDI+vpLlTSGX+PTt5AYb2t5NNKx739/MEeoZsZ3NcyfEuXgECbc9vBHn56BEJFL7Zb24VzfIjurrhSI07N0b3GEdYW+nYYE596j6bnaLfwE+PsgArv40xU3lqjL4ByQBVgRVk1DcYYUnlgyBdYUYKuCv02y+cVCfonjLavGA4gYxqGIgd91ZDBSkNKx6mxQ2LcEfczgHt0YE/HQy0fXnVjSMKPMb/JM19j/6LIGfkU05VIfAwfDYYpsKWoN9adSKgld1TLiXKKSTCsaShkSGU5TpRz4NZHnO7gZWKaUqS4nKjD6kMpRpB4ioEfokWNVVMM/n8ON9ofwsgqEsXAM/CaCabXZecvSv0ZJqOUorr4FRnLKBrkOgpDARSrcRSLGoGtWmJ0RRI55iOO41wMMk9jOdHUU0yPC63c5jVBUoopJi9yHC+fA42KhVzUUNRzSezupSz92DOSkr11LlCcLC+HIbSMwg1RqM5pJU6GaEi8mxkoIo6bB79Yd6/GF0KrABoIpuAlKYzAlwwKcIEniK+lhKIsgWCiQTThMnhEIY9s9lZOU0yZi0IJFUj2R4nE5YwgEKs3JLjvmEuUlcQcZCULX31eu6gYxJvjs4rGGqICU2RF5gPK5IjhFjpgIRbYHGTI1KTf5A1D1VPxOBnSY6aMQ9PzoLVCXM0rhhLt6utKJHv6L3f39ia7ov09SU4QevuSfHf29/8f6E9cKg50911OXMK1GxAUrcAalwTRGMhqinpJLEliZkDLRHtiiVgSXuFwdSNZLN24eTUpfH6t/8b1UpH98rNEZqir+J9/c5JwvdQvfPkvE9vI89WPk5/D329JrHlezOUNkJO//UIxqYou0gyEkxbYqSiyWLydJNHtQbrlKOZFA+cxLLzekBj8dkuT+4GieerG6EziPJy/Ygd5CJ/h31Ddf/n+bKVHWvB/z7fg/7VuKY9KePu07B2N5t53/fV9w28GFKKVqNvq25kFmepE7xdtrqCaHm13m3yQbNbUdDxTVUS3mp35pvJYUW07LKDS25dJ0tlw8XC/NZFP4VID3xtBzMVu6ooMNx8CgE/6BVWUeO2vKtYyXHxSFBrbWAma7p/JmKGZ/KfeeDbPZ291GL+pl/DYYORvGq/z2m04Gfg2A4rKw4UCm7/4x19AvSFjQeFMCbwvMP6dh5qbmCN1uwZBA+2QH2H7J3Ifg0r+U/+iBFcY3QsKE8Wed4j/YATuZn+4IPSAbjLWQ+ZBRiGLwe2v9fJ45aJrXp5M8w4O+a7Wqxmcjbo8qykFpxFJvEJvBXDssebm03EYCBudkU17b4metdqM7uWLHJhCxnTcXQEW9Wh1PKMwoBiV52CE+n1Ic9CFsnxGMqm8248bpEtFYT8UQO6hXnXT1A1RGAIYctlMMboK57RohjeKPPnIt/VMtyGGtisMeB2CbBeXqemeW1rJhH0kkfpIog57HAcc2qT+AolQF/b2E+gguOH/Kh0IZJpXCNWVgVNeahydWIvjzfkaLZp3pk3H/Rk/UyLqd+5IAYeiUMra65aBr1tLtMngs9HxAxNOwp2fAAG3aMc="
			target="_blank"
			>Vue SFC Playground</a
		>
	</p>

	<hr class="hr mt-0" />

	<div id="app" class="container">
		
		<DayJob12Header />
		
		<div class="banner">
			<h2>六角水果行 Banner</h2>
		</div>
		<div class="content">
			<h2>公司介紹：</h2>
			<p>
				我們的公司致力於提供最新鮮、最優質的水果給我們的顧客。我們的使命是將健康、美味的水果帶到每一個家庭。我們的水果來自於全球各地的優質果園，經過嚴格的品質控制，確保每一顆水果都是自然成熟、營養豐富。
				我們的產品種類豐富，包括蘋果、香蕉、橙子、草莓、葡萄等等，無論是日常食用還是特別場合，我們都能滿足您的需求。我們與許多當地農場合作，支持可持續農業，保護環境，同時保證水果的新鮮度和口感。
				我們還提供快捷便利的送貨服務，讓您足不出戶就能享受到新鮮的水果。我們的客服團隊始終準備好為您提供最優質的服務，解答您的疑問，滿足您的訂購需求。
				選擇我們的水果，就是選擇健康和品質。讓我們一起享受大自然的美味，為您的生活增添更多色彩與健康。
			</p>
		</div>
		<div class="subscribe">
			<h2>訂閱我們的電子報</h2>
			<p>輸入您的電子郵件地址，獲取最新的水果資訊和優惠。</p>
			<input type="email" placeholder="您的電子郵件" />
			<button class="btn">訂閱</button>
		</div>
		
		<DayJob12Footer />
	</div>
</template>

<script setup>
import DayJob12Footer from './DayJob12Footer.vue';
import DayJob12Header from './DayJob12Header.vue';
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

.card {
	border: 1px solid #ddd;
	border-radius: 4px;
	overflow: hidden;
}

.card-img-top {
	width: 25%;
	display: block;
	margin: 16px auto;
}

.card-body {
	padding: 16px;
}

.card-title {
	font-size: 1.25rem;
	margin-bottom: 8px;
}

.card-text {
	margin-bottom: 8px;
}

.btn {
	display: inline-block;
	padding: 8px 16px;
	background-color: #007bff;
	color: #fff;
	text-align: center;
	border-radius: 4px;
	text-decoration: none;
}

.banner {
	background-image: url(https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
	height: 200px;
	background-position: center;
	background-size: cover;
	margin-bottom: 20px;
	color: white;
	padding: 15px;
}

.subscribe {
	text-align: center;
	margin: 20px 0;
	padding: 20px;
	background-color: #f9f9f9;
	border: 1px solid #ddd;
	border-radius: 4px;
}

.subscribe input[type='email'] {
	padding: 10px;
	font-size: 1rem;
	margin-right: 10px;
	border: 1px solid #ddd;
	border-radius: 4px;
	width: 250px;
}

.subscribe button {
	padding: 10px 20px;
	font-size: 1rem;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

.subscribe button:hover {
	background-color: #0056b3;
}
</style>
