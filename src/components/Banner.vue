<template>
    <div class="banner">
        <span class="banner-logo"></span>
        <h1 class="banner-text">读书笔记</h1>
    </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@banner-height: 150px;

.banner {
    text-align: center;
    height: @banner-height;
    width: 100%;
    overflow: hidden;

    background: #f6f0e2;
}

.banner-logo {
    float: left;
    width: 100px;
    height: 100%;
    display: none;
    outline: 1px solid green;
}

.banner-text {
    height: 100%;
    margin: 0;
    width: 200px;
    line-height: @banner-height;
    display: inline-block;
}

</style>
