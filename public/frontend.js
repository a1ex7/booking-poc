const socket = io.connect("http://localhost:9090");
const tickets = document.querySelector("#tickets");
const users = document.querySelector("#users");
const handle = document.querySelector("#handle");
const reserve = document.querySelector("#reserve");

reserve.addEventListener("click", () => {
    socket.emit("reserve-action", { handle: handle.value });
    handle.value = "";
});

socket.emit("get-free-tickets-quantity");

socket.on("put-free-tickets-quantity", quantity => {
    tickets.innerHTML = quantity;
});
socket.on("put-users-quantity", usersOnline => {
    users.innerHTML = usersOnline;
});
socket.on("alert", data => {
    alert(data.message);
});
