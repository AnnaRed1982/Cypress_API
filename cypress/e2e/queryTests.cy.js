const url = " https://httpbin.org";

describe("http tests", () => {
  const request = {
    url: `${url}/get`,
    qs: {
      key: "value",
    },
    failOnStatusCode: false,
  };

  it("response value should be value", () => {
    cy.request(request).then((response) => {
      console.log(response.body);

      assert.equal("value", response.body.args.key);
    });
  });
});


