import { io } from 'socket.io-client';

export default defineNuxtPlugin((nuxtApp) => {
    const socket = io('http://localhost:8000');

    socket.on('connect', () => {
        console.log('Connected to WebSocket server');
    });

    socket.on('message', (data) => {
        console.log('Received message:', data);
    });

    nuxtApp.provide('socket', socket);
});
