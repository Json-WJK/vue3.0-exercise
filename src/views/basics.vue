<template>
  <div>
    <h2>vue3.0基础使用练习</h2>
    <div class>{{ obj.text + ':' + count }}</div>
    <button @click="add">+1</button>
    <button @click="down">-1</button>
    <div>computed: {{ plusOne }}</div>
    <div class="segmentation"></div>
    <basiceComponent :count="count" @componentClick="componentClick" />
    <div class="segmentation"></div>
    <readonlyComponent />
    <div class="segmentation"></div>
    <watchEffect />
  </div>
</template>

<script>
import {
  ref,
  reactive,
  computed,
  watch,
  onMounted,
  onUpdated,
  onUnmounted,
  provide
} from "vue";
import basiceComponent from "@/components/basiceComponent";
import readonlyComponent from "@/components/readonly";
import watchEffect from "@/components/watchEffect";

export default {
  components: { basiceComponent, readonlyComponent, watchEffect },
  setup() {
    // 加减模块
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

    // basiceComponent 模块
    const componentClick = e => {
      console.log(e, "子组件传递给父组件的参数");
    };

    // 依赖注入模块
    provide("CountSymbol", count);

    // 其他生命周期模块
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
      down,
      componentClick
    };
  }
};
</script>

<style lang='less' scoped>
.segmentation {
  box-sizing: border-box;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}
</style>
