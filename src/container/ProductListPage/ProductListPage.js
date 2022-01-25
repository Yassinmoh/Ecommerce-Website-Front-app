import React, { useEffect ,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout/Layout'
import { getProductBySlug } from '../../actions/product.action'
import { useParams } from 'react-router-dom'
import './Product_list_page.css'
import {generatePublicUrl} from '../../urlConfig'



const ProductListPage = (props) => {
    const product = useSelector(state => state.product)
    const [priceRange , setPriceRange] =useState({
        under5K:5000,
        under10K:10000,
        under15K:15000,
        under20K:20000,
        under30K:30000,
    })
    const dispatch = useDispatch()
    const { slug } = useParams();

    useEffect(() => {
        dispatch(getProductBySlug(slug))
    }, [])

    return (
        <>
            <Layout>
                {
                    Object.keys(product.productsByPrice).map((key, index) => {
                        return (
                            <div className="card" >
                                <div className="cardHeader">
                                    <div>{slug} mobile under {priceRange[key]}</div>
                                    <button>View All</button>
                                </div>
                                <div style={{display:'flex'}} >
                                    {
                                        product.productsByPrice[key].map(product =>
                                            <div className="productContainer" >
                                                <div className="productImgContainer">
                                                    <img src={generatePublicUrl(product.productPictures[0].img)} />
                                                </div>
                                                <div className="productInfo">
                                                    <div style={{ margin: '5px 0' }}>{product.name}</div>
                                                    <div>
                                                        <span>4.2</span>$
                                                        <span>3355</span>
                                                    </div>
                                                    <div className="productPrice">{product.price}</div>
                                                </div>
                                            </div>)
                                    }
                                </div>
                            </div>
                        )
                    })
                }

            </Layout>
        </>
    );
};

export default ProductListPage;
