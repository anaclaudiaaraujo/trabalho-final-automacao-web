class ProductDetailPage {
  elements = {
    productName: () => cy.get('.product-information h2'),
    productCategory: () => cy.get('.product-information p').contains('Category'),
    productPrice: () => cy.get('.product-information span span'),
    productAvailability: () => cy.get('.product-information p').contains('Availability'),
    productCondition: () => cy.get('.product-information p').contains('Condition'),
    productBrand: () => cy.get('.product-information p').contains('Brand')
  }

  verifyProductDetailsVisible() {
    cy.url().should('include', '/product_details')
    this.elements.productName().should('be.visible')
    this.elements.productCategory().should('be.visible')
    this.elements.productPrice().should('be.visible')
    this.elements.productAvailability().should('be.visible')
    this.elements.productCondition().should('be.visible')
    this.elements.productBrand().should('be.visible')
  }
}

export default ProductDetailPage
