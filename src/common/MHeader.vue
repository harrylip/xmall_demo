<template>
  <!-- <h2>我的MHeader</h2> -->
    <div class="header-box">
        <div>
            <header class="w">
                <div class="w-box">
                        大大大
                </div>
            </header>
            <slot name-nav>
                <div class="nav-sub">
                    <div class="nav-sub-bg"></div>
                    <div class="nav-sub-wrapper">
                        <div class="w"></div>
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
.header-box {
    width: 100px;
}
</style>