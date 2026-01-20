import axios from "axios";
const session_id = localStorage.getItem("session");


export const fench = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "79dfd1eff0a74377d493be823af77d22",
        ...{session_id: localStorage.getItem("session")}
    }
});

window.fench = fench;