<template>
  <div class>{{ obj.text + ':' + count }}</div>
  <button @click="add">+1</button>
  <button @click="down">-1</button>
  <div>computed: {{ plusOne }}</div>
</template>

<script>
import {
  ref,
  reactive,
  computed,
  watch,
  onMounted,
  onUpdated,
  onUnmounted
} from "vue";
export default {
  setup() {
    // 加减功能
    const obj = reactive({
      text: "count值"
    });
    const count = ref(0);
    const plusOne = computed(() => count.value + 1);
    watch(count, (count, prevCount) => {
      console.log(count, prevCount, "监听count值");
    });
    const add = () => {
      count.value++;
    };
    const down = () => {
      count.value -= 1;
    };
    onMounted(() => {
      console.log("页面加载完成");
    });
    onUpdated(() => {
      console.log("页面有更新");
    });
    onUnmounted(() => {
      console.log("页面销毁了");
    });
    return {
      obj,
      count,
      plusOne,
      add,
      down
    };
  }
};
</script>

<style lang='less' scoped>
</style>
