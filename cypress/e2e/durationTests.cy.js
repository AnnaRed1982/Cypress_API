const url = "https://rickandmortyapi.com/api";

describe("http tests", () => {
  const request = {
    url,
    failOnStatusCode: false,
  };

  it("test duration", () => {
    cy.request(request).then((response) => {
      assert.isTrue(response.duration <= 150);
    });
  });
});
