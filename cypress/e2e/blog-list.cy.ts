describe('BlogList Component', () => {
  beforeEach(() => {
    // Mock API response for blog list
    cy.intercept('GET', 'https://dev.to/api/articles', {
      fixture: 'blog-list.json', // Mock data stored in the "blogs.json" fixture file
    }).as('fetchBlogs');

    // Visit the blog list page
    cy.visit('/'); // Adjust this route based on your app's routing
  });

  it('should render the blog list correctly', () => {
    // Verify the list contains the expected number of blogs
    cy.get('.blog-card').should('have.length', 3); // Adjust this based on your fixture data
  });

  it('should handle API errors gracefully', () => {
    // Simulate an API error
    cy.intercept('GET', 'https://dev.to/api/articles', {
      statusCode: 500,
      body: { error: 'Internal Server Error' },
    }).as('fetchBlogsError');

    cy.visit('/'); // Reload the page
    cy.wait('@fetchBlogsError');

    // Verify error message
    cy.get('span').should('contain.text', 'No posts found. Please try again later.');
  });

  it('should navigate to the blog details page when a blog card is clicked', () => {
    // Click on the first blog card
    cy.get('.blog-card').first().find('a').click();

    // Verify navigation to the correct blog details page
    cy.url().should('include', '/2241152');
    cy.get('h1').should('contain.text', 'Is there Any Unique Project Ideas left?');
  });
});
