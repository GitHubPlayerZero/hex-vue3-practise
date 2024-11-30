<template>
	<nav class="mb-16">
		<RouterLink :to="{ name: 'bsAccordion' }">手風琴 (Accordion)</RouterLink>｜
		<RouterLink :to="{ name: 'bsToast' }">吐司 (Toasts)</RouterLink>｜
		<RouterLink :to="{ name: 'bsFormValidation' }">表單驗證</RouterLink>｜
	</nav>

	<hr style="margin: 0 0 24px; border: 3px solid pink; box-shadow: 2px 2px 3px orchid" />

	<RouterView />
</template>
