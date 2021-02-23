import requestAPI from '@service/Service';

const fetchAPI = async (service:any, params:any) => {

    const data = await requestAPI({
        service: service,
        param: params
    });
    const { item } = data.data.response.body.items;
    return item;
}

export default fetchAPI;