import axios from 'axios';

interface IAPIServiceParam {
    method: string,
    serviceName: string,
    serviceCode: string
}

interface IAPIParams {
    service: IAPIServiceParam
    param?: any
}

const convertAPIKey = (key: any) => {
    return decodeURIComponent(key);
}

const combineParams:any = (param:any) => {
    const apiKey = convertAPIKey(process.env.REACT_APP_API_KEY);

    const defaultParams = {
        'ServiceKey' : apiKey,
        'MobileOS' : 'ETC',
        'MobileApp' : 'AppTest',
        '_type' : 'json'
    }

    return { ...defaultParams, ...param }
}

const clientAPI = axios.create({
    baseURL: process.env.REACT_APP_TOUR,
    timeout: 3000,
});

const requestAPI = async ({service, param}: IAPIParams) => {
    const { method, serviceCode } = service;
    try {
        if ( method === 'get') {
            return await clientAPI.get(`/${serviceCode}`, {
                params : combineParams(param),
                withCredentials: true
            });
        } else {
            // POST
        }
    } catch (error) {
        return (error)
    }
}

const requestAll = async ([...params]: IAPIParams[]) => {
    try {
        const paramsAll = params.map((item) => {
            const { service, param } = item;
            return requestAPI({service, param})
        });
        return await axios.all(paramsAll);
    } catch (error) {
        return (error);
    }   
}

export {
    requestAPI as default, requestAll
}
