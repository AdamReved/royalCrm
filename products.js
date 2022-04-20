const products = [];

function addProduct() {
  const product = process.argv.slice(2);

  if (!product || product.length === 0) {
    throw "Error: order is empty!";
  }

  const productId = Math.floor(Math.random() * 100000);

  products.push({
    product: product,
    productId: productId,
  });

  products.forEach((product) => {
    console.log(`ok. product: ${product.product} with temporary id: ${product.productId}.`);
  });
}

addProduct();
