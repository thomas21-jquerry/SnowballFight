const socket = io('ws://localhost:5005');

socket.on('connect', ()=>{
    console.log('connected')
});