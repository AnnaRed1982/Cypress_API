const url = " https://httpbin.org";

function getRandomQuery(query) {
  return Math.floor(Math.random() * query);
}

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

  it("test random query", () => {
    for (let i = 0; i < 10; i++) {
      const randomQuery = getRandomQuery(1000000000000000).toString();
      console.log(randomQuery);

      const request = {
        url: `${url}/get`,
        qs: {
          key: randomQuery,
        },
      };

      cy.request(request).then((response) => {
        assert.isTrue(response.status == 200);
      });
    }
  });
});
