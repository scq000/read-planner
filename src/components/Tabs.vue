<template>
<ul class="tabs">
  <li class="tab-header" v-for="tab of tabs" @click="selectTab(tab)">
    <a href="#" :class="{on: tab.active}">{{tab.header}}</a>
  </li>
</ul>
<slot></slot>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
    };
  },
  methods: {
    selectTab(tab) {
      this.tabs.forEach((item) => {
        item.active = false;
      });
      tab.active = true;
    },
  },
  ready() {
    this.tabs[0].active = true;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@height: 50px;

.tabs {
  width: 100%;
  height: @height;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  background: #f6f0e2;

  display: flex;
  position: relative;
  overflow: hidden;

  li {
    flex: 1;
    line-height: @height;
    overflow: hidden;
    padding: 0;
    position: relative;
  }

  a {
    color: #f05f30;
    font-weight: 500;
    display: block;
    letter-spacing: 0;
    outline: none;
    padding: 0 20px;
    text-decoration: none;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: rgba(240,95,48, .5);
      cursor: pointer;
      border-bottom: 1px solid green;
    }

    &.on{
      background: rgba(240, 95, 48, .75);
      color: white !important;
    }
  }
}

</style>
