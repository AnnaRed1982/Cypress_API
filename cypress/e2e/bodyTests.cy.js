const url = " https://httpbin.org";

describe("http tests", () => {
  const body = {
    key: "value",
  };

  const request = {
    method: "PATCH",
    url: `${url}/patch`,
    body,
    failOnStatusCode: false,
  };

  it("complex post test", () => {
    cy.request(request).then((response) => {
      const expectedBody = {
        key: "value",
      };
      console.log(response.body);

      assert.equal(200, response.status);
      assert.notStrictEqual(body, response.body.data);
    //   assert.equal(expectedBody, response.body);
    });
  });
});
