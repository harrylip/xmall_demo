<template>
  <div>
      <!-- <h3>导航。。</h3> -->
      <!-- <MHeader/> -->
      <m-header></m-header>
      <router-view class="main"></router-view>
  </div>
</template>

<script>
    import MHeader from '../common/MHeader';
    export default {
      components:{
        MHeader,
      }
    }
</script>

<style lang="scss" scoped>

</style>