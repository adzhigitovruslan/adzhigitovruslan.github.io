<template>
	<button 
	class="v-select"
	@click="optionsVisible = !optionsVisible"
	:class="{ active: optionsVisible }"
	>
		<div class="v-select__header">
			<div class="v-select__title">
			{{selected}}
			</div>
			<div class="v-select__icon">
				<i class="_icon-arrow_up-down"></i>
			</div>
			</div>
		<div 
		class="v-select__options"
		v-if="optionsVisible"
		>
			<div class="v-select__item"
			v-for="option in options" 
			:key="option.value"
			@click="selectOption(option)"
			>
			{{option.region}}
			</div>
		</div>
	</button>
</template>

<script>
export default {
	name: "v-select",
	data() {
		return {
			optionsVisible: false
		}
	},
	props: {
		options: {
			type: Array,
			default() {
				return []
			}
		},
		selected: {
			type: String,
			default: ''
		}
	},
	methods: {
		selectOption(option) {
			this.$emit("select", option)
			this.optionsVisible = false
		}
	},
}
</script>

<style lang="scss" scoped>
.v-select {
		position: relative;
		width: 200px;
		
		font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1440 - 320)));

		

		&__header {
			background: #FFFFFF;
			box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
			border-radius: 5px;	
			height: calc(48px + (56 - 48) * ((100vw - 320px) / (1440 - 320)));
			padding: 18px 24px;

			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__options {
			background: #FFFFFF;
			box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
			border-radius: 5px;
			padding: 18px 24px;

			position: absolute;
			top: 60px;
			right: 0;
			width: 100%;

			animation: show 0.6s 1;
			animation-fill-mode: forwards;

			z-index: 5;
		}

		@keyframes show{
		0%{
		opacity: 0;
		}
		100% {
		opacity: 1;
		}
	}

		&__item {
			cursor: pointer;
			transition: 0.4s ease;
			line-height: 1.5;
			text-align: left;
		}

		&__item:hover {
			box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
			background: rgba(231,231,231, 0.6);
			border-radius: 5px;
			padding: 5px;
		}

		&__item:not(:last-child){
			margin-bottom: 8px;
		}
		._icon-arrow_up-down {
			font-size: 8px;
			color: #000000;
		}
		&__icon {
			transition: all 0.4s ease;
			&.active {
				transform: rotate(180deg);
			}
		}
		
}
.dark {
	.v-select {
		&__header {
			background: #2B3844;
		}
		&__options {
			background: #2B3844;
		}
		&__title {
			color: #FFFFFF;
		}
		&__item {
			color: #FFFFFF;
		}
		&__item:hover {
			background: rgba(32, 44, 54, 0.6);
		}
		._icon-arrow_up-down {
			color: #FFFFFF;
		}
	}
}

</style>