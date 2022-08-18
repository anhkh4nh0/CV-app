import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../Components/Layout';
import data from '../utils/data';
import Link from 'next/link';
import Image from 'next/image';

const ProductScreen = () => {
    const { query } = useRouter();
    const { slug } = query;
    const product = data.products.find(x => x.slug === slug);
    if (!product) {
        return <div>Product Not Found</div>
    }
    return (
        <Layout title={product.name} >
            <div className="py-2 font-bold">
                <Link href="/">Back to Product</Link>
            </div>
            <div className="grid md:grid-cols-4 md:gap-3">
                <div className="md:col-span-2">
                    <Image src={product.image} alt={product.name} Layout='responsive' width={640} height={640} />
                </div>
                <div>
                    <ul className='font-bold'>
                        <li><h1 className="text-lg">{product.slug}</h1></li>
                        <li>Category : {product.category}</li>
                        <li>Brand : {product.brand}</li>
                        <li>{product.rating} of {product.numReviews}</li>
                        <li>Description : {product.description}</li>
                    </ul>
                </div>
                <div><div className='card p-5 font-bold'>
                    <div className="flex mb-2 justify-between">
                        <div>Price : </div>
                        <div>$ {product.price}</div>
                    </div>
                    <div className="flex mb-2 justify-between">
                        <div>Status : </div>
                        <div>{product.countInStock > 0 ? 'In Stock' : 'Unavaliable'}</div>
                    </div>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border w-full border-blue-500 hover:border-transparent rounded">ADD TO CART</button>
                </div></div>
            </div>

        </Layout>
    )
}

export default ProductScreen