<template>
	<div class="card__wrapper">
		<div class="card__container _container">
			<div class="card__body">
				<div class="card__back-btn">
					<router-link :to="{name: 'list'}">
						<button class="card__button">
							<i class="_icon-arrow-left"></i> 
							<p class="card__button-text">Back</p> 
						</button>
					</router-link>
				</div>
				<div class="card__main">
					<div class="card__flag">
							<img v-if="card.flags" class="card__flag-image" :src="card.flags.svg" alt="flag">
					</div>
					<div class="card__main-block">
						<div class="card__info info">
							<div 
							class="info__title"
							v-if="card.name"
							>{{card.name}}</div>
							<div class="info__description">
								<div class="info__block-one block">
									<div class="block__data">Native Name: <span class="block__data-response">{{card.nativeName}}</span></div>
									<div class="block__data">Population: <span 
									v-if="card.population"
									class="block__data-response">{{card.population | toFix}}</span></div>
									<div class="block__data">Region: <span class="block__data-response">{{card.region}}</span></div>
									<div class="block__data">Sub Region: <span class="block__data-response">{{card.subregion}}</span></div>
									<div class="block__data">Capital: <span class="block__data-response">{{card.capital}}</span></div>
								</div>
								<div class="info__block-two block">
									<div class="block__data">Top Level Domain: <span v-if="card.topLevelDomain" class="block__data-response">{{card.topLevelDomain[0]}}</span></div>
									<div class="block__data">Currencies: 
										<span 
										class="block__data-response"
										v-if="card.currencies" 
										>{{card.currencies[0].name }}</span></div>
									<div class="block__data">Languages: 
										<span 
										class="block__data-response"
										v-if="card.languages"
										>{{card.languages[0].name}}</span></div>
								</div>
							</div>
						</div>
						<div class="card__border-countries border-countries">
						<div class="border-countries__title"> Border Countries:</div>
						<div 
						v-for="(item, index) in card.borders" 
						:key="index"
						class="border-countries__item fill"
						>{{item}}</div>
						<div
						class="border-countries__item"
						v-if="!card.borders"
						>There are no border countries</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import toFix from '@/filters/toFix.js'

export default {
	name: 'v-country-card',
	components: {},
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
	computed: {
	...mapGetters([
		'COUNTRIES'
		]),

	card(){
		let result = {}
		let vm = this;
		this.COUNTRIES.map(function (item) {
			if (item.name === vm.$route.query.card) {
				result = item;
			}
		})
		return result;
	}
	},
	methods: {
	...mapActions(["GET_COUNTRIES_FROM_API"]),
	changeTheme() {
		this.$emit('changeTheme')
	},
	},
	async mounted() {
		if(!Object.keys(this.COUNTRIES).length) {
		await this.GET_COUNTRIES_FROM_API()
		}
	}
}
</script>

<style lang="scss" scoped>
.card {

		&__wrapper {
			padding-top: calc(40px + (80 - 40) * ((100vw - 320px) / (1440 - 320)));
			padding-bottom: calc(40px + (80 - 40) * ((100vw - 320px) / (1440 - 320)));
			background: #F2F2F2;
		}

		&__container {}

		&__body {}

		&__back-btn {
			margin-bottom: calc(64px + (80 - 64) * ((100vw - 320px) / (1440 - 320)));
		}

		&__button {
			display: flex;
			align-items: center;

			padding: 10px 30px;
			background: #FFFFFF;
			box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
			border-radius: 6px;
		}

		&__button-text {
			font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1440 - 320)));
			margin-left: 10px;
		}

		&__main {
			display: flex;

			@media(max-width: 500px) {
				flex-direction: column;
			}
		}

		&__main-block {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			flex: 1;
		}

		&__flag {
			flex: 0 0 40%;
			height: 400px;
			background: #808080;
			box-shadow: 0px 0px 14px 4px rgba(0, 0, 0, 0.0294384);
			border-radius: 10.0057px;

			overflow: hidden;
			@media(min-width: 500px) {
			margin-right: calc(25px + (120 - 25) * ((100vw - 320px) / (1440 - 320)));
			}
			@media(max-width: 499px) {
			margin-bottom: calc(25px + (120 - 25) * ((100vw - 320px) / (1440 - 320)));
			}
		}

		&__flag-image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			
		}

		&__info {
			margin-bottom: calc(34px + (70 - 34) * ((100vw - 320px) / (1440 - 320)));

			width: 100%;
		}

		&__border-countries {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
		}
}
._icon-arrow-left {}

.info {

		&__title {
			font-size: calc(22px + (32 - 22) * ((100vw - 320px) / (1440 - 320)));
			font-weight: 800;
			margin-bottom: calc(16px + (23 - 16) * ((100vw - 320px) / (1440 - 320)));
		}

		&__description {
			display: flex;
			justify-content: space-between;
			align-items: center;

			@media(max-width: 850px) {
				flex-direction: column;
				align-items: flex-start;
			}
		}

		&__block-one {
			margin: 0 15px 0 0;
			@media(max-width: 850px) {
				margin: 0 0 15px 0;
			}
			@media(max-width: 499px) {
			margin-bottom: 32px;
			}
		}

		&__block-two {}
}
.block {

		&__data {
			font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1440 - 320)));
		}

		&__data-response {
			font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1440 - 320)));
			font-weight: 300;
		}

		&__data:not(:last-child) {
			margin-bottom: 15px;
		}
}
.border-countries {

		&__title {
			@media(max-width: 500px) {
			margin-bottom: 16px;
			width: 100%;
			}
			margin-right: 16px;
			font-weight: 600;
			margin-bottom: 10px;
		}

		&__item.fill{
			background: #FFFFFF;
			box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);

			width: 96px;
			height: 28px;

			display: flex;
			justify-content: center;
			align-items: center;
			
			font-weight: 300;
			font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1440 - 320)));

			margin-bottom: 10px;
			padding: 5px 25px;
			border-radius: 2px;
		}

		&__item {
			margin-bottom: 10px;
			border-radius: 2px;
			padding: 5px 25px;
			font-weight: 300;
			font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1440 - 320)));
			background: #FFFFFF;
			box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
			height: 28px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&__item:not(:last-child) {
			margin-right: 10px;
		}
}
.dark {
	.card {
		&__button {
			background: #2B3844;
			color: #FFFFFF;
		}
		&__wrapper {
			background: #202C36;
		}
	}
	.info {
		&__title {
			color: #FFFFFF;
		}
	}
	.block {
		&__data {
			color: #FFFFFF;
		}
	}
	.border-countries {
		&__title {
			color: #FFFFFF;
		}
		&__item {
			background: #2B3844;
			color: #FFFFFF;
			background: #2B3844;
			box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
		}
	}
}


</style>