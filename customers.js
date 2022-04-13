const customers = [];

function addCustomer() {
  const args = process.argv;
  const username = args.slice(2);

  if (!username || username.length === 0) {
    throw "Error: userName is empty!";
  }

  const tempPwd = Math.floor(Math.random() * 100000);

  customers.push({
    username: username,
    password: tempPwd,
  });

  customers.forEach((customer) => {
    console.log(`Ok - customer ${customer} was added`);
  });
}

addCustomer();
