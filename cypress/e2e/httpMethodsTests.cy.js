const url = "https://rickandmortyapi.com/api";

describe("http tests", () => {
  const request = {
    url,
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      console.log(response);
      const status = response.status;

      assert.equal(200, status);
    });
  });
});

describe("http tests", () => {
  const request = {
    url,
    method: "POST",
    failOnStatusCode: false,
  };

  it("response code should be 404", () => {
    cy.request(request).then((response) => {
      console.log(response);
      const status = response.status;

      assert.equal(404, status);
    });
  });
});