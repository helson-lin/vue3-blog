import { getData } from "@/common/api/httpRequest";
export const getArticle = function () {
  return getData('article/list')
}
export const getArticleByCate = function (cate) {
  return getData('article/list/cate',{cate})
}
export const getArticleInfo = function (id) {
  return getData(`article/id`,{id})
}