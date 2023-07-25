import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "16960ff6e2d142a0b8866ccc824e8835"
    }
})