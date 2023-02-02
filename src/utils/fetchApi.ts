import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/KorService/",
});

interface IFetchApiProps {
  method: string;
  url: string;
  params?: object;
}

export const fetchApi = async ({method, url, params}: IFetchApiProps) => {
  try {
    return await axiosInstance({
      method: method,
      url: `${url}?serviceKey=${process.env.REACT_APP_TOUR_ENCODE_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json`,
      data: params,
    });
  } catch (error) {
    console.error(error);
  }
}