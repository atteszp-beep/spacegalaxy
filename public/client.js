const socket = new WebSocket("ws://localhost:3000");

socket.onopen = () => {
    console.log("Connected to server");
    socket.send(JSON.stringify({ type: "join", name: "Player1" }));
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("Message from server:", data);
};

document.addEventListener("keydown", (e) => {
    socket.send(JSON.stringify({
        type: "move",
        key: e.key
    }));
});
