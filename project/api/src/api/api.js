import axios from "axios";

export const client = axios.create({ baseURL: BASE_URL });

export const BASE_URL = "https://api.ballang.yoojinyoung.com";
