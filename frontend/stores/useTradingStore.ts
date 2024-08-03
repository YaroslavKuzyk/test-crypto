import { defineStore } from 'pinia'
import { useNuxtApp } from '#app';

export const useTradingStore = defineStore({
    id: 'trading-store',
    state: () => ({
        tradingData: [],
    }),
    getters: {},
    actions: {
        connectToTradingSocket() {
            const { $socket } = useNuxtApp();

            $socket.on('connect', () => {
                console.log('Connected to Trading WebSocket server');
            });
        }
    },
})
