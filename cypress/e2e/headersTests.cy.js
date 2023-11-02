const url = " https://httpbin.org";

describe("http tests", () => {
  const request = {
    method: "GET",
    url: `${url}/headers`,
    headers: {
      customHeader: "customValue",
      "user-agent": "Test user-agent",
      Cookie: "cookieValue",
    },
    failOnStatusCode: false,
  };

  it("test that header set correctly", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("customValue", response.requestHeaders.customHeader);
    });
  });

  it("test that user-agent set correctly", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("Test user-agent", response.requestHeaders["user-agent"]);
    });
  });
    
  it("test send cookie", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);
      assert.equal("cookieValue", response.requestHeaders["Cookie"]);
    });
  });
});
