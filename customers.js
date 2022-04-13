const customers = [];

function addCustomer() {
  const username = process.argv.slice(2);

  if (!username || username.length === 0) {
    throw "Error: userName is empty!";
  }

  const tempPwd = Math.floor(Math.random() * 100000);

  customers.push({
    username: username,
    password: tempPwd,
  });

  customers.forEach((customer) => {
    console.log(`ok. username: ${customer.username} with temporary password: ${customer.password}.`);
  });
}

addCustomer();
