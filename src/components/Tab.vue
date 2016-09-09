<template>
  <div v-show="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    // return {
    //   active: false,
    // };
    return {

    };
  },
  props: {
    header: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.$parent.tabs.push(this);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
