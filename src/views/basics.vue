<template>
  <div>
    <div class>{{ obj.text + ':' + count }}</div>
    <button @click="add">+1</button>
    <button @click="down">-1</button>
    <div class="segmentation">computed: {{ plusOne }}</div>
    <basiceComponent :count="count" @componentClick="componentClick" />
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
  onUnmounted
} from "vue";
import basiceComponent from "@/components/basiceComponent";
export default {
  components: { basiceComponent },
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
