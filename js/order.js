
const STORAGE_KEY = "cafeOrders";
 
const form = document.querySelector("#order-form");
const tbody = document.querySelector("#orders-body");
const message = document.querySelector("#message");
const clearButton = document.querySelector("#clear-orders");
 

function loadOrders() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}
 
function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}
 

function addCell(row, text) {
  const cell = document.createElement("td");

  cell.textContent = text;
  row.appendChild(cell);
}
 
function render() {
  const orders = loadOrders();
  tbody.innerHTML = "";
 
  if (orders.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.textContent = "No orders saved yet.";
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }
 
  orders.forEach(function (order) {
    const row = document.createElement("tr");
    addCell(row, order.name);
    addCell(row, order.item + " (" + order.size + ")");
    addCell(row, String(order.qty));
    addCell(row, order.pickup);

    addCell(row, order.extras.length ? order.extras.join(", ") : "none");
    tbody.appendChild(row);
  });
}
 
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page reload
 
  const data = new FormData(form);
  const order = {
    name: data.get("name").trim(),
    phone: data.get("phone"),
    item: data.get("item"),
    size: data.get("size"),
    qty: Number(data.get("qty")),
    extras: data.getAll("extras"),
    pickup: data.get("pickup"),
    notes: data.get("notes").trim()
  };
 
  const orders = loadOrders();
  orders.push(order);
  saveOrders(orders);
 

  form.reset();
  message.textContent = "Thank you, " + order.name + "! Your order has been saved.";
  render();
});
 
clearButton.addEventListener("click", function () {
  localStorage.removeItem(STORAGE_KEY);
  message.textContent = "All saved orders were cleared.";
  render();
});
 
render();