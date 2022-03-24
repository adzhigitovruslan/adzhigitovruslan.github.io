<template>
  <div class="preloader">
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div class="preloader-text">please wait</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 65px;
}
.preloader-text {
  margin-top: 20px;
  color: #3751fe;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.spinner-blue-only {
  color: #3751fe;
}
</style>
