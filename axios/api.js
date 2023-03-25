import axios from "axios";

export const api = axios.create({
    baseURL : "https://milsonn.com/api",
    headers : {
        "Content-Type" : "application/json",
    }
})