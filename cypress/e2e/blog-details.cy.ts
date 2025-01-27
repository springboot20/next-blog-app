describe('BlogDetails Component', () => {
  beforeEach(() => {
    // Mock API responses with realistic data
    cy.intercept('GET', 'https://dev.to/api/articles/2241152', {
      fixture: 'blogDetails.json', // Use a fixture file for mock data
    }).as('fetchBlogDetails');

    cy.intercept('GET', 'https://dev.to/api/articles', {
      fixture: 'blogs.json', // Use a fixture file for related blogs
    }).as('fetchBlogs');

    // Visit the blog details page
    cy.visit('/2241152'); // Adjust route as needed
  });

  it('should render the blog details correctly', () => {
    cy.get('h1').should('contain.text', 'Is there Any Unique Project Ideas left?');
    cy.get('p').contains('January 26').should('be.visible'); // Dynamically extract date

    cy.get('img[alt="cover img"]')
      .should('have.attr', 'src')
      .and(
        'include',
        'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8xyz9q345nkxgv8he658.png'
      );

    cy.get('article').should('contain.text', 'Hi dev! We all know that to become a good dev');
  });

  it('should display "More articles" section with additional blogs', () => {
    cy.get('h1').contains('More articles').should('be.visible');
    cy.get('.grid > .blog-card').should('have.length', 3); // Ensure 3 blogs are displayed
  });
});
