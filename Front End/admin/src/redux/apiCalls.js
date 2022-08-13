import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from '../requestMethods';
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
} from "./productRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

//GET Product list
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get('/product');
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        // const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

export const updatteProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
        dispatch(updateProductFailure());
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post('/product', product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFailure());
    }
}
// export const addProduct = async (product, dispatch) => {
//     dispatch(addProductStart());
//     try {
//         const res = await userRequest({
//             method: 'POST',
//             url: '/product',
//             headers: {
//                 token: `Bearer ${localStorage.getItem('token')}`
//             },
//             data: product

//         })
//         dispatch(addProductSuccess(res.data));
//     } catch (err) {
//         dispatch(addProductFailure());
//     }
// }