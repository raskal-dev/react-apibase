import axios from 'axios';

const url =  'http://127.0.0.1:8000/api';

const header = () => {
    const token = localStorage.getItem('token');
    return {headers:{
        Authorization:'Bearer ' + token, 
        'Content-type' : "application/json",
        'Access-Control-Allow-Origin' : '*'
    }}
}

class AuthServices {
    
    login(data)
    {
        return axios.post(url + '/login', data);
    }

    getList()
    {
        return axios.get(url + '/users/list', header());
    }

    logout()
    {
        return axios.get(url + '/users/logout', header());
    }
}

export default new AuthServices();