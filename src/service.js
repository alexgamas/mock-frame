import axios from 'axios';


export const getTokens = () => {
    return axios.get(`/api/data.json`).then(res => res.data);
}
