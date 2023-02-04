import { fetchApi } from "./fetchApi"

const api = {
  getAreaCode (){
    return fetchApi({
      method: "get",
      url: "/areaCode",
      params: {
        numOfRows: 17
      }
    })
  }
}

export default api;