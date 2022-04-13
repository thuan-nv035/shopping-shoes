import {Axios} from "@/service/Axios";

export function getDataUser() {
    return Axios.get("user");
}

export const userService = {
    getDataUser
}