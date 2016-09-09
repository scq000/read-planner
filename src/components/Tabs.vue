<template>
<ul>
  <li v-for="tab of tabs" @click="selectTab(tab)">
    {{tab.header}}
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

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
