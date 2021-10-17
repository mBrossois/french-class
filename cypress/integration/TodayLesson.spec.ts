describe(`First lessons time`, {viewportWidth: 1920, viewportHeight: 1080}, () => {
    beforeEach('setup today lesson', () => {
      cy.visit('/today-lesson')
    });

  it(`should initialize`, () => {
    cy.get("[data-test-id=exercise-one]")
      .should('exist')
  });

  it(`should be on first page`, () => {
    cy.get("[data-test-id=progressbar-lines]")
      .eq(0)
      .should("exist")
      .and("have.css", "background-color", "rgb(128, 128, 128)");

    cy.get("[data-test-id=progressbar-title]")
      .first()
      .should("exist")
      .and("have.css", "border", "1px solid rgb(129, 212, 250)");

    cy.get("[data-test-id=exercise-one]")
      .should('exist')
      .and('be.visible');
  })

  it(`should go to second page on click next button`, () => {
    cy.get("[data-test-id=exercise-one]")
      .should('exist')
      .and('be.visible');

      cy.get('[data-test-id=button-next-today-lesson]')
        .should("exist")
        .click();

    cy.get("[data-test-id=progressbar-lines]")
      .eq(0)
      .should("exist")
      .and("have.css", "background-color", "rgb(129, 212, 250)");

    cy.get("[data-test-id=progressbar-lines]")
      .eq(1)
      .should("exist")
      .and("have.css", "background-color", "rgb(128, 128, 128)");


    cy.get("[data-test-id=progressbar-title]")
      .first()
      .should("exist")
      .and("have.css", "border", "1px solid rgb(129, 212, 250)")
      .and("have.css", "background-color", "rgb(129, 212, 250)")
      .and("have.css", "color", "rgb(255, 255, 255)");

    cy.get("[data-test-id=progressbar-title]")
      .eq(1)
      .should("exist")
      .and("have.css", "border", "1px solid rgb(129, 212, 250)");

    cy.get("[data-test-id=exercise-one]")
      .should('not.exist');
  });
});
