<template>
  <div class="error">Страница не найдена</div>
</template>

<script>
export default {
  metaInfo: {
    title: "Not found",
  },
};
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(20px + (50 - 20) * ((100vw - 320px) / (1200 - 320)));
  background: #000;
  color: white;
}
</style>
