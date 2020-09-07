<template>
  <div>我是basice子组件</div>
  <button @click="componentClick">点我给父组件传递参数</button>
</template>

<script>
export default {
  props: {
    count: Number
  },
  setup(props, { emit }) {
    console.log(props, "传递的参数");
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
