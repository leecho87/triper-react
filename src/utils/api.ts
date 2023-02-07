import { fetchApi } from "./fetchApi"

const api = {
  getAreaCode(params: any) {
    return fetchApi({
      method: "get",
      url: "/areaCode",
      params
    })
  },
  getFestival(params: any) {
    return fetchApi({
      method: "get",
      url: "/searchFestival",
      params: params
    })
  },
  getStay(params: any) {
    return fetchApi({
      method: "get",
      url: "/searchStay",
      params: params
    })
  },
  getAreeBased(params: any) {
    return fetchApi({
      method: "get",
      url: "/areaBasedList",
      params: params
    })
  }
}

export default api;