const mockOrders = {
    "101": "Shipped and on the way",
    "102": "Processing",
    "103": "Delivered",
};

const mockStock = {
    "Laptop": 5,
    "Smartphone": 0,
    "Tablet": 2,
};

const paymentHistory = [
    { orderId: "101", date: "2024-01-01", amount: "₹150.00", status: "Paid" },
    { orderId: "102", date: "2024-01-05", amount: "₹300.00", status: "Pending" },
    { orderId: "103", date: "2024-01-07", amount: "₹200.00", status: "Paid" },
];

function trackOrder() {
    const orderId = document.getElementById("order-id").value;
    const status = mockOrders[orderId] || "Order not found. Please try again.";
    document.getElementById("order-status").innerText = status;
}

function checkStock() {
    const productName = document.getElementById("product-name").value;
    const stock = mockStock[productName] || "Product not found.";
    document.getElementById("stock-status").innerText = stock;
}

function loadPaymentHistory() {
    const tbody = document.getElementById("payment-history-body");
    tbody.innerHTML = "";
    paymentHistory.forEach(record => {
        const row = `<tr><td>${record.orderId}</td><td>${record.date}</td><td>${record.amount}</td><td>${record.status}</td></tr>`;
        tbody.innerHTML += row;
    });
}

window.onload = () => {
    if (document.getElementById("payment-history-body")) {
        loadPaymentHistory();
    }
};
