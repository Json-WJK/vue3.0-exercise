<template>
  <div>
    <h2>readonly练习</h2>
    <div>我是原始数据：{{ obj.count }}</div>
    <div>我是代理数据：{{ copy.count }}</div>
    <button @click="add">点我增加原始数据</button>
    <button @click="copyAdd">点我增加代理数据</button>
    <div>注意：代理数据不可修改哦！(会报警告哦)</div>
  </div>
</template>

<script>
import { reactive, readonly } from "vue";
export default {
  setup() {
    const obj = reactive({ count: 0 });
    const copy = readonly(obj);
    // 1、增加obj 代理也会变化
    // 2、修改代理，会报警告
    const add = () => {
      obj.count++;
    };
    const copyAdd = () => {
      copy.count++;
    };
    return {
      obj,
      copy,
      add,
      copyAdd
    };
  }
};
</script>

<style lang='less' scoped>
</style>
