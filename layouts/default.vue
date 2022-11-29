<template>
  <div>
    <div id="global-loader">
      <div class="whirly-loader"></div>
    </div>

    <div class="main-wrapper">
      <Header></Header>

      <Sidebar></Sidebar>

      <div class="page-wrapper">
        <div class="content">

          <nuxt></nuxt>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
