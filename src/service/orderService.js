import {Axios} from "./Axios";

export function makeOrder(payload) {
    return Axios.post("make-order", payload)
}

export const orderService = {
    makeOrder
}