import { combineReducers } from "redux";
import charactersReducer from "./charactersReducer";
import characterReducer from "./characterReducer";
import episodesReducer from './episodesReducer'
import searchReducer from "./searchReducer";
import episodeReducer from "./episodeReducer";

export default combineReducers({
    characters: charactersReducer,
    character : characterReducer,
    episodes: episodesReducer,
    episode:episodeReducer,
    searchValue: searchReducer
})