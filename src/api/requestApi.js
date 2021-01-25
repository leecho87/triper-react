import axios from 'axios';

const apiKey = 'Q6I%2FZ%2BtN8n3yVqpZvlgFIP8b9xAx8Sv2KgwT3lcFGRU3RJDZ5V09bOOtfLXTC9PW0kg2Ju9fGOWlO4BMrt2LMw%3D%3D'

const defaultParams = {
    'ServiceKey' : apiKey,
    'MobileOS' : 'ETC',
    'MobileApp' : 'AppTest'
}

const requestAPI = async () => {
    try {
        return await axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode`, {
            ...defaultParams
        });
    } catch (error) {
        return (error)
    }
}

export {
    requestAPI
}
