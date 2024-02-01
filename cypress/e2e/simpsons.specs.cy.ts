describe("Given a Simpsons page", () => {
  describe("When the user clicks on the Next button", () => {
    it("Then it should show the heading 'Marge Simpsons'", () => {
      cy.visit("http://localhost:5173");

      cy.findByRole("heading", { name: /Marge Simpson/i }).should("exist");

      cy.findByLabelText(/Pagination previous button/i).should("exist");
      cy.findByLabelText(/Pagination next button/i).should("exist");

      cy.findByRole("button", { name: /Pagination next button/i }).click();

      cy.findByRole("heading", { name: /Dolph/i }).should("exist");
      cy.findByText(/11 - 20 \/ 643/i).should("exist");
    });
  });
});
