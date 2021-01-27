import axios from 'axios';

interface IAPIServiceParam {
    method: string,
    service: string,
    serviceCode: string
}

interface IAPIParams {
    service: IAPIServiceParam
    param?: any
}

const apiKey = process.env.REACT_APP_API_KEY;

const combineParams:any = (param:any) => {
    const defaultParams = {
        'ServiceKey' : apiKey,
        'MobileOS' : 'ETC',
        'MobileApp' : 'AppTest',
        '_type' : 'json'
    }

    return {
        ...defaultParams,
        ...param
    }
}

const clientAPI = axios.create({
    baseURL: process.env.REACT_APP_TOUR,
    timeout: 3000
});

const requestAPI = async ({service, param}: IAPIParams) => {
    const { method, serviceCode } = service;

    try {
        if ( method === 'get') {
            return await clientAPI.get(`/${serviceCode}`, {
                params : combineParams(param)
            });
        } else {
            // POST CODE
        }
    } catch (error) {
        return (error)
    }
}

export {
    requestAPI as default
}
