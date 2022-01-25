import axios from "axios";
import { productConstants } from "./constants";

export const getProductBySlug = (slug) =>{
    return async dispatch => {
        const res = await axios.get(`http://localhost:2000/api/products/${slug}`)
        if(res.status === 200){
            dispatch({
                type:productConstants.GET_PRODUCT_BY_SLUG ,
                payload:res.data
            })
        }else{
            
        }
        console.log('res',res)
    }
}