<template>
  <div>
    <div id="container" style="width: 100%; height: calc(100vh -  100px - 250px);"></div>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app';
import { createChart } from 'lightweight-charts';
import {onMounted} from "vue";
import {useTradingStore} from '~/stores/useTradingStore';



let areaSeries;
let candlestickSeries;

const interval = 1 * 60 * 1000; // 15 хвилин у мілісекундах

function roundToInterval(timestamp) {
  return Math.floor(timestamp / interval) * interval;
}

const tradingStore = useTradingStore();

const { $socket } = useNuxtApp();
onMounted(() => {
  const chartOptions = {
    autoSize: true,
    layout: {
      textColor: '#5E6673',
      background: {
        type: 'solid',
        color: 'rgb(22, 26, 30)'
      },
    },
    grid: {
      vertLines: { color: '#5E6673' },
      horzLines: { color: '#5E6673' },
    },
  };
  const chart = createChart(document.getElementById('container'), chartOptions);
   areaSeries = chart.addAreaSeries({
    lineColor: '#2962FF', topColor: '#2962FF',
    bottomColor: 'rgba(41, 98, 255, 0.28)',
  });
  // areaSeries.setData([{ time: 1722547133, value: 32.51 },]);

   candlestickSeries = chart.addCandlestickSeries({
    upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
    wickUpColor: '#26a69a', wickDownColor: '#ef5350',
  });
  // candlestickSeries.setData([]);

  chart.timeScale().fitContent();
  chart.applyOptions({
    timeScale: {
      timeVisible: true,
    }
  })

  $socket.on('message', (data) => {
    console.log('Received message:', data);
    const roundedTime = roundToInterval(data.time);
    tradingStore.tradingData.push({ time: roundedTime, open: data.open, high: data.high, low: data.low, close: data.close });

    candlestickSeries.update({ time: roundedTime, open: data.open, high: data.high, low: data.low, close: data.close });
  });
})


</script>

<style scoped lang="scss">

</style>