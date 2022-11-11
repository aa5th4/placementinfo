import { FETCH_ALL } from "../constants/actionTypes";

const posts = (posts = [],action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        
        default:
            return posts;
        }
};
export default posts;