describe('Render Search Form Components', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('/');
  });

  it('renders search form with correct initial state', () => {
    // Assert the search form is visible and empty initially
    cy.get('[data-test="search-form"]').should('be.visible').find('input').should('have.value', ''); // Input is empty at the start

    // Assert the search button is visible
    cy.get('[data-test="search-form-button"]').should('be.visible');

    // Assert the reset button is not visible initially
    cy.get('[data-test="search-form-reset"]').should('not.exist');
  });

  it('shows reset button button when input contains text', () => {
    const searchText = 'Nokogiri';

    // Type into the search input
    cy.get('[data-test="search-form"] input').type(searchText).should('have.value', searchText); // Input now contains text

    // Assert the reset button becomes visible
    cy.get('[data-test="search-form"]').submit();

    // Assert the reset button becomes visible
    cy.get('[data-test="search-form-reset"]').should('be.visible');
  });

  it('resets the search input when reset button is clicked', () => {
    const searchText = 'Nokogiri';

    // Type into the search input
    cy.get('[data-test="search-form"] input').type(searchText).should('have.value', searchText);

    // Assert the reset button becomes visible
    cy.get('[data-test="search-form"]').submit();

    // Assert the reset button becomes visible
    cy.get('[data-test="search-form-reset"]').should('be.visible');

    // Click the reset button
    cy.get('[data-test="search-form-reset"]').click();

    // Assert the input is cleared after clicking the reset button
    cy.get('[data-test="search-form"] input').should('have.value', '');

    // Assert the reset button disappears after resetting
    cy.get('[data-test="search-form-reset"]').should('not.exist');

    // Assert the search button becomes visible again
    cy.get('[data-test="search-form-button"]').should('be.visible');
  });
});
