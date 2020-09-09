<template>
  <div>
    <h2>组件使用方式练习</h2>
    <div>我是basice子组件</div>
    <button @click="componentClick">点我给父组件传递参数</button>
    <div>子组件接收的参数count: {{ count }}</div>
    <injectComponent />
  </div>
</template>

<script>
import injectComponent from "./inject";
export default {
  components: {
    injectComponent
  },
  props: {
    count: {
      default: 0,
      type: Number
    }
  },
  setup(props, { emit }) {
    console.log(props.count, "传递的参数");
    const componentClick = () => {
      emit("componentClick", 1);
    };
    return {
      componentClick
    };
  }
};
</script>

<style lang='less' scoped>
</style>
