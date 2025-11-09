/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'

/**
 * Generates random user data using Faker
 */
Cypress.Commands.add('generateUserData', () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  
  return {
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }).toLowerCase(),
    password: faker.internet.password({ length: 10 }),
    title: faker.helpers.arrayElement(['Mr', 'Mrs']),
    birthDay: faker.number.int({ min: 1, max: 28 }).toString(),
    birthMonth: faker.number.int({ min: 1, max: 12 }).toString(),
    birthYear: faker.number.int({ min: 1950, max: 2000 }).toString(),
    newsletter: true,
    specialOffers: true,
    firstName: firstName,
    lastName: lastName,
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: faker.helpers.arrayElement(['India', 'United States', 'Canada', 'Australia']),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobileNumber: faker.phone.number()
  }
})

/**
 * Generates random contact data using Faker
 */
Cypress.Commands.add('generateContactData', () => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    subject: faker.lorem.sentence(),
    message: faker.lorem.paragraph()
  }
})

/**
 * Generates payment data
 */
Cypress.Commands.add('generatePaymentData', () => {
  return {
    nameOnCard: faker.person.fullName(),
    cardNumber: faker.finance.creditCardNumber({ issuer: 'visa' }).replace(/-/g, ''),
    cvc: faker.finance.creditCardCVV(),
    expiryMonth: faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0'),
    expiryYear: faker.number.int({ min: 2025, max: 2030 }).toString()
  }
})

/**
 * Complete user registration flow
 */
Cypress.Commands.add('registerUser', (userData) => {
  cy.visit('/')
  cy.get('a[href="/login"]').click()
  
  // Fill signup form
  cy.get('[data-qa="signup-name"]').type(userData.name)
  cy.get('[data-qa="signup-email"]').type(userData.email)
  cy.get('[data-qa="signup-button"]').click()
  
  // Fill account information
  if (userData.title === 'Mr') {
    cy.get('#id_gender1').check()
  } else {
    cy.get('#id_gender2').check()
  }
  
  cy.get('[data-qa="password"]').type(userData.password)
  cy.get('[data-qa="days"]').select(userData.birthDay)
  cy.get('[data-qa="months"]').select(userData.birthMonth)
  cy.get('[data-qa="years"]').select(userData.birthYear)
  
  if (userData.newsletter) {
    cy.get('#newsletter').check()
  }
  if (userData.specialOffers) {
    cy.get('#optin').check()
  }
  
  // Fill address information
  cy.get('[data-qa="first_name"]').type(userData.firstName)
  cy.get('[data-qa="last_name"]').type(userData.lastName)
  cy.get('[data-qa="company"]').type(userData.company)
  cy.get('[data-qa="address"]').type(userData.address)
  cy.get('[data-qa="address2"]').type(userData.address2)
  cy.get('[data-qa="country"]').select(userData.country)
  cy.get('[data-qa="state"]').type(userData.state)
  cy.get('[data-qa="city"]').type(userData.city)
  cy.get('[data-qa="zipcode"]').type(userData.zipcode)
  cy.get('[data-qa="mobile_number"]').type(userData.mobileNumber)
  
  cy.get('[data-qa="create-account"]').click()
  cy.get('[data-qa="account-created"]').should('be.visible')
  cy.get('[data-qa="continue-button"]').click()
})

/**
 * Login user
 */
Cypress.Commands.add('loginUser', (email, password) => {
  cy.visit('/login')
  cy.get('[data-qa="login-email"]').should('be.visible').clear().type(email)
  cy.get('[data-qa="login-password"]').should('be.visible').clear().type(password)
  cy.get('[data-qa="login-button"]').click()
  // Wait for login to complete
  cy.get('a[href="/logout"]', { timeout: 10000 }).should('be.visible')
})

/**
 * Delete account
 */
Cypress.Commands.add('deleteAccount', () => {
  cy.get('a[href="/delete_account"]', { timeout: 10000 }).should('be.visible').click()
  cy.get('[data-qa="account-deleted"]', { timeout: 10000 }).should('be.visible')
  cy.get('[data-qa="continue-button"]').click()
})

/**
 * Add products to cart
 */
Cypress.Commands.add('addProductsToCart', (productCount = 2) => {
  cy.visit('/products')
  
  for (let i = 0; i < productCount; i++) {
    cy.get('.btn.add-to-cart').eq(i).click({ force: true })
    cy.wait(500)
    
    if (i < productCount - 1) {
      cy.get('.close-modal').click()
    } else {
      cy.contains('View Cart').click()
    }
  }
})

