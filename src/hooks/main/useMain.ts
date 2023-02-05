import api from "utils/api"

export const useMain = () => {
  const fetchAreaCode = () => {
    return api.getAreaCode()
      .then((response) => {
        const data = response?.data.response.body.items;
        return data;
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  const fetchFestival = () => {
    return api.getFestival()
    .then((response) => {
      const data = response?.data.response.body.items;
      return data;
    })
    .catch((error) => {
      console.log('error', error);
    });
  }

  const fetchStay = () => {
    return api.getStay()
    .then((response) => {
      const data = response?.data.response.body.items;
      return data;
    })
    .catch((error) => {
      console.log('error', error);
    });
  }

  const fetchFet = () => {
    return api.getFet()
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
    fetchFet
  }
}