import api from "./api";

export const getCurrencies = async (offset) =>{
    const requestData = {
        currency: 'USD',
        sort: 'rank',
        order: 'ascending',
        offset: offset,
        limit: 5,
        meta: true,
    };

    return api.post('/coins/list', requestData).then(reponse => reponse.data)
}

export const getCurrency = async (code) =>{
    const requestData = {
        currency: 'USD',
        code: code,
        meta: true,
    };

    return api.post('/coins/single', requestData).then(reponse => reponse.data)
}