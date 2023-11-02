const url = " https://httpbin.org";

describe("http tests", () => {
  const request = {
    url,
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      const status = response.status;
      assert.equal(200, status);
    });
  });
});

describe("http tests", () => {
  const request = {
    method: "POST",
    url: `${url}/post`,
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      const status = response.status;
      assert.equal(200, status);
    });
  });
});

describe("http tests", () => {
  const request = {
    method: "PATCH",
    url: `${url}/patch`,
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      const status = response.status;
      assert.equal(200, status);
    });
  });
});

describe("http tests", () => {
  const request = {
    method: "DELETE",
    url: `${url}/delete`,
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      const status = response.status;
      assert.equal(200, status);
    });
  });
});
