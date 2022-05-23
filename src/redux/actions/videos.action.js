import request from "../../api";
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../actionType";

export const getPopularVideos = ()=>async (dispatch,getState)=>{
    try {
        dispatch({
            type:HOME_VIDEOS_REQUEST
        });

        const {data} = await request("/videos",{
            params:{
                part:"snippet,contentDetails,statistics",
                chart:"mostPopular",
                regionCode:"IN",
                maxResults:20,
                pageToken:getState().homeVideos.nextPageToken,
            }
        });
        // console.log(res);

        dispatch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:"All" // it will help in pagination
            }
        });
    } catch (error) {
        console.log(error.message);
        dispatch({
            type:HOME_VIDEOS_FAIL,
            payload:error.message
        });
    }
}


export const getVideosByCategory = (keyword)=>async (dispatch,getState)=>{
    //getState function returns global store
    try {
        dispatch({
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

        dispatch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:keyword // it will help in pagination
            }
        });
    } catch (error) {
        console.log(error.message);
        dispatch({
            type:HOME_VIDEOS_FAIL,
            payload:error.message
        });
    }
}

export const getVideoById = (id)=>async dispatch=>{
    try {
        dispatch({
            type:SELECTED_VIDEO_REQUEST
        });

        const { data } = await request("/videos",{
            params:{
                part:'snippet,statistics',
                id:id 
            }
        });
        
        dispatch({
            type:SELECTED_VIDEO_SUCCESS,
            payload:data.items[0]
        });

    } catch (error) {
        console.log(error.message);

        dispatch({
            type:SELECTED_VIDEO_FAIL,
            payload:error.message
        })
    }
}


export const getRelatedVideos = (id)=>async dispatch=>{
    try {
        dispatch({
            type:RELATED_VIDEO_REQUEST
        });

        const { data } = await request("/search",{
            params:{
                part:'snippet',
                relatedToVideoId:id ,
                type:'video',
                maxResults:15
            }
        });
        
        dispatch({
            type:RELATED_VIDEO_SUCCESS,
            payload:data.items
        });

    } catch (error) {
        console.log(error.response.data.message);//bcz it is coming through axios

        dispatch({
            type:RELATED_VIDEO_FAIL,
            payload:error.response.data.message
        })
    }
}