import { publicRequest } from "../RequestMethod";
import { loginFail, loginStart, loginSuccess, regiStart, registSuccess, registFail } from "./userRedux";

export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("auth/login", user)
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFail())
    }
}

export const register = async(dispatch, user) => {
    dispatch(regiStart());
    try {
        const res = await publicRequest.post("auth/register", user)
        dispatch(registSuccess(res.data));
    } catch (error) {
        dispatch(registFail())
    }
}