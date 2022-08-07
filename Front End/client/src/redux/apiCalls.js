import { publicRequest } from "../RequestMethod";
import { loginFail, loginStart, loginSuccess } from "./userRedux";

export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("auth/login", user)
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFail())
    }
}