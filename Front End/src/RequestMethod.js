import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2U4ZmYxYjQ0MGZjYjIzM2UyNjU1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTQ5NDU1NiwiZXhwIjoxNjU5NzUzNzU2fQ.UCuLTf8qFSxFM-jq-fm9aJ5oJWyvGSnsd_XHsM-Vqsc";

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})