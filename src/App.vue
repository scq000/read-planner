<template>
<div id="app">
  <banner></banner>
  <progress-bar></progress-bar>
  <tabs>
    <tab header="想读"><book-shelf class="tab-content"></book-shelf></tab>
    <tab header="在读">Hello2</tab>
    <tab header="已读">Hello3</tab>
    <tab header="笔记">Hello4</tab>
  </tabs>

</div>
</template>

<script>
import ProgressBar from './components/ProgressBar';
import Banner from './components/Banner';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import BookShelf from './components/BookShelf';

export default {
  components: {
    ProgressBar,
    Banner,
    Tabs,
    Tab,
    BookShelf,
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

.tab-content {
  box-shadow: 5px 5px 5px red;
}
</style>
