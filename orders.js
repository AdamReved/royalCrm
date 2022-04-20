const orders = [];

function addOrder() {
  const order = process.argv.slice(2);

  if (!order || order.length === 0) {
    throw "Error: order is empty!";
  }

  const orderId = Math.floor(Math.random() * 100000);

  orders.push({
    order: order,
    id: orderId,
  });

  orders.forEach((order) => {
    console.log(`ok. order: ${order.order} with temporary id: ${order.id}.`);
  });
}

addOrder();
