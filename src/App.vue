<template>
<div id="app">
  <banner></banner>
  <progress-bar></progress-bar>


</div>
</template>

<script>
import Hello from './components/Hello';
import ProgressBar from './components/ProgressBar';
import Banner from './components/Banner';

export default {
  components: {
    Hello,
    ProgressBar,
    Banner,
  },
};
</script>

<style lang="less">
@import "assets/lib/normalize.css";
@import "assets/less/base.less";

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
    height: 100%;
    width: 90%;
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
</style>
