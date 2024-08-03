<template>
  <div class="trading-view__orders">
    <div class="trading-view__orders-item trading-view__orders-item--header">
      <span>Ціна(USDT)</span>
      <span>Сума(BTC)</span>
      <span>Всього</span>
    </div>
    <div class="trading-view__orders-wrapper">
      <div class="trading-view__orders-item" v-for="item in 50" :key="item">
        <div class="trading-view__books-item-value color-green">62,960.88</div>
        <div class="trading-view__books-item-value">0.0001</div>
        <div class="trading-view__books-item-value">0.0001</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.trading-view__orders {
  display: flex;
  flex-direction: column;
  padding: 8px;

  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: calc((100vh - 230px) / 2);
    overflow: auto;
    padding-right: 5px;
  }

  &-item {
    display: flex;
    justify-content: space-between;
  }

  &-item--header {
    margin-bottom: 8px;

    span {
      color: var(--color-DisableText);
    }
  }
}
</style>