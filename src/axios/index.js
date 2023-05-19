import axios from "axios";


export default axios.create({
        baseURL: "https://api.e.sjco.uz/api/v1/",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    },
)
