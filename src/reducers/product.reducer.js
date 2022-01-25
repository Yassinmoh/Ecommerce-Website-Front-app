import {productConstants} from '../actions/constants'

const initState={
    products:[],
    productsByPrice:{
        under5K:[],
        under10K:[],
        under15K:[],
        under20K:[],
        under30K:[],
    }
}

export default (state= initState ,action)=>{
    switch(action.type){
        case productConstants.GET_PRODUCT_BY_SLUG:
            state={
                ...state,
                products:action.payload.products,
                productsByPrice:{
                    ...action.payload.productsByPrice
                }
            }
            break;
    }
    return state;
}
