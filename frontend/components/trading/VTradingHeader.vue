<template>
  <div class="trading-view__header border-bottom">
    <div class="trading-view__header-title">BTC/USDT</div>
    <div class="trading-view__header-price">
      <span class="trading-view__header-price-coin color-red">62,960.88</span>
      <span class="trading-view__header-price-usd">$62,960.88</span>
    </div>
    <div class="trading-view__header-info">
      <div class="trading-view__header-info-title">Зміна за 24г</div>
      <div class="trading-view__header-info-value">-3,500.00 -5.18%</div>
    </div>
    <div class="trading-view__header-info">
      <div class="trading-view__header-info-title">24г Макс</div>
      <div class="trading-view__header-info-value">66,836.30</div>
    </div>
    <div class="trading-view__header-info">
      <div class="trading-view__header-info-title">24г Мін</div>
      <div class="trading-view__header-info-value">66,836.30</div>
    </div>
    <div class="trading-view__header-info">
      <div class="trading-view__header-info-title">24 год об'єм(BTC)</div>
      <div class="trading-view__header-info-value">31,958.18</div>
    </div>
    <div class="trading-view__header-info">
      <div class="trading-view__header-info-title">Обсяг за 24 год.(USDT)</div>
      <div class="trading-view__header-info-value">2,062,300,400.97</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.trading-view__header {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 20px;
  height: 56px;
  background: rgb(22, 26, 30);
  color: white;
  font-size: 14px;
  font-weight: 500;

  &-title {
    font-size: 24px;
  }

  &-price {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &-info {
    display: flex;

flex-direction: column;
  gap: 4px}

  &-price-coin {
    font-size: 20px;
  }

  &-info-title {
    color: var(--color-DisableText);
  }
}
</style>