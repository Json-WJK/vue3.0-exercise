<template>
  <div>
    <h2>依赖注入练习</h2>
    <div>依赖注入值：{{ count }}</div>
  </div>
</template>

<script>
import { inject, ref } from "vue";
export default {
  setup() {
    const count = inject('CountSymbol');
    return {
      count
    };
  }
};
</script>

<style lang='less' scoped>
</style>