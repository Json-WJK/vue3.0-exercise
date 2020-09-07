<template>
  <div>
    <div>我是basice子组件</div>
    <button @click="componentClick">点我给父组件传递参数</button>
    <div>子组件接收的参数count: {{ count }}</div>
  </div>
</template>

<script>
export default {
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
