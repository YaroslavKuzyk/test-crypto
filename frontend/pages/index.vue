<template>
  <div class="trading-view">
    <div class="trading-view__header border-bottom">
     <VTradingHeader/>
    </div>
    <div class="trading-view__container border-bottom">
      <div class="trading-view__books">
        <VTradingBooks/>
      </div>
      <div class="trading-view__wrapper border-left">
        <div class="trading-view__charts border-bottom">
          <VTradingView/>
        </div>
        <div class="trading-view__form"><VTradingForm/></div>
      </div>
      <div class="trading-view__sidebar border-left">
        <div class="trading-view__pairs"><VTradingPairs/></div>
        <div class="trading-view__orders"><VTradingOrders/></div>
      </div>
    </div>
    <div class="trading-view__history"><VTradingHistory/></div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useTradingStore} from '~/stores/useTradingStore';
import VTradingView from "~/components/trading/VTradingView.vue";
import VTradingHeader from "~/components/trading/VTradingHeader.vue";
import VTradingBooks from "~/components/trading/VTradingBooks.vue";
import VTradingForm from "~/components/trading/VTradingForm.vue";
import VTradingPairs from "~/components/trading/VTradingPairs.vue";
import VTradingOrders from "~/components/trading/VTradingOrders.vue";
import VTradingHistory from "~/components/trading/VTradingHistory.vue";

const tradingStore = useTradingStore();

onMounted(() => {
  tradingStore.connectToTradingSocket()
})
</script>

<style scoped lang="scss">
.trading-view {
  background: rgb(22, 26, 30);
  min-height: 100vh;

  &__header {
    height: 56px;
  }

  &__container {
    display: flex;
  }

  &__books {
    width: 320px;
    height: calc(100vh - 100px);
  }

  &__wrapper {
    height: calc(100vh - 100px);
    flex-grow: 1;
  }

  &__form {
    width: 100%;
    height: 250px;
  }

  &__charts {
    width: 100%;
    height: calc(100vh - 100px - 250px);
  }

  &__sidebar {
    width: 320px;
    height: calc(100vh - 100px);
  }

  &__history {
    height: 300px;
  }
}
</style>