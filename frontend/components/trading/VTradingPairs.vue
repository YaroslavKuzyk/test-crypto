<template>
  <div class="trading-view__pairs">
    <div class="currencies-input">
      <input type="text" placeholder="Пошук">
    </div>

    <div class="trading-view__pairs-item trading-view__pairs-item--header">
      <span>Пара</span>
      <span>Остання ціна</span>
      <span>Зміна за 24г</span>
    </div>
    <div class="trading-view__pairs-wrapper">
      <div v-for="item in 50" :key="item" class="trading-view__pairs-item">
        <span>BTC/USD</span>
        <span>62,960.88</span>
        <span class="color-green">+0.0001</span>
      </div>
    </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.trading-view__pairs {
  padding: 8px;

  &-item--header {
    margin-top: 12px;
    margin-bottom: 8px;

    span {
      color: var(--color-DisableText);
    }
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: auto;
    height: calc((100vh - 230px) / 2);
    padding-right: 5px;
  }

  &-item {
    display: flex;
    justify-content: space-between;
  }
}
</style>