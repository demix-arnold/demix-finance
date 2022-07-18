<template>
  <section>
    <div class="chart-set">
      <!-- <h4 class="align-center mt5">{{ msg1 }}</h4> -->
      <img
        class="chart-detail-set"
        src="../assets/settings_FILL0_wght100_GRAD200_opsz20.svg"
        alt="setting"
        @click="chartViewList = !chartViewList"
      />
      <div v-show="chartViewList" class="chart-detail-set-list" :id="msg"></div>
    </div>

    <div class="chart-detail">
      <slot name="chartCanvas"></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: "Setting",
  props: {
    msg: String,
    // msg1: String,
  },
  data() {
    return {
      chartViewList: false,
    };
  },
};
</script>
