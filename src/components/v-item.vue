<template>
	<div 
		class="country__item item"
		@click="cardClick"
		>
		<router-link  
		:to="{name: 'card', params: {country: country}}"
		>
			<div class="item__body">
					<div class="item__flag">
						<img class="flag-image" :src="country.flags.svg" alt="flag">
					</div>
					<div class="item__info info">
						<div class="info__title">{{country.name}}</div>
						<div class="info__discription">
							<div class="info__data">Population: <span class="info__data-response">{{country.population | toFix }}</span></div>
							<div class="info__data">Region: <span class="info__data-response">{{country.region}}</span></div>
							<div class="info__data">Capital: <span class="info__data-response">{{country.capital}}</span></div>
						</div>
					</div>
			</div>
		</router-link>
	</div>
</template>

<script>
import toFix from '@/filters/toFix.js'

export default {
	name: "v-item",
	data() {
		return {}
	},
	filters: {
		toFix
	},
	props: {
		country: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods: {
		cardClick() {
			this.$emit('cardClick', this.country.name)
		}
	}
}
</script>

<style lang="scss" scoped>
.country {

		&__item {
			max-width: 264px;
			width: 100%;
			height: 336px;

			background: #FFFFFF;
			box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
			border-radius: 5px;

			overflow: hidden;

			@media (max-width: 500px) {
			margin: 0 auto;
			}
		}
}
.item {

		&__body {
			display: flex;
			flex-direction: column;
			height: 100%;
		}

		&__flag {
			flex: 0 0 50%;
			position: relative;
			& .flag-image {
				width: 100%;
				height: 100%;
				object-fit: cover;
				position: absolute;
				top: 0;
				left: 0;
			}
		}

		&__info {
			flex: 50%;

			padding: 24px;
		}
}
.info {
	color: #111517;
		&__title {
			margin-bottom: 16px;

			font-weight: 800;
			font-size: 18px;
		}

		&__discription {}

		&__data {
			font-size: 14px;
			font-weight: 600;
		}

		&__data:not(:last-child) {
			margin-bottom: 8px;
		}

		&__data-response {
			font-weight: 300;
			font-size: 14px;
		}
}
.dark {
	.item {
		&__info {
			background: #2B3844;
		}
		&__flag {
			background: #2B3844;
		}
		&__body {
			background: #202C36;
		}
	}
	.info {
		&__title {
			color: #FFFFFF;
		}
		&__data {
			color: #FFFFFF;
		}
		&__data-response {
			color: #FFFFFF;
		}
	}
}

</style>