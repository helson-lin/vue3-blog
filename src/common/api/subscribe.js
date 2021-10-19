import { getData, postData } from "@/common/api/httpRequest";
import qs from 'qs'
export const getSubscribe = function (id) {
  return getData(`subscribe/${id}/order`);
}
export const generate = function (url) {
  return postData('subscribe/generate', qs.stringify({url}))
}