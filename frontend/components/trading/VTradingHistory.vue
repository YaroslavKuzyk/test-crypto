<template>
<div class="trading-view__history">
  <div class="trading-view__history-header">
    <div class="trading-view__history-tabs">
      <div
          v-for="item in getTabsList"
          :key="item.id" @click="currentTab = item.id"
          class="trading-view__history-tab"
          :class="{'trading-view__history-tab--active': currentTab === item.id}"
      >
        {{item.title}}
      </div>
    </div>
  </div>
  <div class="trading-view__history-tab-wrapper">
    <VTradingOrdersTable v-if="currentTab === ETabs.OPEN_ORDERS" />
    <VTradingOrdersTable v-if="currentTab === ETabs.ORDER_HISTORY" />
    <VTradingHistoryTable v-if="currentTab === ETabs.TRADE_HISTORY" />
  </div>
</div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import VTradingHistoryTable from "~/components/trading/Tables/VTradingHistoryTable.vue";
import VTradingOrdersTable from "~/components/trading/Tables/VTradingOrdersTable.vue";

enum ETabs {
  OPEN_ORDERS= 0,
  ORDER_HISTORY = 1,
  TRADE_HISTORY = 2
}
const currentTab = ref<ETabs>(ETabs.OPEN_ORDERS);

const getTabsList = computed(() => {
  return [
    {id: ETabs.OPEN_ORDERS, title: 'Відкриті ордери(0)'},
    {id: ETabs.ORDER_HISTORY, title: 'Історія ордерів'},
    {id: ETabs.TRADE_HISTORY, title: 'Історія торгівлі'}
  ]
});
</script>

<style scoped lang="scss">
.trading-view__history {
  &-header {
    padding: 8px;
    display: flex;
    border-bottom: 1px solid var(--color-DisableText);
  }

  &-tabs {
    display: flex;
    gap: 24px;
  }

  &-tab {
    cursor: pointer;
    color: var(--color-DisableText);

    &--active {
      color: var(--color-PrimaryText);
    }
  }

  &-tab-wrapper {
    padding: 8px;
  }
}
</style>