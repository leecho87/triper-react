import api from "utils/api"

export const useMain = () => {
  const fetchAreaCode = () => {
    const res = api.getAreaCode()
      .then((response) => {
        const data = response?.data;
        return data;
      })
      .catch((error) => {
        console.log('error', error);
      });
      
    return res;
  }

  return {
    fetchAreaCode
  }
}