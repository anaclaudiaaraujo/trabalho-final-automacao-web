class CheckoutPage {
  elements = {
    addressDelivery: () => cy.get('#address_delivery'),
    addressInvoice: () => cy.get('#address_invoice'),
    reviewOrder: () => cy.get('#cart_info'),
    commentTextArea: () => cy.get('textarea.form-control'),
    placeOrderButton: () => cy.contains('Place Order'),
    
    // Payment page elements
    nameOnCard: () => cy.get('[data-qa="name-on-card"]'),
    cardNumber: () => cy.get('[data-qa="card-number"]'),
    cvc: () => cy.get('[data-qa="cvc"]'),
    expiryMonth: () => cy.get('[data-qa="expiry-month"]'),
    expiryYear: () => cy.get('[data-qa="expiry-year"]'),
    payButton: () => cy.get('[data-qa="pay-button"]'),
    
    // Success message
    successMessage: () => cy.get('.alert-success.alert')
  }

  verifyAddressDetails() {
    this.elements.addressDelivery().should('be.visible')
    this.elements.addressInvoice().should('be.visible')
  }

  verifyReviewOrder() {
    this.elements.reviewOrder().should('be.visible')
  }

  fillCommentAndPlaceOrder(comment) {
    this.elements.commentTextArea().type(comment)
    this.elements.placeOrderButton().click()
  }

  fillPaymentDetails(paymentData) {
    this.elements.nameOnCard().type(paymentData.nameOnCard)
    this.elements.cardNumber().type(paymentData.cardNumber)
    this.elements.cvc().type(paymentData.cvc)
    this.elements.expiryMonth().type(paymentData.expiryMonth)
    this.elements.expiryYear().type(paymentData.expiryYear)
  }

  clickPayAndConfirm() {
    this.elements.payButton().click()
  }

  verifyOrderSuccess() {
    // Wait for the success message to appear and verify text
    cy.get('[data-qa="order-placed"]').should('be.visible')
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
  }
}

export default CheckoutPage
