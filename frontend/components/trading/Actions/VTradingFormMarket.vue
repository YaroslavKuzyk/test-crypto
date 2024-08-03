<template>
  <div class="market-form">
    <div class="market-form__header">
      <span class="market-form__header-title">Доступно: </span>
      <span class="market-form__header-currency">{{currency}}</span>
    </div>

    <div class="currencies-input">
      <input type="text" placeholder="Ціна">
      <span class="currencies-input__currency">{{currency}}</span>
    </div>

    <div class="currencies-input">
      <input type="text" placeholder="Сума">
      <span class="currencies-input__currency">{{currency}}</span>
    </div>

    <button class="button button-green" :class="{'button-red': isSell}" @click="emit('isClick')">{{isSell ? 'Продати' : 'Купити'}}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  currency: {
    type: String,
    required: true
  },
  isSell: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['isClick'])
</script>

<style scoped lang="scss">
.market-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;


  &__header {
  display: flex;
    justify-content: space-between;
  }

  &__header-title {
    color: var(--color-DisableText);
  }
}
</style>