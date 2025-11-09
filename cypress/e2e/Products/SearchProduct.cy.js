import HomePage from '../../support/pages/HomePage'
import ProductsPage from '../../support/pages/ProductsPage'

describe('Test Case 9: Search Product', () => {
  const homePage = new HomePage()
  const productsPage = new ProductsPage()

  it('Should search for products successfully', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    homePage.visit()

    // 3. Verify that home page is visible successfully
    homePage.verifyHomePageVisible()

    // 4. Click on 'Products' button
    homePage.clickProducts()

    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    productsPage.verifyAllProductsVisible()

    // 6. Enter product name in search input and click search button
    cy.fixture('products').then((products) => {
      const searchTerm = products.searchTerms.dress
      productsPage.searchProduct(searchTerm)

      // 7. Verify 'SEARCHED PRODUCTS' is visible
      productsPage.verifySearchedProductsVisible()

      // 8. Verify all the products related to search are visible
      productsPage.verifySearchResults()
    })
  })
})