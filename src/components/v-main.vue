<template>
  <div class="main__wrapper">
    <div class="main__container _container">
      <div class="main__search search">
        <form class="search__form" action="">
          <button type="button" class="search__icon-submit _icon-loupe"></button>
          <input 
          type="text" 
          placeholder="Search for a country…" 
          class="search__input"
          v-model="searchValue"
          >
        </form>
      <vSelect 
      :options="options" 
      @select="sortedByRegion" 
      :selected="selected"
      />
      </div>
      <div 
      v-if="loading"
      class="main__loader">
        <RingLoader 
        :size="size"
        :radius="radius"
        />
        <p 
        class="main__loader-text">Loading...</p>
      </div>
      <div 
      v-else-if="!this.checkIfMatch"
      class="main__nothing"> 
      <div class="main__nothing-text">
        Oops! There is nothing here!
      </div>
      </div>
      <div 
      v-else
      class="main__body">
        <vItem
        v-for="(country, name) in filteredList"  
        :key="name"
        :country="country"
        @cardClick="cardClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from '@/components/v-select.vue'
import vItem from '@/components/v-item.vue'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import {mapActions, mapGetters} from 'vuex'
// import { response } from 'express'

export default {
  name: 'v-main',
  components: {
  vSelect,
  vItem,
  RingLoader
  },
  data() {
    return {
      options: [
        {region: "Africa", value: 1},
        {region: "Americas", value: 2},
        {region: "Asia", value: 3},
        {region: "Europe", value: 4},
        {region: "Oceania", value: 5},
      ],
      selected: 'Filter by Region',
      sortedCountries: [],
      searchValue: '',
      loading: false,
      size: '80px',
      radius: '50%',
      color: "#000000",
      match: false
    }
  },
  props: ['nightMode'],
  computed: {
    ...mapGetters([
      'COUNTRIES'
    ]),
    filteredList() {
      if(!this.sortedCountries.length) {
        if(this.searchValue) {
          return this.COUNTRIES.filter((item) => {
            return item.name.toLowerCase().startsWith(this.searchValue)
          })
        } else if (this.searchValue && !this.filteredList().length) {
          return this.match == true;
        } else {
          return this.COUNTRIES
        }
      } else
      if (this.sortedCountries.length) {
        if(this.searchValue) {
          return this.sortedCountries.filter((item) => {
          return item.name.toLowerCase().startsWith(this.searchValue)
        })
      }
      else {
        return this.sortedCountries
      }
      }
      else {
        return this.COUNTRIES
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    checkIfMatch() {
      if (this.filteredList.length) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    ...mapActions([
      'GET_COUNTRIES_FROM_API'
    ]),
    sortedByRegion(option) {
      this.sortedCountries = [];
      this.COUNTRIES.map(item => {
        if (item.region === option.region) {
          this.sortedCountries.push(item);
        }
      })
      this.selected = option.region
    },
    cardClick(name) {
      this.$router.push({name: 'card', query: {'card': name} })
    }
  },
  async mounted() {
    this.loading = true
        try {
          const api_contries = await this.GET_COUNTRIES_FROM_API()
          return api_contries
        } catch (error) {
            return error
        } finally {
          this.loading = false
        }
  }
}
</script>

<style scoped lang="scss">
.main {

    &__nothing {
      margin-top: 70px;
    }

    &__nothing-text {
      font-size: 25px;
      font-weight: 600;
      font-size: calc(15px + (30 - 15) * ((100vw - 320px) / (1440 - 320)));
      text-align: center;
      text-shadow: 4px 3px 3px rgba(149, 150, 150, 0.77);
      color: #111517;
    }

    &__loader {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    &__loader-text {
      font-size: 25px;
      font-weight: 600;
      letter-spacing: 1.5px;
      color: rgba(93, 197, 150, 1);
      margin-top: 50px;
    }

		&__wrapper {
      padding-top: calc(24px + (48 - 24) * ((100vw - 320px) / (1440 - 320)));
      padding-bottom: calc(24px + (48 - 24) * ((100vw - 320px) / (1440 - 320)));
      background: #F2F2F2;
    }

    &__body {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 70px;
      row-gap: 75px;
      @media (min-width: 1650px) {
      grid-template-columns: repeat(5, 1fr);
      column-gap: 70px;
      }
      @media (min-width: 2050px) {
      grid-template-columns: repeat(5, 1fr);
      column-gap: 100px;
      }
      @media (max-width: 1250px) {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 140px;
      }
      @media (max-width: 1150px) {
      column-gap: 100px;
      }
      @media (max-width: 1100px) {
      column-gap: 70px;
      }
      @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 250px;
      }
      @media (max-width: 800px) {
      column-gap: 160px;
      }
      @media (max-width: 700px) {
      column-gap: 70px;
      }
      @media (max-width: 550px) {
      column-gap: 40px;
      }
      @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
      }
    }

		&__container {}

		&__search {
      margin-bottom: calc(32px + (48 - 32) * ((100vw - 320px) / (1440 - 320)));
    }
}

._icon-loupe {}

.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    align-items: flex-start;
    flex-direction: column;
  }
		&__form {
      position: relative;

      height: calc(48px + (56 - 48) * ((100vw - 320px) / (1440 - 320)));

      background: #FFFFFF;
      box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
      border-radius: 5px;

      overflow: hidden;
      @media (min-width: 500px) {
      width: calc(343px + (480 - 343) * ((100vw - 320px) / (1440 - 320)));
      margin-right: 15px;
      }
      @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 40px;
      }
    }

		&__input {
      width: 100%;
      height: 100%;
      padding-left: 70px;

      color: #848484;
      font-size: 14px;
      font-weight: 400;
    }

		&__icon-submit {
      position: absolute;


      width: 75px;
      height: 100%;

      color: #848484;
      font-size: 15px;

      background: none;
    }
    &__input::placeholder {
      font-size: 14px;
      font-weight: 400;
      color: #848484;
    }
}

.dark {
  .main {
    &__wrapper {
      background: #202C36;
    }
    &__nothing-text {
      color: #FFFFFF;
    }
  }
  .search {
    &__input::placeholder {
      color: #FFFFFF;
    }
    &__input {
      background: #2B3844;
      color: #FFFFFF;
    }
    &__icon-submit {
      color: #FFFFFF;
    }

    &__form {
      background:#202C36;
    }
  }
}

</style>
