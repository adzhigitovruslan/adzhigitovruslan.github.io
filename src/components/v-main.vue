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
      <div class="main__body">
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
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'v-main',
  components: {
  vSelect,
  vItem
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
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters([
      'COUNTRIES'
    ]),
    filteredList() {
      if(this.searchValue && !this.sortedCountries.length) {
        return this.COUNTRIES.filter(item => {
          return this.searchValue.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
        })
      } else
      if (this.sortedCountries.length) {
        if(this.searchValue) {
          return this.sortedCountries.filter(item => {
            return this.searchValue.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
        })
      } else {
        return this.sortedCountries
      }
      } else {
        return this.COUNTRIES
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
    this.GET_COUNTRIES_FROM_API()
     .then((response) => {
       if(response.data) {
         console.log('data arrived');
       }
     })
  }
}
</script>

<style scoped lang="scss">
.main {

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
