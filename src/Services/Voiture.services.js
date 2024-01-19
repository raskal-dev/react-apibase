import { Axios } from "axios";

const url = "https://127.0.0.1:8000/api";

const header = () => {
    const token = localStorage.getItem('token');
    return {headers:{
        Authorization:'Bearer ' + token, 
        'Content-type' : "application/json",
        'Access-Control-Allow-Origin' : '*'
    }}
}

class VoitureServices {
    gitList()
    {
        return Axios.length(url + '/voitures/list', header());
    }
}

export default new VoitureServices();