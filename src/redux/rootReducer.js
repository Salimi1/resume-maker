import { combineReducers } from "redux";
import vorlagenDateienReducer from "./resumeVorlagenDateien/resumeVorlagenDateienReducer";
const rootReducer = combineReducers({
    vorlagenDateienState: vorlagenDateienReducer
})
export default rootReducer