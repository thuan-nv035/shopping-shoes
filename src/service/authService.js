import {Axios} from "./Axios";

export function doLogin(payload) {
    return Axios.post("login",payload);
}

export function putUser(payload) {
    return Axios.put("update-profile", payload)
}

export const authService = {
    doLogin,
    putUser
};