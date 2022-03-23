const HelloWorld = artifacts.require("HelloWorld");

// accounts constas na ethereum
contract('HelloWorld', function(accounts) {
  beforeEach(async () => {
    contract = await HelloWorld.new();
  });

  it.skip('mostrar mensagem', async () => {
    const res = await contract.getMessage();

    assert(res === "Ola Jonbrand!");
  });
});
