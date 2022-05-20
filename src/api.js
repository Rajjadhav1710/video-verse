import axios from "axios";

const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyBvkmojJgbuUvZxj9V1U-u_Y9ikjxP3Cng"
    }
});

export default request;