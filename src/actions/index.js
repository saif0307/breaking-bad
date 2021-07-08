import breakingbad from "../apis/breakingbad";
import {
  GET_CHARACTERS,
  GET_DEATHS,
  GET_QUOTES,
  GET_EPISODES,
  GET_EPISODE,
  GET_CHARACTER,
  SEARCH_INPUT,
} from "./types/types";

export const getCharacters = () => async (dispatch) => {
  const response = await breakingbad.get("/characters?category=Breaking+Bad");

  dispatch({ type: GET_CHARACTERS, payload: response.data });
};

export const getDeaths = (name) => async (dispatch) => {
  const response = await breakingbad.get(`death-count?name=${name}`);

  dispatch({ type: GET_DEATHS, payload: response.data });
};

export const getQuotes = (name) => async (dispatch) => {
  const response = await breakingbad.get(`quote?author=${name}`);

  dispatch({ type: GET_QUOTES, payload: response.data });
};

export const getEpisodes = (searchString) => async (dispatch) => {
  const response = await breakingbad.get('episodes?series=Breaking+Bad');

  dispatch({ type: GET_EPISODES, payload: response.data });
};

export const getCharacter = (id) => (dispatch, getState) => {
  const { characters, searchValue } = getState();
  const character = characters.find((item) => {
    const condition1 = searchValue !== "" && searchValue.toLowerCase().trim()
    const condition2 = item.char_id === parseInt(id)
    return item.name
      .toLowerCase()
      .trim()
      .includes(condition1) || condition2
  });

  dispatch({ type: GET_CHARACTER, payload: character });
};

export const getEpisode = () => (dispatch, getState) => {
  const {episodes, searchValue} = getState()
  const condition1 = searchValue !== "" && searchValue.toLowerCase().trim()
  const episode = episodes.find((item) => {
    
    return item.title
      .toLowerCase()
      .trim()
      .includes(condition1)
  })
  dispatch({type:GET_EPISODE, payload: episode})
}

export const inputValue = (value) => (dispatch) => {
  dispatch({ type: SEARCH_INPUT, payload: value });
};
