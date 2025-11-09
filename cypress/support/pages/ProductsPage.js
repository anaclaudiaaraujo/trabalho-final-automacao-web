class ProductsPage {
  elements = {
    allProductsTitle: () => cy.get('.features_items h2'),
    searchedProductsTitle: () => cy.get('.features_items h2'),
    productsList: () => cy.get('.features_items .col-sm-4'),
    searchInput: () => cy.get('#search_product'),
    searchButton: () => cy.get('#submit_search'),
    viewProductLink: () => cy.get('a[href*="/product_details"]').first(),
    addToCartButtons: () => cy.get('.btn.add-to-cart'),
    continueShoppingButton: () => cy.get('.btn.btn-success.close-modal'),
    viewCartLink: () => cy.contains('View Cart')
  }

  verifyAllProductsVisible() {
    this.elements.allProductsTitle()
      .should('be.visible')
      .and('contain', 'All Products')
    cy.url().should('include', '/products')
  }

  verifyProductsListVisible() {
    this.elements.productsList().should('have.length.greaterThan', 0)
  }

  clickViewProduct() {
    this.elements.viewProductLink().click()
  }

  searchProduct(productName) {
    this.elements.searchInput().type(productName)
    this.elements.searchButton().click()
  }

  verifySearchedProductsVisible() {
    this.elements.searchedProductsTitle()
      .should('be.visible')
      .and('contain', 'Searched Products')
  }

  verifySearchResults() {
    this.elements.productsList().should('have.length.greaterThan', 0)
  }

  addProductToCart(productIndex = 0) {
    this.elements.addToCartButtons().eq(productIndex).click({ force: true })
  }

  clickContinueShopping() {
    this.elements.continueShoppingButton().click()
  }

  clickViewCart() {
    this.elements.viewCartLink().click()
  }
}

export default ProductsPage
