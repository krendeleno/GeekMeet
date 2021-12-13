import axios from "axios";

export const getApi = async (url, context) => {
    const response = await axios.get(`${context.baseUrl}${url}`, {headers: {
            Authorization: 'token ' + context.token
        }})
    return response.data;
}

export const postApi = async (url, context, data) => {
    const response = await axios.post(`${context.baseUrl}${url}`, data, {headers: {
            Authorization: 'token ' + context.token
        }})
    return response;
}

export const postApiNoHeader = async (url, context, data) => {
    const response = await axios.post(`${context.baseUrl}${url}`, data)
    return response.data;
}