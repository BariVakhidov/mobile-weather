import axios from "axios";

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://api.sketchfab.com/v3/",
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SKETCHFAB_ACCESS_TOKEN}`,
    },
});
