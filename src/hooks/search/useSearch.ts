import api from "utils/api"

export const useSearch = () => {

    const onSearch = (param: any) => {
        return api.getSearch(param)
        .then((response) => {
            const data = response?.data.response.body.items;
            return data;
          })
          .catch((error) => {
            console.log('error', error);
          });
    }

    return {
        onSearch
    }
}