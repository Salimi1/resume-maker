import { combineReducers } from "redux";
//Reducers
import vorlagenDateienReducer from "./resumeVorlagenDateien/resumeVorlagenDateienReducer";
import allVorlagenReducer from "./allVorlagen/allVorlagenReducer";

const rootReducer = combineReducers({
    vorlagenDateienState: vorlagenDateienReducer,
    allVorlagenState: allVorlagenReducer
})
export default rootReducer