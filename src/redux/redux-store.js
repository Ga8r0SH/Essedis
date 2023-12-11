import { combineReducers, legacy_createStore as createStore } from "redux";
import newsPageReducer from "./newsPageReducer";
import aboutUsPageReducer from "./aboutUsPageReducer";
import galleryPageReducer from "./galleryPageReducer";
import adminReducer from "./adminReducer";

let reducers = combineReducers({
    newsState: newsPageReducer,
    aboutPage: aboutUsPageReducer,
    galleryPage: galleryPageReducer,
    adminState: adminReducer
});

let store = createStore(reducers);

export default store;