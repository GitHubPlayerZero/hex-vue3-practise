<!-- eslint-disable vue/multi-word-component-names -->
<template>
	
	<h1 class="h1">手風琴（Accordion）</h1>
	
	<p>
		<a href="https://bootstrap5.hexschool.com/docs/5.1/components/accordion/" target="_blank">
			Bootstrap 文件
		</a>｜
		<a href="https://github.com/GitHubPlayerZero/hex-vue3-practise/blob/main/src/views/kit_samples/bootstrap/Accordion.vue" target="_blank">
			code
		</a>
	</p>
	
	<hr class="hr mt-0" />

	<div class="accordion" id="accordionExample">
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingOne">
				<button
					class="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseOne"
					aria-expanded="true"
					aria-controls="collapseOne"
				>
					Accordion Item #1
				</button>
			</h2>
			<div
				id="collapseOne"
				class="accordion-collapse collapse show"
				aria-labelledby="headingOne"
				data-bs-parent="#accordionExample"
			>
				<div class="accordion-body">
					<strong>This is the first item's accordion body.</strong> It is shown by
					default, until the collapse plugin adds the appropriate classes that we use to
					style each element. These classes control the overall appearance, as well as the
					showing and hiding via CSS transitions. You can modify any of this with custom
					CSS or overriding our default variables. It's also worth noting that just about
					any HTML can go within the <code>.accordion-body</code>, though the transition
					does limit overflow.
				</div>
			</div>
		</div>
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingTwo">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseTwo"
					aria-expanded="false"
					aria-controls="collapseTwo"
				>
					Accordion Item #2
				</button>
			</h2>
			<div
				id="collapseTwo"
				class="accordion-collapse collapse"
				aria-labelledby="headingTwo"
				data-bs-parent="#accordionExample"
			>
				<div class="accordion-body">
					<strong>This is the second item's accordion body.</strong> It is hidden by
					default, until the collapse plugin adds the appropriate classes that we use to
					style each element. These classes control the overall appearance, as well as the
					showing and hiding via CSS transitions. You can modify any of this with custom
					CSS or overriding our default variables. It's also worth noting that just about
					any HTML can go within the <code>.accordion-body</code>, though the transition
					does limit overflow.
				</div>
			</div>
		</div>
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingThree">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseThree"
					aria-expanded="false"
					aria-controls="collapseThree"
				>
					Accordion Item #3
				</button>
			</h2>
			<div
				id="collapseThree"
				class="accordion-collapse collapse"
				aria-labelledby="headingThree"
				data-bs-parent="#accordionExample"
			>
				<div class="accordion-body">
					<strong>This is the third item's accordion body.</strong> It is hidden by
					default, until the collapse plugin adds the appropriate classes that we use to
					style each element. These classes control the overall appearance, as well as the
					showing and hiding via CSS transitions. You can modify any of this with custom
					CSS or overriding our default variables. It's also worth noting that just about
					any HTML can go within the <code>.accordion-body</code>, though the transition
					does limit overflow.
				</div>
			</div>
		</div>
	</div>
</template>
