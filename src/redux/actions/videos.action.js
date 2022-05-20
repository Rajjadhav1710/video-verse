import request from "../../api";
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionType";

export const getPopularVideos = ()=>async disptch=>{
    try {
        disptch({
            type:HOME_VIDEOS_REQUEST
        });

        const {data} = await request("/videos",{
            params:{
                part:"snippet,contentDetails,statistics",
                chart:"mostPopular",
                regionCode:"IN",
                maxResults:20,
                pageToken:""
            }
        });
        // console.log(res);

        disptch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:"All" // it will help in pagination
            }
        });
    } catch (error) {
        console.log(error.message);
        disptch({
            type:HOME_VIDEOS_FAIL,
            payload:error.message
        });
    }
}


export const getVideosByCategory = (keyword)=>async (disptch,getState)=>{
    //getState function returns global store
    try {
        disptch({
            type:HOME_VIDEOS_REQUEST
        });

        const {data} = await request("/search",{
            params:{
                part:"snippet",
                maxResults:20,
                pageToken: getState().homeVideos.nextPageToken,
                q:keyword,
                type:"video",
            }
        });
        console.log(data);

        disptch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:keyword // it will help in pagination
            }
        });
    } catch (error) {
        console.log(error.message);
        disptch({
            type:HOME_VIDEOS_FAIL,
            payload:error.message
        });
    }
}