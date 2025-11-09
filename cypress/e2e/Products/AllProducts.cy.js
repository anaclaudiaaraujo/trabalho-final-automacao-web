import HomePage from '../../support/pages/HomePage'
import ProductsPage from '../../support/pages/ProductsPage'
import ProductDetailPage from '../../support/pages/ProductDetailPage'

describe('Test Case 8: Verify All Products and product detail page', () => {
  const homePage = new HomePage()
  const productsPage = new ProductsPage()
  const productDetailPage = new ProductDetailPage()

  it('Should verify all products and product detail page', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    homePage.visit()

    // 3. Verify that home page is visible successfully
    homePage.verifyHomePageVisible()

    // 4. Click on 'Products' button
    homePage.clickProducts()

    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    productsPage.verifyAllProductsVisible()

    // 6. The products list is visible
    productsPage.verifyProductsListVisible()

    // 7. Click on 'View Product' of first product
    productsPage.clickViewProduct()

    // 8. User is landed to product detail page
    // 9. Verify that detail is visible: product name, category, price, availability, condition, brand
    productDetailPage.verifyProductDetailsVisible()
  })
})