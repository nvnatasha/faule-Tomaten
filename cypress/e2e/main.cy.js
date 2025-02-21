// Mock data to use for testing:
// import posters from '../fixtures/movie_posters.json' 
// import details from '../fixtures/movie_details.json' 

describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_posters.json"
    })
    cy.intercept("GET", "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/*", {
      statusCode: 200,
      fixture: "movie_details.json"
    })
    cy.visit('http://localhost:3000/')
  });

  it('displays title on page load', () => {
    cy.get('h1')
    .contains('faule Tomaten')
  })

  it('displays movies on page load', () => {
    cy.get('.MoviesContainer .MoviePoster').should('have.length', 4)
  })

  it('first movie on page load with proper attributes', () => {
    cy.get('.MoviePoster').first().find('img').should('have.attr', 'src').and('include', 'https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg')
    cy.get('.vote-container h3').first().should('exist').invoke('text').should('include', '32544')
    cy.get('.vote-container button img').should('exist')
  })

  it('displays last movie on page load with proper attributes', () => {
    cy.get('.MoviePoster').last().find('img').should('have.attr', 'src').and('include', 'https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg')
    cy.get('.vote-container h3').last().should('exist').invoke('text').should('include', '27642')
    cy.get('.vote-container button img').last().should('exist')
  })

  it('when a user clicks on a movie they see the movies details', () => {
    cy.get('.MoviePoster').first().click()
    cy.get('.MovieDetails h2').should('exist').invoke('text').should('include', 'Spirited Away')
    cy.get('.MovieDetails img').should('have.attr', 'src').and('include', 'https://image.tmdb.org/t/p/original//m4TUa2ciEWSlk37rOsjiSIvZDXE.jpg')
    cy.get('.genres .genre').first().invoke('text').should('include', 'Animation')
    cy.get('.genres .genre').eq(1).invoke('text').should('include', 'Family')
    cy.get('.genres .genre').eq(2).invoke('text').should('include', 'Fantasy')
    cy.get('.MovieDetails p').invoke('text').should('include', 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.')
  })

  it('when a user upvotes the movies votes increase by one', () => {
    cy.intercept("Patch", "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/*", {
      statusCode: 200,
      body: {
        id: 155,
        poster_path: "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg", 
        title: "The Dark Knight", 
        vote_count: 32545
      }
    })

    cy.get('.vote-container h3').first().should('exist').invoke('text').should('include', '32544')
    cy.get('.MoviePoster').first().find('.vote-container').find('button').first().click()
    cy.get('.vote-container h3').first().should('exist').invoke('text').should('include', '32545')
  })

  it('when a user downvotes the movies votes decrease by one', () => {
    cy.intercept("Patch", "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/*", {
      statusCode: 200,
      body: {
        id: 155,
        poster_path: "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg", 
        title: "The Dark Knight", 
        vote_count: 32543
      }
    })
    cy.get('.vote-container h3').first().should('exist').invoke('text').should('include', '32544')
    cy.get('.MoviePoster').first().find('.vote-container').find('button').eq(1).click()
    cy.get('.vote-container h3').first().should('exist').invoke('text').should('include', '32543')
  })
})









