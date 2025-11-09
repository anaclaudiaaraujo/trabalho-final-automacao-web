import './commands'


Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent the error from failing the test
  return false
})

Cypress.config('defaultCommandTimeout', 10000)