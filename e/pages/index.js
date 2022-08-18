import Layout from '../Components/Layout'
import ProductItem from '../Components/ProductItems'
import data from './utils/data'

export default function Home(products) {
  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug)};

  return (
    <>
    <Layout title="Home Page">Home page
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {data.products.map((product) => (
        <ProductItem
          product={product}
          key={product.slug}
          addToCartHandler={addToCartHandler}
        ></ProductItem>
      ))}
    </div>
  </Layout></>
  )
}
