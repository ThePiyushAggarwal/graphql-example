const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.99,
    reviews: [],
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 59.99,
    reviews: [],
  },
]

const getAllProducts = () => {
  return products
}

const getProductsByPrice = (min, max) => {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  )
}

const getProduct = (id) => {
  return products.find((product) => product.id === id)
}

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  }
  products.push(newProduct)
  return newProduct
}

const addProductReview = (id, rating, comment) => {
  const matchedProduct = getProduct(id)

  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    }

    matchedProduct.reviews.push(newProductReview)
    return newProductReview
  }
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProduct,
  addNewProduct,
  addProductReview,
}
