describe('Navigation Component', () => {
  beforeEach(() => {
    // Visit the page where the Navigation component is rendered
    cy.visit('/');
  });

  it('should display the logo', () => {
    cy.get('header')
      .first()
      .within(() => {
        cy.get('img[alt="logo"]') // Check the logo image
          .should('be.visible', { timeout: 6000 })
          .and('have.attr', 'src')
          .should('include', '/_next/image?url=%2Fassets%2Flogo.png&w=384&q=75');
      });
  });

  it('should display account and take assessment buttons on desktop', () => {
    cy.viewport(1280, 1185); // Set viewport to desktop size
    cy.get('header')
      .first()
      .within(() => {
        cy.contains('button', 'Account').should('be.visible');
        cy.contains('button', 'Take Assesment').should('be.visible');
      });
  });

  it('should display mobile menu button on smaller screens', () => {
    cy.viewport(375, 711); // Set viewport to mobile size
    cy.get('header')
      .first()
      .within(() => {
        cy.get('button span')
          .contains(/open menu/i)
          .should('be.visible');
      });
  });

  it('should navigate to "About" when clicking the About link', () => {
    cy.get('nav').contains('About').click({ force: true });
    cy.url().should('include', '/'); // Replace with your actual "About" page path
  });
});
