import axios from 'axios';

const BACKEND_URL = "http://localhost:8080/";

function GET(rota) {
    return axios({
        url: `${BACKEND_URL}${rota}`,
        method: "GET"
    })
}

function POST(rota, dados){
    return axios({
        url: `${BACKEND_URL}${rota}`,
        method: "POST",
        data: dados
    })
}

function DELETE(rota){
    return axios({
        url: `${BACKEND_URL}${rota}`,
        method: "DELETE"
    })
}

export const HttpClient = {
    GET: GET,
    POST: POST,
    DELETE: DELETE
}