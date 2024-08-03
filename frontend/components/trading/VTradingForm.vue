<template>
  <div class="trading-view__form">
    <div class="trading-view__form-tabs">
      <div class="trading-view__form-tabs-item border">Маркет</div>
<!--      <div class="trading-view__form-tabs-item">Ліміт</div>-->
    </div>
    <div class="trading-view__form-wrapper">
      <VTradingFormMarket currency="USDT" />
      <VTradingFormMarket currency="BTC" is-sell />
    </div>
  </div>
</template>

<script setup lang="ts">
import VTradingFormMarket from "~/components/trading/Actions/VTradingFormMarket.vue";
</script>



<style scoped lang="scss">
.trading-view__form {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &-tabs {
    display: flex;
  }

  &-tabs-item {
    cursor: pointer;
    padding: 8px;
  }

  &-wrapper {
    display: flex;
    gap: 24px;
  }
}
</style>