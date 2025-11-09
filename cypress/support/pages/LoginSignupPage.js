class LoginSignupPage {
  elements = {
    // Signup elements
    signupTitle: () => cy.get('.signup-form h2'),
    signupName: () => cy.get('[data-qa="signup-name"]'),
    signupEmail: () => cy.get('[data-qa="signup-email"]'),
    signupButton: () => cy.get('[data-qa="signup-button"]'),
    signupErrorMessage: () => cy.get('.signup-form p'),
    
    // Login elements
    loginTitle: () => cy.get('.login-form h2'),
    loginEmail: () => cy.get('[data-qa="login-email"]'),
    loginPassword: () => cy.get('[data-qa="login-password"]'),
    loginButton: () => cy.get('[data-qa="login-button"]'),
    loginErrorMessage: () => cy.get('.login-form p')
  }

  verifySignupVisible() {
    this.elements.signupTitle()
      .should('be.visible')
      .and('contain', 'New User Signup!')
  }

  verifyLoginVisible() {
    this.elements.loginTitle()
      .should('be.visible')
      .and('contain', 'Login to your account')
  }

  fillSignupForm(name, email) {
    this.elements.signupName().type(name)
    this.elements.signupEmail().type(email)
  }

  clickSignup() {
    this.elements.signupButton().click()
  }

  verifySignupError() {
    this.elements.signupErrorMessage()
      .should('be.visible')
      .and('contain', 'Email Address already exist!')
  }

  fillLoginForm(email, password) {
    this.elements.loginEmail().type(email)
    this.elements.loginPassword().type(password)
  }

  clickLogin() {
    this.elements.loginButton().click()
  }

  verifyLoginError() {
    this.elements.loginErrorMessage()
      .should('be.visible')
      .and('contain', 'Your email or password is incorrect!')
  }
}

export default LoginSignupPage
