context("Window", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000/");
  });

  it("input should be focusable", () => {
    cy.get("input").focus().should("be.focused");
    cy.focused().type("Hello").should("have.value", "Hello");
  });

  it("my-input should accept text", () => {
    cy.get("my-input").focus().shadow().find("input").should("be.focused");
    cy.focused().click().type("Hello").should("have.value", "Hello");
  });
});
