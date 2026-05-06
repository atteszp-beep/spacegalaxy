const socket = new WebSocket("ws://192.168.1.100:3000"); // IDE írd a szerver IP-det

let player = {
    x: 100,
    y: 100,
    speed: 5
};

// Kapcsolódás
socket.onopen = () => {
    console.log("Connected to server");

    socket.send(JSON.stringify({
        type: "join",
        id: Date.now()
    }));
};

// Üzenet fogadás
socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === "update") {
        players = data.players;
    }
};

// Canvas setup
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

let keys = {};

// Billentyű figyelés
document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

// Játék loop
function gameLoop() {

    // Mozgás
    if (keys["w"]) player.y -= player.speed;
    if (keys["s"]) player.y += player.speed;
    if (keys["a"]) player.x -= player.speed;
    if (keys["d"]) player.x += player.speed;

    // Küldés szervernek
    socket.send(JSON.stringify({
        type: "move",
        x: player.x,
        y: player.y
    }));

    // Rajzolás
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "lime";
    ctx.fillRect(player.x, player.y, 20, 20);

    requestAnimationFrame(gameLoop);
}

gameLoop();