<template>
  <div class="wrapper-layout">
    <vTabs />
    <router-view></router-view>
  </div>
</template>

<script>
import vTabs from "@/components/v-tabs.vue";
export default {
  components: {
    vTabs,
  },
};
</script>

<style lang="scss" scoped>

.wrapper-layout {
  padding: 65px 0 65px 0;
  @media(max-width: 550px) {
    padding: unset;
  }
}
</style>
