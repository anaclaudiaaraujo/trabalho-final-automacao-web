class CartPage {
  elements = {
    cartItems: () => cy.get('.cart_description'),
    cartInfo: () => cy.get('#cart_info'),
    proceedToCheckoutButton: () => cy.contains('Proceed To Checkout')
  }

  verifyCartPageDisplayed() {
    cy.url().should('include', '/view_cart')
    this.elements.cartInfo().should('be.visible')
  }

  clickProceedToCheckout() {
    this.elements.proceedToCheckoutButton().click()
  }
}

export default CartPage
