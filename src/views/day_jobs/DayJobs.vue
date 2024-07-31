<script setup></script>

<template>
	<h1>2024 Vue 前端新手營 每日任務</h1>

	<nav class="mb-24">
		<RouterLink to="/dayjobs/day1">Day1</RouterLink> |
		<RouterLink to="/dayjobs/day2">Day2</RouterLink> |
		<RouterLink to="/dayjobs/day3">Day3</RouterLink> |
		<!-- <RouterLink to="/dayjobs/day4">Day4</RouterLink> |
        <RouterLink to="/dayjobs/day5">Day5</RouterLink> |
        <RouterLink to="/dayjobs/day6">Day6</RouterLink> |
        <RouterLink to="/dayjobs/day7">Day7</RouterLink> |
        <RouterLink to="/dayjobs/day8">Day8</RouterLink> |
        <RouterLink to="/dayjobs/day9">Day9</RouterLink> |
        <RouterLink to="/dayjobs/day10">Day10</RouterLink> | -->
	</nav>

	<hr style="border: 3px solid pink; box-shadow: 2px 2px 3px orchid" />

	<router-view></router-view>
</template>
