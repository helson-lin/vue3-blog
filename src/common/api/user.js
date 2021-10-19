import { postData } from "./httpRequest";
import qs from 'qs';
export const login = function (username,password) {
    return postData('/user/login', qs.stringify({username,password}));
}