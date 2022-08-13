import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2U4ZmYxYjQ0MGZjYjIzM2UyNjU1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDM2MjU2NywiZXhwIjoxNjYwNjIxNzY3fQ.28Avs0QwjBkyvE-XPiYBxqupaif1zzXuLrFJQ5T2y8E';
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user || "{}")?.currentUser?.accessToken;
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`,
    },
});