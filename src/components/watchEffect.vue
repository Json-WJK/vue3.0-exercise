<template>
  <div>
    <h2>watchEffect练习</h2>
    <div>count：{{ count }}</div>
    <button @click="add">点我count+1查看监听是否触发</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    watchEffect(() => {
      console.log(count.value, "count值改变");
    });
    return {
      count,
      add
    };
  }
};
</script>

<style lang='less' scoped>
</style>