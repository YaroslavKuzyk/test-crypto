<template>
  <div class="trading-view__books">
    <div class="trading-view__books-wrapper trading-view__books-wrapper--green">
      <div class="trading-view__books-item">
        <span>Ціна(USDT)</span>
        <span>Сума(BTC)</span>
        <span>Всього</span>
      </div>
      <div class="trading-view__books-item" v-for="item in 50" :key="item">
        <div class="trading-view__books-item-value color-green">62,960.88</div>
        <div class="trading-view__books-item-value">0.0001</div>
        <div class="trading-view__books-item-value">0.0001</div>
      </div>
    </div>
    <div class="trading-view__books-current color-red border-top border-bottom">62,960.88</div>
    <div class="trading-view__books-wrapper trading-view__books-wrapper--red">
      <div class="trading-view__books-item" v-for="item in 50" :key="item">
        <div class="trading-view__books-item-value color-red">62,960.88</div>
        <div class="trading-view__books-item-value">0.0001</div>
        <div class="trading-view__books-item-value">0.0001</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.trading-view__books {
  display: flex;
  flex-direction: column;

  &-current {
    font-size: 24px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-wrapper {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px;
  }

  &-wrapper--red {
    flex-direction: column-reverse;
  }

  &-item {
    display: flex;
    justify-content: space-between;

    span {
      color: var(--color-DisableText);
      padding: 0 0 4px;
    }
  }
}
</style>