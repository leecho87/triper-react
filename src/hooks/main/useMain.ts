import api from "utils/api"

export const useMain = () => {

  const fetchAreaCode = (params: any) => {
    return api.getAreaCode(params)
      .then((response) => {
        const data = response?.data.response.body.items;
        return data;
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  const fetchFestival = (params: any) => {
    return api.getFestival(params)
    .then((response) => {
      const data = response?.data.response.body.items;
      return data;
    })
    .catch((error) => {
      console.log('error', error);
    });
  }

  const fetchStay = (params: any) => {
    return api.getStay(params)
    .then((response) => {
      const data = response?.data.response.body.items;
      return data;
    })
    .catch((error) => {
      console.log('error', error);
    });
  }

  const fetchAreaBased = (params: any) => {
    return api.getAreeBased(params)
    .then((response) => {
      const data = response?.data.response.body.items;
      return data;
    })
    .catch((error) => {
      console.log('error', error);
    });
  }

  return {
    fetchAreaCode,
    fetchFestival,
    fetchStay,
    fetchAreaBased
  }
}