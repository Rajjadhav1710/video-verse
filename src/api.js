import axios from "axios";

const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyCfHfs5lKS5MtDrttN6dpSOVbowqePy3y0"
    }
});

export default request;