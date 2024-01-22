import axios from 'axios'
import { apiBaseUrl, apiKey } from '../configs/config'

const api = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        'x-api-key': apiKey,
    }
})

export default api;