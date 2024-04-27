import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDFkYWIxMzEzOTNiZDViNzUzY2NjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMTg1NTIzNCwiZXhwIjoxNzEyMTE0NDM0fQ.JW0HTQ7MJqaBoJnIoupfw2iSw3UKJy3QInWvHCJ5FEU"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});

